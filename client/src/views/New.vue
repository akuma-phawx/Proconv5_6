<template>
  <div class="mt-5">
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismiss-count-down="countDownChanged"
    >
      Rate successfully inserted - {{ dismissCountDown }}s...
    </b-alert>
    <h1>New Rate Creation</h1>
    <hr />
    <div class="row mt-5">
      <div class="col border-right">
        <label for="customizeSource">Starting Currency:</label>
        <b-form-select
          id="customizeSource"
          v-model="sourceCurrency"
          :options="options"
        ></b-form-select>
      </div>
      <div class="col border-right">
        <label for="rate">Rate:</label>
        <b-form-input
          id="rate"
          type="number"
          v-model="rate"
          size="sm"
          placeholder="$"
        ></b-form-input>

        <div class="mt-5">
          <b-button v-on:click="insertToDb" variant="primary">Create</b-button>
        </div>
      </div>
      <div class="col">
        <label for="customizeTarget">Target Currency:</label>
        <b-form-select
          id="customizeTarget"
          v-model="targetCurrency"
          :options="options"
        ></b-form-select>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
      selected: null,
      sourceCurrency: null,
      targetCurrency: null,
      rate: null,
      options: [{ value: null, text: "Currencies.." }],
    };
  },
  methods: {
    insertToDb() {
      //Initializing object to add
      const toAdd = {
        sourceId: this.sourceCurrency,
        targetId: this.targetCurrency,
        rate: this.rate,
      };
      //post request to add into DB
      axios.post("/", toAdd).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.sourceCurrency = null;
          this.targetCurrency = null;
          this.rate = "";
          this.$router.push("/rates");
          swal("Success", "Rate Added Successfully", "success");
        }
      });
    },
    //Handling the countdown of my flash message.
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    //Showing alert.
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
  mounted() {
    //After VirtualDOM has been mounted and rendered:
    //Get request to fetch all the currencies.
    axios.get("/allcur").then((res) => {
      let tempData = res.data;
      tempData.forEach((element) => {
        const { base, _id } = element;
        this.options.push({ value: _id, text: base });
      });
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;600&display=swap");
h1 {
  font-family: "JetBrains Mono", monospace;
  font-weight: 600;
}
label {
  font-family: "JetBrains Mono", monospace;
  font-size: 2rem;
}
</style>
