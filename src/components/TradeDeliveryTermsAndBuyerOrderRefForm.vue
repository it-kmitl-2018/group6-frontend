<template>
  <div class="tradeDeliveryTermsAndBuyerOrderRefForm">
    <div style="padding:10px; border: 1px solid #eeeeee; background-color: #FFFFF0;">
      <h2 style="display: inline">ข้อตกลงทางการค้า</h2><br>
      <table border="0" cellspacing="0px"  style="width: 500px">
        <tbody>
          <tr>
            <td>
              <h3 style="display: inline">เงื่อนไขหรือข้อกำหนดการส่งสินค้า</h3>
            </td>
          </tr>
          <tr>
            <td>&nbsp;เงื่อนไขการซื้อขาย </td>
            <td>
              <input type="text" v-model.lazy="tradeDeiveryTermsAndBuyerOrderRefFormProp.delivery_type_code">
            </td>
          </tr>

          <tr>
            <td>
              <h4 style="display: inline">เอกสารใบสั่งซื้ออ้างอิง</h4>
            </td>
          </tr>
          <tr>
            <td>&nbsp;เลขที่ใบสั่งซื้อ</td>
            <td>
              <input type="text" maxlength="35" v-model.lazy="tradeDeiveryTermsAndBuyerOrderRefFormProp.order_reference.id">
            </td>
          </tr>
          <tr>
            <td>&nbsp;วันเดือนปี ที่ออกใบสั่งซื้อ</td>
            <td>
              <input type="date" v-model.lazy="tradeDeiveryTermsAndBuyerOrderRefFormProp.order_reference.created_date">
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสเอกสารอ้างอิง</td>
            <td>
              <input type="text" v-model.lazy="tradeDeiveryTermsAndBuyerOrderRefFormProp.order_reference.reference_type_coder">
            </td>
          </tr>
          <tr>
            <td>
              <h4 style="display: inline">เอกสารอ้างอิง</h4>
            </td>
          </tr>
          <tr>
            <td>&nbsp;เลขที่เอกสารอ้างอิง</td>
            <td>
              <input type="text" maxlength="35" v-model.lazy="tradeDeiveryTermsAndBuyerOrderRefFormProp.additional_reference.id">
            </td>
          </tr>
          <tr>
            <td>&nbsp;วันเดือนปี ที่ออกเอกสารอ้างอิง</td>
            <td>
              <input type="date" v-model.lazy="tradeDeiveryTermsAndBuyerOrderRefFormProp.additional_reference.created_date">
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสเอกสารอ้างอิง</td>
            <td>
              <input type="text" v-model.lazy="tradeDeiveryTermsAndBuyerOrderRefFormProp.additional_reference.reference_type_code_additional">
            </td>
          </tr>
          <tr>
            <td>
              <button v-on:click="sunmit()">หน้าถัดไป</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeDeliveryTermsAndBuyerOrderRefForm',
  props: ['tradeDeiveryTermsAndBuyerOrderRefFormProp'],
  methods: {
    submit: function () {
      console.log(this.tradeDeiveryTermsAndBuyerOrderRefFormProp)
    }
  }
}
</script>
