<template>
  <div class="page">
      <h2 class="title is-2">Feed Page</h2>
    <div class="columns">
      <div class="column is-two-thirds">
          <h3 class="title is-3">Main Feed</h3>
          <Post class="mb-5" 
                v-for="(x, i) in posts" 
                :key="i"
                :post="x" />
      </div>
      <div class="column is-one-third">
          <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Post from "@/components/Post";
import { posts } from "@/models/feed";

export default {
    data(){
        return {
            posts
        }
    },
    components: {
        Post,
        Sidebar
    }
};
</script>

<style>
</style>