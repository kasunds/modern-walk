<template>
  <div class="container py-5">
    <h3 class="mb-4 section-title">Categories</h3>
    <div class="row text-center">
      <div class="col">
        <div class="card mens">
          <div class="card-body d-flex">
            <router-link
              :to="{ name: 'category', params: { type: 'mens-clothing' } }"
              class="card-title m-auto justify-content-center"
            >
              Men's Clothing
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card womens">
          <div class="card-body d-flex">
            <router-link
              :to="{ name: 'category', params: { type: 'womens-clothing' } }"
              class="card-title m-auto justify-content-center"
            >
              Women's Clothing
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Categories"
};
</script>
<style scoped lang="scss">
.card {
  box-shadow: 10px 15px 20px 0px rgba(0, 0, 0, 0.1490196078);
  border-radius: 20px;
  border: 0;
  height: 300px;
  cursor: pointer;
  .card-body {
    .card-title {
      font-family: "Roboto", sans-serif;
      color: #fff;
      font-weight: 700;
      font-size: 36px;
      text-decoration: none;
    }
  }
}

.mens {
  background: #2bd9af;
}
.womens {
  background: #ff5e84;
}
</style>
  