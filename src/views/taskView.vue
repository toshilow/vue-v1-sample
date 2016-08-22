<template>
    <div>
        <app-list></app-list>
    </div>
</template>
<style lang="sass">
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import List from '../components/list.vue'
    export default{
        data(){
            return{
                taskList:'hello vue'
            }
        },
        components:{
            'app-list': List,
        }
    }
</script>
