<script setup lang="ts">
import { ref } from "vue";
import http from "@/plugins/axios";
import router from "@/router";
import type { Empleado } from "@/models/empleado";
import type { Usuario } from "@/models/usuario";

const props = defineProps<{
  ENDPOINT_API: string;
}>();

const ENDPOINT = props.ENDPOINT_API ?? "";
const empleado = ref<Empleado>({} as Empleado);
const usuario = ref<Usuario[]>([]);

async function crearEmpleado() {
  await http
    .post(ENDPOINT, {
      idUsuario: empleado.value.usuario.id,
      nombres: empleado.value.nombres,
      apellidos: empleado.value.apellidos,
      cargo: empleado.value.cargo,
      salario: empleado.value.salario,
      fechaContratacion: empleado.value.fechaContratacion,
    })
    .then(() => router.push("/empleados"));
}
onMounted(async () => {
  usuarios.value = await http.get("usuarios").then((res) => res.data);
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
          <RouterLink to="/empleados">Empleados</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Empleado</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearEmpleado">
        <div class="form-floating mb-2">
          <select class="form-select" v-model="empleado.usuario" required />
          <option value="" :disabled="false">Seleccione un elemento</option>
          <option v-for="usuario in usuarios" :key="usuario.id" value="usuario">
            {{ usuario.nombreUsuario }}
          </option>
          <label for="usuario">Usuario</label>
        </div>

        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="empleado.nombres"
            placeholder="Nombre"
            required
          />
          <label for="nombres">Nombre</label>
        </div>

        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="empleado.apellidos"
            placeholder="Apellido"
            required
          />
          <label for="apellidos">Apellido</label>
        </div>

        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="empleado.cargo"
            placeholder="Cargo"
            required
          />
          <label for="cargo">Cargo</label>
        </div>

        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="empleado.salario"
            placeholder="Salario"
            required
          />
          <label for="salario">Salario</label>
        </div>

        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="empleado.fechaContratacion"
            placeholder="Fecha de Contratación"
            required
          />
          <label for="fechaContratacion">Fecha de contratacion</label>
        </div>
        

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Crear
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
