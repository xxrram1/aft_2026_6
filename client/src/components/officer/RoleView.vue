<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ชื่อนามสกุล</th>
                    <th>แผนก</th>
                    <th>บทบาท</th>
                    <th>สิทธิ์</th>
                    <th>บันทึก</th>
                    <th>เปลี่ยนรหัสผ่าน</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="r in rows" :key="r.id">
                    <td>{{ r.firstname }} {{ r.lastname }}</td>
                    <td>{{ r.department }}</td>
                    <td>
                        <select v-model="r.role">
                            <option v-for="x in roles" :key="x.id" :value="x.id">{{ x.label }}</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="r.position">
                            <option v-for="p in positions" :key="p.id" :value="p.id">{{ p.label }}</option>
                        </select>
                    </td>
                    <td><button @click="save(r)">บันทึก</button></td>
                    <td><RouterLink :to="{name:'chagpass',params:{id:id}}">เปลี่ยนรหัสผ่าน</RouterLink></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const roles = [
    {id:'user',label:'ผู้รับการประเมิน'},
    {id:'boss',label:'กรรมการ'},
    {id:'officer',label:'เจ้าหน้าที่'}
]

const positions = [
    {id:'กรรมการร่วม',label:'กรรมการร่วม'},
    {id:'ประธาน',label:'ประธาน'},
]

</script>

<style lang="scss" scoped>

</style>