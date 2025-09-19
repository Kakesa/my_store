<template>
  <div class="form-container">
    <h2 class="form-title">Régistrarr</h2>
    <form @submit.prevent="handleRegister" class="form">
      <input v-model="name" type="text" placeholder="Nom" class="input" required />
      <input v-model="firstName" type="text" placeholder="Prénom" class="input" required />
      <input v-model="phone" type="text" placeholder="Téléphone" class="input" required />
      <input v-model="email" type="email" placeholder="Email" class="input" required />
      <input v-model="password" type="password" placeholder="Mot de passe" class="input" required />
      <button type="submit" class="submit-button">S'inscrire</button>
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
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
  border: 1px solid #e0e0e0; 
}

.form-title {
  text-align: center;
  font-size: 24px; 
  margin-bottom: 20px; 
  color: #333; 
}

.input {
  border: 1px solid #ccc; 
  padding: 15px;
  margin-bottom: 15px; 
  border-radius: 30px;
  font-size: 16px; 
  width: calc(100% - 20px); 
  transition: border-color 0.3s; 
}

.input:focus {
  border-color: #4caf50; /* Bordure verte au focus */
  outline: none; /* Enlever l'outline par défaut */
}

.submit-button {
  background-color: #4caf50; 
  color: white;
  padding: 15px;
  border: none;
  border-radius: 30px; 
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s; 
  width: 75%; 
}

.submit-button:hover {
  background-color: #45a049; 
}
</style>