<template>
    <div>
        <Header></Header>
        <div class="wrapper">
            <slot/>
        </div>
        <Footer></Footer>
    </div>
        
</template>

<script>

import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
export default {
    components: {
        Header,
        Footer
    }
}
</script>