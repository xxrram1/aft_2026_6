<template>
    <div>
        <div>
            <h1>ข้อมูลของฉัน</h1>
            <p>ชื่อ-นามสกุล: {{ profile.firstname }} {{ profile.lastname }}</p>
            <p>ตำแหน่ง: <span>{{ profile.position }}</span>/ แผนก: {{ profile.department }}</p>
            <p>กรรมการผู้ประเมิน: 
                <span v-if="profile.boss">{{ profile.boss }}</span>
                <span v-else>ไม่มีกรรมการผู้ประเมิน</span>
            </p>
            <p>ปีที่ประเมิน {{ YEAR }}</p>
        </div>

        <form>
            <h1>แบบประเมินตนเอง</h1>
            <div v-for="r in rows" :key="r.id">
                <p>หัวข้อ: {{ r.name }} <span>น้ำหนักคะแนน( {{ r.weight }})</span></p>
                <p>รายละเอียด {{ r.detail }}</p>
                <p>{{ r.base_url }}</p>

                <div>
                <div>
                    <p>คะแนนที่ประเมินตัวเอง</p>
                    <ScoreInput v-model="r.selfscore" :type="r.type" />
                </div>
                <div>
                    <p>ลิงก์ URL</p>
                    <input v-model="r.url" placeholder="วางลิงก์ URL "  />
                </div>
                </div>
            </div>
            <p v-if="!rows.length">ยังไม่ได้รับมอบหมายหัวข้อการประเมิน</p>
            <button>บันทึกแบบประเมิน</button>
        </form>

    </div>
</template>

<script setup>
import ScoreInput from '../../assets/ScoreInput.vue';
import { YEAR } from '../../lib';


</script>

<style lang="scss" scoped>

</style>