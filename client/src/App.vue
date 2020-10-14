<template>
  <div>
    <Nav />
    <Notifications />
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav"
import Notifications from "@/components/Notifications"

export default {
  components: {
    Nav, Notifications
  }
}
</script>

<style lang="scss">

</style>
