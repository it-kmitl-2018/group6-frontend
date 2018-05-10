<template>
  <div id="app">
    <div>
      <router-link :to="{name: 'paymentInformation'}"> ข้อมูลการชำระเงินทางการค้า </router-link><br>
      <router-link :to="{name: 'buyerForm'}"> แบบฟอร์มสำหรับผู้ซื้อ </router-link><br>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>
