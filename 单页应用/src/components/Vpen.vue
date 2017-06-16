<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="panel panel-default">
				  <div class="panel-heading box">
				    <h3 class="panel-title title">笔记</h3>
            <button type="button" class="btn btn-default save ">保存</button>

				  </div>
				  <div class="panel-body">
              <textarea name="name" rows="13" cols="80" class="Inpt"></textarea>



				  </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

	export default {
		name:'Vpen',
		data(){
			return {

			}
		},
		components:{
		}
	}
</script>
<style scoped>
textarea{
  width:100%;
  height:100%;
  border:none;
  /*background: transparent;*/
}
.panel-body{
  padding:0;
}
.box{
  overflow: hidden;
}
.title{
  float:left;
}
.save{
  float:right;
}
.Inpt{
border:0;
outline:none;
}

</style>
