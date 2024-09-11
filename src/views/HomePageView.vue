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
  components: {FlashSale, Categories}
};
</script>
<style scoped lang="scss">
.flash-sale {
  max-height: 500px;
  overflow: hidden;
}
</style>