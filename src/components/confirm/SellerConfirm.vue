<template>
  <div class="sellerConfirm">
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
              <span>{{sellerConfirmProp.dealer_id}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสผู้ค้าสากล (ผู้ขาย) </td>
            <td>
              <span>{{sellerConfirmProp.global_id}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;ชื่อผู้ขาย </td>
            <td>
              <span>{{sellerConfirmProp.name}}</span>
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
              <span>{{sellerConfirmProp.tax_payer_id}}</span>
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
              <span>{{sellerConfirmProp.uri}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;อีเมล (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.email}}</span>
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
              <span>{{sellerConfirmProp.address.postal_code}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;ชื่ออาอาคาร (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.address.building_name}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;ซอย (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.address.lane}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;หมู่บ้าน (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.address.village_name}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;หมู่ที่ (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.address.village_number}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;ถนน (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.address.street_name}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสอำเภอ (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.address.district_code}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสตำบล (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.address.sub_district_code}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสประเทศ (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.address.country_code}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสจังหวัด (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.address.country_sub_division_code}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;บ้านเลขที่ (ผู้ขาย)</td>
            <td>
              <span>{{sellerConfirmProp.address.building_number}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sellerConfirm',
  props: ['sellerConfirmProp']
}
</script>
