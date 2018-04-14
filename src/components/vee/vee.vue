<template>
	<div class="vee">
			<div class="control-group" v-bind:class="{ 'form-group--error': $v.newUser.name.$error }">
				<!-- <label class="control-label">用户名</label> -->
				<input
				    placeholder="请输入你的用户名"
				    v-model.trim="newUser.name"
				    @input="$v.newUser.name.$touch()"
				>
				</input>
			</div>
			<span class="form-group__message" v-if="!$v.newUser.name.required">用户名不能为空</span>
			<span class="form-group__message" v-if="!$v.newUser.name.minLength">用户名不能太短</span>
		 
		<div class="control-group" v-bind:class="{ 'form-group--error': $v.newUser.email.$error }">
				<!-- <label class="control-label">邮箱</label> -->
				<input
				    placeholder="请输入你的邮箱"
				    v-model.trim="newUser.email"
				    @input="$v.newUser.email.$touch()"
				>
				</input>
		</div>
		<span class="form-group__message" v-if="!$v.newUser.email.required">邮箱不能为空</span>
		<span class="form-group__message" v-if="!$v.newUser.email.email">请填写正确的邮箱格式</span>
	</div>
</template>

<script>


import { required,minLength,between,email } from 'vuelidate/lib/validators'
	export default {
		data() {
			return {
				newUser: {
    		    name:'',
    		    email:'',
    		    password:'',
    		    confirm_pwd:''
    		  },
			}
		},													
		validations: {
 				newUser:{
 				  name: {
 				    required,
 				    minLength: minLength(2)
 				  },
 				  email: {
 				    required,email
 				  }
 				}
		}
	}
	
</script>

<style >
	.form-group__message{
		display: none;
  	    font-size: .95rem;
  		color: #CC3333;
  		/*margin-left: 10em;*/
  		margin-bottom: 12px;
	}
	.form-group--error+.form-group__message {
  		display: block;
  		color: #CC3333;
	}
 
	.form-group--error input, .form-group--error input:focus, .form-group--error input:hover, .form-group--error textarea {
  		border-color: #CC3333;
	}
	input {
		outline: none;
	}
</style>