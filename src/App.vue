<template>
  <div id="app">
    <TheNavigation :image-path="require('./assets/img/wrkst-logo-book.png')" />
    <router-view />
    <footer class="footer">© marcjnn 2021</footer>
  </div>
</template>

<script>
import TheNavigation from '@/components/layout/TheNavigation'
export default {
  components: {
    TheNavigation
  }
}
</script>

<style>
#app {
  font-family: var(--fontMain);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--colorMain);
}

/* FOOTER */

.footer {
  background-color: var(--colorFooter);
  height: 50px;
  position: relative;
  color: white;
}

/* it has to have height, otherwise background doesn't appear; for now height arbitrary, search if I can find  */
.footer::before {
  content: '';
  height: 9vh;
  width: 100%;
  background: url(./assets/img/wrkst-bottom-right.png) no-repeat bottom right
      20px / auto 90%,
    url(./assets/img/wrkst-bottom-left.png) no-repeat bottom left 20px / auto
      90%;
  border-bottom: 4px solid var(--colorFooter);
  position: absolute;
  /* -height -border */
  top: calc(-9vh - 4px);
  left: 0;
}

@media screen and (min-width: 768px) {
}

.hidden {
  display: none;
}
</style>
