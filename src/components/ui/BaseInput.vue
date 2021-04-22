<template>
  <div class="form__options--container">
    <label v-if="label" class="form__options--label">{{ label }}</label>
    <input
      type="text"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
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
    value: [String, Number]
    // ref: {
    //   type: String,
    //   default: ''
    // }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
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
  border: 1px solid var(--colorFooter);
}

.form__options--input::placeholder {
  color: var(--colorMain-shadow);
}
</style>
