<script setup>
const logoUrl = new URL('../assets/logo.png', import.meta.url).href
</script>

<template>

  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-20 w-auto" :src="logoUrl" alt="Company" />
    </div>

    <slot>


    </slot>
  </div>
</template>


<style scoped>

</style>