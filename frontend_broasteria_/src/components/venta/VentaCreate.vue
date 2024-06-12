<script setup lang="ts">
import { ref, onMounted } from "vue"; // Importa onMounted desde Vue
import http from "@/plugins/axios";
import router from "@/router";
import type { Venta } from '@/models/venta';
import type { Cliente } from '@/models/cliente';

const props = defineProps<{
  ENDPOINT_API: string;
}>();

const ENDPOINT = props.ENDPOINT_API ?? "";
const venta = ref<Venta>({} as Venta); // Debe ser ref<Venta> en lugar de ref<Venta[]>
const clientes = ref<Cliente[]>([]);

async function crearVenta() {
  await http
    .post(ENDPOINT, {
      idCliente: venta.value.cliente.id,
      totalVenta: venta.value.totalVenta
    })
    .then(() => router.push("/ventas"));
}

async function getClientes() {
  clientes.value = await http.get('clientes').then((res) => res.data);
}

onMounted(() => {
  getClientes();
});

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


        <div class="form-floating mb-2">
          <select class="form-select" v-model="venta.cliente" required>
          <option value="" :disabled="true">Seleccione un elemento</option>
          <option v-for="cliente in clientes" :key="cliente.id" value="cliente">
            {{ cliente.nombres }}
          </option> 
          </select>
          <label for="cliente">Cliente</label>
        </div>

        <div class="form-floating mb-2">
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
