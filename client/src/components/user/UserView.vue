<template>
    <div class="p-3">
        <div class="border rounded-xl p-3">
            <h1>ข้อมูลของฉัน</h1>
            <p>ชื่อ-นามสกุล: {{ profile.firstname }} {{ profile.lastname }}</p>
            <p>ชื่อผู้ใช้: {{ profile.username }}</p>
            <p>ตำแหน่ง: <span>{{ profile.position }}</span>/ แผนก: {{ profile.department }}</p>
            <p>กรรมการผู้ประเมิน:
                <span v-if="boss">
                    {{ boss.firstname }} {{ boss.lastname }}
                    <span v-if="boss.position">({{ boss.position }}<span v-if="boss.department"> / {{ boss.department }}</span>)</span>
                </span>
                <span v-else>ไม่มีกรรมการผู้ประเมิน</span>
            </p>
            <p>ปีที่ประเมิน {{ YEAR }}</p>
        </div>

        <form @submit.prevent="submitall()">
            <h1>แบบประเมินตนเอง</h1>
            <div class="border rounded-xl " v-for="r in rows" :key="r.id">
                <p>หัวข้อ: {{ r.name }} <span>น้ำหนักคะแนน( {{ r.weight }})</span></p>
                <p>รายละเอียด {{ r.detail }}</p>

                <div>
                <div>
                    <p>คะแนนที่ประเมินตัวเอง</p>
                    <ScoreInput v-model="r.scores" :types="r.types ?? r.type" />
                </div>
                <div>
                    <p>ลิงก์ URL</p>
                    <input placeholder="กรอกลิงก์URL..." class="border rounded-xl" type="text" v-model="r.url"   />
                </div>
                </div>
                <button type="button" @click="submit(r)">บันทึกแบบประเมิน</button>
                
            </div>
            <p v-if="!rows.length">ยังไม่ได้รับมอบหมายหัวข้อการประเมิน</p>
            <button>ยืนยันแบบประเมิน</button>
        </form>

    </div>
</template>

<script setup>
import ScoreInput from '../../assets/ScoreInput.vue';
import { YEAR } from '../../lib';
import { ref, onMounted } from 'vue';
import { api, pickrows } from '../../lib';

const profile = ref({})
const boss = ref(null)
const rows = ref([])
const wang = ref({})

const getprofile = async () => {
    try{
        const response = (await api.get('/api/getprofile-user')).data
        profile.value = Array.isArray(response.rows) ? response.rows[0] ?? {} : {}
        boss.value = Array.isArray(response.boss) ? response.boss[0] ?? null : null
    } catch(e) {
        alert(e)
    }
}



const getdata = async () => {
    try{
        rows.value = pickrows((await api.get('/api/get-topicself')).data)
        
    } catch(e) {
        alert(e)
    }
}

onMounted(() => {
    getprofile(),
    getdata()
})

const submit = async (row) => {
    try {
        await api.post('/api/submituser-topic', {
            id: row.id,
            topic_id: row.topic_id,
            scores: row.scores,
            types: row.types ?? row.type,
            base_url: row.url
        })
        alert('สำเร็จ')
        getdata()
    } catch(e){
        alert(e)
    }
}

const submitall = async () => {
    try {
        await api.post('/api/submituser-all', {
            wang: wang.value
        })
        alert('สำเร็จ')
        getdata()
    } catch(e){
        alert(e)
    }
}

</script>

<style lang="scss" scoped>

</style>