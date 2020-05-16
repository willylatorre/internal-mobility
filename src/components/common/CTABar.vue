<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div
    class="flex items-center justify-between fixed bottom-0 left-0 bg-white w-full zindex-1 h-cta p-4 shadow-md border-t border-borderGrey"
  >
    <div class="text-darkGrey">
      <slot name="left" />
    </div>

    <el-button
      data-test="cta-button"
      type="primary"
      outline
      @click="$emit('next')"
      :loading="loading"
      :disabled="disabled"
    >
      <slot name="button" />
    </el-button>
  </div>
</template>
