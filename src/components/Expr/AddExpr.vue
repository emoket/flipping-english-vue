<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Add a new expression</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form action="">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="eng"
                label="Eng"
                id="eng"
                v-model="eng"
                placeholder="ex. Have a nice day"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="kor"
                label="Kor"
                id="kor"
                v-model="kor"
                placeholder="ex. 좋은 하루 되세요."
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="tag"
                label="Tag"
                id="tag"
                v-model="tag"
                placeholder="ex. have"
                required
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
                Add Expression
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
        eng: '',
        kor: '',
        tag: ''
      }
    },
    computed: {
      formIsValid () {
        return this.eng !== '' &&
               this.kor !== '' &&
               this.tag !== ''
      }
    }
  }
</script>
