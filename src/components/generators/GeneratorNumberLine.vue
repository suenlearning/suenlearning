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
            :value="2"
            v-model="firstNumberRange"
          />
          <label for="custom" class="options__radio--label"
            >custom value:</label
          >
          <input
            type="text"
            placeholder="min"
            v-model="optionalRange.min"
            class="form__options--input"
          />
          <input
            type="text"
            placeholder="max"
            v-model="optionalRange.max"
            class="form__options--input"
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
        <!-- <label for="numberOfLines">
        Choose how many problems
        </label> -->
        <select
          id="numberOfLines"
          v-model.number="numberOfLines"
          class="form__options--select"
        >
          <option value="" disabled>Choose how many problems</option>
          <option>5</option>
          <option>7</option>
          <option>9</option>
        </select>
      </fieldset>
      <!-- how many numbers per line -->
      <fieldset class="form__fieldset">
        <select
          id="numberPerLine"
          v-model.number="numberPerLine"
          class="form__options--select"
        >
          <option value="" disabled>Choose how many numbers per line</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </fieldset>
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
      <!-- <div v-for="(numberLine, index) in numberLines" :key="index"> -->
      <ul class="activity">
        <li v-for="(numberLine, index) in numberLines" :key="index">
          <ul class="numberLine">
            <li class="line" v-for="(line, index) in numberLine" :key="index">
              <p :class="line === 0 ? 'hiddenElement' : ''">{{ line }}</p>
            </li>
          </ul>
        </li>
      </ul>

      <!-- </div> -->
    </BasePreview>
  </div>
</template>
<script>
export default {
  name: 'GeneratorNumberLine',
  props: {
    worksheetTitle: String
  },
  data() {
    return {
      numberLines: [],
      numberOfLines: '',
      numberPerLine: '',
      ascendingOrder: null,
      firstNumberRange: 0,
      optionalRange: { min: null, max: null },
      title: false
    }
  },
  methods: {
    getRandomNumber: function(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    setNumbersRangeAscending: function() {
      let x, y
      if (this.firstNumberRange === 0) {
        ;(x = 10), (y = 40)
      } else if (this.firstNumberRange === 1) {
        ;(x = 50), (y = 90)
      } else {
        ;(x = parseInt(this.optionalRange.min)),
          (y = parseInt(this.optionalRange.max) - 10)
      }
      return this.getRandomNumber(x, y)
    },
    setNumbersRangeDescending: function() {
      let x, y
      if (this.firstNumberRange === 0) {
        ;(x = 20), (y = 50)
      } else if (this.firstNumberRange === 1) {
        ;(x = 60), (y = 100)
      } else {
        ;(x = parseInt(this.optionalRange.min) + 10),
          (y = parseInt(this.optionalRange.max))
      }
      return this.getRandomNumber(x, y)
    },
    createSingleLine: function() {
      let newSingleLine = []
      let elementsToHide = this.createArrayOfIndexesToHide()
      if (this.ascendingOrder) {
        let n = this.setNumbersRangeAscending()
        for (let i = 0; i < this.numberPerLine; i++) {
          newSingleLine.push(n + i)
        }
      } else {
        let n = this.setNumbersRangeDescending()
        for (let i = 0; i < this.numberPerLine; i++) {
          newSingleLine.push(n - i)
        }
      }
      return this.changeSomeNumbersToZero(elementsToHide, newSingleLine)
    },
    // numbers to hide - these are the numbers the kids will have to fill in
    createArrayOfIndexesToHide: function() {
      let newArrayOfIndexes = []
      while (newArrayOfIndexes.length < this.numberPerLine - 3) {
        let newIndex = Math.floor(Math.random() * this.numberPerLine)
        if (newArrayOfIndexes.indexOf(newIndex) === -1) {
          newArrayOfIndexes.push(newIndex)
        }
      }
      return newArrayOfIndexes
    },
    changeSomeNumbersToZero: function(arrOfInd, singleLine) {
      for (let i = 0; i < arrOfInd.length; i++) {
        let num = arrOfInd[i]
        singleLine[num] = 0
      }
      return singleLine
    },
    generateWorksheet: function() {
      this.title = true
      this.numberLines = []
      for (let i = 0; i < this.numberOfLines; i++) {
        let newSingleLine = this.createSingleLine()
        this.numberLines.push(newSingleLine)
      }
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

/* preview styling */

.generator__preview {
  grid-area: preview;
}

.activity {
  display: grid;
  gap: 24px;
  padding: 0 16px;
}

.numberLine {
  /* display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  gap: 6px;
  justify-items: center; */
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}
.line {
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
.hiddenElement {
  visibility: hidden;
}
</style>
