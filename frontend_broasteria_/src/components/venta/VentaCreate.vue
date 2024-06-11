<script setup lang="ts">
import { ref } from "vue";
import http from "@/plugins/axios";
import router from "@/router";
import type { Venta } from '@/models/venta'
import type { Cliente } from '@/models/cliente'

const props = defineProps<{
  ENDPOINT_API: string;
}>();

const ENDPOINT = props.ENDPOINT_API ?? "";
const venta = ref<Venta[]>({} as Venta);
const clientes = ref<Cliente[]>([])

async function crearVenta() {
  await http
    .post(ENDPOINT, {
      idCliente: venta.value.cliente.id,
      totalVenta: venta.value.totalVenta
    })
    .then(() => router.push("/ventas"));
}

onMounted(async () => {
  clientes.value = await http.get('clientes').then((res) => res.data)
})

function goBack() {
  router.go(-1);
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/ventas">Ventas</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nueva Venta</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearVenta">
        <div class="form-floating mb-3">
          <select
            class="form-select"
            v-model="venta.cliente"
            placeholder="TotalVenta"
            required
          />
          <option value="":disabled="true">Seleccione un elemento</option>
          <option v-for="cliente in clientes" :key="cliente.id" value="cliente">
            {{ cliente.nombres }}
          </option>
          <label for="totalVenta">Total de Venta</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="venta.totalVenta"
            placeholder="TotalVenta"
            required
          />
          <label for="totalVenta">Total de Venta</label>
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
