<script>
import { defineComponent } from '@vue/composition-api'
import { provideEmployeeForm } from '@/components/core/useEmployeeForm'
import { provideOffices } from '@/components/offices/useOffices'

export default defineComponent({
  setup() {
    provideEmployeeForm()
    provideOffices()
  }
})
</script>

<template>
  <div id="app">
    <nav id="nav" class="shadow-sm fixed top-0 w-full">
      <fw-wrapper compact>
        <div class="flex justify-between items-center py-3 h-full">
          <span class="font-medium text-darkGrey"
            >Internal Mobility Program</span
          >
          <img src="@/assets/img/logo.svg" alt="neyda logo" />
        </div>
      </fw-wrapper>
    </nav>
    <main class="py-4">
      <fw-wrapper compact>
        <router-view />
      </fw-wrapper>
    </main>
  </div>
</template>

<style lang="scss" scoped>
$nav-height: 60px;

nav {
  height: $nav-height;
  z-index: 1;
  background: white;
}

main {
  margin-top: $nav-height;
}
</style>
