<template>
  <div>
    <label v-if="label" class="form__options--label">{{ label }}</label>
    <select
      :value="value"
      @change="updateValue"
      v-bind="$attrs"
      class="form__options--select"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === value"
        >{{ option }}</option
      >
    </select>
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
    options: {
      type: Array,
      required: true
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
.form__options--select {
  display: block;
  /* 14px */
  font-size: 0.875rem;
  font-family: var(--fontMain);
  line-height: 1.3;
  width: 50%;
  max-width: 220px;
  padding: 0.6em 0.4em;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 0px 1px var(--colorFooter-shadow);
  background-image: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
}

.form__options--select:focus {
  outline: none;
  border: 1px solid var(--colorFooter);
}
</style>
