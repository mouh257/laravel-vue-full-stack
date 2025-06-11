<script setup>

import GuestLayout from "../components/GuestLayout.vue";
import {ref} from "vue";
import axiosClient from "../axios.js";
import router from "../router.js";

const data=ref({
  name:'',
  organisation:'',
  email:'',
  password:'',
  password_confirmation:'',
})
const errors=ref('')

function submit(){
  axiosClient.get('/sanctum/csrf-cookie').then(response => {
    axiosClient.post("/register", data.value)
        .then(response =>{
          router.push({name:'Home'})
        })
        .catch(error=>{
          console.log(error.response.data)
          errors.value=error.response.data.message;
        })
  });
}
</script>

<template>
  <GuestLayout>
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create new account</h2>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <div v-if="errors"
           class="space-y-6 mt-4 py-2 px-3 rounded text-white bg-red-400">
        {{errors}}
      </div>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

      <form @submit.prevent="submit" class="space-y-6" >

        <div>
          <label for="name" class="block text-sm/6 text-left font-medium text-gray-900" >Full name</label>
          <div class="mt-2">
            <input type="text" name="name" id="name"
                   v-model="data.name"
                   required="required" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <label for="organisation" class="block text-sm/6 text-left font-medium text-gray-900" >Organisation</label>
          <div class="mt-2">
            <input type="text" name="organisation" id="organisation" v-model="data.organisation"
                   required="required" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm/6 text-left font-medium text-gray-900" >Email address</label>
          <div class="mt-2">
            <input type="email" name="email" id="email" v-model="data.email" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
            <label for="password" class="block text-sm/6 text-left font-medium text-gray-900">Password</label>
          <div class="mt-2">
            <input
                type="password"
                name="password"
                id="password"
                v-model="data.password"
                required=""
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <label for="password_confirmation" class="block text-sm/6 text-left font-medium text-gray-900">Password confirmation</label>
          <div class="mt-2">
            <input type="password" name="password_confirmation"
                   id="password_confirmation"
                   v-model="data.password_confirmation"
                   required="required"
                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Create</button>
        </div>

      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already a member?
        {{ ' ' }}
        <RouterLink :to="{name:'Login'}"  class="font-semibold text-indigo-600 hover:text-indigo-500">Login here </RouterLink>
      </p>
    </div>
  </GuestLayout>
</template>

<style scoped>

</style>