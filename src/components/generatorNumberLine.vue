<template>
  <div>
    <p>{{ msg }}</p>
    <h3>this will be number line files generator</h3>

    <!-- CHOICE SELECTORS FOR TEACHERS -->
    <form class="chooseOptionsPanel">
      <!-- first number in line range -->
      <div>
        <p>
          <input type="radio" id="fstHalf" :value="0" v-model="fstNoRange" />
          <label for="fstHalf">from 10 to 50</label>
        </p>
        <p>
          <input type="radio" id="sndHalf" :value="1" v-model="fstNoRange" />
          <label for="sndHalf">from 50 to 100</label>
        </p>
        <p>
          <input type="radio" id="custom" :value="2" v-model="fstNoRange" />
          <label for="custom">custom value:</label>
          <input type="text" placeholder="min" v-model="optionalRange.min" />
          <input type="text" placeholder="max" v-model="optionalRange.max" />
        </p>
      </div>
      <!-- ascending vs descending -->
      <div>
        <p>
          <input
            type="radio"
            id="ascOrder"
            name="ascendingOrder"
            :value="true"
            v-model="ascendingOrder"
          />
          <label for="ascOrder">ascending</label>
        </p>
        <p>
          <input
            type="radio"
            id="descOrder"
            name="ascendingOrder"
            :value="false"
            v-model="ascendingOrder"
          />
          <label for="descOrder">descending</label>
        </p>
      </div>
      <!-- how many lines -->
      <div>
        <label for="noOfLines">
          <p>Choose how many problems</p>
        </label>
        <select id="noOfLines" v-model.number="noOfLines">
          <option>5</option>
          <option>7</option>
          <option>9</option>
        </select>
      </div>
      <!-- how many numbers per line -->
      <div>
        <label for="noPerLine">
          <p>Choose how many numbers per line</p>
        </label>
        <select id="noPerLine" v-model.number="noPerLine">
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
    </form>

    <!-- BUTTON -->
    <div class="generateWorksheetButton">
      <button @click.prevent="generateWorksheet">generate</button>
    </div>

    <!-- VISIBLE RESULTS -->
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
  </div>
</template>
<script>
export default {
  name: 'generatorNumberLine',
  props: {
    msg: String
  },
  data() {
    return {
      numberLines: [],
      noOfLines: null,
      noPerLine: null,
      ascendingOrder: null,
      fstNoRange: 0,
      optionalRange: { min: 0, max: 0 },
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
</style>
