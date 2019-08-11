<template>
<div id="app">
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width,initial-scale=1,minimal-ui" name="viewport">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"
    >
  </head>
  <div class="area">
    <router-view/>
  </div>
  <nav class="main-menu">
    <ul>
      <li>
        <router-link to="/">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text">Home</span>
        </router-link>
      </li>
    </ul>
    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text">Logout</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style>
