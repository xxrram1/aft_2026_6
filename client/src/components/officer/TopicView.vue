<template>
    <div>
        <h1>สร้างหัวข้อการประเมิน</h1>
    <form @submit.prevent="TopicView()">
        <div>
            <p>ชื่อหัวข้อการะเมิน</p>
            <input v-model="form.name" type="text" placeholder="ชื่อหัวข้อ..." />
        </div>
        <div>
            <p>รายละเอียด</p>
            <input v-model="form.detail" type="text" placeholder="รายละเอียด..." />
        </div>
        <div>
            <p>ลิงก์ URL</p>
            <input v-model="form.base_url" type="text" placeholder="ลิงก์ URL" />
        </div>
        <div>
            <p>น้ำหนักคะแนน</p>
            <input v-model="form.weight" type="number" placeholder="น้ำหนักคะแนน" />
        </div>
        <div>
            <p>รูปแบบการให้คะแนน</p>
            <select v-model="form.types">
                <option disabled value="">--เลือกหัวข้อ--</option>
                <option v-for="t in types" :key="t.id" :value="t.id">{{ t.label }}</option>
            </select>
        </div>
        <button>เพิ่มหัวข้อการประเมิน</button>
    </form>

    <div>
        <h1>รายการทั้งหมด</h1>
        <div v-for="r in rows" :key="r.id">
            <input v-model="r.name" />
            <input v-model="r.detail" />
            <input v-model="r.base_url" />
            <input v-model="r.weight" />
            <select v-model="r.type">
                <option v-for="t in types" :key="t.id" :value="t.id">{{ t.label }}</option>
            </select>
            <div>
                <button @click="edit(r)">แก้ไข</button>
                <button @click="del(r)">ลบ</button>
            </div>
        </div>
        <p v-if="!row.length">ไม่มีข้อมูล</p>
    </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { api, useCrud } from '../../lib';

const types = [
    {id:'1',label:'คะแนน 1-4'},
    {id:'2',label:'ผ่าน / ไม่ผ่าน'},
]

const {rows, form, add, edit, del} = useCrud({
    add:'/api/addtopic',
    list: '/api/alltopic'
})
</script>

<style lang="scss" scoped>

</style>