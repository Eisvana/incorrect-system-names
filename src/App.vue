<script setup lang="ts">
import { ref, computed } from 'vue';
import systems from './assets/systems.json';
import ListItem from './components/ListItem.vue';

const url = window.location;
const params = new URLSearchParams(url.search);

const paramSearch = params.get('name');

const searchTerm = ref(paramSearch ?? '');

const filteredData = computed(() =>
  systems.filter((item) => item.Discoverer.toLowerCase().includes(searchTerm.value.toLowerCase()))
);
</script>

<template>
  <header>
    <h1>Eisvana Name-Fix</h1>
  </header>
  <main>
    <search class="filter">
      <input
        v-model="searchTerm"
        placeholder="Search Playername"
        type="search"
      />
    </search>
    <table>
      <thead>
        <tr>
          <th>Fixed</th>
          <th>Name</th>
          <th>Glyphs</th>
          <th>Expected Prefix</th>
          <th>Discoverer</th>
        </tr>
      </thead>
      <tbody>
        <ListItem
          v-for="data in filteredData"
          :data
          :key="data.Glyphs"
        />
      </tbody>
    </table>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}

.filter {
  max-width: 450px;
  margin-inline: auto;
}
</style>
