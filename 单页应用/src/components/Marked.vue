<template id="">
  <div class="Marked">
    <div class="editor">
      <textarea v-model='text' rows="13" cols="80" class="Inpt"></textarea>
    </div>
    <div class="screen" v-html='domarked'>
        <!-- {{domarked}} -->
    </div>
  </div>
</template>

<script type="text/javascript">
import marked from 'marked'
  export default{
    name:'Marked',
    data(){
      return{
        text:""
      }
    },
    methods:{

    },
    computed:{
      domarked(){
        return marked(this.text);
      }

    },
    props:{

    }

  }
</script>

<style media="screen">
  .Marked{
    width: 100%;
    margin:-15px auto;
    overflow: hidden;
  }
  .editor,.screen{
    box-sizing: border-box;
    width: 50%;
    height: 270px;
    float: left;
    border:1px solid black;
  }
  textarea{
    width:100%;
    height:100%;
    border:none;
    /*background: transparent;*/
  }
  .Inpt{
    border:0;
    outline:none;
  }
</style>
