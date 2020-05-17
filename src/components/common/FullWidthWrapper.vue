<script>
export default {
  props: {
    compact: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="fw-wrapper w-full h-full">
    <div
      class="wrapper"
      :class="{
        'wrapper--compact': compact
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 100%;
  padding: 40px 20px;

  @apply max-w-full mx-auto my-0 w-full h-full;

  @media (min-width: 1024px) {
    max-width: 1280px;
    padding: 64px 80px;
  }

  &--compact {
    @apply py-0;
  }
}
</style>
