<template>
  <div>
    <div class="supplyChainDeliverySenderConfirm">
    <h2 style="display: inline">ข้อมูลการจัดส่งทางการค้า</h2><br><br>
    <h4 style="display: inline">ข้อมูลผู้ส่ง</h4><br>
    &nbsp;รหัสผู้ส่ง : <span>{{ supplyChainDeliverySenderVue.sender_id }}</span><br>
    &nbsp;รหัสผู้ค้าสากล (ผู้ส่ง) : <span>{{ supplyChainDeliverySenderVue.global_id }}</span><br>
    &nbsp;ชื่อผู้ส่ง : <span>{{ supplyChainDeliverySenderVue.name }}</span><br>
    <h4 style="display: inline">การนัดส่งสินค้า</h4><br>
    &nbsp;วันเวลานัดส่งสินค้า : <span>{{ supplyChainDeliverySenderVue.delivery_date }}</span><br>
  </div>
</template>

<script>
export default {
  props: ['supplyChainDeliverySenderConfirmVue']
}
</script>