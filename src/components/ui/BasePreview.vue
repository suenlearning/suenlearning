<template>
  <section>
    <h4>Preview</h4>
    <!-- <p v-show="title">{{ noOfDigits }}-digit addition</p> -->
    <h2 v-show="isTitle">{{ previewWorksheetTitle }}</h2>
    <slot></slot>
  </section>
</template>

<script setup>
export default {
  props: {
    previewWorksheetTitle: String,
    isTitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped></style>
