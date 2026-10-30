<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ข้อที่</th>
                    <th>ผู้รับการประเมิน</th>
                    <th>หัวข้อ</th>
                    <th>กรรมการ</th>
                    <th>คะแนนผู้รับการประเมิน</th>
                    <th>คะแนนกรรมการ</th>
                    <th>สถานะผู้รับการประเมิน</th>
                    <th>สถานะกรรมการ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(r, index) in report.table" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ r.user }}</td>
                    <td>{{ r.topic }}</td>
                    <td>{{ r.boss }}</td>
                    <td>{{ r.selfscore }}</td>
                    <td>{{ r.bossscore }}</td>
                    <td>{{ r.selfdone }}</td>
                    <td>{{ r.bossdone }}</td>
                </tr>
            </tbody>
            <p v-if="!report.table.length">ไม่มีข้อมูล</p>
        </table>
    </div>

    <div>
        <h1>ผู้รับการประเมินที่ยังไม่มีผู้รับการประเมิน</h1>
        <p>{{ report.table.length }}</p>
        <button @click="detail()">ดูรายละเอียด</button>
    </div>

    <div>
        <h1>สำรองข้อมูลไฟล์</h1>
        <button></button>
    </div>

</template>

<script setup>


</script>

<style lang="scss" scoped>

</style>