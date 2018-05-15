<template>
  <div class="tradeDeliveryTermsAndBuyerOrderRefConfirm">
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
              <span>{{tradeDeliveryTermsAndBuyerOrderRefConfirmProp.delivery_type_code}}</span>
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
              <span>{{tradeDeliveryTermsAndBuyerOrderRefConfirmProp.order_reference.id}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;วันเดือนปี ที่ออกใบสั่งซื้อ</td>
            <td>
              <span>{{tradeDeliveryTermsAndBuyerOrderRefConfirmProp.order_reference.created_date}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสเอกสารอ้างอิง</td>
            <td>
              <span>{{tradeDeliveryTermsAndBuyerOrderRefConfirmProp.order_reference.reference_type_coder}}</span>
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
              <span>{{tradeDeliveryTermsAndBuyerOrderRefConfirmProp.additional_reference.id}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;วันเดือนปี ที่ออกเอกสารอ้างอิง</td>
            <td>
              <span>{{tradeDeliveryTermsAndBuyerOrderRefConfirmProp.additional_reference.created_date}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสเอกสารอ้างอิง</td>
            <td>
              <span>{{tradeDeliveryTermsAndBuyerOrderRefConfirmProp.additional_reference.reference_type_code_additional}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeDeliveryTermsAndBuyerOrderRefConfirm',
  props: ['tradeDeliveryTermsAndBuyerOrderRefConfirmProp']
}
</script>
