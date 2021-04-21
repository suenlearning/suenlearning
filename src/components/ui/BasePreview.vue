<template>
  <section class="preview">
    <h4 class="preview__word">Preview</h4>
    <PreviewTabs :selectedTab="selectedTab" v-on:click="updateTab" />
    <div v-show="selectedTab === 'online'">
      <h2 v-show="isTitle" class="activity__title">
        {{ previewWorksheetTitle }}
      </h2>
      <slot></slot>
    </div>
    <div v-show="selectedTab === 'pdf'">
      <!-- <h2 v-show="isTitle" class="activity__title">
        {{ previewWorksheetTitle }}
      </h2> -->
      <p>we're working on it</p>
      <!-- <slot></slot> -->
    </div>
  </section>
</template>

<script setup>
import PreviewTabs from '@/components/PreviewTabs.vue'
export default {
  components: { PreviewTabs },
  props: {
    previewWorksheetTitle: String,
    isTitle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedTab: 'online'
    }
  },
  methods: {
    updateTab(tab) {
      this.selectedTab = tab
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
  /* 18px */
  font-size: 1.125rem;
  margin-bottom: 12px;
}
.activity__title {
  /* 18px */
  font-size: 1.125rem;
  margin: 12px 0 24px;
  text-align: center;
}
.activity__title::first-letter {
  text-transform: uppercase;
}
</style>
