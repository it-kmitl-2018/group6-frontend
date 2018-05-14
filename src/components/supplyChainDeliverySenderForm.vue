<template>
  <div>
    <h2 style="display: inline">ข้อมูลการจัดส่งทางการค้า</h2><br><br>
    <h4 style="display: inline">ข้อมูลผู้ส่ง</h4><br>
    &nbsp;รหัสผู้ส่ง : <input v-model="supplyChainDeliverySenderVue.sender_id" type="text" maxlength="35"/><br>
    &nbsp;รหัสผู้ค้าสากล (ผู้ส่ง) : <input v-model="supplyChainDeliverySenderVue.global_id" type="text" maxlength="35"/><br>
    &nbsp;ชื่อผู้ส่ง : <input v-model="supplyChainDeliverySenderVue.name" type="text" maxlength="140"/><br>
    <h4 style="display: inline">การนัดส่งสินค้า</h4><br>
    &nbsp;วันเวลานัดส่งสินค้า : <input v-model="supplyChainDeliverySenderVue.delivery_date" type="number" maxlength="8"/><br>
  </div>
</template>

<script>
export default {
  props: ['supplyChainDeliverySenderVue']
}
</script>
