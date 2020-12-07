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
    testo() {
      console.log("testtest");
    },

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
          localStorage.setItem("jwt", token);

          if (token) {
            axios.defaults.headers.common["Authorization"] = token;
            this.$store
              .dispatch("login", data)
              .then(() => this.$router.push("/"))
              .catch((err) => console.log(err));
            swal("Success", `Welcome Back ${this.xusername}`, "success");
          }
        })
        .catch((e) => {
          console.error(e);
          if (e.response.status == 401) {
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
