<template>
	<button 
		class="btn"
		:class="btnType"
		@click="clickHandler">
		<slot>
			按钮
		</slot>
	</button>
</template>


<script>
	export default {
		name: 'Vbutton',
		data(){
			return {

			}
		},
		props:{
			type:String
		},
		methods:{
			clickHandler(){
				this.$emit('click')
			}
		},
		computed:{
			btnType(){
				return {
					'btn-primary': this.type === 'primary' ? true : false,
					'btn-info': this.type === 'info' ? true : false,
					'btn-danger': this.type === 'danger' ? true : false
				}
			}
		}
	}
</script>


<style></style>