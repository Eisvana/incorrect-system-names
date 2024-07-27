import data from './index.json' with { type: 'json' };

const filteredData = data.filter((item) => !item['Correctly Prefixed']);

Deno.writeTextFileSync('src/assets/systems.json', JSON.stringify(filteredData, null, 2));
