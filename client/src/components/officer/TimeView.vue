<template>
    <div>
        <h1>จัดการช่วงเวลาเปิด-ปิดวันประเมิน</h1>
        <form @submit.prevent="add()">
            <div>
                <p>เวลาเริ่ม</p>
                <input v-model="form.time_start" type="date"  />
            </div>
            <div>
                <p>เวลาปิด</p>
                <input v-model="form.time_end" type="date"  />
            </div>
            <button>เพิ่มช่วงเวลา</button>
        </form>

        <div>
            <h1>รายการทั้งหมด</h1>
            <div v-for="r in rows" :key="r.id">
                <h1>{{ thaidate(r.time_start) }} ถึง {{ thaidate(r.time_end) }}</h1>
            <div>
                <button @click="edit(r)">แก้ไข</button>
                <button @click="del(r)">ลบ</button>
            </div>
            </div>
        <p v-if="!rows.length">ยังไม่มีข้อมูล</p>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { thaidate, api, pickrows } from '../../lib';

const rows = ref([])
const form = ref({time_start: '', time_end: ''})

const getdata = async () => {
    try{
        rows.value = pickrows((await api.get('/api/get-time')).data)
    } catch(e){
        alert(e)
    }
}
onMounted(getdata)

const add = async () => {
    try{
        await api.post('/api/set-time', form.value)
        alert('สำเร็จ')
        form.value = {time_start: '', time_end: ''}
        getdata()
    } catch(e){
        alert(e)
    }
}

const edit = async (r) => {
    const datestartonly = new Date(r.time_start).toISOString().split('T')[0];
    const dateendonly = new Date(r.time_end).toISOString().split('T')[0];
    try{
        await api.put('/api/set-time', { time_start: datestartonly, time_end: dateendonly })
        alert('สำเร็จ')
        getdata()
    } catch(e){
        alert(e)
    }
}
</script>

<style lang="scss" scoped>

</style>