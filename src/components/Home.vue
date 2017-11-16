<template lang="html" >
  <div id="home" class="container">
    <div class="home">
      <v-icon class="my-image">account_circle</v-icon>
      <h3>{{ text }}</h3>
      <ul class="social-media-home">
        <li v-for="(link, index) of links" :key="index">
          <a :href="link.link" target="_blank">
            <v-icon>{{ link.icon }}</v-icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '/johnangelo',
      links: [
        {
          link: 'https://www.facebook.com/janaaaaan',
          icon: 'fa-facebook'
        },
        {
          link: 'https://github.com/jangelo08',
          icon: 'fa-github'
        },
        {
          link: 'https://www.linkedin.com/in/john-angelo-castillo-barot-655787130/',
          icon: 'fa-linkedin-square'
        },
        {
          link: 'https://codepen.io/jangelo08/',
          icon: 'fa-codepen'
        }
      ]
    }
  }
}

// class TextScramble {
//   constructor (el) {
//     this.el = el
//     this.chars = '!<>-_\\/[]{}—=+*^?#________'
//     this.update = this.update.bind(this)
//   }
//   setText (newText) {
//     const oldText = this.el.innerText
//     const length = Math.max(oldText.length, newText.length)
//     const promise = new Promise((resolve) => {
//       this.resolve = resolve
//     })
//     this.queue = []
//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || ''
//       const to = newText[i] || ''
//       const start = Math.floor(Math.random() * 40)
//       const end = start + Math.floor(Math.random() * 40)
//       this.queue.push({ from, to, start, end })
//     }
//     cancelAnimationFrame(this.frameRequest)
//     this.frame = 0
//     this.update()
//     return promise
//   }
//   update () {
//     let output = ''
//     let complete = 0
//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let { from, to, start, end, char } = this.queue[i]
//       if (this.frame >= end) {
//         complete++
//         output += to
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.28) {
//           char = this.randomChar()
//           this.queue[i].char = char
//         }
//         output += `<span class="glitch">${char}</span>`
//       } else {
//         output += from
//       }
//     }
//     this.el.innerHTML = output
//     if (complete === this.queue.length) {
//       this.resolve()
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update)
//       this.frame++
//     }
//   }
//   randomChar () {
//     return this.chars[Math.floor(Math.random() * this.chars.length)]
//   }
// }
//
// const phrases = [
//   '/johnangelo',
//   'Junior Web Developer',
//   '~',
//   'JACB'
// ]
//
// setTimeout(() => {
//   const el = document.querySelector('.angelo')
//   const fx = new TextScramble(el)
//
//   let counter = 0
//   const next = () => {
//     fx.setText(phrases[counter]).then(() => {
//       setTimeout(next, 800)
//     })
//     counter = (counter + 1) % phrases.length
//   }
//
//   next()
// }, 500)
</script>

<style lang="css">

</style>
