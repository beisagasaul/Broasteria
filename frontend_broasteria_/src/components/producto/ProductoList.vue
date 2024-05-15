<script setup lang="ts">
import type { Producto } from '@/models/producto'   //hace referencia al modelo producto 
import { onMounted, ref } from 'vue'  
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var productos = ref<Producto[]>([])

//obtener
async function getProductos() {
  productos.value = await http.get(ENDPOINT).then((response) => response.data)
}

//editar
function toEdit(id: number) {
  router.push(`/productos/editar/${id}`)
}
//elimnar
async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Producto?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getProductos())
  }
}

onMounted(() => {
  getProductos()
})
</script>





<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Productos</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Productos</h2>
      <div class="col-12">
        <RouterLink to="/productos/crear">Crear Nuevo</RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio Bs.</th>
             <th scope="col">Stock</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        
        <tbody>
          <tr v-for="(producto, index) in productos.values()" :key="producto.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.descripcion }}</td>
            <td>{{ producto.precioUnitario }}</td>
            <td>{{ producto.stock }}</td>

            <td>
              <button class="btn btn-link" @click="toEdit(producto.id)">Editar</button>
              <button class="btn btn-link" @click="toDelete(producto.id)">Eliminar</button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>






<style scoped></style>
