<template>
  <form class="mx-5 my-3">
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success" @click.prevent="login">Login</button>
      </p>
    </div>
  </form>
</template>

<script>
import session from "@/models/session";

export default {
  methods: {
    login() {
      session.user = {
        name: "User Name",
        handle: "userhandle",
        profilepic:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chelidonura_varians.jpg/220px-Chelidonura_varians.jpg",
      };
      session.addNotification("You have logged in.", "success")
      this.$router.push("Feed");
    },
  },
};
</script>

<style>
</style>