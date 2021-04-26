<template>
  <div>
    <Header />
    <Nav />
    <item :cate-id="cateId"></item>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/common/Header'
import Nav from '../../components/common/Nav'
import Footer from '../../components/common/Footer'
import Item from './components/Item'
export default {
  name: 'List',
  props: {
    cateId: {
      type: String,
      default () {
        return 'all'
      }
    }
  },
  components: {
    Header,
    Nav,
    Footer,
    Item
  },
  created () {
  }
}
</script>
