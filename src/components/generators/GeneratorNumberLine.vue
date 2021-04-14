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
      <!-- first number in line range -->
      <fieldset class="form__fieldset">
        <legend class="form__fieldset--legend">Choose range</legend>
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
        <div class="form__options--radio custom">
          <input
            type="radio"
            id="custom"
            name="numberRange"
            :value="2"
            v-model="firstNumberRange"
          />
          <label for="custom" class="options__radio--label"
            >custom range:</label
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
        <legend class="form__fieldset--legend">Choose order</legend>
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
        <BaseSelect
          label="How many rows"
          :options="numberOfRowsOptions"
          v-model.number="numberOfRows"
        />
      </fieldset>
      <!-- how many numbers per line -->
      <fieldset class="form__fieldset">
        <BaseSelect
          label="How many numbers per row"
          :options="numberPerRowOptions"
          v-model.number="numberPerRow"
        />
      </fieldset>
      <fieldset class="form__fieldset form__fieldset--buttons">
        <BaseButton
          @click="generateActivity"
          icon="cogs"
          classModifier="generate"
          >Refresh</BaseButton
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
export default {
  name: 'GeneratorNumberLine',
  props: {
    worksheetTitle: String
  },
  data() {
    return {
      numberLines: [],
      numberOfRows: 4,
      numberOfRowsOptions: [3, 4, 5, 6, 7, 8, 9],
      numberPerRow: 10,
      numberPerRowOptions: [8, 9, 10],
      ascendingOrder: true,
      firstNumberRange: 0,
      optionalRange: { min: 0, max: 100 },
      title: false
    }
  },
  methods: {
    // GENERATE ACTIVITY
    generateActivity() {
      this.title = true
      this.numberLines = []
      for (let i = 0; i < this.numberOfRows; i++) {
        const newSingleLine = this.createSingleLine()
        this.numberLines.push(newSingleLine)
      }
    },
    createSingleLine() {
      let newSingleLine = []
      const elementsToHide = this.createArrayOfIndexesToHide()
      if (this.ascendingOrder) {
        const n = this.setNumbersRangeAscending()
        for (let i = 0; i < this.numberPerRow; i++) {
          newSingleLine.push(n + i)
        }
      } else {
        const n = this.setNumbersRangeDescending()
        for (let i = 0; i < this.numberPerRow; i++) {
          newSingleLine.push(n - i)
        }
      }
      return this.changeSomeNumbersToZero(elementsToHide, newSingleLine)
    },
    // numbers to hide - these are the numbers the kids will have to fill in
    createArrayOfIndexesToHide() {
      const newArrayOfIndexes = []
      while (newArrayOfIndexes.length < this.numberPerRow - 3) {
        const newIndex = Math.floor(Math.random() * this.numberPerRow)
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
          (y = parseInt(this.optionalRange.max) - parseInt(this.numberPerRow))
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
        ;(x = parseInt(this.optionalRange.min) + parseInt(this.numberPerRow)),
          (y = parseInt(this.optionalRange.max))
      }
      return this.getRandomNumber(x, y)
    },
    getRandomNumber(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  },
  computed: {
    getPreviewWorksheetTitle() {
      return this.title ? this.worksheetTitle : ''
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

.custom {
  display: inline-flex;
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
