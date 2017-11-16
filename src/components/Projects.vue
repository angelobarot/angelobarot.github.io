<template lang="html">
  <div class="projects" id="projects">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="project-card-container">
          <v-container grid-list-4>
            <h1>Projects</h1>
            <!-- <v-layout row wrap>
              <v-flex xs4 md3 v-for="n in 9" :key="9">
                <v-card flat tile class="project-card">
                  <v-card-media :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" height="200px"/>
                </v-card>
              </v-flex>
            </v-layout> -->
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
