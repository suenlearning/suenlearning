<template>
  <button @click="onClick" class="button">
    <slot>Button</slot>
  </button>
</template>

<script setup>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
/* change class name when applying proper styling */
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 0.7rem;
  text-transform: uppercase;
  background-color: var(--colorDetails);
  outline: none;
  color: white;
  /* 14px */
  font-size: 0.875rem;
  font-weight: 700;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  font-family: var(--fontMain);
}
</style>
