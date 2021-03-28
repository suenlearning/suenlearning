<template>
  <main class="main__workspace">
    <section class="workspace__intro">
      <h3>Choose a generator</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
    <section class="workspace__worksheets">
      <!-- later on change to seperate component with vfor -->
      <ul class="workspace__cards--container">
        <li
          class="workspace__cards--item"
          v-for="worksheet in worksheetData"
          :key="worksheet.name"
          @click="selectedWorksheet = worksheet"
        >
          <article class="card">
            <img
              class="card__thumb"
              :src="require(`@/assets/img/${worksheet.image.src}`)"
              :alt="worksheet.image.alt"
            />
            <h3 class="card__title">{{ worksheet.name }}</h3>
          </article>
        </li>
      </ul>
    </section>
    <section id="worksheetGenerator" class="worksheetGenerator">
      <div class="chosenComponent" v-if="selectedWorksheet">
        <component
          :is="selectedWorksheet.generator"
          :msg="selectedWorksheet.name"
        />
      </div>
    </section>
  </main>
</template>

<script>
import generatorBasicOperations from '@/components/generatorBasicOperations.vue'
import generator100Board from '@/components/generator100Board.vue'
import generatorNumberLine from '@/components/generatorNumberLine.vue'

//  I'll have to try to generilise and create one base component
// import WorksheetGenerator from '@/components/WorksheetGenerator.vue'

import WrkstService from '@/services/WrkstService.js'

export default {
  name: 'Workspace',
  components: {
    generatorBasicOperations,
    generator100Board,
    generatorNumberLine
    // WorksheetGenerator
  },
  data() {
    return {
      worksheets: [
        {
          name: 'addition',
          slug: 'addition',
          generator: 'generatorBasicOperations',
          path: '#',
          image: 'worksheets.png',
          alt: 'addition generator'
        },
        {
          name: '100 board',
          slug: '100-board',
          generator: 'generator100Board',
          path: '#',
          image: 'worksheets.png',
          alt: 'hundred board generator'
        },
        {
          name: 'number line',
          slug: 'number-line',
          generator: 'generatorNumberLine',
          path: '#',
          image: 'worksheets.png',
          alt: 'number line generator'
        }
      ],
      worksheetData: [],
      selectedWorksheet: '' // we will select thorugh the array[i]
    }
  },
  created() {
    WrkstService.getWorksheets()
      .then(response => {
        this.worksheetData = response.data
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

.card__thumb {
  max-height: 100px;
}

.card__title {
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
}

/* WORKSHEET GENERATOR */

.worksheetGenerator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.chosenComponent {
  width: 100%;
}

/* ADD MEDIA */
</style>
