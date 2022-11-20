<script setup>
import { shallowRef } from 'vue';
import Todo from './components/level0.5/TodoApp.vue';
import MovieList from './components/level2/MovieList.vue';
import FetchSuspense from './components/level3/FetchSuspense.vue';

const examples = [
  {
    label: 'MovieList',
    component: MovieList,
  },
  {
    label: 'TODOs',
    component: Todo,
  },
  {
    label: 'FetchSuspense',
    component: FetchSuspense,
    async: true,
  },
];

const activeComponent = shallowRef(examples[0]);
</script>

<template>
  <main>
    <select v-model="activeComponent">
      <option v-for="app in examples" :value="app" :key="app.label">
        {{ app.label }}
      </option>
    </select>

    <div class="margin20">
      <h3>{{ activeComponent.label }}</h3>
      <template v-if="!activeComponent.async">
        <component :is="activeComponent.component" />
      </template>
      <template v-else>
        <Suspense>
          <component :is="activeComponent.component" />
        </Suspense>
      </template>
    </div>
  </main>
</template>

<style scoped>
.margin20 {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid grey;
}
</style>
