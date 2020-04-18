<template>
  <div>
    <b-navbar class="b-navbar" toggleable="lg" type="dark">
      <b-navbar-brand href="/" class="b-navbar-brand">HARMON€Y</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            v-if="$store.state.isLoggedIn"
            class="b-nav-item"
            to="/harmoney-dashboard"
            ><i class="fas fa-chart-bar"></i> Dashboard</b-nav-item
          >
          <b-nav-item
            v-if="!$store.state.isLoggedIn"
            class="b-nav-item"
            @click="login()"
            ><i class="fas fa-sign-in-alt"></i> Login</b-nav-item
          >
          <b-nav-item
            v-if="!$store.state.isLoggedIn"
            class="b-nav-item"
            @click="signUp()"
            ><i class="fas fa-user-plus"></i> Sign-Up</b-nav-item
          >
          <b-nav-item
            v-if="!$store.state.isLoggedIn"
            class="b-nav-item"
            @click="about()"
            >About Us <i class="fas fa-question"></i
          ></b-nav-item>

          <b-nav-item-dropdown
            v-if="$store.state.isLoggedIn"
            class="b-nav-item-dropdown"
            right
          >
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <i class="fas fa-cogs"></i> Options
            </template>
            <b-dropdown-item
              to="/harmoney-dashboard"
              ><i class="fas fa-chart-bar"></i> Dashboard</b-dropdown-item
            >
            <b-dropdown-item
              to="/add-account"
              ><i class="fas fa-plus-circle"></i> Add Account</b-dropdown-item
            >
            <b-dropdown-item
              to="/remove-account"
              ><i class="fas fa-minus-circle"></i> Remove Account</b-dropdown-item
            >
            <b-dropdown-item
              to="/user-profile"
              ><i class="fas fa-user"></i> User Profile</b-dropdown-item
            >
            <b-dropdown-item
              to="/about"
              ><i class="fas fa-info-circle"></i> About Us</b-dropdown-item
            >
            <b-dropdown-item
              v-if="$store.state.isLoggedIn"
              v-on:click.prevent="logout()"
              ><i class="fas fa-power-off"></i> Logout</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item
            v-if="$store.state.isLoggedIn"
            class="b-nav-item"
            v-on:click.prevent="logout()"
            href="#"
            ><i class="fas fa-power-off"></i> Logout
          </b-nav-item>
          <b-navbar-brand
            class="b-nav-name ml-2"
            disable
            v-if="$store.state.isLoggedIn"
          >
            Hi, {{ this.fName }}
          </b-navbar-brand>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import * as auth from '../../services/AuthService'
export default {
  data() {
    return {
      fName: null
    }
  },
  name: 'Navbar',
  created() {
    this.getUserName()
  },
  watch: {
    // call again the method if the route changes
    $route: 'getUserName'
  },
  methods: {
    getUserName() {
      this.fName = auth.getName()
    },
    home() {
      if (auth.isLoggedIn()) {
        const path = `/`
        if (this.$route.path !== path) this.$router.push(path)
      } else {
        auth.logout()
        const path = `/`
        if (this.$route.path !== path) this.$router.push(path)
      }
    },
    login() {
      if (auth.isLoggedIn()) {
        auth.logout()
        const path = `/login`
        if (this.$route.path !== path) this.$router.push(path)
      } else {
        const path = `/login`
        if (this.$route.path !== path) this.$router.push(path)
      }
    },
    about() {
      const path = `/about`
      this.$router.push(path)
    },
    logout: function() {
      auth.logout()
      const path = `/`
      if (this.$route.path !== path) this.$router.push(path)
    },
    signUp() {
      if (auth.isLoggedIn()) {
        auth.logout()
        const path = `/sign-up`
        if (this.$route.path !== path) this.$router.push(path)
      } else {
        const path = `/sign-up`
        if (this.$route.path !== path) this.$router.push(path)
      }
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
  background: rgb(107, 186, 167);
  background: linear-gradient(
    180deg,
    rgba(107, 186, 167, 1) 97%,
    rgba(107, 122, 143, 1) 97%
  );
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
