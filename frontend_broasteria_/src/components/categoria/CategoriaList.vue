<script setup lang="ts">
import type { Cliente } from '@/models/categoria'   //hace referencia al modelo categroria 

import { onMounted, ref } from 'vue'  
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var categorias = ref<Categoria[]>([])

//obtener
async function getCategorias() {
  categorias.value = await http.get(ENDPOINT).then((response) => response.data)
}

//editar
function toEdit(id: number) {
  router.push(`/categorias/editar/${id}`)
}
//elimnar
async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la Categoria?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getCategorias())
  }
}

onMounted(() => {
  getCategorias()
})
</script>


<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">categorias</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Categorias</h2>
      <div class="col-12">
        <RouterLink to="/categorias/crear"
        ><font-awesome-icon icon="fa-solid fa-plus" title="Crear Nuevo" /></RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        
        <tbody>
          <tr v-for="(categoria, index) in categorias.values()" :key="categoria.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ categoria.nombre }}</td>
           

            <td>
              <button class="btn btn-link" @click="toEdit(categoria.id)">
              <font-awesome-icon icon="fa-solid fa-edit" title="Editar" />
              </button>



              <button class="btn btn-link" @click="toDelete(categoria.id)"
              ><font-awesome-icon icon="fa-solid fa-trash" title="Elimnar" /></button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<style scoped></style>
