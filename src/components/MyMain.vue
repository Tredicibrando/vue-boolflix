<template>
    <main class="main">

        <div class="search_wrapper">
            <input class="search-bar" type="text" v-model="search" @keyup.enter="filterMovies">
            <button @click="filterMovies" class="search-button">
                <img src="../assets/search_icon.svg" alt="">
            </button>
        </div>

<!-- v-for="element in movies" :key="element.id" -->
        <div class="card_wrapper">
            <div class="card_movie" v-for="element in movies" :key="element.id">
                 
                <!-- titolo -->
                 <h2 class="title">{{element.title}}</h2>
                <!-- titolo originale -->
                <p class="original-title">{{element.original_title}}</p>
                <!-- lingua -->
                <p class="language">{{element.original_language}}</p>
                <!-- voto -->
                <p class="vote">{{element.vote_average}}</p>

            </div>
        </div>
    
    

 
       

    </main>
</template>

<script>

import axios from 'axios'

    export default {
        name: 'MyMain',

        data(){
            return{
                search: '',
                baseURL: 'https://api.themoviedb.org/3',
                movies: []
            }
        },

        methods:{
            filterMovies: function(){
                axios.get(`${this.baseURL}/search/movie`,{
                    params:{
                        api_key:'b808f97a8f4ea88d0082efa82632f877',
                        query: this.search,
                        language: 'it-IT'
                    }
                })
                .then ( res => {
                    this.movies = res.data.results,
                    this.search = ''
                })
                .catch ( error => {
                    console.log(error.response)
                })

                console.log('ho invocato la funzione')
                console.log(this.movies)
            },
        },
    }
</script>

<style lang="scss" scoped>
$grey: #ddd;
$red: #d81f26;
$black: #131313;

main{
    height: calc( 100vh - 70px );
    background-color: $black;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: auto;

    .search_wrapper{
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 10px;
        height: max-content;
        padding-top: 10px;


        .search-bar{
            background-color: #232323;
            border: none;
            line-height: 18px;
            border-radius: 9px;
            padding: 3px 15px;
            color: white;

            &:focus-visible {
            outline: 2px solid $red;
            box-shadow: 0px 0px 6px 1px $red;
            }
        }

        .search-button{
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 50%;
            background-color: $red;
            padding: 5px;


            &:active {
            outline: 1px solid $red;
            }


            img{
                height: 20px;
                margin: 0 auto;
                color: white;
            }
        }


    }

    .card_wrapper{
        width: 100%;
        display: flex;
        padding: 10px;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 10px 0;
        flex-grow: 1;

        .card_movie{
            background-color: grey;
            border-radius: 8px;
            border: 4px solid transparent;
            width: calc( (100% / 5) - 10px);
            height: 190px;
            padding: 5px;
            background-image: url('../assets/thumb-test.jpg');
            background-repeat: no-repeat;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            position: relative;
            color: white;

        
            &:hover{
                border: 4px solid white;
                transition: 100ms ease-in-out;
            }

            

            .title{
                font-size: 16px;
                width: 150px;
            }

            .original-title{
                font-size: 12px;
            }

            .language{
          
            }
            
        }
    }
}


</style>