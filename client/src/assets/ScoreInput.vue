<template>
    <select v-model="model">
        <option disabled value="">--เลือก--</option>
        <template v-if="String(types) === '1'">
            <option v-for=" r in 4" :key="r" :value="r">{{ r }} คะแนน</option>
        </template>
        <template v-else-if="String(types) === '2'">
            <option :value="1">ผ่าน</option>
            <option :value="2">ไม่ผ่าน</option>
        </template>
        <option v-else disabled value="">ไม่พบประเภทคะแนน</option>
    </select>
</template>

<script setup>
defineProps(['types'])
const model = defineModel({default:''})
</script>