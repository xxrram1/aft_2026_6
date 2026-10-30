<template>
    <div>
        <h1>จับคู่ผู้รับการประเมิน กับ หัวข้อการประเมิน</h1>
        <p>ปีที่ประเมิน {{ YEAR }}</p>
        <form @submit.prevent="MatchView()">
            <div>
                <p>รายชื่อผู้รับการประเมิน</p>
                <select v-model="form.user_id">
                    <option disabled value="">--เลือกหัวข้อ----</option>
                    <option v-for="u in users" :key="u.id" :value="u.id">{{ u.firstname }} {{ u.lastname }}</option>
                </select>
            </div>
            <div>
                <p>กรรมการผู้ประเมิน</p>
                <select v-model="form.boss_id">
                    <option disabled value="">--เลือกกรรมการ--</option>
                    <option v-for="b in bosses" :key="b.id" :value="b.id">{{ [b.firstname, b.lastname].filter(Boolean).join(' ') || b.username }}</option>
                </select>
            </div>
            <button>เพิ่มการจับคู่</button>
        </form>

        <div v-for="r in rows" :key="r.id">
            <div>
                <p>กรรมการผู้ประเมิน</p>
                <select v-model="r.user_id">
                    <option v-for="u in users" :key="u.id" :value="u.id">{{ u.firstname }} {{ u.lastname }}</option>
                </select>
            </div>
            <div>
                <p>หัวข้อการประเมิน</p>
                <select v-model="r.boss_id">
                    <option v-for="b in bosses" :key="b.id" :value="b.id">{{ [b.firstname, b.lastname].filter(Boolean).join(' ')}}</option>
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
import { ref } from 'vue';
import { useCrud, uselist, YEAR } from '../../lib';

const { rows, form, add, edit, del} = useCrud({
    add:'/api/bind-boss',
    list:'/api/get-bindboss'
},
{
    eyal_year: YEAR
})

const users = uselist('/api/get-user')
const bosses = uselist('/api/get-boss')

form.value.user_id = ''
form.value.boss_id = ''

const MatchView = async () => {
    await add()
    if (form.value.user_id === null) form.value.user_id = ''
    if (form.value.boss_id === null) form.value.boss_id = ''

}


</script>

<style lang="scss" scoped>

</style>