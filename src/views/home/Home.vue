<template>
  <div>
    <Header />
    <Nav />
    <FoodMain />
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/common/Header'
import Nav from './Nav'
import FoodMain from './FoodMain'
import Footer from '../../components/common/Footer'
export default {
  components: {
    Header,
    Nav,
    FoodMain,
    Footer
  }
}
</script>
