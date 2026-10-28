<template>
    <select v-model="model">
        <option>--เลือก--</option>
        <template v-if="String(type) === '1'">
            <option v-for=" r in 4" :key="r" :value="r">{{ r. }} คะแนน</option>
        </template>
        <template v-else>
            <option :value="1">ผ่าน</option>
            <option :value="2">ไม่ผ่าน</option>
        </template>
    </select>
</template>

<script setup>
defineProps(['type'])
const model = defineModel({default:''})
</script>