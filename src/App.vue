<template>
  <div id="app">
    <TheNavigation :image-path="require('./assets/images/logo.png')" />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import '@/assets/style/main.css'
import TheNavigation from '@/components/layout/TheNavigation'
import TheFooter from '@/components/layout/TheFooter.vue'
export default {
  components: {
    TheNavigation,
    TheFooter
  }
}
</script>

<style>
/* APP */

#app {
  font-family: var(--fontMain);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--colorTextMain);
}

.hidden {
  display: none;
}

.icon {
  display: block;
}

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

/* STYLES SHARED BY VIEWS: Home, About, Contact & PageNotFound */

.main__view {
  margin-top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.view__description {
  width: 30vw;
}

.description__title {
  color: var(--colorTextHeader);
  /* 20px */
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: capitalize;
}

.description__paragraph {
  font-size: 16px;
  line-height: 1.3;
  font-weight: 300;
}

.view__image-container {
  height: 60vh;
  max-height: 300px;
  margin-left: 3vw;
}

.view__image {
  height: 100%;
}

/* GLOBAL FORM STYLES */

.form__fieldset {
  /* padding: 1vw 0.7vw; */
  padding: 12px 0;
  border: none;
  border-top: 1px solid #d8d8d8;
}

.form__fieldset--legend {
  margin-bottom: 6px;
  float: left;
  width: 100%;
  color: var(--colorMain);
}

.form__options--label {
  display: block;
  margin-bottom: 12px;
  color: var(--colorMain);
}

/* specific display for buttons */
.buttons {
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
}

/* --> radio buttons <-- */

/* to vertically align in the middle */
input[type='radio'] {
  margin-top: -1px;
  vertical-align: middle;
}

.options__radio--label {
  /* possible variable for size; when adding SASS */
  /* 14px */
  font-size: 0.875rem;
  padding: 0 0.4em;
}
</style>
