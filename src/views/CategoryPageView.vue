<template>
  <section class="category">
    <div class="container pt-5">
      <h3 class="mb-4 section-title">{{ prodcutCategory }}</h3>
      <div v-if="products.length > 0" class="row text-center my-4">
        <div v-for="(item, index) in products" :key="index" class="col-3">
          <product :item-data="item" />
        </div>
      </div>
      <div v-else class="row">
        <skeleton :count="8" />
      </div>
    </div>
  </section>
</template>
<script>
import Product from "@/components/Product.vue"
import Skeleton from "@/components/Skeleton.vue"

export default {
  name: "CategoryPageView",
  components: { Product, Skeleton },
  data() {
    return {
      products: [],
      prodcutCategory: null,
    };
  },
  mounted() {
    this.getProductData();
  },
  methods: {
    async getProductData() {
      const { type } = this.$route.params
      if (!type) false;
      if (type === "mens-clothing") this.prodcutCategory = "men's clothing"
      if (type === "womens-clothing") this.prodcutCategory = "women's clothing"
      await this.$http
        .get(
          `https://fakestoreapi.com/products/category/${this.prodcutCategory}`
        )
        .then(
          (response) => {
            const { data } = response;            
            if(!data) false
            this.products = data.sort((a,b) => b.id - a.id) ?? [];
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