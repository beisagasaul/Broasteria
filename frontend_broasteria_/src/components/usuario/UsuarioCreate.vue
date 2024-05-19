<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombreUsuario = ref('')
const email = ref('')

async function crearUsuario() {
  await http
    .post(ENDPOINT, {
      nombres: nombreUsuario.value,
      email: email.value
    })
    .then(() => router.push('/usuarios'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/clientes">Usuarios</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Usuario</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearUsuario">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombreUsuario" placeholder="Nombre" required />
          <label for="nombres">Nombre</label>
        </div>

        <div class="form-floating">
          <input type="text" class="form-control" v-model="email" placeholder="Email" required />
          <label for="email">Email</label>
        </div>

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" title="Guardar" />
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
