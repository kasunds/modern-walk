<template>    
    <div v-for="(item, index) in count" :key="index" class="col-sm-12 col-md-6 col-lg-3 my-4">
        <v-skeleton-loader
          class="mx-auto border"
          type="heading, image, text, paragraph"
        ></v-skeleton-loader>
      </div>
</template>
<script>
export default {
  name: "Skeleton",
  props: {
    count: {
      type: Number
    },
  }
}
</script>