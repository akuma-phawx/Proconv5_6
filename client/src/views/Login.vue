<template>
  <b-row class="textCust text-center mt-4">
    <b-col> </b-col>
    <b-col cols="4">
      <label for="username">Username:</label>
      <b-form-input
        id="username"
        v-model="username"
        placeholder="Enter your Username"
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
        variant="outline-primary"
        class="mt-4"
        v-on:click="login"
        >Sign In</b-button
      >
    </b-col>

    <b-col></b-col>
  </b-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      test: "",
      username: "",
      password: "",
    };
  },
  computed: {
    xusername: function() {
      return this.$store.getters.username;
    },
  },
  methods: {
    login() {
      const username = this.username;
      const password = this.password;
      const data = {
        username,
        password,
      };

      axios
        .post("/auth/login", data)
        .then((res) => {
          let token = res.data.token;
          localStorage.setItem("jwt", token); //Grabbing the jwt token

          if (token) {
            //if we have a token, aka if we got a user
            axios.defaults.headers.common["Authorization"] = token; //Setting the header we will need for auth requests
            this.$store
              .dispatch("login", data) //Action login from store
              .then(() => this.$router.push("/")) //Redirect to /
              .catch((err) => console.log(err));
            swal("Success", `Welcome Back ${this.xusername}`, "success");
          }
        })
        .catch((e) => {
          console.error(e);
          if (e.response.status == 401) {
            //Server Respond
            this.username = "";
            this.password = "";
            swal("Woops!", "Wrong Credentials", "warning");
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
