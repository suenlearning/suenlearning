<template>
  <!-- in html2pdf the general div has a class="vue-html2pdf" but she uses SCSS & the general class is only to contain other classes, it doesn't provide any specific styling so I don't use it -->
  <div>
    <section class="layout-container"></section>

    <!-- Vue provides a transition wrapper component, allowing you to add entering/leaving transitions for any element or component in the following contexts => https://vuejs.org/v2/guide/transitions.html <= -->
    <transition name="">
      <section class="pdf-preview"></section>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.layout-container {
}
.pdf-preview {
}
</style>
