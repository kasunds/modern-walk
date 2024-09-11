<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div> -->
  <header class="header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <div
          class="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNav"
        >
          <RouterLink to="/" class="logo-txt">Modern Walk</RouterLink>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped lang="scss">
.header {
  box-shadow: 0px 5px 8px 0px #00000040;
  .logo-txt {
    font-family: "Roboto", sans-serif;
    color: #0e0e0e;
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>
