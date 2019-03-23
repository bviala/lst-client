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
    
    <!-- STATS & POSTS -->
    <div v-else>
      <div class="keyData">
        <key-data
          :data="postsCount"
          :caption="'posts'"/>
        <key-data
          :data="votesCount"
          :caption="'votes'"/>
        <key-data
          :data="commentsCount"
          :caption="'comments'"/>
        <key-data
          :data="makersCount"
          :caption="'makers'"/>
      </div>

      <post
        v-for="post in posts"
        :key="post.id"
        :post="post"/>
    </div>

  </div>
</template>

<script>
import Post from './components/Post'
import Spinner from './components/Spinner'
import KeyData from './components/KeyData'
import { POSTS_QUERY } from './API'

export default {
  name: 'app',
  components: {
    Post,
    Spinner,
    KeyData
  },
  data () {
    return {
      daysAgoOptions: Array.from({length: 31}, (v, k) => k),
      selectedDaysAgoOption: 0
    }
  },
  computed: {
    postsCount () {
      return this.posts.length
    },
    votesCount () {
      return this.posts.reduce(
        (votesCount, currentPost) => votesCount + currentPost.votes_count,
        0
      )
    },
    commentsCount () {
      return this.posts.reduce(
        (commentsCount, currentPost) => commentsCount + currentPost.comments_count,
        0
      )
    },
    makersCount () {
      return this.posts.reduce(
        (makersCount, currentPost) => makersCount + currentPost.makers.length,
        0
      )
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
.keyData {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}
</style>
