<template>
  <div>
    <button @click="generateWorksheet" class="generateWrkstBtn">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
export default {
  methods: {
    generateWorksheet() {
      this.$emit('generate-worksheet')
    }
  }
}
</script>

<style scoped>
/* change class name when applying proper styling */
.generateWrkstBtn {
  display: flex;
  justify-content: center;
}
</style>
