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
// import { icons } from '@/assets/icons'
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
    // isDisabled: {
    //   type: Boolean,
    //   default: false
    // },
    icon: {
      type: String
    }
  }
}
</script>

<style scoped>
/* change class name when applying proper styling */
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

.btn--generate {
  background-color: var(--colorDetails);
}

.btn--save {
  background-color: var(--colorFooter);
}

/* .btn--disabled {
  background-color: var(--colorBorder);
} */

.icon {
  display: block;
  margin-right: 6px;
}
</style>
