<template>
  <div class="exchangeDocumentConfirm">
    <div style="padding:10px; border: 1px solid #eeeeee; background-color: #FFFFF0;">
      <h2 style="display: inline">ใบกำกับภาษี</h2><br>
      <table border="0" cellspacing="0px"  style="width: 600px">
        <tbody>
          <tr>
            <td>
              <h4 style="display: inline">ข้อมูลคู่มือมาตรฐาน</h4>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสคู่มือมาตรฐาน</td>
            <td>
              <span>{{exchangeDocumentConfirm.id_guideline}}</span>
            </td>
          </tr>

          <tr>
            <td>
              <h4 style="display: inline">หัวเรื่องเอกสาร</h4>
            </td>
          </tr>
          <tr>
            <td>&nbsp;เลขที่เอกสาร</td>
            <td>
              <span>{{exchangeDocumentConfirm.header.id_document}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;ชื่อเอกสาร</td>
            <td>
              <span>{{exchangeDocumentConfirm.header.name_document}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสประเภทเอกสาร</td>
            <td>
              <span>{{exchangeDocumentConfirm.header.type_code_document}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;วันเดือนปี ที่ออกเอกสาร</td>
            <td>
              <span>{{exchangeDocumentConfirm.header.issue_date_time_document}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;สาเหตุการออกเอกสาร</td>
            <td>
              <span>{{exchangeDocumentConfirm.header.purpose_document}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;รหัสสาเหตุการออกเอกสาร</td>
            <td>
              <span>{{exchangeDocumentConfirm.header.purpose_code_document}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;เลขที่เอกสารสากล</td>
            <td>
              <span>{{exchangeDocumentConfirm.header.global_id_document}}</span>
            </td>
          </tr>
          <tr>
            <td>&nbsp;วันเดือนปีและเวลาที่สร้างเอกสาร</td>
            <td>
              <span>{{exchangeDocumentConfirm.header.creation_date_time_document}}</span>
            </td>
          </tr>

          <tr>
            <td>
              <h4 style="display: inline">ข้อความเพิ่มเติม</h4>
            </td>
          </tr>
          <tr>
            <td>&nbsp;หมายเหตุ</td>
            <td>
              <span>{{exchangeDocumentConfirm.header.remark_include_note}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exchangeDocumentConfirm',
  props: ['exchangeDocumentConfirmProp']
}
</script>
