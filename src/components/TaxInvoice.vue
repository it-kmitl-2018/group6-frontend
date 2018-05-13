<template>
  <div class="taxInvoice">
    <h1>{{ title_invoice }}</h1>
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="หัวเรื่องเอกสาร">
          <exchange-document-form :exchangeDocumentFormProp="guideline_id"></exchange-document-form>
        </b-tab>
        <b-tab title="ผู้ขาย">
          <seller-form :sellerFormProp="trade_agreement.seller"></seller-form>
        </b-tab>
        <b-tab title="เงื่อนไขกำรซื้อขาย และเอกสารใบสั่งซื้ออ้างอิง">
          <trade-form :tradeDeiveryTermsAndBuyerOrderRefFormProp="trade_agreement.trade"></trade-form>
        </b-tab>
      </b-tabs>
    </b-card>
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
 title_invoice: 'ใบกำกับภาษี',
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
    submit: function(){
      console.log(this.data);
    }
  }
}
</script>
