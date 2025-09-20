<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"; // Assurez-vous que le chemin est correct
</script>

<style>
/* Styles globaux si nécessaire */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4; /* Couleur de fond générale */
}
</style>