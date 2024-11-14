<template>
  <div class="flex flex-col">
    <button @click="signInWithOtp">Sign In with E-Mail</button>
    <div>
      <p>Email</p>
      <input v-model="email" type="email" />
    </div>
    <div>
      <p>Password</p>
      <input v-model="password" type="password" />
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const router = useRouter();

const signInWithOtp = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) console.log(error);
  else {
    console.log("Success");
    router.push("/manage-menu");
  }
};
</script>
