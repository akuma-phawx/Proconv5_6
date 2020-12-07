//My Models
const Currency = require("../models/currencyModel");
const Rate = require("../models/rateModel");
//STATUS Codes 2xx -> ok , 4xx Client Side Problem, 5xx Server Side Problem

//works
module.exports.getAllRates = async (req, res) => {
  try {
    const result = await Rate.find({})
      .populate("startingCurrency")
      .populate("targetCurrency");
    if (!result) throw new Error("No Rates in DB"); // If none found
    res.status(200).json(result); //if found
  } catch (e) {
    res.status(500).json({ message: e.message }); //showing the error.
  }
};

//works
module.exports.getAllCurrencies = async (req, res) => {
  try {
    const result = await Currency.find({});
    if (!result) throw new Error("No Currencies in DB"); // If none found
    res.status(200).json(result); //if found
  } catch (e) {
    res.status(500).json({ message: e.message }); //showing the error.
  }
};

//Functionality for adding a new rate.
module.exports.addNewRate = async (req, res) => {
  const { targetId, sourceId, rate } = req.body; //Parsing the Rate data we need from the body
  const startingCurrency = await await Currency.findById(sourceId); //Finding the source currency
  const targetCurrency = await Currency.findById(targetId); //Finding the target currency
  const toAdd = { startingCurrency, targetCurrency, rate }; //Creating our rate object.
  const newRate = new Rate(toAdd); //Init it base on mongoose model
  newRate.save(); //Saving it.

  /* 
    If we have let's say 2 currencies, EUR and USD, and we know the rate of EUR->USD
    we also know the rate of USD->EUR, so with the same logic, in reverse, we can add
    a second rate, of the targetCurrency->sourceCurrency that were given.
    Functionality below:
  */
  const secondRateToAdd = {
    startingCurrency: targetCurrency,
    targetCurrency: startingCurrency,
    rate: 1 / rate,
  };
  const anotherNewRate = new Rate(secondRateToAdd);
  anotherNewRate.save();
  res.json({ newRate, anotherNewRate });
};

//Editing a rate
module.exports.editRate = async (req, res) => {
  const { sid, tid } = req.params;
  const { rate: newRate } = req.body;
  try {
    const updated = await Rate.findOneAndUpdate(
      { startingCurrency: sid, targetCurrency: tid },
      { rate: newRate },
      {
        new: true,
      }
    )
      .populate("targetCurrency")
      .populate("startingCurrency"); // New:true because in mongoose 4.0 they've changed the new option to false so we wouldnt get the updated version.

    const reverseUpdate = await Rate.findOneAndUpdate(
      { startingCurrency: tid, targetCurrency: sid },
      { rate: 1 / newRate },
      {
        new: true,
      }
    )
      .populate("targetCurrency")
      .populate("startingCurrency");

    if (!updated || !reverseUpdate)
      throw Error("Something went wrong while editing conversion");
    console.log(updated);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message }); //showing the error.
  }
};

//Fetch specific rate
module.exports.getSpecificRate = async (req, res) => {
  const { sid, tid } = req.params;
  try {
    const found = await Rate.find({
      startingCurrency: sid,
      targetCurrency: tid,
    });
    // console.log(found); DEBUG
    const { rate } = found[0];
    // console.log(rate);DEBUG
    if (!found) throw Error("Something went wrong while searching for rate");
    res.status(200).json(rate);
  } catch (e) {
    res.status(500).json({ message: e.message }); //showing the error.
  }
};

//Deleting a rate
module.exports.destroyRate = async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await Rate.findByIdAndDelete(id);
    // console.log(removed);
    const removedNo2 = await Rate.findOneAndDelete({
      startingCurrency: removed.targetCurrency,
      targetCurrency: removed.startingCurrency,
    });
    // console.log(removedNo2);
    if (!removed) throw Error("Something went wrong while deleting rate");
    res.status(200).json({ removed, removedNo2 });
  } catch (error) {
    res.status(500).json({ message: error.message }); //showing the error.
  }
};

//FetchData where we know starting Currency
module.exports.fillTargetCurrencies = async (req, res) => {
  const { id } = req.params;
  try {
    const found = await Rate.find({ startingCurrency: id })
      .populate("startingCurrency")
      .populate("targetCurrency");
    // console.log(found); //Testing purposes
    if (!found) throw Error("Something went wrong while searching for rate");
    res.status(200).json(found);
  } catch (error) {
    res.status(500).json({ message: error.message }); //showing the error.
  }
};

//Code written, but did the logic @ frontend eventually.
// //Converting a currency to another
// module.exports.convertCurrency = async (req, res) => {
//   const { targetId, sourceId, amount } = req.body; //Parsing the Rate data we need from the body
//   const { rate } = Rate.find({
//     startingCurrency: sourceId,
//     targetCurrency: targetId,
//   }); //Finding the specific rate - Destructuring because we onlly need the rate

// };
