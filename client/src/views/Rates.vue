<template>
  <div class="mt-5">
    <h1>All Rates</h1>
    <hr />
    <b-table
      class="textCust mt-5"
      striped
      hover
      :items="rates"
      :fields="fields"
    >
      <template #cell(Actions)="data">
        <b-button
          squared
          class="ml-3"
          size="md"
          variant="outline-danger"
          :value="data"
          v-on:click="alertDisplay(data.value, data.index)"
        >
          X
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fields: ["From", "To", "rate", "Actions"],
      rates: [],
    };
  },
  mounted() {
    //Get request to grab all the rates from DB.
    axios.get("/").then((res) => {
      let tempData = res.data;
      tempData.forEach((element) => {
        //For each rate found
        const { _id, startingCurrency, targetCurrency, rate } = element;
        //@backend i populate the results being returned that's why i am able to
        // access the property base of startingCurrency and targetCurrency below.
        this.rates.push({
          Actions: _id,
          From: startingCurrency.base,
          To: targetCurrency.base,
          rate,
        });
      });
    });
  },
  methods: {
    destroyRate(id, index) {
      //Delete request based on id of rate given.
      axios.delete(`/${id}`).then((res) => {
        if (res.status === 200) {
          //If everything went fine aka status code ===200, remove it from the array of rates.
          swal("Success!", "Rate was successfully deleted.", "success");
          const { removedNo2, removed } = res.data;

          this.rates = this.rates.filter((e) => {
            e.Actions !== removedNo2._id || e.Actions !== removed._id;
          });
        }
      });
    },
    alertDisplay(id, index) {
      swal(`You are about to delete the rate at index ${index}`, {
        title: "Warning!",
        icon: "warning",
        buttons: {
          cancel: "Cancel",
          delete: {
            text: "Delete Rate",
            value: "delete",
          },
        },
      }).then((value) => {
        switch (value) {
          case "delete":
            this.destroyRate(id, index);
            break;

          default:
            swal("Request Cancelled");
        }
      });
    },
  },
};
</script>

<style>
.textCust {
  font-family: "JetBrains Mono", monospace;
}
</style>
