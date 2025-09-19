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
