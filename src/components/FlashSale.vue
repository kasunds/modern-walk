<template>
  <div class="container pt-5">
    <h3 class="mb-4 section-title">Flash Sale</h3>
    <div v-if="saleProducts.length > 0" class="row text-center">
      <div class="col-12">
        <carousel
          v-bind="settings"
          :breakpoints="breakpoints"
          :wrap-around="true"
        >
          <slide v-for="(item, index) in saleProducts" :key="index">
            <product :item-data="item" />
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
    <div v-else class="row">
      <skeleton :count="4" />
    </div>
  </div>
</template>
<script>
import Product from "./Product.vue"
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import Skeleton from "./Skeleton.vue"
export default {
  name: "FlashSale",
  components: { Product, Carousel, Slide, Navigation, Skeleton },
  data() {
    return {
      saleProducts: [],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        autoplay: 3000,
        pauseAutoplayOnHover: true,
        transition: 800,
      },
      breakpoints: {
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  mounted() {
    this.getSaleData()
  },
  methods: {
    async getSaleData() {
      await this.$http.get("https://fakestoreapi.com/products").then(
        (response) => {
          const { data } = response
          if(!data) false
          this.saleProducts = data.sort((a,b) => b.id - a.id) ?? []
        },
        (error) => {
          if (error.response) {
            console.error(error.response)
          }
        }
      );
    },
  },
};
</script>
<style scoped>
</style>
