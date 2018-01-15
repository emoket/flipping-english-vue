<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2 class="display-3 text-xs-center">
        <info-card
          :frontType="'text'"
          :frontTitle="front.title"
          :frontData="front.message"
          :backType="'text'"
          :backTitle="back.title"
          :backData="back.message"
        >
        </info-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import InfoCard from 'vue-info-card'

export default {
  components: {
    InfoCard
  },
  data () {
    return {
      front: {
        title: '다음을 영어로 하면?',
        message: '좋은 하루 되세요.'
      },
      back: {
        title: '맞췄니?',
        message: 'Have a nice day.'
      }

    }
  }
}
</script>
