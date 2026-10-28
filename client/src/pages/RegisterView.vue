<template>
    <div>   
        <form  class="min-h-screen flex  flex-col justify-center space-y-2 items-center p-3" @submit.prevent="">
            <div v-for="(value,key) in fields" :key="key">
                <h1>{{ value }}</h1>
                <input class="rounded-xl w-90 border p-2"  v-model="form[key]" :type="key === 'password' ? 'password' : 'text'" :placeholder="value + '...'"  />
            </div>
            <button class="rounded-xl w-90 border border-black bg-blue-600 hover:bg-blue-500 text-white p-2">สมัครบัญชี</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});
const fields = {
    username:'ชื่อผู้ใช้งาน',
    firstname:'ชื่อจริง',
    lastname:'นามสกุล',
    position:'ตำแหน่ง',
    department:'แผนก',
    password:'รหัสผ่าน',
}
</script>

<style lang="scss" scoped>

</style>