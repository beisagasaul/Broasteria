<script setup lang="ts">
import { ref, onMounted } from "vue";
import http from "@/plugins/axios";
import router from "@/router";
import type { Ventadetalle } from '@/models/ventadetalle';
import type { Producto } from '@/models/producto';
import type { Venta } from '@/models/venta';

const props = defineProps<{
  ENDPOINT_API: string;
}>();

const ENDPOINT = props.ENDPOINT_API ?? "";

const ventadetalle = ref<Ventadetalle>({
  id: 0,
  cantidad: '1',
  subtotal: '0',
  venta: {
    id: 0,
    totalVenta: '',
    cliente: {
      id: 0,
      nombre : ''
    }
  },
  producto: {
    id: 0,
    nombre: ''
  }
});

const productos = ref<Producto[]>([]);
const ventas = ref<Venta[]>([]);

async function crearVentadetalle() {
  try {
    await http.post(ENDPOINT, {
      idVenta: ventadetalle.value.venta.id,
      idProducto: ventadetalle.value.producto.id
    });
    router.push("/ventadetalles");
  } catch (error) {
    console.error("Error al crear el detalle de venta:", error);
  }
}

async function getProductos() {
  try {
    const response = await http.get('productos');
    productos.value = response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
}

async function getVentas() {
  try {
    const response = await http.get('ventas');
    ventas.value = response.data;
  } catch (error) {
    console.error("Error al obtener las ventas:", error);
  }
}

onMounted(() => {
  getProductos();
  getVentas();
});

function goBack() {
  router.go(-1);
}
</script>

<template>
  <div class="container" v-if="ventadetalle && ventadetalle.producto && ventadetalle.venta">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/ventadetalles">Detalles de Venta</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Detalle de Venta</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearVentadetalle">
        <div class="form-floating mb-3">
          <select
            class="form-select"
            v-model="ventadetalle.venta"
            required
          >
            <option value="" disabled>Seleccione una venta</option>
            <option v-for="venta in ventas" :key="venta.id" :value="venta">
              Cliente- {{ venta.cliente.nombres }}
            </option>
          </select>
          <label for="venta">Venta</label>
        </div>

        <div class="form-floating mb-3">
          <select
            class="form-select"
            v-model="ventadetalle.producto"
            required
          >
            <option value="" disabled>Seleccione un producto</option>
            <option v-for="producto in productos" :key="producto.id" :value="producto">
              {{ producto.nombre }}
            </option>
          </select>
          <label for="producto">Producto</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            v-model="ventadetalle.cantidad"
            placeholder="Cantidad"
            required
          />
          <label for="cantidad">Cantidad</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="ventadetalle.subtotal"
            placeholder="Subtotal"
            required
          />
          <label for="subtotal">Subtotal</label>
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

<style scoped>
.container {
  padding: 20px;
}

button {
  margin-top: 10px;
}
</style>
