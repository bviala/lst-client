<template>
  <div class="keyData">
      <span class="data">
        {{ data }}
      </span>
      <span class="caption">
        {{ caption }}
      </span>
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
.keyData{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}
.data{
  color: var(--primary-color);
}
.caption{
  text-transform: uppercase;
}
</style>
