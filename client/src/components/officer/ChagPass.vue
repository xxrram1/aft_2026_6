<template>
    <div>

    </div>
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router';
import { ref } from 'vue';
import { api } from '../../lib';


const route = useRoute()
const router = useRouter()
const id = route.params.id

const password = ref('')

const save = async () => {
    try{
        await api.put('/api/create-user', {id, password: password.value})
        alert('สำเร็จ')
        router.push('/officer/role')
    } catch(e) {
        alert(e)
    }
}
</script>

<style lang="scss" scoped>

</style>