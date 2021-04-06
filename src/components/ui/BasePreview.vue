<template>
  <section class="preview">
    <h4 class="preview__word">Preview</h4>
    <!-- <p v-show="title">{{ noOfDigits }}-digit addition</p> -->
    <div>
      <h2 v-show="isTitle" class="activity__title">
        {{ previewWorksheetTitle }}
      </h2>
      <slot></slot>
    </div>
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

<style scoped>
.preview {
  padding: 0.5vw 0.7vw 4vw;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
}
.preview__word {
  font-weight: 300;
  font-size: 16px;
}
.activity__title {
  /* 18px */
  font-size: 1.125rem;
  margin: 12px 0 24px;
  text-align: center;
}
</style>
