<template>
    <div>

    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { api, pickrows } from '../../lib';

const rows =ref([])

const getdata = async () => {
    try{
        rows.value = pickrows((await api.get('/api/role')).data)
    } catch(e) {
        alert(e)
    }
}
onMounted(getdata)

const add = async (r) => {
    try{
        await api.put('/api/create-user', { id: r.id, role: r.role, position: r.postition})
        alert('สำเร็จ')
    } catch(e){
        alert(e)
    }
}
</script>

<style lang="scss" scoped>

</style>