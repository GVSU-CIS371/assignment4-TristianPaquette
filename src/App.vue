<template>
  <div>
    <Beverage
      :isIced="store.currentTemp === 'Cold'"
      :base="store.currentBase?.name"
      :creamer="store.currentCreamer?.name"
      :syrup="store.currentSyrup?.name"
    />

    <!-- Temperature -->
    <ul>
      <li>
        <template v-for="temp in store.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temp"
              :value="temp"
              v-model="store.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>

    <!-- Base -->
    <ul class="options-row">
      <li v-for="b in store.bases" :key="b.id">
        <label>
          <input type="radio" name="base" :value="b" v-model="store.currentBase" />
          {{ b.name }}
        </label>
      </li>
    </ul>

    <!-- Creamer -->
    <ul class="options-row">
      <li v-for="c in store.creamers" :key="c.id">
        <label>
          <input
            type="radio"
            name="creamer"
            :value="c"
            v-model="store.currentCreamer"
          />
          {{ c.name }}
        </label>
      </li>
    </ul>

    <!-- Syrup -->
    <ul class="options-row">
      <li v-for="s in store.syrups" :key="s.id">
        <label>
          <input
            type="radio"
            name="syrup"
            :value="s"
            v-model="store.currentSyrup"
          />
          {{ s.name }}
        </label>
      </li>
    </ul>

    <!-- Make Beverage -->
    <input
      type="text"
      placeholder="Beverage Name"
      v-model="store.beverageName"
    />
    <button @click="store.makeBeverage()">🍺 Make Beverage</button>

    <!-- Saved Beverages -->
    <div id="beverage-container" style="margin-top: 20px">
      <h3>Saved Beverages</h3>
      <ul>
        <li v-for="bev in store.savedBeverages" :key="bev.id">
          <label>
            <input type="radio" name="saved" @change="store.showBeverage(bev)" />
            {{ bev.name }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { onMounted } from "vue";

const store = useBeverageStore();

onMounted(() => {
  store.init();
});
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
}

.options-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin: 0.25rem 0;
}
</style>
