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
          <option v-for="option in numbersVisibleOptions" :key="option">{{
            option
          }}</option>
        </select>
      </fieldset>

      <!-- BUTTON - generate worksheet: later on - should it be submit? -->
      <fieldset class="form__fieldset form__fieldset--buttons">
        <BaseButton :onClick="generateActivity" icon="cogs" type="generate"
          >Create activity</BaseButton
        >
        <BaseButton
          :onClick="saveActivity"
          icon="save"
          type="save"
          :isDisabled="numbers.length === 0 ? true : false"
          >Save activity</BaseButton
        >
      </fieldset>
    </form>

    <!-- VISIBLE RESULTS -->
    <BasePreview
      class="generator__preview"
      :isTitle="title"
      :previewWorksheetTitle="getPreviewWorksheetTitle"
    >
      <div class="activity">
        <ul
          class="numbers__container"
          :class="numbers.length === 0 ? '' : 'numbers__container--filled'"
        >
          <li
            v-for="(number, index) in numbers"
            :key="index"
            class="numbers__singleNumber"
          >
            <p :class="number === 0 ? 'numbers__singleNumber--hidden' : ''">
              {{ number }}
            </p>
          </li>
        </ul>
      </div>
    </BasePreview>
  </div>
</template>
<script>
import WrkstService from '@/services/WrkstService.js'
export default {
  name: 'Generator100Board',
  props: {
    worksheetTitle: String
  },
  data() {
    return {
      numbersVisible: '',
      numbersVisibleOptions: [20, 40, 60, 80],
      numbers: [],
      title: false
    }
  },
  methods: {
    // GENERATE ACTIVITY
    generateActivity() {
      this.title = true
      this.numbers = []
      for (let i = 1; i <= 100; i++) {
        this.numbers.push(i)
      }
      this.create100BoardElements()
    },
    create100BoardElements() {
      const elementsToHide = this.createArrayOfIndexesToHide()
      return this.changeSomeNumbersToZero(elementsToHide, this.numbers)
    },
    // numbers to hide - these are the numbers the kids will have to fill in
    createArrayOfIndexesToHide() {
      const newArrayOfIndexes = []
      const numbersToHide = 100 - this.numbersVisible
      while (newArrayOfIndexes.length < numbersToHide) {
        let newIndex = Math.floor(Math.random() * 100)
        if (newArrayOfIndexes.indexOf(newIndex) === -1) {
          newArrayOfIndexes.push(newIndex)
        }
      }
      return newArrayOfIndexes
    },
    changeSomeNumbersToZero(arrOfIndexes, numbersArray) {
      for (let i = 0; i < arrOfIndexes.length; i++) {
        let n = arrOfIndexes[i]
        numbersArray[n] = 0
      }
      return numbersArray
    },
    // SAVE ACTIVITY
    saveActivity() {
      const activity = {
        title: 'findAWayToAddName',
        generator: this.$options.name,
        numbers: this.numbers.length === 0 ? 'disable the button' : this.numbers
      }
      WrkstService.saveActivity(activity)
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

/* -- preview -- */

.generator__preview {
  grid-area: preview;
}

.numbers__container {
  display: grid;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  padding: 3px;
}

.numbers__container--filled {
  border: 1px solid var(--colorFooter);
}

.numbers__singleNumber {
  /* width: 50px; */
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 18px */
  font-size: 1.125rem;
  border: 1px solid var(--colorFooter);
}

.numbers__singleNumber--hidden {
  visibility: hidden;
}
</style>
