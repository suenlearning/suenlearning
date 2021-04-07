<template>
  <button @click="onClick" :class="classObject" :disabled="isDisabled">
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
    additionalClass: {
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
  data() {
    return {
      // icons,
      classObject: {
        btn: true,
        'btn--generate': this.additionalClass === 'generate' ? true : false,
        'btn--save': this.additionalClass === 'save' ? true : false,
        'btn--disabled': this.isDisabled
      }
    }
  },
  method: {
    updateClass() {
      return (this.classObject[this.additionalClass] = true)
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

.btn--generate {
  background-color: var(--colorDetails);
}

.btn--save {
  background-color: var(--colorFooter);
}

.btn--disabled {
  background-color: var(--colorBorder);
}

.icon {
  display: block;
  margin-right: 6px;
}
</style>
