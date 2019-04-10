<template>
  <div class="HelloWorld">
    <h1>{{ msg }} {{ name }}</h1>
    <mei></mei>
    <h1>{{msx}}</h1>
    <h2>{{ yt }}</h2>
    <h3>{{ wh }}</h3>
  </div>
</template>

<script>
import Mei from '@/components/Mei'  //导入
export default {    //导出
  name: 'HelloWorld',
  props: ['msx' , 'yt', 'wh'],
  components: {
    'mei' : Mei ,
  } ,
  data () {
    return {
      msg: '兔子' ,
      name : 'yao'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
