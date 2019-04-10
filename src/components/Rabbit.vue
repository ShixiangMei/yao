<template>
    <div class="Rabbit">
        <p v-if="ok">{{height}}{{width}}</p>
      <hw msx="梅世翔" yt="姚婷" wh="哇哈哈"></hw>
      <ul id="example-1">
        <div v-for="item in list">
          <li v-if="item.id > 500">
            {{ item.name }}
          </li>
          <li v-else-if="item.id > 440 ">
            {{item.name}}{{item.id}}
          </li>
          <li v-else>
         {{ item.id }}
          </li>
        </div>
      </ul>
      <button @click="clickBtn()">{{counter}}</button>
      <button @click="greet"></button>
    </div>
</template>

<script>
  import axios from 'axios';
  import HelloWorld from '@/components/HelloWorld';
    export default {
        name : "Rabbit",
        components : {
          'hw' : HelloWorld,
        } ,
        data(){
            return {
                ok : true ,
                height: 17,
                width: 100 ,
                list : [],
                counter : 0,
                name : 'vue.js'
            }
        } ,
        methods : {
          changeHeight : function (  ) {
            this.height = 188
          } ,
          changeWidth : function( width ) {
            this.width = width;
          } ,
          getData : function(  ) {
            const that = this;
            axios.get('/api/admin.php?method=buyer.getBuyerSimpleList')
              .then(function (data) {
                  that.list = data.data.data.list
              })
          } ,
          canShow : function (id) {
            if ( id == 441 )
            {
              return true;
            } else {
              return false;
            }
          },
          clickBtn : function(){
              this.counter += 1;
          },
          greet : function(event){
              alert('hello' + this.name + '!')
              if(event){
                alert(event.target.tagName)
              }
          }
        } ,
        beforeCreate : function(){
            console.log('1');
        } ,
        created : function(){
          this.height = 199;
          this.changeHeight();
          this.changeWidth(50);
        } ,
        beforeMount : function () {
          console.log('最后一次更改数据，初始数据的获取，开始渲染真实数据');
        } ,
        mounted : function(){
          const that = this;
          this.getData();
          /*axios.get('/api/admin.php?method=buyer.getBuyerSimpleList')
            .then(function (response) {
              console.log(response.data.data.list);
              that.list = response.data.data.list
            })
            .catch(function (error) {
              console.log(error);
            });*/
        } ,
        beforeUpdate:function(){
          console.log('不能更改数据不然会死循环');
        } ,
        updated : function(){
          console.log('重新渲染触发不能更改数据不然会死循环');
        } ,
        beforeDestroy : function(){
          console.log('销毁定时器等');
        } ,
        destroyed : function(){
          console.log('善后');
        }
    }
</script>

<style scoped>

</style>
