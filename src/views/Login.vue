<template>
  <div class="login-register-box">
    <h2 class="title">Login Form</h2>
    <v-row>
      <v-col>
        <Login :rememberPass="true" @onSubmit="onSubmit" />
      </v-col>
    </v-row>
    <v-col>
        <v-alert type="error" v-if="error">
          {{error}}
        </v-alert>
    </v-col>
    <div class="link">
      <span>Don't Have an Account?</span>
      <router-link to="/register">
        Sign Up Here
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components-reusable/Login.vue'

export default {
  data () {
    return {
      error: null
    }
  },
  name: 'Home',
  components: {
    Login
  },
  methods: {
    onSubmit ({ email, password }) {
      this.$services.login({
        email: email,
        password: password
      }).then((data) => {
        this.$router.push({ path: '/home' })
      }).catch(() => {
        this.error = 'Invalid username or password'
      })
    }
  }
}
</script>
