<template>
  <div>
    <button @click="generateWorksheet"><slot></slot></button>
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

<style scoped></style>
