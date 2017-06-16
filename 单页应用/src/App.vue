<template>
  <div id="app">
    <nav class="navbar navbar-default">
    <div class="container-fluid">

      <div class="navbar-header">
        <a class="navbar-brand" href="#">
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><router-link to="/">主页 <span class="sr-only">(current)</span></router-link></li>
          <li><router-link to="/pen">笔记</router-link></li>
          <li><router-link to="/note">Markdown</router-link></li>
        </ul>

      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>


    <transition
      name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  name: 'app',
  components:{

  },
  methods:{
  }
}
</script>

<style>
  .slide-enter-active {
  transition: all .3s .3s ease;
  }
  .slide-leave-active {
    transition: all .3s ease;
  }
  .slide-enter {
    transform: translateY(-30px);
    opacity: 0;
  }
  .slide-leave-active{
    transform: translateY(30px);
    opacity: 0;
  }
</style>
