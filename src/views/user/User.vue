<template>
  <div class="container">
    <Header />
    <Nav />
    <BaseLayout />
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
