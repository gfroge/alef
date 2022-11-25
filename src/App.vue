<template>
  <page-header />
  <main>
    <cards-section />

  </main>
  <snack-bar />
  <page-footer />
</template>

<script lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import CardsSection from '@/components/CardsSection.vue';
import PageFooter from "@/components/PageFooter.vue";

import SnackBar from '@/components/UI/SnackBar.vue';

export default {
  name: "App",
  components: {
    PageHeader, SnackBar, CardsSection, PageFooter
  },
  setup() {
    return {}
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
main {
  position: relative;
  max-width: 1415px;
  margin: 0 auto;
}
</style>
