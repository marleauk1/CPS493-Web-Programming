<template>
  <div id="LoginBadge">
    <div class="media" v-if="session.user">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="session.user.profilepic" alt="Placeholder image" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4 has-text-white">{{ session.user.name }}</p>
        <p class="subtitle is-6 has-text-white">@{{ session.user.handle }}</p>
      </div>
    </div>

    <div class="buttons" v-else>
      <a class="button">
        <strong>Sign up</strong>
      </a>
      <router-link to="/login" class="button is-light"> Log in </router-link>
    </div>
  </div>
</template>

<script>
import session from "@/models/session";

export default {
  data: () => ({
    session,
  }),
};
</script>

<style>
</style>