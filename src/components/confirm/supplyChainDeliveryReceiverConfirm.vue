<template>
  <div>
    <div class="supplyDeliveryReceiverConfirm">
    <h2 style="display: inline">ข้อมูลการจัดส่งทางการค้า</h2><br><br>
    <h4 style="display: inline">ข้อมูลผู้รับ</h4><br>
    &nbsp;รหัสผู้รับ(ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.receiver_id }}</span><br>
    &nbsp;รหัสผู้ค้าสากล(ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.global_id }}</span><br>
    &nbsp;ชื่อผู้รับ <span>{{ supplyDeliveryReceiverConfirm.name }}</span><br>
    <h4 style="display: inline">รายละเอียดการติดต่อ (ผู้รับ)</h4><br>
    &nbsp;ชื่อแผนก: <span>{{ supplyDeliveryReceiverConfirm.department }}</span><br>
    <h4 style="display: inline">การติดต่อทางโทรศัพท์ (ผู้รับ)</h4><br>
    &nbsp;URI (ผู้รับ): <span>{{ supplyDeliveryReceiverConfirm.uri }}</span><br>
    &nbsp;เบอร์โทรศัพท์ (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.phone_number }}</span><br>
    <h4 style="display: inline">ที่อยู่ (ผู้รับ)</h4><br>
    &nbsp;รหัสไปรษณีย์ (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.postal_code }}</span><br>
    &nbsp;ชื่ออาคาร (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.building_name }}</span><br>
    &nbsp;ที่อยู่บรรทัดที่ 1 (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.lane }}</span><br>
    &nbsp;หมู่บ้าน (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.village_name }}</span><br>
    &nbsp;หมู่ที่ (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.village_number }}</span><br>
    &nbsp;ถนน (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.street_name }}</span><br>
    &nbsp;รหัสอำเภอ (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.district_code }}</span><br>
    &nbsp;รหัสตำบล (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.sub_district_code }}</span><br>
    &nbsp;รหัสประเทศ (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.country_code }}</span><br>
    &nbsp;รหัสจังหวัด (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.country_sub_division_code }}</span><br>
    &nbsp;บ้านเลขที่ (ผู้รับ) <span>{{ supplyDeliveryReceiverConfirm.building_number }}</span><br><br>
  </div>
</template>

<script>
export default {
  props: ['supplyDeliveryReceiverConfirm']
}
</script>