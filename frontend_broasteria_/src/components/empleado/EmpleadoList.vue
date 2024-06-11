<script setup lang="ts">
import type { Empleado } from "@/models/empleado";
import { onMounted, ref } from "vue";
import http from "@/plugins/axios";
import router from "@/router";

const props = defineProps<{
  ENDPOINT_API: string;
}>();

const ENDPOINT = props.ENDPOINT_API ?? "";
var empleados = ref<Empleado[]>([]);


async function getEmpleados() {
  empleados.value = await http.get(ENDPOINT).then((response) => response.data);
}

function toEdit(id: number) {
  router.push(`/empleados/editar/${id}`);
}

async function toDelete(id: number) {
  var r = confirm("¿Está seguro que se desea eliminar el Empleado?");
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getEmpleados());
  }
}

onMounted(() => {
  getEmpleados();
});
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Empleados</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Empleados</h2>
      <div class="col-12">
        <RouterLink to="/empleados/crear"
          ><font-awesome-icon icon="fa-solid fa-plus" title="Crear Nuevo"
        /></RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Usuario</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Cargo</th>
            <th scope="col">Salario</th>
            <th scope="col">Fecha de Contratación</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(empleado, index) in empleados.values()" :key="empleado.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ empleado.usuario.nombreUsuario }}</td>
            <td>{{ empleado.nombres }}</td>
            <td>{{ empleado.apellidos }}</td>
            <td>{{ empleado.cargo }}</td>
            <td>{{ empleado.salario }}</td>
            <td>{{ empleado.fechaContratacion }}</td>

            <td>
              <button class="btn btn-link" @click="toEdit(empleado.id)">
                <font-awesome-icon icon="fa-solid fa-edit" title="Editar" />
              </button>

              <button class="btn btn-link" @click="toDelete(empleado.id)">
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
