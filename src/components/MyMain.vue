<template>
    <main class="main">

        <div class="search_wrapper">
            <input class="search-bar" type="text" v-model="search" @keyup.enter="filterData">
            <button @click="filterData" class="search-button">
                <img src="../assets/search_icon.svg" alt="">
            </button>
        </div>

<!-- v-for="element in movies" :key="element.id" -->
        <div class="card_wrapper">
            <div class="card_movie" v-for="element in movies" :key="element.id">
                 

                 <img class="thumb" :src="`https://image.tmdb.org/t/p/w342/${element.poster_path}`" alt="">
                <!-- titolo -->
                <h2 class="title">{{element.title}} {{element.name}}</h2>
                <!-- titolo originale -->
                <p class="original-title">{{element.original_title}} {{element.original_name}}</p>
                <!-- lingua -->
                <img class="flag" :src="flags[element.original_language]">
                <!-- voto -->
                <div class="stars_wrapper">
                    <i class="fa-solid fa-star vote" v-for="items in voteFn(element.vote_average)" :key="items"></i>
                </div>
                
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
                movies: [],
                flags:{
                    en: require('../assets/img/united-kingdom.png'),
                    it: require('../assets/img/italy.png'),
                    fr: require('../assets/img/france.png'),
                }

            }
        },

        methods:{

            voteFn: function(voto){
                return Math.floor(voto/2)
            },


            filterData: function(){


                axios.get(`${this.baseURL}/search/movie`,{
                    params:{
                        api_key:'b808f97a8f4ea88d0082efa82632f877',
                        query: this.search,
                        language: 'it-IT'
                    }
                })
                .then ( res => {
                    this.movies = res.data.results
                })
                .catch ( error => {
                    console.log(error.response)
                }),


                axios.get(`${this.baseURL}/search/tv`,{
                    params:{
                        api_key:'b808f97a8f4ea88d0082efa82632f877',
                        query: this.search,
                        language: 'it-IT'
                    }
                })
                .then ( res => {
                    this.movies.push(...res.data.results),
                    this.search = ''
                    
                })
                .catch ( error => {
                    console.log(error.response)
                })

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
    overflow-y: auto;


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
            width: 450px;

    
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
        padding: 20px 10px;
        flex-wrap: wrap;
        gap: 10px 10px;
        flex-grow: 1;
        height: calc(100vh - 150px);


        .card_movie{
            background-color: grey;
            border-radius: 8px;
            width: calc( (100% / 5) - 10px);
            height: 190px;
            padding: 5px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            position: relative;
            color: white;
            overflow: hidden;

        
        
            

            
            .thumb{
                height: 190px;
                width: 100%;
                display: block;
                position: absolute;
                margin: auto;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                aspect-ratio: 16/9;
                object-fit: cover;
                object-position: center;
            }


            .title{
                font-size: 16px;
                width: 150px;
                z-index: 1;
            }

            .original-title{
                font-size: 12px;
                z-index: 1;
            }

            .flag{
                z-index: 1;
                height: 15px;
                width: 20px;
                
            }


            .stars_wrapper{
                display: flex;
                gap: 3px;
                padding: 5px 0;

                .vote{
                z-index: 1;
                display: inline;
                font-size: 12px;
                color: white;
            }
            }
            
            
        }
    }
}


</style>