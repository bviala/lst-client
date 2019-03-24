<template>
  <div class="container">
    <div class="data">
      {{ data }}
    </div>
    <div class="caption">
      {{ caption }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Number
    },
    caption: {
      type: String
    }
  }
}
</script>

<style scoped>
.container {
  margin: 1em;
}
.data {
  color: var(--primary-color);
}
.caption {
  text-transform: uppercase;
}
</style>
