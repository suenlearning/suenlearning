<template>
  <main class="main__view">
    <h2 class="activity__title">{{ activityTitle }}</h2>
    <div v-if="currentStep === 1" class="step__container step__studentInfo">
      <BaseInput
        v-model.number="student.name"
        label="Your name"
        :focus="true"
      /><BaseButton
        classModifier="next"
        icon="angle-double-right"
        iconSide="right"
        @click="nextStep"
        :disabled="!student.name"
        >Start</BaseButton
      >
    </div>
    <div v-if="currentStep === 2" class="step__container step__mainActivity">
      <div>&#60;&#60; progress bar &#62;&#62;</div>
      <div class="singleEquation">
        <ul class="singleEquation__number addend addend--first">
          <li
            v-for="(number, index) in singleProblem.first.toString()"
            :key="index"
          >
            {{ number }}
          </li>
        </ul>
        <p class="operationSign">+</p>
        <ul class="singleEquation__number addend addend--second">
          <li
            v-for="(number, index) in singleProblem.second.toString()"
            :key="index"
          >
            {{ number }}
          </li>
        </ul>
        <!-- a unique key required so the input rerenders when singleProblem changes -->
        <ul class="singleEquation__number result">
          <li
            v-for="(d, i) in activity.numberOfDigits"
            :key="`${singleProblem.id}-${i}`"
          >
            <BaseInput
              v-model.number="singleProblem.answer[i]"
              type="number"
              :reference="i"
              :focus="activity.numberOfDigits - 1 === i ? true : false"
            />
          </li>
        </ul>
      </div>
      <div class="buttons">
        <BaseButton
          classModifier="next"
          icon="angle-double-left"
          @click="previousProblem"
          :disabled="currentProblem === 0"
          >Previous</BaseButton
        >
        <BaseButton
          v-if="currentProblem !== activity.numbers.length - 1"
          classModifier="next"
          icon="angle-double-right"
          iconSide="right"
          @click="nextProblem"
          >Next</BaseButton
        >
        <BaseButton
          v-else-if="currentProblem === activity.numbers.length - 1"
          classModifier="create"
          icon="check"
          @click="fakeSubmit"
          >Submit</BaseButton
        >
      </div>
    </div>
    <div v-if="currentStep === 3" class="step__container step__finalResults">
      <h3>Name: {{ student.name }}</h3>
      <ul class="finalResults">
        <li
          v-for="(n, i) in activity.numbers"
          :key="`${n.id}-${i}`"
          class="singleEquation"
        >
          <p class="singleEquation__number addend addend--first">
            {{ n.first }}
          </p>
          <p class="operationSign">+</p>
          <p class="singleEquation__number addend addend--second">
            {{ n.second }}
          </p>
          <p class="singleEquation__number result">
            {{ n.result }}
          </p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 2,
      currentProblem: 0,
      student: { name: null },
      activity: {
        type: 'addition',
        numberOfDigits: 4,
        regrouping: false,
        numbers: [
          {
            id: 0,
            first: 2345,
            second: 1203,
            result: 3548,
            answer: [null, null, null, null]
          },
          {
            id: 1,
            first: 1122,
            second: 6633,
            result: 7755,
            answer: [null, null, null, null]
          },
          {
            id: 2,
            first: 3829,
            second: 5140,
            result: 8969,
            answer: [null, null, null, null]
          },
          {
            id: 3,
            first: 2345,
            second: 1203,
            result: 3548,
            answer: [null, null, null, null]
          },
          {
            id: 4,
            first: 1122,
            second: 6633,
            result: 7755,
            answer: [null, null, null, null]
          },
          {
            id: 5,
            first: 3829,
            second: 5140,
            result: 8969,
            answer: [null, null, null, null]
          },
          {
            id: 6,
            first: 2345,
            second: 1203,
            result: 3548,
            answer: [null, null, null, null]
          },
          {
            id: 7,
            first: 1122,
            second: 6633,
            result: 7755,
            answer: [null, null, null, null]
          }
          // {
          //   id: 8,
          //   first: 3829,
          //   second: 5140,
          //   result: 8969,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 9,
          //   first: 2345,
          //   second: 1203,
          //   result: 3548,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 10,
          //   first: 1122,
          //   second: 6633,
          //   result: 7755,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 11,
          //   first: 3829,
          //   second: 5140,
          //   result: 8969,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 12,
          //   first: 2345,
          //   second: 1203,
          //   result: 3548,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 13,
          //   first: 1122,
          //   second: 6633,
          //   result: 7755,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 14,
          //   first: 3829,
          //   second: 5140,
          //   result: 8969,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 15,
          //   first: 2345,
          //   second: 1203,
          //   result: 3548,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 16,
          //   first: 1122,
          //   second: 6633,
          //   result: 7755,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 17,
          //   first: 3829,
          //   second: 5140,
          //   result: 8969,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 18,
          //   first: 1122,
          //   second: 6633,
          //   result: 7755,
          //   answer: [null, null, null, null]
          // },
          // {
          //   id: 19,
          //   first: 3829,
          //   second: 5140,
          //   result: 8969,
          //   answer: [null, null, null, null]
          // }
        ]
      }
    }
  },
  methods: {
    nextStep() {
      return this.currentStep++
    },
    previousProblem() {
      if (this.currentProblem !== 0) return (this.currentProblem -= 1)
    },
    nextProblem() {
      if (this.currentProblem !== this.activity.numbers.length - 1)
        return (this.currentProblem += 1)
    },
    fakeSubmit() {
      console.log(this.activity.numbers)
      this.currentStep = 3
    }
  },
  computed: {
    singleProblem() {
      return this.activity.numbers[this.currentProblem]
    },
    activityTitle() {
      const withOrWithout = this.activity.regrouping ? 'with' : 'without'
      const digitsWord = this.activity.numberOfDigits === 1 ? 'digit' : 'digits'
      return `${this.activity.numberOfDigits.toString()}-${digitsWord} ${
        this.activity.type
      }
           ${withOrWithout} regrouping`
    }
  }
}
</script>

<style scoped>
.main__view {
  margin-top: 80px;
  padding: 0 24px;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
}

.activity__title {
  padding: 12px 0;
  /* 22px */
  font-size: 1.375rem;
  text-align: center;
}

.step__container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

/* step 1 - name */

.step__studentInfo .form__options--container {
  width: 100%;
}

/* deep selector */
.step__studentInfo >>> .form__options--input {
  display: block;
  width: 100%;
}

/* step 2 - main activity */

.step__mainActivity .singleEquation {
  font-size: 1.375rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'emptySpace1 firstAddend'
    'operationSign secondAddend'
    'emptySpace2 result';
  align-items: center;
  row-gap: 2vw;
  border: 1px solid #d8d8d8;
  padding: 36px 24px;
  border-radius: 12px 24px 12px 24px;
}

.step__mainActivity .addend {
  font-weight: 500;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2vw;
  justify-items: center;
}
.step__mainActivity .addend--first {
  grid-area: firstAddend;
}

.step__mainActivity .addend--second {
  grid-area: secondAddend;
}

.step__mainActivity .operationSign {
  grid-area: operationSign;
  padding: 2px 2px 4px;
}

.step__mainActivity .result {
  grid-area: result;
  padding: 4vw 0;
  border-top: 1px solid var(--colorTextMain);
}

.step__mainActivity .singleEquation__number {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2vw;
  justify-items: center;
}

.step__mainActivity .result >>> .form__options--input {
  display: block;
  width: 10vw;
  padding: 0.4em 0.2em;
  min-width: 46px;
  box-shadow: 0px 0px 2px 1px #928b77;
  font-size: 1.375rem;
  color: var(--colorTextMain);
  text-align: center;
}

.step__mainActivity .result >>> .form__options--input:focus {
  outline: none;
  /* border: 1px solid var(--colorFooter); */
  box-shadow: 0 0 3px 1px var(--colorFooter);
}

.buttons {
  width: 100%;
}

/* step 3 - results */

.step__finalResults .finalResults {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  justify-items: center;
  column-gap: 2vw;
  row-gap: 6vw;
  border: 1px solid #d8d8d8;
  padding: 12px 6px;
  border-radius: 12px;
}

.step__finalResults .singleEquation {
  font-size: 1rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'emptySpace1 firstAddend'
    'operationSign secondAddend'
    'emptySpace2 result';
  align-items: center;
  row-gap: 1vw;
}

.step__finalResults .addend {
  font-weight: 500;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2vw;
  justify-items: center; */
}
.step__finalResults .addend--first {
  grid-area: firstAddend;
}

.step__finalResults .addend--second {
  grid-area: secondAddend;
}

.step__finalResults .operationSign {
  grid-area: operationSign;
  padding: 2px 2px 4px;
}

.step__finalResults .result {
  grid-area: result;
  /* padding: 4vw 0; */
  padding-top: 1vw;
  border-top: 1px solid var(--colorTextMain);
}

/* .step__finalResults .singleEquation__number {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2vw;
  justify-items: center;
} */
</style>
