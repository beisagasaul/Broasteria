<script setup lang="ts">
import type { Venta } from '@/models/venta'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'


const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var ventas = ref<Venta[]>([])

async function getVentas() {
  ventas.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/ventas/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la Venta?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getVentas())
  }
}

onMounted(() => {
  getVentas()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Ventas</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Ventas</h2>
      <div class="col-12">
        <RouterLink to="/ventas/crear"
          ><font-awesome-icon icon="fa-solid fa-plus" /> Crear Nueva Venta</RouterLink
        >
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Cliente</th>
            <th scope="col">Total de venta</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(venta, index) in ventas.values()" :key="venta.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ venta.cliente.nombres }}</td>
            <td>{{ venta.totalVenta }}</td>
           

            <td>
              <button class="btn btn-link" @click="toEdit(venta.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-link" @click="toDelete(venta.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
