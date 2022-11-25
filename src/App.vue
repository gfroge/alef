<template>
  <page-header />
  <main>
    <cards-section/>
  </main>
  <snack-bar/>
</template>

<script lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import CardsSection from '@/components/CardsSection.vue';

import SnackBar from '@/components/UI/SnackBar.vue';

export default {
  name: "App",
  components: {
    PageHeader, SnackBar, CardsSection
  },
  setup() {
    return { }
  },
};
</script>

<style lang="scss">
* {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: $BLACK;
}
</style>

<style lang="scss" scoped>

</style>
