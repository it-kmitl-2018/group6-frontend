<template>
   <div class="EReceiptForm">
      <br>
      <h1>ใบเสร็จอิเล็กทรอนิกส์</h1>
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="ผู้ซื้อ">
            <recipient-form :buyerFormVue="buyer"></recipient-form>
          </b-tab>
          <b-tab title="ผู้ซื้อ">
            <exchangeDocumentForm-form :exchangeDocumentFormProp="ExchangeDocument"></exchangeDocumentForm-form>
          </b-tab>
          <b-tab title="ข้อมูลการชำระเงินทางการค้า">
            <paymentDetailer-form :paymentDetail="paymentDetailer"></paymentDetailer-form>
          </b-tab>
          <b-tab title="ข้อมูลผู้รับ">
            <supplyChainDeliveryReceiver-form :supplyChainDeliveryReceiverVue="supplyChainDeliveryReceiver"></supplyChainDeliveryReceiver-form>
          </b-tab>
          <b-tab title="ข้อมูลผู้ส่ง">
            <supplyChainDeliverySender-form :supplyChainDeliverySenderVue="supplyChainDeliverySender"></supplyChainDeliverySender-form>
          </b-tab>
          <b-tab title="ข้อตกลงทางการค้า">
            <tradeDeiveryTermsAndBuyerOrderRef-form :tradeDeiveryTermsAndBuyerOrderRefFormProp="TradeDeliveryTermsAndBuyerOrderRef"></tradeDeiveryTermsAndBuyerOrderRef-form>
          </b-tab>
        </b-tabs>
      </b-card>
   </div>
</template>
<script>
import buyerForm from '@/components/buyerForm.vue'
import buyerData from '@/data/buyer.data.js'
import ExchangeDocumentForm from '@/components/ExchangeDocumentForm.vue'
import ExchangeDocumentData from '@/data/ExchangeDocument.data.js'
import paymentInformationForm from '@/components/paymentInformation.vue'
import paymentInformationData from '@/data/paymentDetail.data.js'
import supplyChainDeliveryReceiverForm from '@/components/supplyChainDeliveryReceiverForm.vue'
import supplyChainDeliveryReceiverData from '@/data/supplyChainDeliveryReceiver.data.js'
import supplyChainDeliverySenderForm from '@/components/supplyChainDeliverySenderForm.vue'
import supplyChainDeliverySenderData from '@/data/supplyChainDeliverySender.data.js'
import TradeDeliveryTermsAndBuyerOrderRefForm from '@/components/TradeDeliveryTermsAndBuyerOrderRefForm.vue'
import TradeDeliveryTermsAndBuyerOrderRefData from '@/data/TradeDeliveryTermsAndBuyerOrderRef.data.js'
export default {
  data () {
    return {
      buyer: buyerData.data,
      ExchangeDocument: ExchangeDocumentData.data,
      paymentDetailer: paymentInformationData.data,
      supplyChainDeliveryReceiver: supplyChainDeliveryReceiverData.data,
      supplyChainDeliverySender: supplyChainDeliverySenderData.data,
      TradeDeliveryTermsAndBuyerOrderRef: TradeDeliveryTermsAndBuyerOrderRefData.data
    }
  },
  components: {
    buyerForm,
    ExchangeDocumentForm,
    paymentInformationForm,
    supplyChainDeliveryReceiverForm,
    supplyChainDeliverySenderForm,
    TradeDeliveryTermsAndBuyerOrderRefForm
  },
  methods: {
  }
}
</script>
