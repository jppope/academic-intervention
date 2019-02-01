<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
		<!-- <router-link class="navbar-item">
			Academic Intervention
		</router-link> -->
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
		<router-link to="/" class="navbar-item">
			Academic Intervention
		</router-link>
      <!-- <a class="navbar-item">
        Documentation
      </a> -->

    </div>
    <div class="navbar-end">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Project
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" v-show="isLoggedIn" @click="logout">
            <strong>Logout</strong>
          </a>
					<span v-show="!isLoggedIn">
						<router-link to="login" class="button is-primary">Login</router-link>
					</span>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters(['isLoggedIn']),
	},
	methods: {
		...mapActions(['logout']),
	}
}
</script>

