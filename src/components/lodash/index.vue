<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}：{{ user.score }}
      </li>
    </ul>
    平均分：{{ averageScore }}
  </div>
</template>
<script>
  import _ from 'lodash'

  export default {
    data() {
      return {
        users: [
          {
            id: 1,
            name: 'AAA',
            score: 100
          },
          {
            id: 2,
            name: 'BBB',
            score: 90
          },
          {
            id: 3,
            name: 'CCC',
            score: 70
          }
        ]
      }
    },
    computed: {
      sum() {
        return _.sumBy(this.users, user => user.score)
      },
      averageScore() {
        return this.sum / this.users.length
      }
    }
  }
</script>
