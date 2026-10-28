<template>
    <div>
        <h1>เปลี่ยนรหัสผ่าน</h1>
        <h1>ผู้ใช้งานรหัส {{ id }}</h1>
        <form @submit.prevent="save()">
            <div>
                <p>รหัสผ่านใหม่</p>
                <input v-model="password" type="password" placeholder="รหัสผ่านใหม่..." />
            </div>
            <button>เปลี่ยนรหัสผ่าน</button>
        </form>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { api } from '../lib';
import { jwtDecode } from 'jwt-decode';

const route = useRoute()
const router = useRouter()
const id = route.params.id

const password = ref('')

const save = async () => {
    if (!password.value) {
        alert('กรุณากรอกรหัสผ่านใหม่')
        return
    }
    try {
        await api.post('/api/reset-password', { id, password: password.value })
        alert('เปลี่ยนรหัสผ่านสำเร็จ')
        
        const token = localStorage.getItem('authtoken')
        
        if (token) {
            const decoded = jwtDecode(token)
            const role = decoded.role
        
        if (role) {
            router.push('/' + role)
        } else {
            router.push('/login')
        }
        } else{
            router.push('/login')
    }
    } catch (e) {
        console.log(e)
        alert(e)
    }
}
</script>
<style lang="scss" scoped>

</style>