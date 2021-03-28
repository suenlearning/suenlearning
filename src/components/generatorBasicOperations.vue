<template>
  <div class="main-content">
    <h3 class="title-intro">{{ wrkstTitle }} worksheet generator</h3>

    <!-- CHOICE SELECTORS FOR TEACHERS -->
    <form action="" method="" class="options-panel" v-on:submit.prevent>
      <!-- how many digits -->
      <div>
        <label for="noOfDigits">
          <p>Choose how many digits</p>
        </label>
        <select id="noOfDigits" v-model.number="noOfDigits">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <!-- regrouping vs no regrouping -->
      <div>
        <p>
          <input
            type="radio"
            id="noRegroup"
            :value="false"
            name="regrouping"
            v-model="regrouping"
          />
          <label for="noRegrouping">no regrouping</label>
        </p>
        <p>
          <input
            type="radio"
            id="regroup"
            :value="true"
            name="regrouping"
            v-model="regrouping"
          />
          <label for="regrouping">regrouping</label>
        </p>
      </div>
      <!-- how many problems -->
      <div>
        <label for="noOfEquations">
          <p>Choose how many problems</p>
        </label>
        <select id="noOfEquations" v-model.number="noOfEquations">
          <option>4</option>
          <option>8</option>
          <option>12</option>
          <option>16</option>
          <option>20</option>
        </select>
      </div>
      <!-- BUTTON - generate worksheet: later on - should it be submit? -->
      <BaseButton @generate-worksheet="generateNumbers">
        generate worksheet</BaseButton
      >
      <BaseButton>save pdf</BaseButton>
      <div class="generateWorksheetButton">
        <button @click.prevent="generateNumbers">generate numbers</button>
      </div>
    </form>

    <!-- button PRINT -->
    <!-- <section class="print-button">
      <div class="generateWorksheetButton">
        <button @click="saveFile">save file</button>
      </div>
    </section> -->

    <!-- VISIBLE RESULTS -->
    <BasePreview preview-document>
      <div class="workspace">
        <div
          class="single-problem"
          v-for="number in numbers"
          :key="number.index"
        >
          <p class="fstAddend">{{ number.fstAddend }}</p>
          <span class="opSign">+</span>
          <p class="sndAddend">{{ number.sndAddend }}</p>
        </div>
      </div>
    </BasePreview>
  </div>
</template>

<script>
// import jsPDF from 'jspdf'
export default {
  props: {
    wrkstTitle: String
  },
  // I don't like this name here, it should probably be moved to data
  name: 'generatorBasicOperations',
  data() {
    return {
      numbers: [],
      noOfDigits: null,
      noOfEquations: null,
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
      return {
        fstAddend: this.createSingleNumber(newEquationsArray[0]),
        sndAddend: this.createSingleNumber(newEquationsArray[1])
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
  }
}
</script>

<style scoped>
/* choose a different, better name - I did it fast to remove the main tag */
.main-content {
  display: grid;
  width: inherit;
  grid-template-columns: 1fr 34%;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    'intro intro'
    'options preview';
}

.title-intro {
  grid-area: intro;
}

.options-panel {
  grid-area: options;
}

.preview-document {
  grid-area: preview;
}

.single-problem {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'empty fstAddend'
    'opSign sndAddend';
  align-items: center;
}

/* .forPrint {
  color: red;
} */

.fstAddend {
  grid-area: fstAddend;
}

.sndAddend {
  grid-area: sndAddend;
  border-bottom: 1px solid black;
}

.opSign {
  grid-area: opSign;
}

.workspace {
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  text-align: center;
  justify-content: center;
}

.workspace > div {
  width: 25%;
}

.chooseOptionsPanel {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
}

/* change button classes names - either one name or two short names to combine */
.generateWorksheetButton {
  display: flex;
  justify-content: center;
}
</style>
