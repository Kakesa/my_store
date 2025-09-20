<template>
  <div class="container">
    <RegisterForm />
    <p class="info-text">
      Déjà un compte ? 
      <router-link to="/login" class="login-link">Connectez-vous</router-link>
    </p>
  </div>
</template>

<script setup>
import RegisterForm from "../components/RegisterForm.vue";
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

.login-link {
  color: #4caf50; /* Couleur du lien */
  font-weight: bold; /* Mettre en gras */
  text-decoration: none; /* Enlever le soulignement */
}

.login-link:hover {
  text-decoration: underline; /* Soulignement au survol */
}
</style>