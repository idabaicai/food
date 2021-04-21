<template>
  <div class="container">
    <Header />
    <Nav />
    <BaseLayout :component="component"/>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/common/Header'
import Nav from '../../components/common/Nav'
import Footer from '../../components/common/Footer'
import BaseLayout from './components/BaseLayout'
export default {
  name: 'User',
  props: {
    id: {
      type: String
    },
    component: {
      type: String,
      default () {
        return 'Order'
      }
    }
  },
  components: {
    Header,
    Nav,
    Footer,
    BaseLayout
  }
}
</script>
<style lang="less" scoped>
</style>
