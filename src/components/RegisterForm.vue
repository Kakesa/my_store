<template>
  <div class="form-container">
    <h2 class="form-title">Régistrarr</h2>
    <form @submit.prevent="handleRegister" class="form">
      <input v-model="name" type="text" placeholder="Nom" class="input" required />
      <input v-model="firstName" type="text" placeholder="Prénom" class="input" required />
      <input v-model="phone" type="text" placeholder="Téléphone" class="input" required />
      <input v-model="email" type="email" placeholder="Email" class="input" required />
      <input v-model="password" type="password" placeholder="Mot de passe" class="input" required />
      <div class="button-container">
        <button type="submit" class="submit-button">S'inscrire</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const name = ref("");
const firstName = ref("");
const phone = ref("");
const email = ref("");
const password = ref("");

const auth = useAuthStore();
const router = useRouter();

const handleRegister = async () => {
  try {
    await auth.register({
      name: name.value,
      firstName: firstName.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
      role: "user" // rôle par défaut
    });
    alert("Compte créé avec succès ! Connectez-vous.");
    router.push("/login");
  } catch (err) {
    console.error(err);
    alert("Erreur lors de l'inscription.");
  }
};
</script>

<style>
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff; /* Fond blanc */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Ombre douce */
  border: 1px solid #e0e0e0; /* Bordure légère */
}

.form-title {
  text-align: center;
  font-size: 24px; /* Taille du titre */
  margin-bottom: 20px; /* Espacement en bas */
  color: #333; /* Couleur du texte */
}

.input {
  border: 1px solid #ccc; /* Bordure grise */
  padding: 10px;
  margin-bottom: 15px; /* Espacement entre les champs */
  border-radius: 5px; /* Coins arrondis */
  font-size: 16px; /* Taille de police */
  width: calc(100% - 20px); /* Largeur complète */
  transition: border-color 0.3s; /* Transition sur le focus */
}

.input:focus {
  border-color: #4caf50; /* Bordure verte au focus */
  outline: none; /* Enlever l'outline par défaut */
}

.button-container {
  display: flex;
  justify-content: center; /* Centre le bouton horizontalement */
}

.submit-button {
  background-color: #4caf50; /* Couleur du bouton */
  color: white;
  padding: 10px 20px; /* Espacement vertical et horizontal */
  border: none;
  border-radius: 5px; /* Coins arrondis */
  cursor: pointer;
  font-size: 16px; /* Taille de police */
  transition: background-color 0.3s; /* Transition sur le survol */
}

.submit-button:hover {
  background-color: #45a049; /* Couleur sombre au survol */
}
</style>