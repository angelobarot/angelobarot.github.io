<template lang="html">
  <div class="nav-list">
    <ul>
      <li v-for="(nav, index) of navList" :key="index"><a @click="smoothScroll(nav)" :id="nav.title">{{ nav.title }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          id: 1,
          path: 'home',
          title: 'Home'
        },
        {
          id: 2,
          path: 'about',
          title: 'About'
        },
        {
          id: 3,
          path: 'services',
          title: 'Services'
        },
        {
          id: 4,
          path: 'projects',
          title: 'Projects'
        },
        {
          id: 5,
          path: 'contact',
          title: 'Contact'
        }
      ]
    }
  },
  methods: {
    smoothScroll (value) {
      var target = document.getElementById(value.path)
      this.$SmoothScroll(target, 500)
    }
  }

}
</script>

<style lang="css">
</style>
