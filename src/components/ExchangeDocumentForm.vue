<template>
  <div class="exchangeDocumentForm">
    <h1>{{ title }}</h1>
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
                        <input type="text" maxlength="35" v-model.lazy="disc.id_guideline">
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
                        <input type="text" maxlength="35" v-model.lazy="disc.id_document">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;ชื่อเอกสาร</td>
                    <td>
                        <select v-model.lazy="disc.name_document">
                            <option value="80">Debit note related to goods or services</option>
                            <option value="81">Credit note related to goods or services</option>
                            <option value="82">Metered services invoice</option>
                            <option value="83">Credit note related to financial adjustments</option>
                            <option value="84">Debit note related to financial adjustments</option>
                            <option value="261">Self billed credit note</option>
                            <option value="262">Consolidated credit note - goods and services</option>
                            <option value="325">Proforma invoice</option>
                            <option value="380">Commercial invoice</option>
                            <option value="381">Credit note</option>
                            <option value="383">Debit note</option>
                            <option value="384">Corrected invoice</option>
                            <option value="385">Consolidated invoice</option>
                            <option value="386">Prepayment invoice</option>
                            <option value="389">Self-billed invoice</option>
                            <option value="395">Consignment invoice</option>
                            <option value="396">Factored credit note</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;รหัสประเภทเอกสาร</td>
                    <td>
                        <input type="text" v-model.lazy="disc.type_code_document">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;วันเดือนปี ที่ออกเอกสาร</td>
                    <td>
                        <input type="date" v-model.lazy="disc.issue_date_time_document">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;สาเหตุการออกเอกสาร</td>
                    <td>
                        <input type="text" maxlength="35" v-model.lazy="disc.purpose_document">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;รหัสสาเหตุการออกเอกสาร</td>
                    <td>
                        <select v-model.lazy="disc.purpose_code_document">
                            <option value="1">Cancellation</option>
                            <option value="2">Addition</option>
                            <option value="3">Deletion</option>
                            <option value="4">Change</option>
                            <option value="5">Replace</option>
                            <option value="6">Confirmation</option>
                            <option value="7">Duplicate</option>
                            <option value="8">Status</option>
                            <option value="9">Original</option>
                            <option value="10">Not found</option>

                            <option value="11">Response</option>
                            <option value="12">Not processed</option>
                            <option value="13">Request</option>
                            <option value="14">Advance notification</option>
                            <option value="15">Reminder</option>
                            <option value="16">Proposal</option>
                            <option value="17">Cancel, to be reissued</option>
                            <option value="18">Reissue</option>
                            <option value="19">Seller initiated change</option>
                            <option value="20">Replace heading section only</option>

                            <option value="21">Replace item detail and summary only</option>
                            <option value="22">Final transmission</option>
                            <option value="23">Transaction on hold</option>
                            <option value="24">Delivery instruction</option>
                            <option value="25">Forecast</option>
                            <option value="26">Delivery instruction and forecast</option>
                            <option value="27">Not accepted</option>
                            <option value="28">Accepted, with amendment in heading section</option>
                            <option value="29">Accepted without amendment</option>
                            <option value="30">Accepted, with amendment in detail section</option>

                            <option value="31">Copy</option>
                            <option value="32">Approval</option>
                            <option value="33">Change in heading section</option>
                            <option value="34">Accepted with amendment</option>
                            <option value="35">Retransmission</option>
                            <option value="36">Change in detail section</option>
                            <option value="37">Reversal of a debit</option>
                            <option value="38">Reversal of a credit</option>
                            <option value="39">Reversal for cancellation</option>
                            <option value="40">Request for deletion</option>

                            <option value="41">Finishing/closing order</option>
                            <option value="42">Confirmation via specific means</option>
                            <option value="43">Additional transmission</option>
                            <option value="44">Accepted without reserves</option>
                            <option value="45">Accepted with reserves</option>
                            <option value="46">Provisional</option>
                            <option value="47">Definitive</option>
                            <option value="48">Accepted, contents rejected</option>
                            <option value="49">Settled dispute</option>
                            <option value="50">Withdraw</option>

                            <option value="51">Authorisation</option>
                            <option value="52">Proposed amendment</option>
                            <option value="53">Test</option>
                            <option value="54">Extract</option>
                            <option value="55">Notification only</option>
                            <option value="56">Advice of ledger booked items</option>
                            <option value="57">Advice of items pending to be booked in the ledger</option>
                            <option value="58">Pre-advice of items requiring further information</option>
                            <option value="59">Pre-adviced items</option>
                            <option value="60">No action since last message</option>

                            <option value="61">Complete schedule</option>
                            <option value="62">Update schedule</option>
                            <option value="63">Not accepted, provisional</option>
                            <option value="64">Verification</option>
                            <option value="65">Unsettled dispute</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;เลขที่เอกสารสากล</td>
                    <td>
                        <input type="text" maxlength="35" v-model.lazy="disc.global_id_document">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;วันเดือนปีและเวลาที่สร้างเอกสาร</td>
                    <td>
                        <input type="date" v-model.lazy="disc.creation_date_time_document">
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
                        <textarea type="text" maxlength="500" v-model.lazy="disc.remark_include_note"></textarea>
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
        props: ['exchangeDocumentFormProp']
        name: 'exchangeDocumentForm',
        data () {
            return{
                title: 'ใบกำกับภาษี',
            }
        },
        methods: {
            submit: function(){
                console.log(this.disc);
            }
        }
    }
</script>
