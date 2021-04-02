<template>
  <v-app>
    <div class="wrapper">
      <h1>
        {{ title }}
      </h1>
    </div>
  </v-app>
</template>

<script>
  export default {
    layout: "error",
    data() {
      return {
        title: "Error Page",
      };
    },
  };
</script>
