<template>
  <div>
    <b-navbar class="b-navbar" toggleable="lg" type="dark">
      <b-navbar-brand to="/" class="b-navbar-brand">HARMON€Y</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            v-if="$store.state.isLoggedIn"
            class="b-nav-item"
            to="/dashboard"
            >Dashboard</b-nav-item
          >
          <b-nav-item
            v-if="!$store.state.isLoggedIn"
            class="b-nav-item"
            to="/login"
            >Login</b-nav-item
          >
          <b-nav-item
            v-if="!$store.state.isLoggedIn"
            class="b-nav-item"
            to="/sign-up"
            >Sign-Up</b-nav-item
          >

          <b-nav-item-dropdown
            v-if="$store.state.isLoggedIn"
            class="b-nav-item-dropdown"
            text="Options"
            right
          >
            <b-dropdown-item to="/register">Old Register</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown
            v-if="$store.state.isLoggedIn"
            class="b-nav-item-dropdown"
            right
          >
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item to="/dashboard">Dashboard</b-dropdown-item>
            <b-dropdown-item to="/add-account">Add Account</b-dropdown-item>
            <b-dropdown-item to="/user-profile">User Profile</b-dropdown-item>
            <b-dropdown-item to="/transactions">Transactions</b-dropdown-item>
            <b-dropdown-item to="/notifications">Notifications</b-dropdown-item>
            <b-dropdown-item
              v-if="$store.state.isLoggedIn"
              v-on:click.prevent="logout()"
              >Logout</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item
            v-if="$store.state.isLoggedIn"
            class="b-nav-item"
            v-on:click.prevent="logout()"
            href="#"
            >Logout</b-nav-item
          >
          <b-nav-item class="b-nav-name" disable active v-if="$store.state.isLoggedIn">
            Welcome, {{ this.$store.state.fName }}
            {{ this.$store.state.lName }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import * as auth from '../../services/AuthService'
export default {
  name: 'Navbar',
  methods: {
    logout: function() {
      auth.logout()
      const path = `/`
      if (this.$route.path !== path) this.$router.push(path)
    }
  }
}
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.b-navbar {
 background: rgb(107,186,167);
background: linear-gradient(180deg, rgba(107,186,167,1) 97%, rgba(107,122,143,1) 97%);
}
.b-nav-name {
  font-family: 'Open Sans', sans-serif;
}
#dropdown-menu {
  position: relative;
  display: inline-block;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
