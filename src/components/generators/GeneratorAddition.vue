<template>
  <div class="generator">
    <h3 class="generator__title">{{ worksheetTitle }} worksheet generator</h3>

    <!-- CHOICE SELECTORS FOR TEACHERS -->
    <form action="" method="" class="generator__options" v-on:submit.prevent>
      <!-- how many digits -->
      <fieldset class="form__fieldset">
        <legend></legend>
        <!-- <label for="noOfDigits">
          <p>Choose how many digits</p>
        </label> -->
        <select
          id="noOfDigits"
          v-model.number="noOfDigits"
          class="form__options--select"
        >
          <option value="" disabled>Choose how many digits</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </fieldset>

      <!-- regrouping vs no regrouping -->
      <fieldset class="form__fieldset">
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
        <!-- <label for="noOfEquations">
          <p>Choose how many problems</p>
        </label> -->
        <select
          id="noOfEquations"
          v-model.number="noOfEquations"
          class="form__options--select"
        >
          <option value="" disabled>Choose how many problems</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
        </select>
      </fieldset>
      <!-- BUTTON - generate worksheet: later on - should it be submit? -->
      <fieldset class="form__fieldset">
        <BaseButton :onClick="generateNumbers">generate worksheet</BaseButton>
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
export default {
  name: 'GeneratorAddition',
  props: {
    worksheetTitle: String
  },
  data() {
    return {
      numbers: [],
      noOfDigits: '',
      noOfEquations: '',
      regrouping: null,
      title: false
    }
  },
  methods: {
    getRandomNumber(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    createArrayOfDigits() {
      let nDigitArray = []
      // to make sure the first number in array != 0
      for (let i = 0; i < 1; i++) {
        let addDigit = this.getRandomNumber(1, 8)
        nDigitArray.push(addDigit)
      }
      // for 2nd and following numbers in array
      for (let i = 1; i < this.noOfDigits; i++) {
        let addDigit = this.getRandomNumber(0, 9)
        nDigitArray.push(addDigit)
      }
      return nDigitArray
    },
    // takes in an array and returns a number
    createSingleNumber(tempArr) {
      // let tempArr = this.createArrayOfDigits(this.noOfDigits)
      let singleNumber = 0
      for (let i = tempArr.length - 1; i >= 0; i--) {
        singleNumber += tempArr[i] * Math.pow(10, tempArr.length - 1 - i)
      }
      return singleNumber
    },
    // creates two arrays which will later be converted to numbers; with those two we assure noRegrouping
    generateEquationsArray() {
      let newEquationsArray = [
        this.createArrayOfDigits(),
        this.createArrayOfDigits()
      ]
      this.ensureDigitsDontSum10OrMore(0, newEquationsArray)

      if (!this.regrouping) {
        // i starts at 1 because at 0 it's always false
        // let firstChild = newEquationsArray[0]
        // let secondChild = newEquationsArray[1]
        for (let i = 1; i < this.noOfDigits; i++) {
          this.ensureDigitsDontSum10OrMore(i, newEquationsArray)
        }
      }
      return this.convertFromArraysToNumbers(newEquationsArray)
    },
    ensureDigitsDontSum10OrMore(digitPos, newEquationsArray) {
      if (
        newEquationsArray[0][digitPos] + newEquationsArray[1][digitPos] >=
        10
      ) {
        let remainder = 10 - newEquationsArray[0][digitPos]
        if (digitPos === 0) {
          newEquationsArray[1][digitPos] = this.getRandomNumber(
            1,
            remainder - 1
          )
        } else {
          newEquationsArray[1][digitPos] = this.getRandomNumber(
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
    generateNumbers() {
      this.title = true
      this.numbers = []
      for (let i = 0; i < this.noOfEquations; i++) {
        let newNumber = this.generateEquationsArray()
        this.numbers.push(newNumber)
      }
    }
  },
  computed: {
    getPreviewWorksheetTitle() {
      const withOrWithout = this.regrouping ? 'with' : 'without'
      const digits = this.noOfDigits === 1 ? 'digit' : 'digits'
      const createWorksheetTitle = () => {
        return this.noOfDigits
          ? `${this.noOfDigits.toString()}-${digits} ${
              this.worksheetTitle
            } ${withOrWithout} regrouping`
          : ''
      }
      console.log(createWorksheetTitle())
      return this.title ? createWorksheetTitle() : ''
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
  display: inline-flex;
}

.activity {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  justify-items: center;
  row-gap: 2vw;
}

.activity .singleProblem {
  width: 25%;
}

.chooseOptionsPanel {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
}
</style>
