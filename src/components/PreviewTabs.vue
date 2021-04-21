<template>
  <ul class="preview-tabs">
    <li
      class="tab"
      :class="{ 'tab--selected': selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="updateTab(tab)"
    >
      {{ tab }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    selectedTab: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tabs: ['online', 'pdf']
    }
  },
  methods: {
    updateTab(tab) {
      this.$emit('click', tab)
    }
  }
}
</script>
<style scoped>
.preview-tabs {
  display: inline-flex;
}
.tab {
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
}

.tab--selected {
  background-color: var(--colorDetails);
}
</style>
