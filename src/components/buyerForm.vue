<template>
<div>
    <div class="buyerForm"><br>
    <h2 style="display: inline">ข้อตกลงทางการค้า</h2><br><br>
    <h3 style="display: inline">ผู้ซื้อ</h3><br>
    &nbsp;รหัสผู้ค้า <input v-model="buyerFormVue.dealer_id" type="text" maxlength="35"/><br>
    &nbsp;รหัสผู้ค้าสากล (ผู้ซื้อ) <input v-model="buyerFormVue.global_id" type="text" maxlength="35"/><br>
    &nbsp;ชื่อผู้ซื้อ <input v-model="buyerFormVue.name" type="text" maxlength="140"/><br>
    <h4 style="display: inline">ข้อมูลนิติบุคคล</h4><br>
    &nbsp;เลขประจาตัวผู้เสียภาษีอากร (ผู้ซื้อ) <input v-model="buyerFormVue.tax_buyer_id" type="text" maxlength="35"/><br>
    <h4 style="display: inline">รายละเอียดการติดต่อ : <br> การติดต่อทางอีเมล</h4><br>
    &nbsp;URI (ผู้ซื้อ) <input v-model="buyerFormVue.uri" type="text" maxlength="256"/> <br>
    &nbsp;อีเมล (ผู้ซื้อ) <input v-model="buyerFormVue.email" type="text" maxlength="2048"/><br>
    <h4 style="display: inline">ที่อยู่ผู้ซื้อ</h4><br>
    &nbsp;รหัสไปรษณีย์ (ผู้ซื้อ) <input v-model="buyerFormVue.postal_code" type="text" maxlength="16"/> <br>
    &nbsp;ชื่ออาคาร (ผู้ซื้อ) <input v-model="buyerFormVue.building_name" type="text" maxlength="70"/> <br>
    &nbsp;ที่อยู่บรรทัดที่ 1 (ผู้ซื้อ) <input v-model="buyerFormVue.lane" type="text" maxlength="256"/> <br>
    &nbsp;หมู่บ้าน (ผู้ซื้อ) <input v-model="buyerFormVue.village_name" type="text" maxlength="70"/> <br>
    &nbsp;หมู่ที่ (ผู้ซื้อ) <input v-model="buyerFormVue.village_number" type="text" maxlength="70"/> <br>
    &nbsp;ถนน (ผู้ซื้อ) <input v-model="buyerFormVue.street_name" type="text" maxlength="70"/> <br>
    &nbsp;รหัสอำเภอ (ผู้ซื้อ) <input v-model="buyerFormVue.district_code" type="text"/> <br>
    &nbsp;รหัสตำบล (ผู้ซื้อ) <input v-model="buyerFormVue.sub_district_code" type="text"/> <br>
    &nbsp;รหัสประเทศ (ผู้ซื้อ) <input v-model="buyerFormVue.country_code" type="text"/> <br>
    &nbsp;รหัสจังหวัด (ผู้ซื้อ) <input v-model="buyerFormVue.country_sub_division_code" type="text"/> <br>
    &nbsp;บ้านเลขที่ (ผู้ซื้อ) <input v-model="buyerFormVue.building_number" type="text" maxlength="16"/><br><br>
    </div>
</div>
</template>

<script>
export default {
    props: ["buyerFormVue"]
}
</script>
