<template>
  <div>
    <div class="supplyDeliverySenderConfirm">
    <h2 style="display: inline">ข้อมูลการจัดส่งทางการค้า</h2><br><br>
    <h4 style="display: inline">ข้อมูลผู้ส่ง</h4><br>
    &nbsp;รหัสผู้ส่ง : <span>{{ supplyDeliverySenderConfirm.sender_id }}</span><br>
    &nbsp;รหัสผู้ค้าสากล (ผู้ส่ง) : <span>{{ supplyDeliverySenderConfirm.global_id }}</span><br>
    &nbsp;ชื่อผู้ส่ง : <span>{{ supplyDeliverySenderConfirm.name }}</span><br>
    <h4 style="display: inline">การนัดส่งสินค้า</h4><br>
    &nbsp;วันเวลานัดส่งสินค้า : <span>{{ supplyDeliverySenderConfirm.delivery_date }}</span><br>
  </div>
</template>

<script>
export default {
  props: ['supplyDeliverySenderConfirm']
}
</script>