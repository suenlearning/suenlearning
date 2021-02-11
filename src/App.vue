<template>
  <div id="app">
    <TheNavigation :image-path="require('./assets/img/wrkst-logo-book.png')" />
    <router-view />
    <footer class="footer pageColumn"></footer>
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
  color: var(--colorMain);
}

/* header moved to navigation */
/* HEADER */
/* .header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-top: 8px solid var(--colorHeader);
  background-color: white;
} */

/* .navLine {
  background-color: #f04f4b;
  height: 10px;
} */

/* main moved to each view */
/* MAIN */

/* .main {
  width: 100%; */
/* max-width: 1200px; */
/* height: 100vh; */
/* background: url(./assets/img/wrkst-bottom-right.png) no-repeat bottom right
      20px / auto 40px,
    url(./assets/img/wrkst-bottom-left.png) bottom left 20px / auto 40px
      no-repeat;
  border-bottom: 8px solid var(--colorFooter); */
/* seems that flex comes from home */
/* display: flex;
  justify-content: center;
  align-items: center; */
/* } */

/* when using background in % it calculates based on parent container not the image size */

/* footer will move out once the component is ready */
/* FOOTER */

.footer {
  background-color: var(--colorFooter);
  height: 50px;
  position: relative;
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
  /* .main {
    background: url(./assets/img/wrkst-bottom-right.png) no-repeat bottom right
        20px / auto 6%,
      url(./assets/img/wrkst-bottom-left.png) bottom left 20px / auto 6%
        no-repeat;
  } */
  /* .footer::before {
    background: url(./assets/img/wrkst-bottom-right.png) no-repeat bottom right
        20px / auto 90%,
      url(./assets/img/wrkst-bottom-left.png) no-repeat bottom left 20px / auto
        90%;
  } */
}
</style>
