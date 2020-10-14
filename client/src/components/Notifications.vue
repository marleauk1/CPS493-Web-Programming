<template>
<div>
  <div  v-for="(x, i) in session.notifications" 
        :key="i"
        class="notification"
        :class="`is-${x.type}`">
      <button class="delete" @click="session.deleteNotification(i)"></button>
      {{x.text}}
    </div>
  </div>
</template>

<script>
import session from "@/models/session";

export default {
    data: ()=> ({
        session
    })
};
</script>

<style>
</style>