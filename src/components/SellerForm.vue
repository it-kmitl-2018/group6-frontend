<template>
  <div class="sellerForm">
    <div style="padding:10px; border: 1px solid #eeeeee; background-color: #FFFFF0;">
      <h2 style="display: inline">ข้อตกลงทางการค้า</h2><br>
      <table border="0" cellspacing="0px"  style="width: 500px">
        <tbody>
          <tr>
            <td>
              <h3 style="display: inline">ผู้ขาย</h3>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสผู้ค้า (ผู้ขาย) </td>
            <td>
              <input type="text" maxlength="35" v-model.lazy="sellerFormProp.id">
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสผู้ค้าสากล (ผู้ขาย) </td>
            <td>
              <input type="text" maxlength="35" v-model.lazy="sellerFormProp.global_id">
            </td>
          </tr>
          <tr>
            <td>&nbsp;ชื่อผู้ขาย </td>
            <td>
              <input type="text" maxlength="140" v-model.lazy="sellerFormProp.name">
            </td>
          </tr>
          <tr>
            <td>
              <h4 style="display: inline">ข้อมูลนิติบุคคล</h4>
            </td>
          </tr>
          <tr>
            <td>&nbsp;เลขประจาตัวผู้เสียภาษีอากร (ผู้ขาย)</td>
            <td>
              <input type="text" maxlength="35" v-model.lazy="sellerFormProp.id_specified">
            </td>
          </tr>

          <tr>
            <td>
              <h4 style="display: inline">รายละเอียดการติดต่อ :<br> การติดต่อทางอีเมล</h4>
            </td>
          </tr>
          <tr>
            <td>&nbsp;URI (ผู้ขาย)</td>
            <td>
              <input type="text" maxlength="256" v-model.lazy="sellerFormProp.uri_id_email">
            </td>
          </tr>
          <tr>
            <td>&nbsp;อีเมล (ผู้ขาย)</td>
            <td>
              <input type="text" maxlength="2048" v-model.lazy="sellerFormProp.complete_number_email">
            </td>
          </tr>

          <tr>
            <td>
              <h4 style="display: inline">ที่อยู่ผู้ขาย</h4>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสไปรษณีย์ (ผู้ขาย)</td>
            <td>
              <input type="text" maxlength="16" v-model.lazy="sellerFormProp.post_code_address">
            </td>
          </tr>
          <tr>
            <td>&nbsp;ชื่ออาอาคาร (ผู้ขาย)</td>
            <td>
               <input type="text" maxlength="70" v-model.lazy="sellerFormProp.building_name_trade_address">
            </td>
          </tr>
          <tr>
            <td>&nbsp;ซอย (ผู้ขาย)</td>
            <td>
              <input type="text" maxlength="70" v-model.lazy="sellerFormProp.line_3_trade_address">
            </td>
          </tr>
          <tr>
            <td>&nbsp;หมู่บ้าน (ผู้ขาย)</td>
            <td>
              <input type="text" maxlength="70" v-model.lazy="sellerFormProp.line_4_trade_address">
            </td>
          </tr>
          <tr>
            <td>&nbsp;หมู่ที่ (ผู้ขาย)</td>
            <td>
              <input type="text" maxlength="70" v-model.lazy="sellerFormProp.line_5_trade_address">
            </td>
          </tr>
          <tr>
            <td>&nbsp;ถนน (ผู้ขาย)</td>
            <td>
              <input type="text" maxlength="70" v-model.lazy="sellerFormProp.street_name_trade_address">
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสอำเภอ (ผู้ขาย)</td>
            <td>
              <input type="text" v-model.lazy="sellerFormProp.city_name_trade_address">
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสตำบล (ผู้ขาย)</td>
            <td>
              <input type="text" v-model.lazy="sellerFormProp.city_sub_divition_name_trade_address">
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสประเทศ (ผู้ขาย)</td>
            <td>
              <input type="text" v-model.lazy="sellerFormProp.country_id_trade_address">
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสจังหวัด (ผู้ขาย)</td>
            <td>
              <input type="text" v-model.lazy="sellerFormProp.country_sub_divition_id_trade_address">
            </td>
          </tr>
          <tr>
            <td>&nbsp;บ้านเลขที่ (ผู้ขาย)</td>
            <td>
              <input type="text" maxlength="16" v-model.lazy="sellerFormProp.building_number_trade_address">
            </td>
          </tr>

          <tr>
            <td>
              <button v-on:click="submit()">ตกลง</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sellerForm',
  props: ['sellerFormProp'],
  methods: {
    submit: function () {
      console.log(this.props)
    }
  }
}
</script>
