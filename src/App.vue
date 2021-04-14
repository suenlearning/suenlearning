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

  --fontMain: Lato, sans-serif;
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

/* --> select <-- */

.form__options--select {
  display: block;
  /* 14px */
  font-size: 0.875rem;
  font-family: var(--fontMain);
  line-height: 1.3;
  width: 50%;
  max-width: 220px;
  padding: 0.6em 0.4em;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 0px 1px var(--colorFooter-shadow);
  background-image: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
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

/* --> input-text <-- */

.form__options--input {
  display: inline-block;
  /* 14px */
  font-size: 0.875rem;
  font-family: var(--fontMain);
  line-height: 1.3;
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

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 0.7rem;
  text-transform: uppercase;
  outline: none;
  color: white;
  /* 14px */
  font-size: 0.875rem;
  font-weight: 700;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  font-family: var(--fontMain);
}

.btn:disabled {
  background-color: #d8d8d8;
  cursor: default;
}

.btn--generate {
  background-color: var(--colorDetails);
}

.btn--save {
  background-color: var(--colorFooter);
}

.icon {
  display: block;
  margin-right: 6px;
}
</style>
