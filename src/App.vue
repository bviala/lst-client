<template>
  <div id="app">
    
    <!-- TITLES -->
    <h1>ProductHunt</h1>
    <h2>The best new products, every day</h2>
    
    <!-- DATE SELECTION -->
    <select
      v-model="selectedDaysAgoOption">
      <option
        v-for="daysAgoOption in daysAgoOptions"
        :key="daysAgoOption"
        :value="daysAgoOption">
        {{ getHumanReadableDaysAgoOption(daysAgoOption) }}
      </option>
    </select>
    
    <!-- LOADING STATE -->
    <spinner
      v-if="$apollo.loading"/>
    
    <!-- POSTS -->
    <post
      v-else
      v-for="post in posts"
      :key="post.id"
      :post="post"/>
  </div>
</template>

<script>
import Post from './components/Post'
import Spinner from './components/Spinner'
import { POSTS_QUERY } from './API'

export default {
  name: 'app',
  components: {
    Post,
    Spinner
  },
  data () {
    return {
      daysAgoOptions: Array.from({length: 31}, (v, k) => k),
      selectedDaysAgoOption: 0
    }
  },
  methods: {
    getHumanReadableDaysAgoOption (daysAgoOption) {
      if (daysAgoOption === 0) return 'Today'
      if (daysAgoOption === 1) return 'Yesterday'
      return `${daysAgoOption} days ago`
    }
  },
  apollo: {
    posts: {
      query: POSTS_QUERY,
      variables () {
        return {
          daysAgo: this.selectedDaysAgoOption
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  --primary-color: #ea532a;
}
h1 {
  color: var(--primary-color)
}
select {
  margin-bottom: 2em;
} 
</style>
