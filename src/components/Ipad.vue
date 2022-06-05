<template>
    <div>
        {{content}}
    </div>
</template>

<script>
    export default {
    name: "ipadComp",
    data() {
        return {
            content:"this is from ipad"
        }
        }
    }
</script>

<style scoped>
div{
    margin: 200px;
}
</style>