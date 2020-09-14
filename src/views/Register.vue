<template>
  <v-container>
    <div class="login-register-box">
      <h2 class="title">Register Form</h2>
      <v-row>
        <v-col>
          <v-container>
            <v-form v-model="valid" ref="form">
              <v-text-field
                v-model="email"
                :validate-on-blur="validateOnBlur"
                name="email"
                :rules="emailValidationRules"
                :label="emailLabel"
                @keyup.enter="submit"
                single-line
                outlined
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :validate-on-blur="validateOnBlur"
                type="password"
                name="password"
                :rules="passwordValidationRules"
                :label="passwordLabel"
                @keydown.enter="submit"
                single-line
                outlined
                required
              ></v-text-field>

              <v-text-field
                v-model="confirmPassword"
                :validate-on-blur="validateOnBlur"
                type="password"
                name="confirmPassword"
                :rules="confirmPasswordRules"
                :label="confirmPasswordLabel"
                @keydown.enter="submit"
                single-line
                outlined
                required
              ></v-text-field>
              <v-alert type="error" v-if="error">{{error}}</v-alert>
              <v-btn class="mdx-cta" @click="submit" value="submit">{{ submitButonText }}</v-btn>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  props: {},
  name: 'm-login',
  components: {},
  data () {
    return {
      validateOnBlur: false,
      error: false,
      emailLabel: 'Email',
      emailPlaceholder: 'Enter your email',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm Password',
      passwordPlaceholder: 'Enter your password',
      submitButonText: 'Register',

      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /\S+@\S+\.\S+/.test(v) || 'Email Invalid'
      ],

      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          v.length >= 6 || 'Password length must be longer than 5 characters'
      ],
      valid: false,
      email: '',
      password: '',
      confirmPassword: '',
      forceRules: false,
      confirmPasswordRules: [
        (v) => v === this.password || 'Password must match'
      ]
    }
  },

  methods: {
    submit () {
      // https://github.com/vuetifyjs/vuetify/issues/3530

      if (!this.validateOnBlur) {
        this.forceRules = true
      }

      this.$nextTick(() => {
        if (this.$refs.form.validate()) {
          this.$services.register({
            email: this.email,
            password: this.password
          })
            .then((data) => {
              this.$router.push({ path: '/home' })
            })
            .catch((err) => {
              this.error = (err.response && err.response.data) || err
            })
        }
      })
    }
  },
  computed: {
    emailValidationRules () {
      if (this.validateOnBlur || this.forceRules) {
        return this.emailRules
      } else return []
    },
    passwordValidationRules () {
      if (this.validateOnBlur || this.forceRules) {
        return this.passwordRules
      } else return []
    }
  }
}
</script>
