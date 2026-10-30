<template>
    <div>
        <h1>แบบประเมินกรรมการ</h1>
        <p>ปีที่ประเมิน {{ YEAR }}</p>

        <div v-for="r in rows" :key="r.id" class="border rounded-xl p-3">
            <p>ผู้รับการประเมิน: {{ r.firstname }} {{ r.lastname }}</p>
            <p>หัวข้อ: {{ r.name }}</p>
            <p v-if="r.detail">รายละเอียด: {{ r.detail }}</p>
            <p v-if="r.weight">น้ำหนักคะแนน: {{ r.weight }}</p>

            <div>
                <p>คะแนน</p>
                <ScoreInput v-model="r.scores" :types="r.types ?? r.type" />
            </div>
            <div>
                <p>ความคิดเห็น</p>
                <input v-model="r.comment" placeholder="กรอกความคิดเห็น..." />
            </div>

            <button type="button" @click="submitTopic(r)">บันทึกแบบประเมิน</button>
        </div>

        <p v-if="!rows.length">ยังไม่มีการรับมอบหมายให้ประเมินใคร</p>

        <div v-if="rows.length" class="border rounded-xl p-3 mt-4">
            <p>ความคิดเห็นโดยรวม</p>
            <input v-model="comments" placeholder="กรอกความคิดเห็นโดยรวม..." />
            <p>ลายเซ็น</p>
            <input type="file" @change="file = $event.target.files[0]" />
            <button type="button" @click="submitAll()">บันทึกทั้งหมด</button>
        </div>
    </div>
</template>


<script setup>
import ScoreInput from '../../assets/ScoreInput.vue'
import { YEAR, api } from '../../lib'
import { ref, onMounted } from 'vue'

const rows = ref([])

const getdata = async () => {
    try {
        rows.value = (await api.get('/api/get-userinreview')).data.rows
    } catch (e) {
        alert(e)
    }
}
onMounted(getdata)

const pay = (r) => ({
    user_id: r.user_id,
    topic_id: r.topic_id,
    scores: r.scores,
    comment: r.comment,
})

const comments = ref('')
const file = ref(null)

const submitTopic = async (r) => {
    try {
        await api.post('/api/submitboss-topic', pay(r))
        alert('สำเร็จ')
        await getdata()
    } catch (e) {
        alert(e)
    }
}

const submitAll = async () => {
    try {
        const fd = new FormData()
        fd.append('user_id', rows.value[0].user_id)
        fd.append('comments', comments.value)
        fd.append('signs', file.value)


        await api.post('/api/submitboss-all', fd)
        alert('สำเร็จ')
        getdata()
    } catch (e) {
        alert(e)
    }
}
</script>