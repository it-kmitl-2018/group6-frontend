<template>
  <div class="taxInvoiceConfirm">
    <h1>ยืนยันใบกำกับภาษี</h1>
      <exchange-document-confirm :exchangeDocumentConfirmProp="input.guideline_id"></exchange-document-confirm>
      <seller-confirm :sellerConfirmProp="input.trade_agreement.seller"></seller-confirm>
      <trade-confirm :tradeDeiveryTermsAndBuyerOrderRefConfirmProp="input.trade_agreement.trade"></trade-confirm>

  </div>
</template>

<script>
import ExchangeDocumentConfirm from '@/components/confirm/ExchangeDocumentConfirm.vue'
import ExchangeDocumentData from '@/data/ExchangeDocument.data.js'
import SellerConfirm from '@/components/confirm/SellerConfirm.vue'
import SellerData from '@/data/Seller.data.js'
import TradeDeliveryTermsAndBuyerOrderRefConfirm from '@/components/confirm/TradeDeliveryTermsAndBuyerOrderRefConfirm.vue'
import TradeDeliveryTermsAndBuyerOrderRefData from '@/data/TradeDeliveryTermsAndBuyerOrderRef.data.js'

export default {
  name: 'taxInvoice',
  data () {
    return {
      input: {
        guideline_id: ExchangeDocumentData.data,
        trade_agreement: {
          seller: SellerData.data,
          trade: TradeDeliveryTermsAndBuyerOrderRefData.data
        }
      }
    }
  },
  components: {
    ExchangeDocumentConfirm,
    SellerConfirm,
    TradeDeliveryTermsAndBuyerOrderRefConfirm
  },
  methods: {
    submit: function () {
      console.log(this.data)
    }
  }
}
</script>
