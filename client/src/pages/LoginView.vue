<template>
    <div>
        <form class="min-h-screen flex  flex-col justify-center space-y-2 items-center p-3" @submit.prevent="">
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
<<<<<<< Updated upstream
 import axios from 'axios';
 import {ref} from 'vue'
 import { useRouter } from 'vue-router'
 import { jwtDecode } from 'jwt-decode';
 import { api } from '../lib';

 
=======
import { ref } from 'vue';

const form = ref({username:'',password:''})
>>>>>>> Stashed changes
</script>

<style lang="scss" scoped>

</style>