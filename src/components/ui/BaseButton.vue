<template>
  <router-link
    v-if="tag === 'router'"
    :to="{ name: to }"
    class="btn"
    :class="`btn--${classModifier}`"
    ><font-awesome-icon :icon="icon" class="icon"/><slot
  /></router-link>
  <!-- button - icon left side -->
  <button
    v-else-if="tag === 'button' && iconSide === 'left'"
    v-on="$listeners"
    v-bind="$attrs"
    class="btn"
    :class="`btn--${classModifier}`"
  >
    <font-awesome-icon :icon="icon" class="icon" />
    <slot />
  </button>
  <!-- button - icon right side -->
  <button
    v-else-if="tag === 'button' && iconSide === 'right'"
    v-on="$listeners"
    v-bind="$attrs"
    class="btn"
    :class="`btn--${classModifier}`"
  >
    <slot /><font-awesome-icon :icon="icon" class="icon" />
  </button>
</template>

<script setup>
const availableTags = ['button', 'a', 'router']
export default {
  inheritAttrs: false,
  props: {
    classModifier: {
      type: String
    },
    icon: {
      type: String
    },
    iconSide: {
      type: String,
      default: 'left'
    },
    tag: {
      type: String,
      default: 'button',
      validator: value => availableTags.includes(value)
    },
    to: {
      type: String,
      required: false,
      default: 'home'
    }
    // to: {
    //   type: Object,
    //   required: false,
    //   default() {
    //     return { name: 'home' }
    //   }
    // }
  }
}
</script>

<style scoped>
.btn {
  display: flex;
  gap: 6px;
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

.btn--save,
.btn--next {
  background-color: var(--colorFooter);
}

.btn--link {
  background-color: var(--colorDetails);
  text-decoration: none;
}
</style>
