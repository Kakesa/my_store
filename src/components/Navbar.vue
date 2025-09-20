<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/" class="brand">HK</router-link>
      </div>

      <!-- Liens centraux -->
      <div class="nav-links">
        <router-link to="/" class="navbar-item">ACCUEIL</router-link>
        <router-link to="/all-things" class="navbar-item">OBJETS DISPONIBLES</router-link>
      </div>

      <!-- Auth -->
      <div class="auth-links">
        <template v-if="loggedIn">
          <router-link
            v-if="isAdmin"
            to="/dashboard"
            class="navbar-item"
          >
            Dashboard Admin
          </router-link>
          <router-link
            v-else
            to="/my-dashboard"
            class="navbar-item"
          >
            Mon Dashboard
          </router-link>
          <button @click="logout" class="logout-button">Déconnexion</button>
        </template>
        <template v-else>
          <router-link to="/login" class="navbar-item">Connexion</router-link>
          <router-link to="/register" class="navbar-item create-account">
            Créer un compte
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();

const loggedIn = computed(() => !!auth.user);
const isAdmin = computed(() => auth.role === "admin");

const logout = () => {
  auth.logout();
  router.push("/login");
};
</script>

<style scoped>

</style>
