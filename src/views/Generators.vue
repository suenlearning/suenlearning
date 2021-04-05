<template>
  <main class="main__workspace">
    <div class="workspace__intro">
      <h3>Choose a generator</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>

    <ul class="workspace__cards--container">
      <li
        class="workspace__cards--item"
        v-for="worksheet in worksheets"
        :key="worksheet.name"
        @click="selectedWorksheet = worksheet"
      >
        <router-link
          :to="{
            name: 'singleGenerator',
            params: { generatorType: worksheet.slug }
          }"
          class="nav__link"
        >
          <article
            class="card"
            :class="{
              selectedWorksheet:
                selectedWorksheet.generator === worksheet.generator
            }"
          >
            <img
              class="card__thumb"
              :src="require(`@/assets/img/${worksheet.image.src}`)"
              :alt="worksheet.image.alt"
            />
            <h3 class="card__title">{{ worksheet.name }}</h3>
          </article></router-link
        >
      </li>
    </ul>

    <!-- router-view might be needed if I introduce the general Generator.vue view within which I'll be rendering single generators; with the v-if however, it is not needed -->
    <!-- <router-view :key="$route.path" /> -->

    <section v-if="selectedWorksheet" class="workspace__generator">
      <component
        :is="selectedWorksheet.generator"
        :worksheetTitle="selectedWorksheet.name"
      />
    </section>
  </main>
</template>

<script>
import GeneratorAddition from '@/components/generators/GeneratorAddition.vue'
import Generator100Board from '@/components/generators/Generator100Board.vue'
import GeneratorNumberLine from '@/components/generators/GeneratorNumberLine.vue'

import WrkstService from '@/services/WrkstService.js'

export default {
  name: 'Workspace',
  components: {
    GeneratorAddition,
    Generator100Board,
    GeneratorNumberLine
  },
  data() {
    return {
      worksheets: [],
      selectedWorksheet: ''
    }
  },
  created() {
    WrkstService.getWorksheets()
      .then(response => {
        this.worksheets = response.data
      })
      .catch(error => {
        console.log('There was an error:' + error.response)
      })
  }
}
</script>

<style scoped>
.main__workspace {
  width: 100%;
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  padding: 0 20px;
  /* additional padding to accomodate footer images */
  padding-bottom: 9vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  position: relative;
  top: 0px;
}

/* INTRO */

.workspace__intro {
  text-align: left;
  margin: 30px 0 40px 28px;
  padding: 8px 0 8px 16px;
  border-left: 8px solid #8cc63f;
}

/* AVAILABLE WORKSHEETS */

.workspace__cards--container {
  /* display: flex;
  align-items: center;
  justify-content: flex-start; */
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
}

.workspace__cards--item {
  margin: 12px 0;
  padding: 20px 12px;
  width: 154px;
  border: 2px solid var(--colorBorder);
  border-radius: 10px;
}

.workspace__cards--item:hover {
  cursor: pointer;
}

.workspace__cards--item .nav__link {
  color: var(--colorMain);
  text-decoration: none;
}

.card__thumb {
  max-height: 100px;
}

.card__title {
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
}

.workspace__cards--item a.router-link-exact-active {
  color: var(--colorDetails);
}

/* WORKSHEET GENERATOR */

/* temporary, to imitate a full page */
.workspace__generator {
  height: 100vh;
}

/* ADD MEDIA */
</style>
