<template>
  <div id="app">
    <TheNavigation :image-path="require('./assets/img/logo-s.png')" />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
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
/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

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

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

:root {
  --colorMain: #9b054c;
  --colorMain-shadow: rgba(155, 5, 75, 0.5);
  --colorHeader: #f40905;
  --colorFooter: #00c6d1;
  --colorFooter-shadow: rgba(0, 198, 209, 0.5);
  --colorBorder: #fe6902;
  --colorBorder-shadow: rgba(254, 105, 2, 0.5);
  --colorDetails: #a4d001;
  --colorTextMain: #4b473c;
  --colorTextHeader: #4254a5;
  /* --colorMain: #521818;
  --colorMain-shadow: rgba(82, 24, 24, 0.5);
  --colorHeader: #f04f4b;
  --colorFooter: #30b2e7;
  --colorFooter-shadow: rgba(48, 179, 231, 0.5);
  --colorBorder: #fdbe59;
  --colorDetails: #bcc63f; */

  --fontMain: Lato, sans-serif;
}

/* GLOBAL FORM STYLES */

.form__fieldset {
  padding: 1vw 0.7vw;
  border: none;
  border-top: 1px solid #d8d8d8;
}

/* --> select <-- */

.form__options--select {
  display: block;
  /* 14px */
  font-size: 0.875rem;
  font-family: var(--fontMain);
  /* font-weight: ; */
  color: var(--colorMain);
  line-height: 1.3;
  width: 50%;
  max-width: 220px;
  padding: 0.6em 0.4em;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 0px 1px var(--colorFooter-shadow);
  background-image: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
}

.form__options--select:hover {
}

.form__options--select:focus {
}

/* .form__options--select:disabled {
  color: var(--colorMain-shadow);
} */

/* --> radio buttons <-- */

/* to vertically align in the middle */
input[type='radio'] {
  margin-top: -1px;
  vertical-align: middle;
}

.form__options--radio {
}

.options__radio--label {
  /* possible variable for size; when adding SASS */
  /* 14px */
  font-size: 0.875rem;
  padding: 0 0.4em;
  color: var(--colorMain);
}

/* --> input-text <-- */

.form__options--input {
  display: inline-block;
  /* 14px */
  font-size: 0.875rem;
  font-family: var(--fontMain);
  color: var(--colorMain);
  line-height: 1.3;
  width: 20%;
  max-width: 50px;
  padding: 0.6em 0.4em;
  margin-right: 1vw;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 0px 1px var(--colorFooter-shadow);
  background-image: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
}

.form__options--input:focus,
.form__options--select:focus {
  outline: none;
  border: 1px solid var(--colorFooter);
}

.form__options--input::placeholder {
  color: var(--colorMain-shadow);
}

/* --> buttons <-- */

.form__fieldset--buttons {
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
}
</style>
