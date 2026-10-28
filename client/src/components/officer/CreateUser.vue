<template>
    <div>   
        <form  class="min-h-screen flex  flex-col justify-center space-y-2 items-center p-3" @submit.prevent="handleregister()">
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
import { useRouter } from 'vue-router';
import { api } from '../lib';

const form = ref({});
const fields = {
    username:'ชื่อผู้ใช้งาน',
    firstname:'ชื่อจริง',
    lastname:'นามสกุล',
    position:'ตำแหน่ง',
    department:'แผนก',
    password:'รหัสผ่าน',
}

const handleregister = async () => {
    try{
        const res = await api.post('/api/create-user', form.value)
        alert('สำเร็จ')
    } catch(e) {
        alert(e)
    }
}
</script>

<style lang="scss" scoped>

</style>