<template>
  <div class="invoice">
    <div style="padding:10px; border: 1px solid #eeeeee; background-color: #FFFFF0;">
      <form name="paymentInformation" method="post" action="tax_invoice_page_6.html">
        <table border="0" cellspacing="0px"  style="width: 500px">
          <tbody>
            <h2 style="display: inline"> ข้อมูลการชำระเงินทางการค้า </h2>
            <tr>
              <td>
                <br>
                  &nbsp;รหัสสกุลเงินตรา
              </td>
              <td>
                <br>
                  <input name="invoice_currency_code" type="text" id="invoice_currency_code">
              </td>
            </tr>
            <tr>
              <td>
                <br>
                  <h3 style="display: inline"> ข้อมูลภาษี </h3>
              </td>
            </tr>
            <tr>
              <td> &nbsp;รหัสประเภทภาษี </td>
                <td>
                  <input name="tax_type_code" type="text" id="tax_type_code">
                </td>
            </tr>
            <tr>
              <td> &nbsp;อัตราภาษี </td>
                <td>
                  <input name="tax_calculated_rate" type="number" id="tax_calculated_rate">
                </td>
            </tr>
            <tr>
              <td> &nbsp;มูลค่าสินค้า/บริการ </td>
                <td>
                  <input name="basis_amount" type="number" id="basis_amount">
                </td>
            </tr>
            <tr>
              <td>
                <br>
                  <h3 style="display: inline"> ข้อมูลส่วนลดหรือค่าธรรมเนียม </h3>
              </td>
            </tr>
            <tr>
              <td> &nbsp;ตัวบอกส่วนลดหรือค่าธรรมเนียม </td>
                <td>
                  <input name="charge_indicator_fee" type="checkbox" value="yes" id="charge_indicator_fee">
                </td>
            </tr>
            <tr>
              <td> &nbsp;มูลค่าส่วนลดหรือค่าธรรมเนียม </td>
                <td>
                  <input name="actual_amount_fee" type="number" id="actual_amount_fee">
                </td>
            </tr>
            <tr>
              <td> &nbsp;รหัสประเภทส่วนลดหรือค่าธรรมเนียม </td>
                <td>
                  <input name="type_code_fee" type="text" id="type_code_fee">
                </td>
            </tr>
            <tr>
                <td>
                  <br>
                  <h3 style="display: inline"> ข้อมูลการชำระเงิน </h3>
                </td>
              </tr>
            <tr>
              <td> &nbsp;เงื่อนไขการชำระเงิน </td>
                <td>
                  <input name="term_of_payment" type="text" id="term_of_payment">
                </td>
            </tr>
            <tr>
              <td>
                <br>
                <h3 style="display: inline"> การสรุปมูลค่าการชำระเงินทางการค้า </h3>
              </td>
            </tr>
            <tr>
              <td> &nbsp;รวมมูลค่าตามเอกสารเดิม </td>
                <td>
                  <input name="original_information_amount" type="number" id="original_information_amount">
                </td>
            </tr>
            <tr>
              <td> &nbsp;รวมมูลค่าตามรายการ/มูลค่าที่ถูกต้อง </td>
                <td>
                  <input name="line_total_amount" type="number" id="line_total_amount">
                </td>
            </tr>
            <tr>
              <td> &nbsp;มูลค่าผลต่าง </td>
                <td>
                  <input name="difference_sales_information_amount" type="number" id="difference_sales_information_amount">
                </td>
            </tr>
            <tr>
              <td> &nbsp;ส่วนลด </td>
                <td>
                  <input name="total_allowance_amount" type="number" id="total_allowance_amount">
                </td>
            </tr>
            <tr>
              <td> &nbsp;จํานวนภาษีมูลค่าเพิ่ม </td>
                <td>
                  <input name="tax_total_amount" type="number" id="tax_total_amount">
                </td>
            </tr>
            <tr>
              <td> &nbsp;ยอดเงินรวม/ยอดเงินรวมภาษีมูลค่าเพิ่ม </td>
                <td>
                  <input name="grand_total_amount" type="number" id="grand_total_amount">
                </td>
            </tr>
            <tr>
              <br>
                <td>
                  <input type="submit" name="button_next" value="หน้าถัดไป">
                </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paymentInformation',
  data () {
    return {

    }
  }
}
</script>
