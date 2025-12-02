<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />

    <Contents>
      <template v-slot:top>
        <Creamer v-if="creamer !== 'No Cream'" :type="creamer || ''" />
        <Syrup v-else-if="syrup !== 'No Syrup'" :type="syrup || ''" />
      </template>

      <template v-slot:mid>
        <Syrup
          v-if="creamer !== 'No Cream' && syrup !== 'No Syrup'"
          :type="syrup || ''"
        />
      </template>

      <template v-slot:bottom>
        <Base :type="base || ''" />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Mug from "./Mug.vue";
import Cold from "./Cold.vue";
import Hot from "./Hot.vue";
import Contents from "./Contents.vue";
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
