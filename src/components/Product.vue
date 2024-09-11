<template>
  <div class="card my-4">
    <div class="card-body">
      <h5 class="card-title p-4 text-truncate m-auto" v-tooltip:bottom="itemData.title">{{ itemData.title }}</h5>
      <div class="product-img pb-4 d-flex align-items-center">
        <img :src="itemData.image" class="card-img-top m-auto" />
      </div>
      <div
        class="product-details"
        :class="itemData.category === `men's clothing` ? 'mens' : 'womens'"
      >
        <span class="price">Rs. {{ itemData.price }}</span>
        <p class="card-text" v-tooltip:bottom="itemData.description">{{ itemData.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  props: {
    itemData: {
      type: Object
    }
  }
};
</script>
<style scoped lang="scss">
.card {
  border: none;
  border-radius: 20px;
  box-shadow: 5px 5px 20px 0px #00000026;
  cursor: pointer;
  .card-body {
    padding: 0;
    .card-title {
      max-width: 250px;
    }
    .product-img {
      max-height: 180px;
      height: 180px;
      overflow: hidden;
    }
    .product-details {
      font-family: "Roboto", sans-serif;
      padding: 10px 18px 15px;
      border-radius: 20px;
      height: 130px;
      .price {
        color: #0e42fd;
        font-size: 20px;
        font-weight: 700;
        line-height: 2;
      }
      .card-text {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.2;
        max-width: 250px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
    .mens {
      background: #2bd9af;
    }
    .womens {
      background: #ff5e84;
    }
    .product-img img {
      border-radius: 0;
      max-width: 120px;
      transition: transform .4s; 
    }
    &:hover .product-img img{
      transform: scale(1.2);
    }
  }
}
</style>