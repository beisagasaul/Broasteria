<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useAuthStore } from "@/stores/index";
const authStore = useAuthStore();
</script>

<template>
  <header>
  
    <div class="wrapper">
     

      <nav>
        <RouterLink v-if="!authStore.token" to="/login" ></RouterLink>
        <span v-else>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/clientes">Clientes</RouterLink>
        <RouterLink to="/ventas">Ventas</RouterLink>
        <RouterLink to="/ventadetalles"> Detalle de Ventas</RouterLink>
        <RouterLink to="/productos">Productos</RouterLink>
        <RouterLink to="/categorias">Categorias</RouterLink> 
        <RouterLink to="/usuarios">Usuarios</RouterLink>  
        <RouterLink to="/empleados">Empleados</RouterLink>
        <RouterLink to="/about">Acerca de</RouterLink>
        <a @click="authStore.logout()" class="text-danger">Salir</a>
        </span>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 2;
  max-height: 0vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 1);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
