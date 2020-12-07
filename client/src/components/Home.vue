<template>
  <v-container>
    <h1>fwefew</h1>
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
          v-model="rate"
          size="sm"
          placeholder="$"
        ></b-form-input>
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
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
};
</script>
