<template>
  <div>
    <button @click="onClick" class="button">
      <slot>Button</slot>
    </button>
  </div>
</template>

<script setup>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
  // methods: {
  //   generateWorksheet() {
  //     this.$emit('generate-worksheet')
  //   }
  // }
}
</script>

<style scoped>
/* change class name when applying proper styling */
.button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
