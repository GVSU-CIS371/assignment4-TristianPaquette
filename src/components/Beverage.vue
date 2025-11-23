<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />

    <Contents>
      <!-- Top: Creamer first, otherwise Syrup -->
      <template v-slot:top>
        <Creamer v-if="creamer !== 'No Cream'" :type="creamer" />
        <Syrup v-else-if="syrup !== 'No Syrup'" :type="syrup" />
      </template>

      <!-- Middle: Syrup only if both creamer + syrup chosen -->
      <template v-slot:mid>
        <Syrup
          v-if="creamer !== 'No Cream' && syrup !== 'No Syrup'"
          :type="syrup"
        />
      </template>

      <!-- Bottom: base -->
      <template v-slot:bottom>
        <Base :type="base" />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Cold from "./Cold.vue";
import Hot from "./Hot.vue";
import Creamer from "./Creamer.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";

defineProps<{
  isIced: boolean;
  base?: string;
  creamer?: string;
  syrup?: string;
}>();
</script>
