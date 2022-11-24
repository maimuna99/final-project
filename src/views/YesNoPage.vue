<script setup>
import SimpleLoading from '../components/SimpleLoading.vue';
import YesNo from '../components/YesNo.vue';
</script>
<template>
  <Suspense>
    <YesNo class="container" />
    <template #fallback>
      <SimpleLoading class="container" />
    </template>
  </Suspense>
</template>
