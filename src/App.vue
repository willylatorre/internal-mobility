<script>
import { defineComponent } from '@vue/composition-api'
import { provideEmployeeForm } from '@/components/core/useEmployeeForm'
export default defineComponent({
  setup() {
    // Let's suppose by default the employee is located in London's office
    provideEmployeeForm('london')
  }
})
</script>

<template>
  <div id="app">
    <nav id="nav" class="shadow-sm">
      <fw-wrapper compact>
        <div class="flex justify-between items-center py-3 h-full">
          <span class="font-medium text-darkGrey"
            >Internal Mobility Program</span
          >
          <img src="@/assets/img/logo.svg" alt="neyda logo" />
        </div>
      </fw-wrapper>
    </nav>
    <main class="overflow-auto">
      <fw-wrapper>
        <router-view />
      </fw-wrapper>
    </main>
  </div>
</template>

<style lang="scss" scoped>
$nav-height: 60px;

nav {
  height: $nav-height;
}

main {
  height: calc(100vh - #{$nav-height});
}
</style>
