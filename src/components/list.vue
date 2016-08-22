<template>
    <ul>
        <li>this is template body</li>
    </ul>
</template>
<style>
</style>
<script>
    import ListItem from './listItem.vue'
    export default{
        components:{
           ListItem,
        },
        vuex: {
            getters: {
                counterValue: getCount
            }
        }
    }
</script>
