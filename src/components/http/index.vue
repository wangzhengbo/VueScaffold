<template>
  <div class="http">
    <div v-for="post in posts" :key="post.id" class="post">
      {{ post.title }}
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: []
    }
  },
  async created () {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
    this.posts = response.data
  }
}
</script>
<style lang="less" scoped>
  .http {
    > .post {
      margin: 15px 0;
      text-align: left;
    }
  }
</style>
