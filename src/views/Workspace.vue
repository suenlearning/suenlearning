<template>
  <div class="container">
    <section class="titleHeading">
      <blockquote>
        <h3>Worksheet generator</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </blockquote>
    </section>
    <section id="availableWorksheets" class="availableWorksheets">
      <!-- later on change to seperate component with vfor -->
      <div
        class="boxItem"
        v-for="worksheet in worksheets"
        :key="worksheet.name"
        @click="selectedWorksheet = worksheet"
      >
        <figure class="thumb">
          <img
            :src="require(`@/assets/img/${worksheet.image}`)"
            :alt="worksheet.alt"
          />
        </figure>
        <p>{{ worksheet.name }}</p>
      </div>
    </section>
    <section id="worksheetGenerator" class="worksheetGenerator">
      <div class="chosenComponent" v-if="selectedWorksheet">
        <component
          :is="selectedWorksheet.generator"
          :msg="selectedWorksheet.name"
        />
      </div>
    </section>
  </div>
</template>

<script>
import generatorBasicOperations from '@/components/generatorBasicOperations.vue'
import generator100Board from '@/components/generator100Board.vue'
import generatorNumberLine from '@/components/generatorNumberLine.vue'

export default {
  name: 'Workspace',
  components: {
    generatorBasicOperations,
    generator100Board,
    generatorNumberLine
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
      selectedWorksheet: '' // we will select thorugh the array[i]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 100%;
  align-content: space-between;
  position: relative;
  top: 0px;
}

.titleHeading {
  text-align: left;
  margin-bottom: 50px;
  margin-top: 15px;
  padding-left: 20px;
}

.titleHeading blockquote {
  margin: 2em;
  padding: 5px 0px 5px 20px;
  border-left: 4px solid #8cc63f;
}

.availableWorksheets {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 50px;
}

.boxItem {
  padding: 15px;
  border: 1px solid #f04f4b;
  border-radius: 13%;
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  /* align-content: space-around;   <-- this one is not working & I cannot figure why...; the idea is that the lines should be towards center */
  box-sizing: border-box;
}

.boxItem:hover {
  cursor: pointer;
}

/* reseting general figure style for my thumbnailes with the .class */
.thumb {
  margin: 0;
  padding-left: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px;
}

.thumb img {
  max-width: 100%;
  height: auto;
}

.worksheetGenerator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.chosenComponent {
  width: 100%;
}
</style>
