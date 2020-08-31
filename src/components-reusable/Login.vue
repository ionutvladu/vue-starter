<template>
  <v-container>
    <v-form
      v-model="valid"
      ref="form"
    >
      <v-text-field
        v-model="email"
        :validate-on-blur="validateOnBlur"
        name="email"
        :rules="emailValidationRules"
        :label="emailLabel"
        @keyup.enter="submit"
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
        outlined
        required
      ></v-text-field>

      <v-checkbox
        v-if="rememberPass"
        :label="rememberPassLabel"
      ></v-checkbox>

      <v-btn
        color="success"
        class="mdx-cta"
        @click="submit"
        value="submit"
      >{{ submitButonText }}</v-btn>

    </v-form>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  props: {
    validateOnBlur: {
      type: Boolean,
      default: false
    },
    emailLabel: {
      type: String,
      default: 'Email'
    },
    emailPlaceholder: {
      type: String,
      default: 'Enter your email'
    },
    passwordLabel: {
      type: String,
      default: 'Password'
    },
    passwordPlaceholder: {
      type: String,
      default: 'Enter your password'
    },
    rememberPass: {
      type: Boolean,
      default: true
    },
    rememberPassLabel: {
      type: String,
      default: 'Remember password'
    },
    submitButonText: {
      type: String,
      default: 'Login'
    },

    emailRules: {
      type: Array,
      default: function () {
        return [
          (v) => !!v || 'Email is required',
          (v) => /\S+@\S+\.\S+/.test(v) || 'Email Invalid'
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: function () {
        return [
          (v) => !!v || 'Password is required',
          (v) =>
            v.length >= 6 || 'Password length must be longer than 5 characters'
        ]
      }
    }
  },
  name: 'm-login',
  components: {},
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      forceRules: false
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
          this.$emit('onSubmit', {
            email: this.email,
            password: this.password
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
