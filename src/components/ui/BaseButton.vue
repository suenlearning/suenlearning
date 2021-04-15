<template>
  <button
    v-on="$listeners"
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
    classModifier: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 0.7rem;
  text-transform: uppercase;
  outline: none;
  color: white;
  /* 14px */
  font-size: 0.875rem;
  font-weight: 700;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  font-family: var(--fontMain);
}

.btn:disabled {
  background-color: #d8d8d8;
  cursor: default;
}

.btn--create {
  background-color: var(--colorDetails);
}

.btn--save {
  background-color: var(--colorFooter);
}

.icon {
  display: block;
  margin-right: 6px;
}
</style>
