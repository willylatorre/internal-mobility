<template functional>
  <section class="mb-4 last:mb-0">
    <h2 class="text-darkGrey text-xl lg:text-2xl">
      <slot name="title" />
    </h2>

    <p class="text-grey text-xs mb-2">
      <slot name="hint" />
    </p>

    <slot />
  </section>
</template>
