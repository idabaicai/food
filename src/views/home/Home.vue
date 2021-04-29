<template>
  <div>
    <Header />
    <Nav />
    <FoodMain />
    <HotList />
    <!-- <YouLike /> -->
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/common/Header'
import Nav from '../../components/common/Nav'
import FoodMain from './FoodMain'
import HotList from './HotList'
import Footer from '../../components/common/Footer'
// import YouLike from '../../components/guessYouLike'
export default {
  components: {
    Header,
    Nav,
    FoodMain,
    HotList,
    Footer
    // YouLike
  }
}
</script>
