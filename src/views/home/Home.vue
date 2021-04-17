<template>
  <div>
    <Header />
    <Nav />
    <FoodMain />
  </div>
</template>
<script>
import Header from '../../components/common/Header'
import Nav from './Nav'
import FoodMain from './FoodMain'
export default {
  components: {
    Header,
    Nav,
    FoodMain
  }
}
</script>
