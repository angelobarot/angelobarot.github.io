<template lang="html">
  <div id="about" class="about">
    <div class="container">
      <v-layout row wrap>
        <v-flex xs12>
          <img src="~@/assets/img/image-placeholder.png" alt="">
        </v-flex>
        <v-flex xs12>
          <h2>About Me</h2>
        </v-flex>
        <v-flex xs12>
          <p class="pr-5 pl-5">
            Hi! I am {{ bio.name }} <br>
          </p>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam eu ligula ut imperdiet. Ut euismod dolor eu dolor ornare fermentum. Ut consequat condimentum justo sed bibendum. Cras ultricies, ipsum et interdum aliquet, erat arcu posuere ipsum, in consectetur nibh justo et ipsum. Integer maximus, sapien id cursus vestibulum, nulla magna pretium eros, at congue turpis neque id lacus. Phasellus id lacus ante. Aliquam erat volutpat. Mauris consectetur augue non dapibus hendrerit.',
      img: '~assets/image-placeholder.png',
      bio: {
        name: 'John Angelo Castillo Barot',
        university: 'Polytechnic University of the Philippines',
        currentCompany: 'White Cloak Technologies, Inc.',
        yearOfGraduate: 'May 2017'
      }
    }
  }
}
</script>

<style lang="css">
</style>
