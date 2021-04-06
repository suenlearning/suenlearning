<template>
  <div class="generator">
    <h3 class="generator__title">{{ worksheetTitle }} worksheet generator</h3>
    <!-- CHOICE SELECTORS FOR TEACHERS -->
    <form action="" method="" class="generator__options" v-on:submit.prevent>
      <!-- how many numbers visible -->
      <fieldset class="form__fieldset">
        <select
          id="numbersVisible"
          v-model.number="numbersVisible"
          class="form__options--select"
        >
          <option value="" disabled>How many numbers visible</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="80">80</option>
        </select>
      </fieldset>

      <!-- BUTTON - generate worksheet: later on - should it be submit? -->
      <fieldset class="form__fieldset">
        <BaseButton :onClick="generateWorksheet">generate worksheet</BaseButton>
        <!-- <BaseButton>save pdf</BaseButton> -->
      </fieldset>
    </form>

    <!-- VISIBLE RESULTS -->
    <BasePreview
      class="generator__preview"
      :isTitle="title"
      :previewWorksheetTitle="getPreviewWorksheetTitle"
    >
      <div class="activity">
        <ul class="numbers--container">
          <li
            v-for="(number, index) in numbers"
            :key="index"
            class="numbers__single"
          >
            <p :class="number === 0 ? 'hiddenElement' : ''">{{ number }}</p>
          </li>
        </ul>
      </div>
    </BasePreview>
  </div>
</template>
<script>
export default {
  name: 'Generator100Board',
  props: {
    worksheetTitle: String
  },
  data() {
    return {
      numbersVisible: '',
      numbers: [],
      title: false
    }
  },
  methods: {
    generateWorksheet() {
      this.title = true
      this.numbers = []
      for (let i = 1; i <= 100; i++) {
        this.numbers.push(i)
      }
      let tempArray = this.create100BoardElements()
      console.log(tempArray)
    },
    changeSomeNumbersToZero: function(arrOfInd, numbersArray) {
      for (let i = 0; i < arrOfInd.length; i++) {
        let num = arrOfInd[i]
        numbersArray[num] = 0
      }
      return numbersArray
    },
    create100BoardElements() {
      let elementsToHide = this.createArrayOfIndexesToHide()
      return this.changeSomeNumbersToZero(elementsToHide, this.numbers)
    },
    // numbers to hide - these are the numbers the kids will have to fill in
    createArrayOfIndexesToHide() {
      let newArrayOfIndexes = []
      let numbersToHide = 100 - this.numbersVisible
      while (newArrayOfIndexes.length < numbersToHide) {
        let newIndex = Math.floor(Math.random() * 100)
        if (newArrayOfIndexes.indexOf(newIndex) === -1) {
          newArrayOfIndexes.push(newIndex)
        }
      }
      console.log(newArrayOfIndexes)
      return newArrayOfIndexes
    }
  },
  computed: {
    getPreviewWorksheetTitle() {
      return this.title ? this.worksheetTitle : ''
    }
  }
}
</script>
<style scoped>
.generator {
  display: grid;
  height: 100%;
  grid-template-columns: 40% 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'intro intro'
    'options preview';
  column-gap: 2vw;
}

.generator__title {
  grid-area: intro;
  justify-self: center;
  margin: 2vw 0;
}

.generator__options {
  grid-area: options;
}

/* preview styling */

.generator__preview {
  grid-area: preview;
}

.numbers--container {
  display: grid;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  padding: 3px;
  border: 1px solid var(--colorFooter);
}

.numbers__single {
  /* width: 50px; */
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 18px */
  font-size: 1.125rem;
  border: 1px solid var(--colorFooter);
}

.hiddenElement {
  visibility: hidden;
}
</style>
