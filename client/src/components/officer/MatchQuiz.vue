<template>
    <div>
        <h1>จับคู่ผู้รับการประเมิน กับ หัวข้อการประเมิน</h1>
        <p>ปีที่ประเมิน {{ YEAR }}</p>
        <form @submit.prevent="add()">
            <div>
                <p>รายชื่อผู้รับการประเมิน</p>
                <select v-model="form.user_id">
                    <option disabled value="">--เลือกหัวข้อ----</option>
                    <option v-for="u in users" :key="u.id" :value="u.id">{{ u.firstname }} {{ u.lastname }}</option>
                </select>
            </div>
            <div>
                <p>หัวข้อการประเมิน</p>
                <select v-model="form.topic_id">
                    <option disabled value="">--เลือกหัวข้อ----</option>
                    <option v-for="t in topics" :key="t.id" :value="t.id">{{ t.name }}</option>
                </select>
            </div>
            <button>เพิ่มการจับคู่</button>
        </form>

        <div v-for="r in rows" :key="r.id">
            <div>
                <p>รายชื่อผู้รับการประเมิน</p>
                <select v-model="r.user_id">
                    <option v-for="u in users" :key="u.id" :value="u.id">{{ u.firstname }} {{ u.lastname }}</option>
                </select>
            </div>
            <div>
                <p>หัวข้อการประเมิน</p>
                <select v-model="r.topic_id">
                    <option v-for="t in topics" :key="t.id" :value="t.id">{{ t.name }}</option>
                </select>
            </div> 
            <div>
                <button @click="edit(r)">แก้ไข</button>
                <button @click="del(r)">ลบ</button>
            </div>           
        </div>
            <p v-if="!rows.length">ไม่มีข้อมูล</p>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { api, useCrud, uselist, YEAR } from '../../lib';


const {rows, form, add, edit, del} = useCrud({
    list: '/api/alltopic',
    add: '/api/bind-topic'
}, {
    eyal_year: YEAR
})

const users = uselist('/api/getuser')
const topics = uselist('/api/alltopic')

form.value.user_id = ''
form.value.boss_id = ''

const MatchQuiz = async () => {
    await add()
    if(form.value.user_id) form.value.user_id = ''
    if(form.value.boss_id) form.value.boss_id = ''
}


</script>

<style lang="scss" scoped>

</style>