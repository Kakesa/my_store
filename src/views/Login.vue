<template>
  <div class="container">
    <LoginForm />
    <p class="info-text">
      Pas encore de compte ? 
      <router-link to="/signup" class="signup-link">Inscrivez-vous</router-link>
    </p>
  </div>
</template>

<script setup>
import LoginForm from "../components/LoginForm.vue";
</script>

<style>
.container {
  max-width: 400px; /* Largeur maximale */
  margin: 50px auto; /* Centrage vertical et horizontal */
  padding: 30px; /* Espacement interne */
  border-radius: 10px; /* Coins arrondis */
  background-color: #fff; /* Fond blanc */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Ombre douce */
  border: 1px solid #e0e0e0; /* Bordure légère */
}

.info-text {
  margin-top: 20px; /* Espacement en haut */
  text-align: center; /* Centrer le texte */
  font-size: 14px; /* Taille de police */
  color: #333; /* Couleur du texte */
}

.signup-link {
  color: #4caf50; /* Couleur du lien */
  font-weight: bold; /* Mettre en gras */
  text-decoration: none; /* Enlever le soulignement */
}

.signup-link:hover {
  text-decoration: underline; /* Soulignement au survol */
}
</style>