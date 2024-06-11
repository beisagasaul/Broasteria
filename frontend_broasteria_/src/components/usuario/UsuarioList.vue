<script setup lang="ts">
import type { Usuario } from '@/models/usuario' //hace referencia al modelo USUARIO
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var usuarios = ref<Usuario[]>([])

async function getUsuarios() {
  usuarios.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/usuarios/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Usuario?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getUsuarios())
  }
}

onMounted(() => {
  getUsuarios()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Usuarios</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Usuarios</h2>
      <div class="col-12">
        <RouterLink to="/usuarios/crear"
          ><font-awesome-icon icon="fa-solid fa-plus" title="Crear Nuevo"
        /></RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(usuario, index) in usuarios.values()" :key="usuario.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ usuario.nombreUsuario }}</td>
            <td>{{ usuario.email }}</td>

            <td>
              <button class="btn btn-link" @click="toEdit(usuario.id)">
                <font-awesome-icon icon="fa-solid fa-edit" title="Editar" />
              </button>

              <button class="btn btn-link" @click="toDelete(usuario.id)">
                <font-awesome-icon icon="fa-solid fa-trash" title="Elimnar" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
