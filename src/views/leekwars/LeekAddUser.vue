<script setup lang="ts">
import {usersStore} from "@/stores";
import {User} from "@/common/model";
import {inject} from "vue";
import type {IPluginServices} from "@/common/plugins/services";

const store = usersStore()
const user = new User()
const services: IPluginServices = <IPluginServices> inject('services')
function addAccount() {
  this.$services = services

  this.$services.leekServices.auth(user.username, user.password).then(data => {
    console.log('auth', data)
    user.token = data['token']
    store.add(user)
  })
}
</script>

<template>
  <div class="row row-cols-1">
    <div class="col">
      <div class="mb-3">
        <label for="" class="form-label">Email/Username</label>
        <input type="text" class="form-control" v-model="user.username" aria-describedby="emailHelpId"
               placeholder="email@mail.com">
        <small id="emailHelpId" class="form-text text-muted">Enter your email or username</small>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Password</label>
        <input type="password" class="form-control" v-model="user.password" aria-describedby="pwdHelpId">
        <small id="pwdHelpId" class="form-text text-muted">Enter your email or username</small>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary" v-on:click="addAccount()">Add account</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
