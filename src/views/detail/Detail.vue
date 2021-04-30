<template>
  <div class="detail-container">
    <Header />
    <Nav />
    <GoodItem :id="id"/>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Nav from '../../components/common/Nav'
import GoodItem from './GoodItem'
export default {
  components: {
    Header,
    Footer,
    GoodItem,
    Nav
  },
  props: {
    id: {
      type: String,
      default () {
        return 100
      }
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
