<template>
  <section class="flash-sale">
    <flash-sale/>
  </section>
  <section class="categories">
    <categories/>
  </section>
</template>
<script>
import FlashSale from '@/components/FlashSale.vue'
import Categories from '@/components/Categories.vue'

export default {
  name: "HomeView",
  components: {FlashSale, Categories},
  setup() {

  },
};
</script>