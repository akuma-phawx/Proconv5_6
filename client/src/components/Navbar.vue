<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/"> &copy; Procon</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/rates">Show Rates</b-nav-item>
          <b-nav-item to="/new">Create Rate</b-nav-item>
          <b-nav-item to="/edit">Edit Rate</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="isLoggedIn" href="#">{{ xusername }}</b-nav-item> |
          <b-nav-item v-if="!isLoggedIn" href="/login">Login</b-nav-item>
          <b-nav-item v-if="!isLoggedIn" href="/register">Register</b-nav-item>
          <b-nav-item v-if="isLoggedIn" v-on:click="logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    xusername: function() {
      return this.$store.getters.username;
    },
  },
  methods: {
    logout() {
      console.log("Logging Out");
      let temp = this.xusername;
      localStorage.removeItem("jwt");
      delete axios.defaults.headers.common["Authorization"];
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
      swal("Success", `Goodbye ${temp}`, "success");
    },
  },
};
</script>
<style></style>
