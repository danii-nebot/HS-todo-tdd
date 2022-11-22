<script setup>
// TODO: TDD Exercise: complete the implementation of this component
// to pass all the tests defined in its companion .test.js file

import { ref, onMounted } from 'vue';
const response = ref({});
const loaded = ref(false);

onMounted(async () => {
  try {
    const res = await fetch('https://yesno.wtf/api');
    response.value = await res?.json();
    loaded.value = true;
  } catch (e) {
    // handle error
  }
});
</script>

<template>
  <img :src="response.image" v-if="loaded" />
  <span v-else>loading...</span>
</template>
