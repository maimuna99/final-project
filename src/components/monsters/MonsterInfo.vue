<script setup>
import { toRef } from 'vue';
const props = defineProps(['monster']);
const monsterRef = toRef(props, 'monster');
</script>
<template>
  <ul>
    <li>languages: {{ monsterRef.languages }}</li>
    <li>xp: {{ monsterRef.xp }}</li>
  </ul>
  <img
    v-if="monsterRef.image"
    style="width: 100px"
    :src="`https://www.dnd5eapi.co${monsterRef.image}`"
  />
</template>
