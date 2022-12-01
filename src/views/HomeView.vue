<script>
import TheWelcomePage from '../components/TheWelcomePage.vue';
import searchByBreed from '../components/SearchByBreed.vue'
export default{
    components:{
        TheWelcomePage,
        searchByBreed
    },
    setup(){

    }
}
</script>

<template>
    <div>
    <the-welcome-page></the-welcome-page>
    <search-by-breed></search-by-breed>
    </div>
</template>
