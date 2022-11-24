<script setup>
import MonsterList from '@/components/monsters/MonsterList.vue';
import SimpleLoading from '@/components/SimpleLoading.vue';
</script>
<template>
  <Suspense>
    <MonsterList class="container" />
    <template #fallback>
      <SimpleLoading class="container" />
    </template>
  </Suspense>
</template>
