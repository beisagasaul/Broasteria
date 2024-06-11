<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Producto } from '@/models/producto'
import type { Categoria } from '@/models/categoria'
const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const producto = ref<Producto>({})
const categorias = ref<Categoria[]>([])

async function crearProducto() {
  await http
    .post(ENDPOINT, {
      idCategoria: producto.value.categoria.id,
      nombre: producto.value.nombre,
      descripcion: producto.value.descripcion,
      precioUnitario: producto.value.precioUnitario,
      stock: producto.value.stock
    })
    .then(() => router.push('/productos'))
}

onMounted(async () => {
  categorias.value = await http.get('categorias').then((res) => res.data)
})

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
          <RouterLink to="/productos">Productos</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Producto</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearProducto">
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="producto.nombre"
            placeholder="Nombre"
            required
          />
          <label for="nombre">Nombre</label>
        </div>

        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="producto.descripcion"
            placeholder="Descripcion"
            required
          />
          <label for="descripcion">Descripcion</label>
        </div>

        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="producto.precioUnitario"
            placeholder="PrecioUnitario"
            required
          />
          <label for="preciounitario">Precio Unitario</label>
        </div>

        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="producto.stock"
            placeholder="stock"
            required
          />
          <label for="stock">Disponibilidad</label>
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
