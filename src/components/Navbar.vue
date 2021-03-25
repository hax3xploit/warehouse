<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand router-link to="/">Warehouse Game</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav  class="ml-auto">
        <!-- <b-nav-item  router-link to="/Learn">Learn</b-nav-item> -->
          <b-button variant="primary" router-link to="/Learn">Learn</b-button>
          <b-button variant="secondary" router-link to="/Play">Play</b-button>
          <b-button variant="light" router-link to="/Help">Help</b-button>
        <!-- <b-nav-item  router-link to="/Play">Play</b-nav-item> -->
        <!-- <b-nav-item router-link to="/Help">Help</b-nav-item> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name:'Navbar'
    
}
</script>