<template>
  <div class="generator">
    <h3 class="generator__title">{{ worksheetTitle }} worksheet generator</h3>

    <!-- CHOICE SELECTORS FOR TEACHERS -->
    <form action="" method="" class="generator__options" v-on:submit.prevent>
      <!-- first number in line range -->
      <fieldset class="form__fieldset">
        <div class="form__options--radio">
          <input
            type="radio"
            id="fst-half"
            name="numberRange"
            :value="0"
            v-model="firstNumberRange"
          />
          <label for="fst-half" class="options__radio--label"
            >from 10 to 50</label
          >
        </div>
        <div class="form__options--radio">
          <input
            type="radio"
            id="snd-half"
            name="numberRange"
            :value="1"
            v-model="firstNumberRange"
          />
          <label for="snd-half" class="options__radio--label"
            >from 50 to 100</label
          >
        </div>
        <div class="form__options--radio">
          <input
            type="radio"
            id="custom"
            name="numberRange"
            :value="2"
            v-model="firstNumberRange"
          />
          <label for="custom" class="options__radio--label"
            >custom value:</label
          >
          <BaseInput
            v-model="optionalRange.min"
            type="text"
            placeholder="min"
          />
          <BaseInput
            v-model="optionalRange.max"
            type="text"
            placeholder="max"
          />
        </div>
      </fieldset>
      <!-- ascending vs descending -->
      <fieldset class="form__fieldset">
        <div class="form__options--radio">
          <input
            type="radio"
            id="ascending"
            name="order"
            :value="true"
            v-model="ascendingOrder"
          />
          <label for="ascending" class="options__radio--label">ascending</label>
        </div>
        <div class="form__options--radio">
          <input
            type="radio"
            id="descending"
            name="order"
            :value="false"
            v-model="ascendingOrder"
          />
          <label for="descending" class="options__radio--label"
            >descending</label
          >
        </div>
      </fieldset>
      <!-- how many lines -->
      <fieldset class="form__fieldset">
        <select
          id="numberOfLines"
          v-model.number="numberOfLines"
          class="form__options--select"
        >
          <option value="" disabled>How many problems</option>
          <option v-for="option in numberOfLinesOptions" :key="option">{{
            option
          }}</option>
        </select>
      </fieldset>
      <!-- how many numbers per line -->
      <fieldset class="form__fieldset">
        <select
          id="numberPerLine"
          v-model.number="numberPerLine"
          class="form__options--select"
        >
          <option value="" disabled>How many numbers per line</option>
          <option v-for="option in numberPerLineOptions" :key="option">{{
            option
          }}</option>
        </select>
      </fieldset>
      <fieldset class="form__fieldset">
        <BaseButton :onClick="generateActivity" icon="cogs" type="generate"
          >Create activity</BaseButton
        >
        <BaseButton
          :onClick="saveActivity"
          icon="save"
          type="save"
          :isDisabled="numberLines.length === 0 ? true : false"
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
      <ul class="activity">
        <li v-for="(line, index) in numberLines" :key="index">
          <ul class="numberLine">
            <li
              class="numberLine__element"
              v-for="(n, index) in line"
              :key="index"
            >
              <p :class="n === 0 ? 'numberLine__element--hidden' : ''">
                {{ n }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </BasePreview>
  </div>
</template>
<script>
import WrkstService from '@/services/WrkstService.js'
export default {
  name: 'GeneratorNumberLine',
  props: {
    worksheetTitle: String
  },
  data() {
    return {
      numberLines: [],
      numberOfLines: '',
      numberOfLinesOptions: [3, 4, 5, 6, 7, 8, 9],
      numberPerLine: '',
      numberPerLineOptions: [8, 9, 10],
      ascendingOrder: null,
      firstNumberRange: null,
      optionalRange: { min: null, max: null },
      title: false
    }
  },
  methods: {
    // GENERATE ACTIVITY
    generateActivity() {
      this.title = true
      this.numberLines = []
      for (let i = 0; i < this.numberOfLines; i++) {
        const newSingleLine = this.createSingleLine()
        this.numberLines.push(newSingleLine)
      }
    },
    createSingleLine() {
      let newSingleLine = []
      const elementsToHide = this.createArrayOfIndexesToHide()
      if (this.ascendingOrder) {
        const n = this.setNumbersRangeAscending()
        for (let i = 0; i < this.numberPerLine; i++) {
          newSingleLine.push(n + i)
        }
      } else {
        const n = this.setNumbersRangeDescending()
        for (let i = 0; i < this.numberPerLine; i++) {
          newSingleLine.push(n - i)
        }
      }
      return this.changeSomeNumbersToZero(elementsToHide, newSingleLine)
    },
    // numbers to hide - these are the numbers the kids will have to fill in
    createArrayOfIndexesToHide() {
      const newArrayOfIndexes = []
      while (newArrayOfIndexes.length < this.numberPerLine - 3) {
        const newIndex = Math.floor(Math.random() * this.numberPerLine)
        if (newArrayOfIndexes.indexOf(newIndex) === -1) {
          newArrayOfIndexes.push(newIndex)
        }
      }
      return newArrayOfIndexes
    },
    changeSomeNumbersToZero(arrOfIndexes, singleLine) {
      for (let i = 0; i < arrOfIndexes.length; i++) {
        const n = arrOfIndexes[i]
        singleLine[n] = 0
      }
      return singleLine
    },
    setNumbersRangeAscending() {
      let x, y
      if (this.firstNumberRange === 0) {
        ;(x = 10), (y = 40)
      } else if (this.firstNumberRange === 1) {
        ;(x = 50), (y = 90)
      } else {
        ;(x = parseInt(this.optionalRange.min)),
          (y = parseInt(this.optionalRange.max) - parseInt(this.numberPerLine))
      }
      return this.getRandomNumber(x, y)
    },
    setNumbersRangeDescending() {
      let x, y
      if (this.firstNumberRange === 0) {
        ;(x = 20), (y = 50)
      } else if (this.firstNumberRange === 1) {
        ;(x = 60), (y = 100)
      } else {
        ;(x = parseInt(this.optionalRange.min) + parseInt(this.numberPerLine)),
          (y = parseInt(this.optionalRange.max))
      }
      return this.getRandomNumber(x, y)
    },
    getRandomNumber(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    // SAVE ACTIVITY
    saveActivity() {
      const activity = {
        title: 'findAWayToAddName',
        generator: this.$options.name,
        numberLines:
          this.numberLines.length === 0
            ? 'disable the button'
            : this.numberLines
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
  grid-template-columns: 30% 1fr;
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

.activity {
  display: grid;
  gap: 24px;
  padding: 0 16px;
}

.numberLine {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.numberLine__element {
  /* 18px */
  font-size: 1.125rem;
  border: 1px solid var(--colorFooter);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.numberLine__element--hidden {
  visibility: hidden;
}
</style>
