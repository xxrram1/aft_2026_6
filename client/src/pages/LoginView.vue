<template>
    <div>
        <form class="min-h-screen flex  flex-col justify-center space-y-2 items-center p-3" @submit.prevent="handlelogin()">
            <div>
                <p>ชื่อผู้ใช้งาน</p>
                <input class="rounded-xl w-90 border p-2" v-model="form.username" placeholder="ชื่อผู้ใช้งาน..." type="text" />
            </div>
            <div>
                <p>รหัสผ่าน</p>
                <input class="rounded-xl w-90 border p-2" v-model="form.password" placeholder="รหัสผ่าน..." type="password" />
            </div>
            <button class="rounded-xl w-90 border border-black bg-blue-600 hover:bg-blue-500 text-white p-2">เข้าสู่ระบบ</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { jwtDecode } from 'jwt-decode';
import { api } from '../lib';

const router = useRouter()
const form = ref({ username: '', password: '', firstlogin: '', expires: ''})

const handlelogin = async () => {
    if (!form.value.username || !form.value.password) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        return;
    }
    try {
        const res = await api.post('/api/login', form.value)
        localStorage.setItem('authtoken', res.data.token)
        alert('เข้าสู่ระบบสำเร็จ')
        
        const decoded = jwtDecode(res.data.token)
        const id = decoded.id
        const role = decoded.role
        
        if( res.data.firstlogin === true) {
        router.push(`/chagpassvue/${id}`) } 
        else{
            router.push('/' + role)
        }
    } catch (e) {
        alert(e)
    }
}
</script>


<style lang="scss" scoped>

</style>