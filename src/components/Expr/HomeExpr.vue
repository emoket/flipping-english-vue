<template>
  <v-container>
    <v-layout column>
      <v-flex xs12 sm6 offset-sm3>
        <info-card
          :frontType="'text'"
          :frontTitle="front.title"
          :frontData="front.message"
          :backType="'text'"
          :backTitle="back.title"
          :backData="back.message">
        </info-card>
      </v-flex>
    </v-layout>

    <div>

    </div>
  </v-container>
</template>

<script>
import InfoCard from 'vue-info-card';

export default {
  components: {
    InfoCard,
  },
  data() {
    return {
      front: {
        title: 'Today\'s English Expression',
        message: 'Have a nice day.'
      },
      back: {
        title: '반드시 기억하자!',
        message: '좋은 하루 되세요.',
      },
    };
  },
};
</script>
