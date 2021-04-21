<template>
  <ul class="preview-tabs">
    <li
      class="tab"
      :class="{ 'tab--selected': selectedTab === tab.tab }"
      v-for="tab in tabs"
      :key="tab.tab"
      @click="updateTab(tab.tab)"
    >
      <font-awesome-icon :icon="tab.icon" class="icon" />
      {{ tab.tab }}
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
      tabs: [
        { tab: 'online', icon: 'wifi' },
        { tab: 'pdf', icon: 'file-pdf' }
      ]
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
  display: flex;
  margin-top: 6px;
  box-shadow: 0px -1px 0px 0px #d8d8d8 inset;
}
.tab {
  cursor: pointer;
  padding: 6px 12px;
  border-bottom: 1px solid #d8d8d8;
  background-color: #e8e8e8;
  font-size: 14px;
  border-radius: 10px 10px 0 0;
}

.tab--selected {
  background-color: white;
  border: 1px solid #d8d8d8;
  border-bottom: transparent;
  font-weight: 500;
}

.icon {
  display: inline-block;
  margin-right: 2px;
}
</style>
