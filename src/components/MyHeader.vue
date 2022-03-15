<template>
    <header class="header">
        <figure>
            <img src="../assets/Netflix-Logo.svg" alt="">
        </figure>
    </header>
</template>

<script>
    export default {
        name: 'MyHeader',
    }
</script>

<style lang="scss" scoped>

$black: #161616;

    .header{
        display: flex;
        height: 70px;
        background-color: $black;
        align-items: center;

        figure{
            width: max-content;
            padding: 10px;

            img{
                height: 40px;
            }
        }
    }
</style>