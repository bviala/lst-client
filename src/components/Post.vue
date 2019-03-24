<template>
  <div class="card">
    <img
      :src="post.screenshot_url">
    <div class="card-text">
      <h3>
        {{ post.name }}
      </h3>
      <div class="upvotes">
        {{ post.votes_count }} upvotes
      </div>
      <div>
        {{ post.tagline }}
      </div>
    </div>
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

<style scoped>
.card {
  width: 350px;
  margin: 2em;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
  border-radius: var(--card-radius);
}
img {
  width: 100%;
  border-radius: var(--card-radius) var(--card-radius) 0 0;
}
.card-text {
  padding: 1em;
}
h3 {
  color: var(--primary-color);
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.upvotes {
  margin-bottom: 0.5em;
  color: #606060;
}
</style>
