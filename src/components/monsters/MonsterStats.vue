<script setup>
import { toRef } from 'vue';
const props = defineProps(['monster']);
const monsterRef = toRef(props, 'monster');
</script>
<template>
  <ul>
    <li>ST {{ monsterRef.strength }}</li>
    <li>DEX {{ monsterRef.dexterity }}</li>
    <li>CON {{ monsterRef.constitution }}</li>
    <li>INT {{ monsterRef.intelligence }}</li>
    <li>WIS {{ monsterRef.wisdom }}</li>
    <li>CHA {{ monsterRef.charisma }}</li>
  </ul>
</template>
