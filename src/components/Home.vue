<template>
  <div id="app">
  
  <i class="el-icon-loading"></i>
  <b class="b" v-show="isNow">输入不能为空</b>
    <el-input v-model="user" placeholder="请输入内容"></el-input>
    <el-input v-model="pwd" placeholder="请输入密码"></el-input>
    <el-button type="submit" @click="dianji()" >登录</el-button>
   
  </div>
  
</template>
<script>
    import axios from 'axios'
    import {toQString} from '../assets/until.js'
 export default {
   data(){
       return {
          user:'',
          pwd:'' ,
          isNow:false
       }
   },
   methods:{
       dianji(){   
           if(this.user===""||this.pwd===""){
               this.isNow=true;
           }else{
                let host=this.$store.getters.login;
        let set=toQString({
            user_name:this.user,
            user_password:this.pwd
        })
          axios.post(host,set).then((data)=>{
              console.log(data)
           if(data.data.status==='ok'||data.data.status==="success"){    
                this.$router.push('/index')

           } else if(data.data.status==="error"){
            this.isNow=true;
               var b=document.querySelector('b');
               b.innerText="密码错误";
           }
          })
           }
       }
   }
 }
</script>
<style>
    #app{
        width:300px;
        height:200px;
        margin:40px auto;
    }
  .el-icon-loading{
     font-size: 100px;
  }
  .b{
      border: .5px solid red;
      color: red;
      display: block;
      border-radius: 6px;
  }
  
</style>