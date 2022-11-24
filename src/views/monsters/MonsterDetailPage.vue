<script setup>
import { ref } from 'vue';
import MonsterDetail from '@/components/monsters/MonsterDetail.vue';
import SimpleLoading from '@/components/SimpleLoading.vue';
const { id } = defineProps(['id']);
const monster = ref({});

function setMonster(m) {
  monster.value = m;
}
</script>
<template>
  <Suspense>
    <div class="container">
      <MonsterDetail :id="id" @loaded="setMonster" />
      <router-view :monster="monster"></router-view>
    </div>

    <template #fallback>
      <SimpleLoading class="container" />
    </template>
  </Suspense>
</template>
