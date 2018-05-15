<template>
    <div id="app">
       <div class="header">
           <i class="el-icon-info"></i>
           <i class="el-icon-bell"></i>
           <i class="logo"> logo</i>
           <i class="user">嗨,</i>
       </div>
       <div class="slider"></div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        mounted(){
            console.log(this.$store)
            let host=this.$store.getters.login
          axios.post(host).then((data)=>{
                console.log(data);
          })
        }
    }
</script>
<style>
.header{
    position: absolute;
    top: 0;
   height: 30px;
    left: 0;
    right: 0;
    background: #000;
    line-height: 30px;
}
.header .el-icon-info{
    float: left;
    margin-left: 8px;
    margin-top: 5px;
    color: #ccc;
}
.el-icon-bell{
    float: left;
    margin-left: 15px;
    margin-top: 5px;
    color: #ccc;
}
.logo{
    float: left;
    color: #ccc;
    font-size: 12px;
    margin-left: 5px;
    font-style: normal;
}
.user{
    float:right;
    font-style: normal;
    font-size: 10px;
    color: #ccc;
}
.slider{
    position: absolute;
    top: 20px;
  bottom: 0;
    left: 0;
   width: 88px;
    background: #000;
}

</style>