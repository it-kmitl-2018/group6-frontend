<template>
    <div class="buyerForm">
        <h1>{{ title }}</h1>
        <div style="padding:10px; border: 1px solid #eeeeee; background-color: #FFFFF0;">
            <h2 style="display: inline">ข้อตกลงทางการค้า</h2><br>
            <table border="0" cellspacing="0px"  style="width: 500px">
                <tbody>
                    <tr>
                        <td>
                            <h3 style="display: inline">ผู้ซื้อ</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;รหัสผู้ค้า </td>
                        <td>
                            <input type="text" maxlength="35" v-model.lazy="disc.id_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;รหัสผู้ค้าสากล (ผู้ซื้อ) </td>
                        <td>
                            <input type="text" maxlength="35" v-model.lazy="disc.global_id_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;ชื่อผู้ซื้อ </td>
                        <td>
                            <input type="text" maxlength="140" v-model.lazy="disc.name_buyer">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h4 style="display: inline">ข้อมูลนิติบุคคล</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;เลขประจาตัวผู้เสียภาษีอากร (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="35" v-model.lazy="disc.id_specified_buyer">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h4 style="display: inline">รายละเอียดการติดต่อ :<br> การติดต่อทางอีเมล</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;URI (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="256" v-model.lazy="disc.uri_id_email_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;อีเมล (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="2048" v-model.lazy="disc.complete_number_email_buyer">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h4 style="display: inline">ที่อยู่ผู้ซื้อ</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;รหัสไปรษณีย์ (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="16" v-model.lazy="disc.post_code_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;ชื่ออาอาคาร (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="70" v-model.lazy="disc.building_name_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;ที่อยู่บรรทัดที่ 1 (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="256" v-model.lazy="disc.line_1_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;ที่อยู่บรรทัดที่ 2 (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="256" v-model.lazy="disc.line_2_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;ซอย (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="70" v-model.lazy="disc.line_3_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;หมู่บ้าน (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="70" v-model.lazy="disc.line_4_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;หมู่ที่ (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="70" v-model.lazy="disc.line_5_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;ถนน (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="70" v-model.lazy="disc.street_name_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;รหัสอำเภอ (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" v-model.lazy="disc.city_name_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;รหัสตำบล (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" v-model.lazy="disc.city_sub_divition_name_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;รหัสประเทศ (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" v-model.lazy="disc.country_id_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;รหัสจังหวัด (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" v-model.lazy="disc.country_sub_divition_id_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;บ้านเลขที่ (ผู้ซื้อ)</td>
                        <td>
                            <input type="text" maxlength="16" v-model.lazy="disc.building_number_trade_address_buyer">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button v-on:click="submit()">หน้าถัดไป</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'buyerForm',
        data () {
            return{
                title: 'ใบกำกับภาษี',
                disc: {
                    id_buyer: '',
                    global_id_buyer: '',
                    name_buyer: '',
                    id_specified_buyer: '',
                    uri_id_email_buyer: '',
                    complete_number_email_buyer: '',
                    post_code_address_buyer: '',
                    building_name_trade_address_buyer: '',
                    line_1_trade_address_buyer: '',
                    line_2_trade_address_buyer: '',
                    line_3_trade_address_buyer: '',
                    line_4_trade_address_buyer: '',
                    line_5_trade_address_buyer: '',
                    street_name_trade_address_buyer: '',
                    city_name_trade_address_buyer: '',
                    city_sub_divition_name_trade_address_buyer: '',
                    country_id_trade_address_seller: '',
                    country_sub_divition_id_trade_address_buyer: '',
                    building_number_trade_address_buyer: ''
                }
            }
        },
        methods: {
            submit: function(){
                console.log(this.disc);
            }
        }
    }
</script>
