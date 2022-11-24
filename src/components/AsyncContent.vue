<script setup>
  import { ref } from 'vue'
  const { time } = defineProps({
    time: {
      type: Number,
      required: true
    }
  })

  const ERROR_PERCENTAGE = 0.75
  const error = ref(false)

  // Add in a delay to simulate loading data
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > ERROR_PERCENTAGE) {
        error.value = true
        reject(new Error(`there was a ${100 - ERROR_PERCENTAGE*100}% chance of this happening :(`))
      } else {
        console.log('loaded succesfully ' + time)
      }
      resolve()
    }, time)
  })
</script>

<template>
  <div class="async-component"
    :class="{
      'errored': error,
      'loaded': !error
    }"
  >
    <!-- We don't need a spinner here since loading is handled at the root -->
    <slot />
  </div>
</template>

<style scoped>
</style>