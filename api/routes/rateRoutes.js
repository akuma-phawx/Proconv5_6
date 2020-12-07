const { Router } = require("express");
const rateController = require("../controllers/rateController");
const auth = require("../../utils/auth");

const router = Router();

router
  .route("/")
  .get(rateController.getAllRates) //Return all rates
  .post(auth, rateController.addNewRate); //Create new rate

router
  .route("/:sid/:tid")
  .put(auth, rateController.editRate) //Update Rate //:id Is rate ID
  .get(rateController.getSpecificRate);

router.route("/allcur").get(rateController.getAllCurrencies); //Return all currencies
// router.route("/conversion").get(rateController.convertCurrency); //Converting Currency

router
  .route("/:id")
  .delete(auth, rateController.destroyRate) //Delete Rate //:id is rate ID
  .get(rateController.fillTargetCurrencies); //Get Rates based on starting Rate //:id is CURRENCY ID

module.exports = router;
