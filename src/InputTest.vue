<template>
  <input type="text" />
  <button @click="logout">XYZ</button>
</template>
<script setup>
  import {inject} from "vue";
  const logout = inject('logout')
</script>
<script>
export default {
  name: 'InputText'
}
</script>
