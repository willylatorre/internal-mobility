<template>
  <div
    class="fw-wrapper w-full h-full"
    :class="{
      'fw-wrapper--expanded': expanded
    }"
  >
    <div
      class="wrapper"
      :class="{
        'wrapper--compact': compact,
        'wrapper--no-padding': noPadding,
        'wrapper--no-top': noTop
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    },
    noTop: {
      type: Boolean,
      default: false
    }
  }
}
</script>

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

  &--no-top {
    @apply pt-0;
  }

  &--no-padding {
    @apply p-0;
  }
}

.fw-wrapper + .fw-wrapper:not(.fw-wrapper--expanded) > .wrapper {
  @apply pt-0;
}
</style>
