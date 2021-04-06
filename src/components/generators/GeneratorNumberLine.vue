<template>
  <div class="generator">
    <h3 class="generator__title">{{ worksheetTitle }} worksheet generator</h3>

    <!-- CHOICE SELECTORS FOR TEACHERS -->
    <form action="" method="" class="generator__options" v-on:submit.prevent>
      <!-- first number in line range -->
      <fieldset class="form__fieldset">
        <div class="form__options--radio">
          <input type="radio" id="fst-half" :value="0" v-model="fstNoRange" />
          <label for="fst-half" class="options__radio--label"
            >from 10 to 50</label
          >
        </div>
        <div class="form__options--radio">
          <input type="radio" id="snd-half" :value="1" v-model="fstNoRange" />
          <label for="snd-half" class="options__radio--label"
            >from 50 to 100</label
          >
        </div>
        <div class="form__options--radio">
          <input type="radio" id="custom" :value="2" v-model="fstNoRange" />
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
        <!-- <label for="noOfLines">
        Choose how many problems
        </label> -->
        <select
          id="noOfLines"
          v-model.number="noOfLines"
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
          id="noPerLine"
          v-model.number="noPerLine"
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
      <div>
        <p v-show="title">Number Line</p>
      </div>
      <div v-for="(numberLine, index) in numberLines" :key="index">
        <ul class="numberLine">
          <li
            class="line"
            v-for="(line, index) in numberLine"
            :key="index"
            :class="line === 0 ? 'hiddenElement' : ''"
          >
            {{ line }}
          </li>
        </ul>
      </div>
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
      noOfLines: '',
      noPerLine: '',
      ascendingOrder: null,
      fstNoRange: 0,
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
      if (this.fstNoRange === 0) {
        ;(x = 10), (y = 40)
      } else if (this.fstNoRange === 1) {
        ;(x = 50), (y = 90)
      } else {
        ;(x = parseInt(this.optionalRange.min)),
          (y = parseInt(this.optionalRange.max) - 10)
      }
      return this.getRandomNumber(x, y)
    },
    setNumbersRangeDescending: function() {
      let x, y
      if (this.fstNoRange === 0) {
        ;(x = 20), (y = 50)
      } else if (this.fstNoRange === 1) {
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
        for (let i = 0; i < this.noPerLine; i++) {
          newSingleLine.push(n + i)
        }
      } else {
        let n = this.setNumbersRangeDescending()
        for (let i = 0; i < this.noPerLine; i++) {
          newSingleLine.push(n - i)
        }
      }
      return this.changeSomeNumbersToZero(elementsToHide, newSingleLine)
    },
    // numbers to hide - these are the numbers the kids will have to fill in
    createArrayOfIndexesToHide: function() {
      let newArrayOfIndexes = []
      while (newArrayOfIndexes.length < this.noPerLine - 3) {
        let newIndex = Math.floor(Math.random() * this.noPerLine)
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
      for (let i = 0; i < this.noOfLines; i++) {
        let newSingleLine = this.createSingleLine()
        this.numberLines.push(newSingleLine)
      }
    }
  }
}
</script>

<style scoped>
.chooseOptionsPanel {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
}
.numberLine {
  display: flex;
  justify-content: space-evenly;
}
.line {
  list-style-type: none;
}
.hiddenElement {
  visibility: hidden;
}
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
</style>
