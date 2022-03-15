<template>
    <header class="header">
        <figure>
            <img src="../assets/Boolflix.svg" alt="">
        </figure>
    </header>
</template>

<script>
    export default {
        name: 'MyHeader',
    }
</script>

<style lang="scss" scoped>

$black: #232323;
$red: #d81f26;

    .header{
        display: flex;
        height: 70px;
        background-color: $black;
        align-items: center;

        figure{
            width: max-content;
            padding: 10px;
            cursor: pointer;

            

            img{
                height: 23px;
                opacity: 90%;

                &:hover{
                opacity: 100%;
                transition: 150ms ease-in-out;
            }
            }
        }
    }
</style>