<template>
  <div class="textCust mt-5">
    <h1>Currency Conversion</h1>
    <hr />
    <div class="row mt-5">
      <div class="col border-right">
        <label for="customizeSource">Starting Currency:</label>
        <b-form-select
          id="customizeSource"
          v-on:change="fillTargetCurrencies(startingCurrency)"
          v-model="startingCurrency"
          :options="startOptions"
        ></b-form-select>
        <span> ID: {{ startingCurrency }}</span>
      </div>

      <div class="col border-right">
        <label for="rate">Amount:</label>
        <b-form-input
          id="rate"
          type="number"
          v-on:keyup="calculateResult()"
          v-model="amount"
          size="sm"
          :disabled="!bothCurrenciesSelected"
          placeholder="$"
        ></b-form-input>

        <div id="requirements" class="mt-2">
          <span v-bind:class="[isFromSelected ? 'green' : 'red']"
            >Starting Currency Selected</span
          >
          <span> |</span>
          <span v-bind:class="[isToSelected ? 'green' : 'red']"
            >Target Currency Selected</span
          >
        </div>

        <div class="mt-4">
          <span id="currentRateText">
            <b-icon icon="exclamation-circle-fill" variant="primary"></b-icon>
            Current rate is: {{ currentRate }}</span
          >
        </div>
      </div>
      <div class="col">
        <label for="customizeTarget">Target Currency:</label>
        <b-form-select
          id="customizeTarget"
          v-on:change="getRate(startingCurrency, targetCurrency)"
          v-model="targetCurrency"
          :options="targetOptions"
        ></b-form-select>
        <span> ID: {{ targetCurrency }}</span>
      </div>
    </div>
    <label class="mt-5">Result: {{ result }}</label>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isFromSelected: false,
      isToSelected: false,
      bothCurrenciesSelected: false,
      result: "",
      exists: null,
      selected: null,
      startingCurrency: null,
      targetCurrency: null,
      amount: "",
      currentRate: "",
      startOptions: [{ value: null, text: "FROM:" }],
      targetOptions: [{ value: null, text: "TO:" }],
    };
  },
  methods: {
    //Fetching the rates where the startCurrency is the currency selected from the dropdown
    //Functionality on backend.
    fillTargetCurrencies(id) {
      //START OF CLEANING INPUTS AND SELECTIONS
      this.clean();
      //END OF CLEANING INPUTS AND SELECTIONS

      axios.get(`/${id}`).then((res) => {
        let tempData = res.data;
        tempData.forEach((element) => {
          const { targetCurrency } = element; // Destructuring the Rate
          const {
            _id: targetCurrencyId,
            base: targetCurrencyBase,
          } = targetCurrency; //Destructuring the target Currency

          //Filling the target currency dropdown
          this.targetOptions.push({
            value: targetCurrencyId,
            text: targetCurrencyBase,
          });
        });
      });
    },
    //Get request to get the rate based on selections
    getRate(startId, targetId) {
      this.isToSelected = true;
      this.bothCurrenciesSelected = true;
      axios.get(`/${startId}/${targetId}`).then((res) => {
        this.currentRate = res.data;
      });
      this.currentRate = "RATEGOESHERE";
    },
    //Calculating the result....
    calculateResult() {
      this.result = this.currentRate * this.amount;
    },
    //Cleaning function for selections and inputs
    clean() {
      this.currentRate = "";
      this.amount = "";
      this.result = "";
      this.targetOptions = [{ value: null, text: "TO:" }];
      this.targetCurrency = null;
      this.isFromSelected = true;
      this.isToSelected = false;
      this.bothCurrenciesSelected = false;
    },
  },
  mounted() {
    //After virtual dom mounted and rendered, fill the starting currency selection
    //based on what exists in DB.
    axios.get("/").then((res) => {
      let tempData = res.data;
      tempData.forEach((element) => {
        const { _id: rateId, startingCurrency } = element; //Destructuring the Rate.

        const {
          _id: startingCurrencyId,
          base: startingCurrencyBase,
        } = startingCurrency; //Destructuring the Starting Currency

        const currToAdd = {
          value: startingCurrencyId,
          text: startingCurrencyBase,
        };

        //Filling the starting currency dropdown
        //Also checking for duplicates ( we dont want to have EUR 5 times in the dropdown if EUR belongs to 5 rates for example.)
        this.exists = this.startOptions.some((element) => {
          return element.value === currToAdd.value;
        });
        if (!this.exists) {
          this.startOptions.push(currToAdd);
        }
        //END OF INSERTING INTO ARRAY AND REMOVING DUPLICATES
      });
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;433;600&display=swap");
.textCust {
  font-family: "JetBrains Mono", monospace;
}
h1 {
  font-weight: 433;
}
label {
  font-size: 2rem;
}
#currentRateText {
  font-size: 0.9rem;
}

.green {
  color: green;
}
.red {
  color: red;
}
</style>
