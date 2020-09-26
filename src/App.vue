<template>
  <div id="app">
    <div class="nav-line"></div>
    <TheNavigation :image-path="require('./assets/img/wrkst-logo-book.png')" />
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
export default {
  components: {
    TheNavigation
  }
}
</script>

<style>
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #521818;
}

.nav-line {
  background-color: #f04f4b;
  height: 10px;
}

footer {
  background-color: #30b2e7;
  height: 50px;
  position: relative;
  bottom: 0px;
}

footer::before {
  content: '';
  height: 92px;
  width: 100%;
  background: url(./assets/img/footerImg.png) no-repeat bottom center;
  position: absolute;
  top: -92px;
  left: 0px;
}
</style>
