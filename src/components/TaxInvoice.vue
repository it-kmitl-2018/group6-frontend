<template>
  <div class="taxInvoice">
    <h1>ใบกำกับภาษี</h1>
      <exchange-document-form :exchangeDocumentFormProp="guideline_id"></exchange-document-form>
      <seller-form :sellerFormProp="trade_agreement.seller"></seller-form>
      <trade-form :tradeDeiveryTermsAndBuyerOrderRefFormProp="trade_agreement.trade"></trade-form>

  </div>
</template>

<script>
import ExchangeDocumentForm from '@/components/ExchangeDocumentForm.vue'
import ExchangeDocumentData from '@/data/ExchangeDocument.data.js'
import SellerForm from '@/components/SellerForm.vue'
import SellerData from '@/data/Seller.data.js'
import TradeDeliveryTermsAndBuyerOrderRefForm from '@/components/TradeDeliveryTermsAndBuyerOrderRefForm.vue'
import TradeDeliveryTermsAndBuyerOrderRefData from '@/data/TradeDeliveryTermsAndBuyerOrderRef.data.js'

export default {
  name: 'taxInvoice',
  data () {
    return {
      guideline_id: ExchangeDocumentData.data,
      trade_agreement: {
        seller: SellerData.data,
        trade: TradeDeliveryTermsAndBuyerOrderRefData.data
      }
    }
  },
  components: {
    ExchangeDocumentForm,
    SellerForm,
    TradeDeliveryTermsAndBuyerOrderRefForm
  },
  methods: {
    submit: function () {
      console.log(this.data)
    }
  }
}
</script>
