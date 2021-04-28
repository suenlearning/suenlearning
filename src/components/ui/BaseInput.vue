<template>
  <div class="form__options--container">
    <label v-if="label" class="form__options--label">{{ label }}</label>
    <input
      :type="type"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-focus="focus"
      class="form__options--input"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    // reference: {
    //   type: String,
    //   default: ''
    // },
    focus: {
      type: Boolean,
      default: false
    }
  },
  // data() {
  //   return {
  //     reference: ''
  //   }
  // },

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  },
  directives: {
    focus: {
      // TODO: when looping v-for through numbers/problems add focus as a string and bind to that string
      // https://jsfiddle.net/simplesmiler/zak1t6o8/
      // https://github.com/simplesmiler/vue-focus/tree/master/dist
      inserted: function(el, binding) {
        // binding.value ? el.focus() : el.blur()
        if (binding.value) el.focus()
      }
      // update: function(el, binding) {
      //   // binding.value ? el.focus() : el.blur()
      //   if (binding.value) el.focus()
      // }
    }
  }
}
</script>

<style scoped>
.form__options--input {
  display: inline-block;
  /* 14px */
  font-size: 0.875rem;
  font-family: var(--fontMain);
  line-height: 1.3;
  max-width: 50px;
  padding: 0.6em 0.4em;
  margin-right: 1vw;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 0px 1px var(--colorFooter-shadow);
  background-image: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
}

.form__options--input:focus {
  outline: none;
  /* border: 1px solid var(--colorFooter); */
  box-shadow: 0 0 3px 1px var(--colorFooter);
}

.form__options--input::placeholder {
  color: var(--colorMain-shadow);
}

/* Remove arrows */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
