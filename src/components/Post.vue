<template>
  <div>
    {{ post.name }}
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>

</style>
