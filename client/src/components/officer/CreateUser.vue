<template>
    <div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '../../lib';

const form = ref({});
const fields = {
    username:'ชื่อผู้ใช้งาน',
    firstname:'ชื่อจริง',
    lastname:'นามสกุล',
    position:'ตำแหน่ง',
    department:'แผนก',
    password:'รหัสผ่าน',
}

const add = async () => {
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