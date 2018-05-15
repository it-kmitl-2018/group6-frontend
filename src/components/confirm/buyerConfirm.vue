<template>
<div>
    <div class="buyerConfirm"><br>
    <h2 style="display: inline">ข้อตกลงทางการค้า</h2><br><br>
    <h3 style="display: inline">ผู้ซื้อ</h3><br>
    &nbsp;รหัสผู้ค้า <span>{{ buyerConfirmVue.dealer_idtype }}</span><br>
    &nbsp;รหัสผู้ค้าสากล (ผู้ซื้อ) <span>{{ buyerConfirmVue.global_idtype }}</span><br>
    &nbsp;ชื่อผู้ซื้อ <span>{{ buyerConfirmVue.nametype }}</span><br>
    <h4 style="display: inline">ข้อมูลนิติบุคคล</h4><br>
    &nbsp;เลขประจาตัวผู้เสียภาษีอากร (ผู้ซื้อ) <span>{{ buyerConfirmVue.tax_buyer_idtype }}</span><br>
    <h4 style="display: inline">รายละเอียดการติดต่อ : <br> การติดต่อทางอีเมล</h4><br>
    &nbsp;URI (ผู้ซื้อ) <span>{{ buyerConfirmVue.uritype }}</span> <br>
    &nbsp;อีเมล (ผู้ซื้อ) <span>{{ buyerConfirmVue.emailtype }}</span><br>
    <h4 style="display: inline">ที่อยู่ผู้ซื้อ</h4><br>
    &nbsp;รหัสไปรษณีย์ (ผู้ซื้อ) <span>{{ buyerConfirmVue.postal_codetype }}</span><br>
    &nbsp;ชื่ออาคาร (ผู้ซื้อ) <span>{{ buyerConfirmVue.building_nametype }}</span><br>
    &nbsp;ที่อยู่บรรทัดที่ 1 (ผู้ซื้อ) <span>{{ buyerConfirmVue.lanetype }}</span><br>
    &nbsp;หมู่บ้าน (ผู้ซื้อ) <span>{{ buyerConfirmVue.village_nametype }}</span><br>
    &nbsp;หมู่ที่ (ผู้ซื้อ) <span>{{ buyerConfirmVue.village_numbertype }}</span><br>
    &nbsp;ถนน (ผู้ซื้อ) <span>{{ buyerConfirmVue.street_nametype }}</span><br>
    &nbsp;รหัสอำเภอ (ผู้ซื้อ) <span>{{ buyerConfirmVue.district_codetype }}</span><br>
    &nbsp;รหัสตำบล (ผู้ซื้อ) <span>{{ buyerConfirmVue.sub_district_codetype }}</span><br>
    &nbsp;รหัสประเทศ (ผู้ซื้อ) <span>{{ buyerConfirmVue.country_codetype }}</span><br>
    &nbsp;รหัสจังหวัด (ผู้ซื้อ) <span>{{ buyerConfirmVue.country_sub_division_codetype }}</span><br>
    &nbsp;บ้านเลขที่ (ผู้ซื้อ) <span>{{ buyerConfirmVue.building_numbertype }}</span><br><br>
    </div>
</div>
</template>

<script>
export default {
  props: ['buyerConfirmVue']
}
</script>