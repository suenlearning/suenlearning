<template>
  <div class="generator">
    <h3 class="generator__title">{{ worksheetTitle }} worksheet generator</h3>

    <!-- CHOICE SELECTORS FOR TEACHERS -->
    <form
      action=""
      method=""
      class="generator__options"
      v-on:submit.prevent
      @change="generateActivity()"
    >
      <!-- how many digits -->
      <fieldset class="form__fieldset">
        <BaseSelect
          label="How many digits"
          :options="numberOfDigitsOptions"
          v-model.number="numberOfDigits"
        />
      </fieldset>

      <!-- regrouping vs no regrouping -->
      <fieldset class="form__fieldset">
        <legend class="form__fieldset--legend">Dis/allow regrouping</legend>
        <div class="form__options--radio">
          <input
            type="radio"
            id="no-regroup"
            :value="false"
            name="regrouping"
            v-model="regrouping"
          />
          <label for="no-regroup" class="options__radio--label"
            >no regrouping</label
          >
        </div>

        <div class="form__options--radio">
          <input
            type="radio"
            id="regroup"
            :value="true"
            name="regroup"
            v-model="regrouping"
          />
          <label for="regroup" class="options__radio--label">regrouping</label>
        </div>
      </fieldset>

      <!-- how many problems -->
      <fieldset class="form__fieldset">
        <BaseSelect
          label="How many problems"
          :options="numberOfEquationsOptions"
          v-model.number="numberOfEquations"
        />
      </fieldset>

      <!-- BUTTON - generate worksheet: later on - should it be submit? -->
      <fieldset class="form__fieldset form__fieldset--buttons">
        <BaseButton
          :onClick="generateActivity"
          icon="cogs"
          classModifier="generate"
          >Refresh</BaseButton
        >
        <!-- <BaseButton
          :onClick="saveActivity"
          icon="save"
          classModifier="save"
          disabled="numbers.length === 0 ? true : false"
          >Save activity</BaseButton
        > -->
      </fieldset>
    </form>

    <!-- VISIBLE RESULTS -->
    <BasePreview
      class="generator__preview"
      :isTitle="title"
      :previewWorksheetTitle="getPreviewWorksheetTitle"
    >
      <div class="activity">
        <div
          class="singleProblem"
          v-for="number in numbers"
          :key="number.index"
        >
          <p class="addend addend--first">{{ number.firstAddend }}</p>
          <p class="operationSign">+</p>
          <p class="addend addend--second">{{ number.secondAddend }}</p>
          <p class="result"></p>
        </div>
      </div>
    </BasePreview>
  </div>
</template>

<script>
import WrkstService from '@/services/WrkstService.js'
export default {
  name: 'GeneratorAddition',
  props: {
    worksheetTitle: String
  },
  data() {
    return {
      numbers: [],
      numberOfDigits: 2,
      numberOfDigitsOptions: [1, 2, 3, 4],
      numberOfEquations: 8,
      numberOfEquationsOptions: [4, 8, 12, 16, 20],
      regrouping: false,
      title: false
    }
  },
  methods: {
    // GENERATE ACTIVITY
    generateActivity() {
      this.title = true
      this.numbers = []
      for (let i = 0; i < this.numberOfEquations; i++) {
        const newNumber = this.generateEquationsArray()
        this.numbers.push(newNumber)
      }
    },
    // creates two arrays which will later be converted to numbers; with these two we assure noRegrouping
    generateEquationsArray() {
      const newEquationsArray = [
        this.createArrayOfDigits(),
        this.createArrayOfDigits()
      ]
      this.ensureDigitsDontSum10OrMore(0, newEquationsArray)

      if (!this.regrouping) {
        // i starts at 1 because at 0 it's always false
        // let firstChild = newEquationsArray[0]
        // let secondChild = newEquationsArray[1]
        for (let i = 1; i < this.numberOfDigits; i++) {
          this.ensureDigitsDontSum10OrMore(i, newEquationsArray)
        }
      }
      return this.convertFromArraysToNumbers(newEquationsArray)
    },
    createArrayOfDigits() {
      const nDigitArray = []
      // to make sure the first number in array != 0
      for (let i = 0; i < 1; i++) {
        const addDigit = this.getRandomNumber(1, 8)
        nDigitArray.push(addDigit)
      }
      // for 2nd and following numbers in array
      for (let i = 1; i < this.numberOfDigits; i++) {
        const addDigit = this.getRandomNumber(0, 9)
        nDigitArray.push(addDigit)
      }
      return nDigitArray
    },
    getRandomNumber(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    ensureDigitsDontSum10OrMore(digitPosition, newEquationsArray) {
      if (
        newEquationsArray[0][digitPosition] +
          newEquationsArray[1][digitPosition] >=
        10
      ) {
        const remainder = 10 - newEquationsArray[0][digitPosition]
        if (digitPosition === 0) {
          newEquationsArray[1][digitPosition] = this.getRandomNumber(
            1,
            remainder - 1
          )
        } else {
          newEquationsArray[1][digitPosition] = this.getRandomNumber(
            0,
            remainder - 1
          )
        }
      }
      return newEquationsArray
    },
    convertFromArraysToNumbers(newEquationsArray) {
      const firstAddend = this.createSingleNumber(newEquationsArray[0])
      const secondAddend = this.createSingleNumber(newEquationsArray[1])
      const result = firstAddend + secondAddend
      return {
        firstAddend,
        secondAddend,
        result
      }
    },
    // takes in an array of numbers and returns a number
    createSingleNumber(arr) {
      let singleNumber = 0
      for (let i = arr.length - 1; i >= 0; i--) {
        singleNumber += arr[i] * Math.pow(10, arr.length - 1 - i)
      }
      return singleNumber
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
      const withOrWithout = this.regrouping ? 'with' : 'without'
      const digits = this.numberOfDigits === 1 ? 'digit' : 'digits'
      const createWorksheetTitle = () => {
        return this.numberOfDigits
          ? `${this.numberOfDigits.toString()}-${digits} ${
              this.worksheetTitle
            } ${withOrWithout} regrouping`
          : ''
      }
      return this.title ? createWorksheetTitle() : ''
    }
  },
  created() {
    this.generateActivity()
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

.activity {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  justify-items: center;
  row-gap: 2vw;
}

.singleProblem {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'emptySpace1 firstAddend'
    'operationSign secondAddend'
    'emptySpace2 result';
  align-items: center;
}

.activity .singleProblem {
  width: 25%;
}

.addend {
  padding: 2px 2px 4px;
}
.addend--first {
  grid-area: firstAddend;
}

.addend--second {
  grid-area: secondAddend;
  border-bottom: 1px solid black;
}

.operationSign {
  grid-area: operationSign;
  padding: 2px 2px 4px;
}

.result {
  grid-area: result;
  padding: 2px 2px 4px;
}
</style>
