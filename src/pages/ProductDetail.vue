
<template>
    <Master>
        <div class="container">
            <div class="row">
                <div class="col-md-3" v-for="product in productList" :key="product.id">
                    <Product :name="product.login" :price="product.id" :image="product.avatar_url"></Product>
                </div>
            </div>
            <div class="row">
                <Pagination></Pagination>
            </div>
        </div>
    </Master>
</template>

<script>
import Master from '../layouts/Master'
import Product from '../components/Product'
import Pagination from '../components/Pagination'

export default {
    data() {
        return {
            productList:[]
        }
    },
    components: {
        Product,
        Pagination,
        Master
    },
    created() {
        this.$http.get('https://api.github.com/users/hadley/orgs').then(response => {
        // success callback
            this.productList = response.body;
        }, response => {
        // error callback
            console.log(response)
        });
    }
    ,methods: {
        
    }
}
</script>
