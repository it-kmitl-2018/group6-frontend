<template> 
<div> 
    <div class="buyerForm"><br> 
    <h2 style="display: inline">ข้อตกลงทางการค้า</h2><br><br> 
    <h3 style="display: inline">ผู้ซื้อ</h3> <br> 
    &nbsp;รหัสผู้ค้า <input name="idBuyer" type="text" maxlength="35" id="idBuyer"> <br> 
    &nbsp;รหัสผู้ค้าสากล (ผู้ซื้อ) <input name="global_id_buyer" type="text" maxlength="35" id="globalIdBuyer"> <br> 
    &nbsp;ชื่อผู้ซื้อ <input name="nameBuyer" type="text" maxlength="140" id="nameBuyer"><br> 
    <h4 style="display: inline">ข้อมูลนิติบุคคล</h4><br> 
    &nbsp;เลขประจาตัวผู้เสียภาษีอากร (ผู้ซื้อ) <input name="idSpecified" type="text" maxlength="35" id="idSpecifiedBuyer"><br> 
    <h4 style="display: inline">รายละเอียดการติดต่อ : <br> การติดต่อทางอีเมล</h4><br> 
    &nbsp;URI (ผู้ซื้อ) <input name="uriIdEmail" type="text" maxlength="256" id="uriIdEmailBuyer"> <br> 
    &nbsp;อีเมล (ผู้ซื้อ) <input name="completeNumberEmail" type="text" maxlength="2048" id="completeNumberEmailBuyer"><br> 
    <h4 style="display: inline">ที่อยู่ผู้ซื้อ</h4><br> 
    &nbsp;รหัสไปรษณีย์ (ผู้ซื้อ) <input name="postCodeAddress" type="text" maxlength="16" id="postCodeAddressBuyer"/> <br> 
    &nbsp;ชื่ออาอาคาร (ผู้ซื้อ) <input name="buildingNameTradeAddress" type="text" maxlength="70" id="buildingNameTradeAddressBuyer"> <br> 
    &nbsp;ที่อยู่บรรทัดที่ 1 (ผู้ซื้อ) <input name="line1TradeAddress" type="text" maxlength="256" id="line1TradeAddressBuyer"> <br> 
    &nbsp;ที่อยู่บรรทัดที่ 2 (ผู้ซื้อ) <input name="line2TradeAddress" type="text" maxlength="256" id="line2TradeAddressBuyer"> <br> 
    &nbsp;ซอย (ผู้ซื้อ) <input name="line3TradeAddress" type="text" maxlength="70" id="line3TradeAddressBuyer"> <br> 
    &nbsp;หมู่บ้าน (ผู้ซื้อ) <input name="line4TradeAddress" type="text" maxlength="70" id="line4TradeAddressBuyer"> <br> 
    &nbsp;หมู่ที่ (ผู้ซื้อ) <input name="line5TradeAddress" type="text" maxlength="70" id="line5TradeAddressBuyer"> <br> 
    &nbsp;ถนน (ผู้ซื้อ) <input name="streetNameTradeAddress" type="text" maxlength="70" id="streetNameTradeAddressBuyer"> <br> 
    &nbsp;รหัสอำเภอ (ผู้ซื้อ) <input name="cityNameTradeAddress" type="text" id="cityNameTradeAddressBuyer"> <br> 
    &nbsp;รหัสตำบล (ผู้ซื้อ) <input name="citySub-divitionNameTradeAddress" type="text" id="citySub-divitionNameTradeAddressBuyer"> <br> 
    &nbsp;รหัสประเทศ (ผู้ซื้อ) <input name="countryIdTradeAddress" type="text" id="countryIdTradeAddressBuyer"> <br> 
    &nbsp;รหัสจังหวัด (ผู้ซื้อ) <input name="countrySub-divitionIdTradeAddress" type="text" id="countrySub-divitionIdTradeAddressBuyer"> <br> 
    &nbsp;บ้านเลขที่ (ผู้ซื้อ) <input name="buildingNumberTradeAddress" type="text" maxlength="16" id="buildingNumberTradeAddressBuyer"><br><br> 
    </div> 
</div> 
</template> 
 
<script> 
export default { 
    props: ["buyer"] 
}; 
</script> 