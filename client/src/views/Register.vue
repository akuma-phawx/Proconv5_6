<template>
  <div>
    <b-row class="textCust text-center mt-4">
      <b-col></b-col>
      <b-col cols="4">
        <label for="username">Username:</label>
        <b-form-input
          id="username"
          v-model="username"
          placeholder="Enter your Username"
        ></b-form-input>

        <label class="mt-4" for="email">Email:</label>
        <b-form-input
          id="email"
          type="text"
          v-model="email"
          placeholder="Enter your Email"
        ></b-form-input>

        <label class="mt-4" for="password">Password:</label>
        <b-form-input
          id="password"
          type="password"
          v-model="password"
          placeholder="Enter your password"
        ></b-form-input>

        <b-button
          squared
          variant="outline-danger"
          class="mt-4"
          v-on:click="registerUser"
          >Register</b-button
        >
      </b-col>

      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  computed: {
    xusername: function() {
      return this.$store.getters.username;
    },
  },
  methods: {
    registerUser() {
      //Initializing object to add
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      //post request to add into DB
      axios
        .post("/auth/register", user)
        .then((res) => {
          let token = res.data.token;

          if (token) {
            //If registration was successfull
            localStorage.setItem("jwt", token); //Setting our token
            axios.defaults.headers.common["Authorization"] = token;
            this.$store
              .dispatch("register", user) //Store action called register
              .then(() => this.$router.push("/")) //Redirect to /
              .catch((err) => console.log(err));
            swal(
              "Success",
              `Welcome to Procon's Currency Converter, ${this.xusername}!`,
              "success"
            );
          } else {
            swal("Error", "Something Went Wrong", "error");
          }
        })
        .catch((e) => {
          //Cleaning input if wrong something went wrong
          console.log(e.response);
          if (e.response.status == 401) {
            this.username = "";
            this.email = "";
            this.password = "";
            swal("Error", e.response.data.message, "error");
          } else {
            this.username = "";
            this.email = "";
            this.password = "";
            swal("Error", e.response.data.message, "error");
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
