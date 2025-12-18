<template>
    <div>
        <img :src="imagen" alt="">
    </div>
</template>

<script>

export default {

    props: {
        imagen: {
            type: String,
            required: true
        }
    },


};

</script>

<style>


</style>