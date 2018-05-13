<template>
    <div class="tradeTermsAndBuyerOrderRefForm">
        <h1>{{ title }}</h1>
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
                            <input type="text" v-model.lazy="disc.delivery_type_code">
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
                            <input type="text" maxlength="35" v-model.lazy="disc.issuer_assigned_id_buyer_order">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;วันเดือนปี ที่ออกใบสั่งซื้อ</td>
                        <td>
                            <input type="date" v-model.lazy="disc.issuer_date_time_buyer_order">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;รหัสเอกสารอ้างอิง</td>
                        <td>
                            <input type="text" v-model.lazy="disc.reference_type_code_buyer_order">
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
                            <input type="text" maxlength="35" v-model.lazy="disc.issuer_assigned_id_additional">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;วันเดือนปี ที่ออกเอกสารอ้างอิง</td>
                        <td>
                            <input type="date" v-model.lazy="disc.issuer_date_time_additional">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;รหัสเอกสารอ้างอิง</td>
                        <td>
                            <input type="text" v-model.lazy="disc.reference_type_code_additional">
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
        name: 'tradeTermsAndBuyerOrderRefForm',
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