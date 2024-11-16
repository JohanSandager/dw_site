<template>
  <div class="flex flex-col items-center">
    <h1 class="text-5xl font-bold text-primary my-6">Sign In with E-Mail</h1>
    <div>
      <p>Email</p>
      <input v-model="email" type="email" />
    </div>
    <div>
      <p>Password</p>
      <input v-model="password" type="password" />
    </div>
    <button
      @click="signInWithOtp"
      class="border-[1px] rounded-md px-4 py-1 mt-4 active:bg-primary"
    >
      Login
    </button>
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
