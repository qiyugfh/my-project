<template>
    <div id='father'>
        <h1>我是父组件！</h1>
        <child ref="msg"></child>
    </div>
</template>

<script>
import child from '../components/child.vue'
export default {
    components: {child},
    mounted: function(){
        console.log(this.$refs.msg);
        this.$refs.msg.getMessage('hello 1 !!!')
    }
}
</script>
