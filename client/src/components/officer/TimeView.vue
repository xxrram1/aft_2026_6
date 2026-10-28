<template>
    <div>
        <h1>จัดการช่วงเวลาเปิด-ปิดวันประเมิน</h1>
        <form @submit.prevent="add()">
            <div>
                <p>เวลาเริ่ม</p>
                    <input v-model="form.time1" type="date"  />
            </div>
            <div>
                <p>เวลาปิด</p>
                    <input v-model="form.time2" type="date"  />
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
import { thaidate } from '../../lib';

</script>

<style lang="scss" scoped>

</style>