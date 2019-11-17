<template>
  <div class="">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{post.title}} : {{ post.description }}</li>
    </ul>
    <form action="">
      <input type="text" v-model.trim="postDetail.title" >
      <input type="text" v-model.trim="postDetail.description" >
      <input type="text" v-model.trim="postDetail.image">
      <select name="" v-model.trim="postDetail.authorId">
        <option v-for="user in users" :key="user.id" :value="user.id" >{{ user.name }}</option>
      </select>
      <button @click.prevent="createNewPost">Crear</button>
    </form>
  </div>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'

const { listPosts, ListUsers, createPost} = require('../config/querys.js') 


  export default{
    data(){
      return {
        postDetail:{},
        users: [],
        posts:[]
      }
    },
    async beforeCreate(){
      const {data:{ allUsers }} = await API.graphql(graphqlOperation(ListUsers))
      await console.log(allUsers)
      this.users = allUsers

      const {data:{ allPosts }} = await API.graphql(graphqlOperation(listPosts))
      await console.log(allPosts)
      this.posts = allPosts

    },
    methods:{
      async createNewPost(){
        const newPost = await API.graphql(graphqlOperation(createPost, this.postDetail));
      }
    }
  }

  
</script>
