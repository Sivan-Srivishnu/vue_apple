<template>
  <div>this is Accessories</div>
</template>

<script>
import router from '@/router';
export default {
  name: "AccessoriesComp",
  mounted(){
    console.log(router);
    document.title("accessories")
    console.log("yeah i'm mounted");
  }
}

</script>

<style scoped>
div{
  background-color: red;
  color: green;
}
</style>
