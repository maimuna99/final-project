<script setup>
import { ref, computed } from 'vue';
const { id } = defineProps(['id']);
const emit = defineEmits(['loaded']);
const monster = ref({});
const options = {
  method: 'GET',
  // We don't actually need headers for this API call
  // but if we did, we can add them here:
  // headers: {
  //   'X-RapidAPI-Key': `${import.meta.VITE_API_KEY}`,
  //   'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  // }
};

const res = await fetch(`https://www.dnd5eapi.co/api/monsters/${id}`, options);
if (!res.ok) {
  throw new Error();
}

monster.value = await res.json();
emit('loaded', monster.value);
const alignment = computed(() => {
  const [axes1, axes2] = monster.value.alignment.split(' ');
  console.log(axes1, axes2);
  let axes1emoji;
  let axes2emoji;
  switch (axes1) {
    case 'chaotic':
      axes1emoji = '🤡';
      break;
    case 'lawful':
      axes1emoji = '⚖️';
      break;
    default:
      axes1emoji = '😐';
  }
  switch (axes2) {
    case 'evil':
      axes2emoji = '😈';
      break;
    case 'good':
      axes2emoji = '😇';
      break;
    default:
      axes2emoji = '😐';
  }

  return `${axes1emoji}${axes2emoji}`;
});
</script>

<template>
  <div>
    <h2>{{ monster.name }}</h2>
    <div class="margin20">
      <span class="text-xl">{{ alignment }}</span>
      <span>{{ monster.alignment }}</span>
    </div>

    | <router-link :to="{ name: 'monster-info' }">info</router-link> |
    <router-link :to="{ name: 'monster-stats' }">stats</router-link> |
  </div>
</template>

<style scoped>
.text-xl {
  font-size: 3rem;
}
.margin20 {
  margin: 20px;
}
</style>
