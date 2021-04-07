<template>
  <button
    @click="onClick"
    class="btn"
    :class="`btn--${type}`"
    :disabled="isDisabled"
  >
    <font-awesome-icon :icon="icon" class="icon" />
    <slot>Button</slot>
  </button>
</template>

<script setup>
// import { icons } from '@/assets/icons'
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    },
    type: {
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  computed: {
    buttonClass() {
      return `btn--${this.additionalClass}`
      // return {
      //   btn: true,
      //   'btn--generate': this.additionalClass === 'generate' ? true : false,
      //   'btn--save': this.additionalClass === 'save' ? true : false,
      //   'btn--disabled': this.isDisabled ? true : false
      // }
      // return this.isDisabled ? 'btn--disabled' : `btn--${this.additionalClass}`
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
