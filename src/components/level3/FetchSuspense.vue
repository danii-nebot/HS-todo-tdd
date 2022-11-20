<script setup>
import { ref } from 'vue';
const response = ref({});

const res = await fetch('https://yesno.wtf/api');
if (!res.ok) {
  throw new Error('load');
}
response.value = await res.json();
</script>

<template>
  <div style="min-height: 192px">
    <img style="height: 192px" :src="response.image" alt="image from api" />
  </div>
</template>
