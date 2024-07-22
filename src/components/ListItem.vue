<script setup lang="ts">
import { getPrefix } from '@/helpers/prefix';
import { watchEffect, computed, ref } from 'vue';

const props = defineProps<{
  data: {
    Glyphs: string;
    Name: string;
    Discoverer: string;
  };
}>();

const localStorageData = localStorage.getItem(props.data.Glyphs);

const done = ref(Boolean(localStorageData));

const expectedName = computed(() => getPrefix(props.data.Glyphs));

watchEffect(() => {
  if (done.value) {
    localStorage.setItem(props.data.Glyphs, 'true');
  } else {
    localStorage.removeItem(props.data.Glyphs);
  }
});
</script>

<template>
  <tr>
    <td>
      <input
        v-model="done"
        type="checkbox"
      />
    </td>
    <td :class="{ italic: !data.Name }">{{ data.Name || 'unknown (procedural name)' }}</td>
    <td class="glyphs">{{ data.Glyphs }}</td>
    <td>{{ expectedName }}</td>
    <td>{{ data.Discoverer }}</td>
  </tr>
</template>

<style scoped>
.italic {
  font-style: italic;
}

.glyphs {
  font-family: 'NMS-Glyphs-Mono';
  font-size: 2rem;
  letter-spacing: -0.5rem;
}
</style>
