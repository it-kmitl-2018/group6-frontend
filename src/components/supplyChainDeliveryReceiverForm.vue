<template>
  <div>
    <h2 style="display: inline">ข้อมูลการจัดส่งทางการค้า</h2><br><br>
    <h4 style="display: inline">ข้อมูลผู้รับ</h4><br>
    &nbsp;รหัสผู้รับ(ผู้รับ) <input v-model="supplyChainDeliveryVue.receiver_id" type="text" maxlength="35"/><br>
    &nbsp;รหัสผู้ค้าสากล(ผู้รับ) <input v-model="supplyChainDeliveryVue.global_id" type="text" maxlength="35"/><br>
    &nbsp;ชื่อผู้รับ <input v-model="supplyChainDeliveryVue.name" type="text" maxlength="140"/><br>
    <h4 style="display: inline">รายละเอียดการติดต่อ (ผู้รับ)</h4><br>
    &nbsp;ชื่อแผนก: <input v-model="supplyChainDeliveryVue.department" type="text" maxlength="140"/><br>
    <h4 style="display: inline">การติดต่อทางโทรศัพท์ (ผู้รับ)</h4><br>
    &nbsp;URI (ผู้รับ): <input v-model="supplyChainDeliveryVue.uri" type="text" maxlength="256"/> <br>
    &nbsp;เบอร์โทรศัพท์ (ผู้รับ) <input v-model="supplyChainDeliveryVue.phone_number" type="text" maxlength="2048"/><br>
    <h4 style="display: inline">ที่อยู่ (ผู้รับ)</h4><br>
    &nbsp;รหัสไปรษณีย์ (ผู้รับ) <input v-model="supplyChainDeliveryVue.postal_code" type="text" maxlength="16"/> <br>
    &nbsp;ชื่ออาคาร (ผู้รับ) <input v-model="supplyChainDeliveryVue.building_name" type="text" maxlength="140"/> <br>
    &nbsp;ที่อยู่บรรทัดที่ 1 (ผู้รับ) <input v-model="supplyChainDeliveryVue.lane" type="text" maxlength="256"/> <br>
    &nbsp;หมู่บ้าน (ผู้รับ) <input v-model="supplyChainDeliveryVue.village_name" type="text" maxlength="70"/> <br>
    &nbsp;หมู่ที่ (ผู้รับ) <input v-model="supplyChainDeliveryVue.village_number" type="text" maxlength="70"/> <br>
    &nbsp;ถนน (ผู้รับ) <input v-model="supplyChainDeliveryVue.street_name" type="text" maxlength="70"/> <br>
    &nbsp;รหัสอำเภอ (ผู้รับ) <input v-model="supplyChainDeliveryVue.district_code" type="text"/> <br>
    &nbsp;รหัสตำบล (ผู้รับ) <input v-model="supplyChainDeliveryVue.sub_district_code" type="text"/> <br>
    &nbsp;รหัสประเทศ (ผู้รับ) <input v-model="supplyChainDeliveryVue.country_code" type="text"/> <br>
    &nbsp;รหัสจังหวัด (ผู้รับ) <input v-model="supplyChainDeliveryVue.country_sub_division_code" type="text"/> <br>
    &nbsp;บ้านเลขที่ (ผู้รับ) <input v-model="supplyChainDeliveryVue.building_number" type="text" maxlength="16"/><br><br>
  </div>
</template>

<script>
export default {
  props: ['supplyChainDeliveryReceiverVue']
}
</script>
