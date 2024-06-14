<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/index";

const nombreUsuario = ref("");
const clave = ref("");
const error = ref(false);

function onSubmit() {
  const authStore = useAuthStore();
  authStore.login(nombreUsuario.value, clave.value).catch(() => (error.value = true));
}
</script>

<template>
 <div class="container-login">
        <div class="wrap-login">
            <span class="login-form-title">Iniciar Sesión</span>
            <form class="login-form validate-form" @submit.prevent="onSubmit">
                
             <div class="wrap-input100" >
                    <input 
                    v-model="nombreUsuario"
                    type="text"
                    class="input100" 
                    placeholder="Usuario">
                    <span class="focus-efecto"></span>
             </div>

                 
             <div class="wrap-input100" >
                <input 
                v-model="clave"
                type="password"
                class="input100" 
                placeholder="Contraseña">
                <span class="focus-efecto"></span>
         </div>
                
             <p v-if="error" class="text-danger">Usuario y/o Contraseña incorrecta</p>  
               
                
                <div class="container-login-form-btn">
                    <div class="wrap-login-form-btn">
                        <div class="login-form-bgbtn"></div>
                        <button type="submit"  class="login-form-btn">Ingresar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>    
</template>


<style>
@font-face {
  font-family: Poppins-Regular;
  src: url('fuentes/poppins/Poppins-Regular.ttf'); 
}
@font-face {
  font-family: Poppins-Medium;
  src: url('fuentes/poppins/Poppins-Medium.ttf'); 
}

@font-face {
  font-family: Poppins-Bold;
  src: url('fuentes/poppins/Poppins-Bold.ttf'); 
}

@font-face {
  font-family: Poppins-SemiBold;
  src: url('fuentes/poppins/Poppins-SemiBold.ttf'); 
}

*{
	margin: 0px; 
	padding: 0px; 
	box-sizing: border;
}

div {
	height: 100%;
	font-family: Poppins-Regular, sans-serif;
}


input {
	outline: none;
	border: none;
}

button {
	outline: none !important;
	border: none;
	background: transparent;
}

button:hover {
	cursor: pointer;
}

/*-- contenedor del Login--*/

/* .container-login {
  width: 100%;  
  min-height: 100vh;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
} */

.wrap-login {
  width: 400px;
  background: #eceff1;
  border-radius: 20px;
  overflow: hidden;
  padding: 77px 55px 53px 55px;
  -webkit-box-shadow: 25px 40px 28px 0px rgba(0, 0, 0, 0.38);

}


/*----Formulario de user y password----*/

.login-form {
  width: 100%;
}

.login-form-title {
  display: block;
  font-family: Poppins-Bold;
  font-size: 35px;
  color: #333333;
  line-height: 1.5;
  text-align: center;
}




.wrap-input100 {
  width: 100%;
  position: relative;
  border-bottom: 2px solid #adadad;
  margin-bottom: 37px;
}

.input100 {
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #555555;
  line-height: 1.2;

  display: block;
  width: 100%;
  height: 45px;
  background: transparent;
  padding: 0 5px;
}

.focus-efecto {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.focus-efecto::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 3px; /*ancho de la linea que hace el efecto de barra de progeso en el input al hacer foco*/

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;


  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
  background: -o-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
  background: -moz-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
}

.focus-efecto::after {
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #999999;
  line-height: 1.2;

  content: attr(data-placeholder);
  display: block;
  width: 100%;
  position: absolute;
  top: 16px;
  left: 0px;
  padding-left: 5px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input100:focus + .focus-efecto::after {
  top: -15px;
}

.input100:focus + .focus-efecto::before {
  width: 100%;
}

.has-val.input100 + .focus-efecto::after {
  top: -15px;
}

.has-val.input100 + .focus-efecto::before {
  width: 100%;
}


.container-login-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 13px;
}

.wrap-login-form-btn {
  width: 100%;
  display: block;
  position: relative;
  z-index: 1;
  border-radius: 40px 5px;
  overflow: hidden;
  margin: 0 auto;
}

.login-form-bgbtn {
  position: absolute;
  z-index: -1;
  width: 300%;
  height: 100%;
  
  background: linear-gradient(to right, rgb(17, 203, 95), rgb(17, 203, 95), rgb(17, 203, 95));
  top: 0;
  left: -100%;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login-form-btn {
  font-family: Poppins-Medium;
  font-size: 20px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
}

.wrap-login-form-btn:hover .login-form-bgbtn {
  left: 0;
}


@media (max-width: 576px) {
  .wrap-login {
    padding: 77px 15px 33px 15px;
  }
}
</style>
