<template>
  <div v-if="user">
    <h1>{{ user.name }} fav color is <span style="font-size: 60px;"  :style="{'color': user.color }">{{ user.color }}</span></h1>

    <Link href="user/register" class="bg-blue-500 p-3 text-white  rounded ">Register</Link>
  </div>
</template>
<script>
export default {
    data(){
      return {
        user : null,
      }
    },
    mounted(){
      echo.channel('fav-color')
      .listen('UserColorChanged',(e)=>{
          this.user = e.user;
      })

      this.user = this.$page.props.user;
    }
}
</script>
<style lang="">
  
</style>