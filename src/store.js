import Vue from 'vue'


    const state = Vue.observable(
        {
            movies: [],
            filter: '',
        }
    )

    export default state
