<script setup>
// TODO: TDD Exercise: complete the implementation of this component
// to pass all the tests defined in its companion .test.js file

import { ref, onMounted } from 'vue';
const response = ref({});

onMounted(async () => {
  const res = await fetch('https://yesno.wtf/api');
});
</script>

<template></template>
