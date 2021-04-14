<template>
  <button
    @click="onClick"
    v-bind="$attrs"
    class="btn"
    :class="`btn--${classModifier}`"
  >
    <font-awesome-icon :icon="icon" class="icon" />
    <slot />
  </button>
</template>

<script setup>
export default {
  inheritAttrs: false,
  props: {
    onClick: {
      type: Function,
      required: true
    },
    classModifier: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>

<style scoped></style>
