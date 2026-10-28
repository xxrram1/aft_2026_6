<template>
    
    <div>
        <h1>แบบประเมินกรรมการ</h1>
        <p>ปีที่ประเมิน {{ YEAR }}</p>
        <form>
            <div v-for="r in rows" :key="r.id">
                <p>{{ r.user_id }} - {{ r.name }}</p>
                <p>{{ r.detail }}</p>

                <div>
                    <div>
                        <p>คะแนน</p>
                        <ScoreInput v-model="r.score" :types="r.type" />
                    </div>
                    <div>
                        <p>ความคิดเห็น</p>
                        <input v-model="r.reviews" placeholder="กรอกความคิดเห็น..." />
                    </div>
                    <div>
                        <p>ลายเซ็น</p>
                        <input v-model="r.sign" placeholder="ชื่อผู้ประเมิน..." />
                    </div>
                </div>

            </div>
            <p v-if="!rows.length"> ยังไม่มีการรับมอบหมายให้ประเมินใคร </p>
            <button v-if="rows.length">บันทึกแบบประเมิน</button>
        </form>
    </div>
</template>

<script setup>
import ScoreInput from '../../assets/ScoreInput.vue';
import { YEAR, api } from '../../lib';
import { ref, onMounted } from 'vue';
const rows = ref([])
const getdata = async () => {
    try{
        rows.value = (await api.get('/api/get-userinreview')).data.message
    } catch(e){
        alert(e)
    }
}
onMounted(getdata)

const submit = async () => {
    try {
        for (const r of rows.value) {
            await api.post('/api/')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>