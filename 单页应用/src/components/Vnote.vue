<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="panel panel-default">
				  <div class="panel-heading box">
				    <h3 class="panel-title title">Markdown</h3>
						<button type="button" class="btn btn-default save">保存</button>

				  </div>
				  <div class="panel-body">
				  	<div class="row">

				  			<Vnoteeditor></Vnoteeditor>

				  	</div>


				  </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vnoteeditor from './Vnoteeditor'

	export default {
		name:'Vnote',
		data(){
			return {

			}
		},
		components:{
			Vnoteeditor
		}
	}
// function myfun() {
	// axios.post('/user', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
	// alert(111)
// }

</script>
<style scoped>
	.box{
		overflow: hidden;
	}
	.title{
		float:left;
	}
	.save{
		float:right;
	}
</style>
