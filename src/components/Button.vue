<template>
    <div>
        <button class="lightBlue px-6 py-3 rounded-lg white--text font-weight-medium" >{{text}}</button>
    </div>
</template>

<script>
export default {
    name: "Button",
  props: {
      "text": String,
  }
}
</script>

<style scoped>

</style>