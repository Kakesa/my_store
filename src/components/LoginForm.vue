<template>
  <div class="form-container">
    <h2 class="form-title">Se connecter</h2>
    <form @submit.prevent="handleLogin" class="form">
      <input v-model="email" type="email" placeholder="Email" class="input" required />
      <input v-model="password" type="password" placeholder="Mot de passe" class="input" required />
      <button type="submit" class="submit-button">Se connecter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const auth = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  try {
    await auth.login(email.value, password.value);
    if (auth.role === "admin") router.push("/dashboard");
    else router.push("/my-dashboard");
  } catch (err) {
    alert("Échec de connexion");
    console.error(err);
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