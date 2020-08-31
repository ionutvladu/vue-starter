<template>
  <div class="home">
    <h2>LOGIN FORM</h2>
    <v-row>
      <v-col>
        <Login :rememberPass="false" @onSubmit="onSubmit" />
      </v-col>
    </v-row>
         <v-alert type="error" v-if="error">
     {{error}}
    </v-alert>
   <router-link to="/register"> Register</router-link>
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
