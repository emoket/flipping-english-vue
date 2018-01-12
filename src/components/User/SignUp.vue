<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Sign up Page</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form action="">
          <v-layout xs12>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                label="e-mail"
                hint="abc@gmail.com"
                v-model="email"
                :rules="[rules.email, rules.required]"
                persistent-hint
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout xs12>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                label="password"
                hint="At least 8 characters including one uppercase letter, one special character and alphanumeric characters."
                v-model="password"
                :rules="[rules.password, rules.required]"
                :append-icon="isPasswordVisible ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (isPasswordVisible = !isPasswordVisible)"
                :type="isPasswordVisible ? 'text' : 'password'"
                persistent-hint
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                color="light-green darken-1"
                :disabled="!formIsValid"
                class="white--text"
              >
                Register
              </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        isPasswordVisible: false,
        rules: {
          required: (value) => !!value || 'Required.',
          email: (value) => {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
          password: (value) => {
            const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
            return pattern.test(value) || 'Invalid password.'
          }
        }
      }
    },
    computed: {
      formIsValid () {
        return this.email !== '' &&
          this.password !== ''
      }
    }
  }
</script>
