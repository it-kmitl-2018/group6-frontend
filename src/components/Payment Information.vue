<template>
  <div class="paymentInformation">
    <br>
    <h2 style="display: inline"> ข้อมูลการชำระเงินทางการค้า </h2>
    <br>
    <br> &nbsp;รหัสสกุลเงินตรา :
    <select name="invoice_currency_code">
      <option value="USD" selected="selected">United States Dollars</option>
      <option value="EUR">Euro</option>
      <option value="GBP">United Kingdom Pounds</option>
      <option value="DZD">Algeria Dinars</option>
      <option value="ARP">Argentina Pesos</option>
      <option value="AUD">Australia Dollars</option>
      <option value="ATS">Austria Schillings</option>
      <option value="BSD">Bahamas Dollars</option>
      <option value="BBD">Barbados Dollars</option>
      <option value="BEF">Belgium Francs</option>
      <option value="BMD">Bermuda Dollars</option>
      <option value="BRR">Brazil Real</option>
      <option value="BGL">Bulgaria Lev</option>
      <option value="CAD">Canada Dollars</option>
      <option value="CLP">Chile Pesos</option>
      <option value="CNY">China Yuan Renmimbi</option>
      <option value="CYP">Cyprus Pounds</option>
      <option value="CSK">Czech Republic Koruna</option>
      <option value="DKK">Denmark Kroner</option>
      <option value="NLG">Dutch Guilders</option>
      <option value="XCD">Eastern Caribbean Dollars</option>
      <option value="EGP">Egypt Pounds</option>
      <option value="FJD">Fiji Dollars</option>
      <option value="FIM">Finland Markka</option>
      <option value="FRF">France Francs</option>
      <option value="DEM">Germany Deutsche Marks</option>
      <option value="XAU">Gold Ounces</option>
      <option value="GRD">Greece Drachmas</option>
      <option value="HKD">Hong Kong Dollars</option>
      <option value="HUF">Hungary Forint</option>
      <option value="ISK">Iceland Krona</option>
      <option value="INR">India Rupees</option>
      <option value="IDR">Indonesia Rupiah</option>
      <option value="IEP">Ireland Punt</option>
      <option value="ILS">Israel New Shekels</option>
      <option value="ITL">Italy Lira</option>
      <option value="JMD">Jamaica Dollars</option>
      <option value="JPY">Japan Yen</option>
      <option value="JOD">Jordan Dinar</option>
      <option value="KRW">Korea (South) Won</option>
      <option value="LBP">Lebanon Pounds</option>
      <option value="LUF">Luxembourg Francs</option>
      <option value="MYR">Malaysia Ringgit</option>
      <option value="MXP">Mexico Pesos</option>
      <option value="NLG">Netherlands Guilders</option>
      <option value="NZD">New Zealand Dollars</option>
      <option value="NOK">Norway Kroner</option>
      <option value="PKR">Pakistan Rupees</option>
      <option value="XPD">Palladium Ounces</option>
      <option value="PHP">Philippines Pesos</option>
      <option value="XPT">Platinum Ounces</option>
      <option value="PLZ">Poland Zloty</option>
      <option value="PTE">Portugal Escudo</option>
      <option value="ROL">Romania Leu</option>
      <option value="RUR">Russia Rubles</option>
      <option value="SAR">Saudi Arabia Riyal</option>
      <option value="XAG">Silver Ounces</option>
      <option value="SGD">Singapore Dollars</option>
      <option value="SKK">Slovakia Koruna</option>
      <option value="ZAR">South Africa Rand</option>
      <option value="KRW">South Korea Won</option>
      <option value="ESP">Spain Pesetas</option>
      <option value="XDR">Special Drawing Right (IMF)</option>
      <option value="SDD">Sudan Dinar</option>
      <option value="SEK">Sweden Krona</option>
      <option value="CHF">Switzerland Francs</option>
      <option value="TWD">Taiwan Dollars</option>
      <option value="THB">Thailand Baht</option>
      <option value="TTD">Trinidad and Tobago Dollars</option>
      <option value="TRL">Turkey Lira</option>
      <option value="VEB">Venezuela Bolivar</option>
      <option value="ZMK">Zambia Kwacha</option>
      <option value="EUR">Euro</option>
      <option value="XCD">Eastern Caribbean Dollars</option>
      <option value="XDR">Special Drawing Right (IMF)</option>
      <option value="XAG">Silver Ounces</option>
      <option value="XAU">Gold Ounces</option>
      <option value="XPD">Palladium Ounces</option>
      <option value="XPT">Platinum Ounces</option>
    </select><br>
    <br>
    <h3 style="display: inline"> ข้อมูลภาษี </h3>
    <br> &nbsp;รหัสประเภทภาษี :
    <select name="tax_type_code">
      <option value="AAA">AAA</option>
      <option value="AAB">AAB</option>
      <option value="AAC">AAC</option>
      <option value="AAD">AAD</option>
      <option value="AAE">AAE</option>
      <option value="AAF">AAF</option>
      <option value="AAG">AAG</option>
      <option value="AAH">AAH</option>
      <option value="AAI">AAI</option>
      <option value="AAJ">AAJ</option>
      <option value="AAK">AAK</option>
      <option value="ADD">ADD</option>
      <option value="BOL">BOL</option>
      <option value="CAP">CAP</option>
      <option value="CAR">CAR</option>
      <option value="COC">COC</option>
      <option value="CST">CST</option>
      <option value="CUD">CUD</option>
      <option value="CVD">CVD</option>
      <option value="ENV">ENV</option>
      <option value="EXC">EXC</option>
      <option value="EXP">EXP</option>
      <option value="FET">FET</option>
      <option value="FRE">FRE</option>
      <option value="GCN">GCN</option>
      <option value="GST">GST</option>
      <option value="ILL">ILL</option>
      <option value="IMP">IMP</option>
      <option value="IND">IND</option>
      <option value="LAC">LAC</option>
      <option value="LCN">LCN</option>
      <option value="LDP">LDP</option>
      <option value="LOC">LOC</option>
      <option value="LST">LST</option>
      <option value="MCA">MCA</option>
      <option value="MCD">MCD</option>
      <option value="OTH">OTH</option>
      <option value="PDB">PDB</option>
      <option value="PDC">PDC</option>
      <option value="PRF">PRF</option>
      <option value="SCN">SCN</option>
      <option value="SSS">SSS</option>
      <option value="STT">STT</option>
      <option value="SUP">SUP</option>
      <option value="SUR">SUR</option>
      <option value="SWT">SWT</option>
      <option value="TAC">TAC</option>
      <option value="TOT">TOT</option>
      <option value="TOX">TOX</option>
      <option value="TTA">TTA</option>
      <option value="VAD">VAD</option>
      <option value="VAT">VAT</option>
    </select>
    <br> &nbsp;อัตราภาษี :
    <input name="tax_calculated_rate" type="number" id="tax_calculated_rate"><br> 
    &nbsp;มูลค่าสินค้า/บริการ :
    <input name="basis_amount" type="number" id="basis_amount"><br><br>
    <h3 style="display: inline"> ข้อมูลส่วนลดหรือค่าธรรมเนียม </h3>
    <br> &nbsp;ตัวบอกส่วนลดหรือค่าธรรมเนียม :
    <input  type="checkbox" @click="buttonIsSubmitted+=1">
    <div v-if="buttonIsSubmitted%2===0">
      &nbsp;มูลค่าส่วนลดหรือค่าธรรมเนียม :
      <input name="actual_amount_fee" type="number" id="actual_amount_fee">
      <br> &nbsp;รหัสประเภทส่วนลดหรือค่าธรรมเนียม :
      <select name="type_code_fee">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        <option value="46">46</option>
        <option value="47">47</option>
        <option value="48">48</option>
        <option value="49">49</option>
        <option value="50">50</option>
        <option value="51">51</option>
        <option value="52">52</option>
        <option value="53">53</option>
        <option value="54">54</option>
        <option value="55">55</option>
        <option value="56">56</option>
        <option value="57">57</option>
        <option value="58">58</option>
        <option value="59">59</option>
        <option value="60">60</option>
        <option value="61">61</option>
        <option value="62">62</option>
        <option value="63">63</option>
        <option value="64">64</option>
        <option value="65">65</option>
        <option value="66">66</option>
        <option value="67">67</option>
        <option value="68">68</option>
        <option value="69">69</option>
        <option value="70">70</option>
        <option value="71">71</option>
        <option value="72">72</option>
        <option value="73">73</option>
        <option value="74">74</option>
        <option value="75">75</option>
        <option value="76">76</option>
        <option value="77">77</option>
        <option value="78">78</option>
        <option value="79">79</option>
        <option value="80">80</option>
        <option value="81">81</option>
        <option value="82">82</option>
        <option value="83">83</option>
        <option value="84">84</option>
        <option value="85">85</option>
        <option value="86">86</option>
        <option value="87">87</option>
        <option value="88">88</option>
        <option value="89">89</option>
        <option value="90">90</option>
        <option value="91">91</option>
        <option value="92">92</option>
        <option value="93">93</option>
        <option value="94">94</option>
        <option value="95">95</option>
        <option value="96">96</option>
        <option value="97">97</option>
        <option value="98">98</option>
        <option value="99">99</option>
        <option value="100">100</option>
        <option value="101">101</option>
      </select>
    </div><br><br>
    <h3 style="display: inline"> ข้อมูลการชำระเงิน </h3><br>
    &nbsp;เงื่อนไขการชำระเงิน :
    <select name="term_of_payment">
      <option value="CREDOC">CREDOC</option>
      <option value="CREDOC/nM">CREDOC/nM</option>
      <option value="CONCREDOC">CONCREDOC</option>
      <option value="CONCREDOC/nM">CONCREDOC/nM</option>
      <option value="RECREDOC">RECREDOC</option>
      <option value="RECREDOC/nM">RECREDOC/nM</option>
      <option value="COLLECT">COLLECT</option>
      <option value="DOCOLLECT">DOCOLLECT</option>
      <option value="DOCOLLECT/nM">DOCOLLECT/nM</option>
      <option value="INNO">INNO</option>
      <option value="INPA">INPA</option>
      <option value="PARTS">PARTS</option>
      <option value="AAAA/MM/JJ">AAAA/MM/JJ</option>
      <option value="ANTICIP">ANTICIP</option>
      <option value="CASH">CASH</option>
      <option value="REMBURS">REMBURS</option>
      <option value="ULTIMO">ULTIMO</option>
      <option value="ULTIMO/nM">ULTIMO/nM</option>
      <option value="DEL/nM">DEL/nM</option>
      <option value="CASHFAC">CASHFAC</option>
      <option value="FACULTIMO">FACULTIMO</option>
      <option value="FACULTIMO/nM">FACULTIMO/nM</option>
      <option value="FAC/nM">FAC/nM</option>
      <option value="DIS n% nM">DIS n% nM</option>
      <option value="INT nM n%">INT nM n%</option>
      <option value="COMPENS">COMPENS</option>
      <option value="CONSIGN">CONSIGN</option>
      <option value="AGREE">AGREE</option>
      <option value="HABIT">HABIT</option>
      <option value="NOPAY">NOPAY</option>
    </select><br><br>
    <h3 style="display: inline"> การสรุปมูลค่าการชำระเงินทางการค้า </h3>
    <br> &nbsp;รวมมูลค่าตามเอกสารเดิม :
    <input name="original_information_amount" type="number" id="original_information_amount">
    <br> &nbsp;รวมมูลค่าตามรายการ/มูลค่าที่ถูกต้อง :
    <input name="line_total_amount" type="number" id="line_total_amount">
    <br> &nbsp;มูลค่าผลต่าง :
    <input name="difference_sales_information_amount" type="number" id="difference_sales_information_amount">
    <br> &nbsp;ส่วนลด :
    <input name="total_allowance_amount" type="number" id="total_allowance_amount">
    <br> &nbsp;จํานวนภาษีมูลค่าเพิ่ม :
    <input name="tax_total_amount" type="number" id="tax_total_amount">
    <select name="tax_total_amount-invoice_currency_code">
      <option value="USD" selected="selected">United States Dollars</option>
      <option value="EUR">Euro</option>
      <option value="GBP">United Kingdom Pounds</option>
      <option value="DZD">Algeria Dinars</option>
      <option value="ARP">Argentina Pesos</option>
      <option value="AUD">Australia Dollars</option>
      <option value="ATS">Austria Schillings</option>
      <option value="BSD">Bahamas Dollars</option>
      <option value="BBD">Barbados Dollars</option>
      <option value="BEF">Belgium Francs</option>
      <option value="BMD">Bermuda Dollars</option>
      <option value="BRR">Brazil Real</option>
      <option value="BGL">Bulgaria Lev</option>
      <option value="CAD">Canada Dollars</option>
      <option value="CLP">Chile Pesos</option>
      <option value="CNY">China Yuan Renmimbi</option>
      <option value="CYP">Cyprus Pounds</option>
      <option value="CSK">Czech Republic Koruna</option>
      <option value="DKK">Denmark Kroner</option>
      <option value="NLG">Dutch Guilders</option>
      <option value="XCD">Eastern Caribbean Dollars</option>
      <option value="EGP">Egypt Pounds</option>
      <option value="FJD">Fiji Dollars</option>
      <option value="FIM">Finland Markka</option>
      <option value="FRF">France Francs</option>
      <option value="DEM">Germany Deutsche Marks</option>
      <option value="XAU">Gold Ounces</option>
      <option value="GRD">Greece Drachmas</option>
      <option value="HKD">Hong Kong Dollars</option>
      <option value="HUF">Hungary Forint</option>
      <option value="ISK">Iceland Krona</option>
      <option value="INR">India Rupees</option>
      <option value="IDR">Indonesia Rupiah</option>
      <option value="IEP">Ireland Punt</option>
      <option value="ILS">Israel New Shekels</option>
      <option value="ITL">Italy Lira</option>
      <option value="JMD">Jamaica Dollars</option>
      <option value="JPY">Japan Yen</option>
      <option value="JOD">Jordan Dinar</option>
      <option value="KRW">Korea (South) Won</option>
      <option value="LBP">Lebanon Pounds</option>
      <option value="LUF">Luxembourg Francs</option>
      <option value="MYR">Malaysia Ringgit</option>
      <option value="MXP">Mexico Pesos</option>
      <option value="NLG">Netherlands Guilders</option>
      <option value="NZD">New Zealand Dollars</option>
      <option value="NOK">Norway Kroner</option>
      <option value="PKR">Pakistan Rupees</option>
      <option value="XPD">Palladium Ounces</option>
      <option value="PHP">Philippines Pesos</option>
      <option value="XPT">Platinum Ounces</option>
      <option value="PLZ">Poland Zloty</option>
      <option value="PTE">Portugal Escudo</option>
      <option value="ROL">Romania Leu</option>
      <option value="RUR">Russia Rubles</option>
      <option value="SAR">Saudi Arabia Riyal</option>
      <option value="XAG">Silver Ounces</option>
      <option value="SGD">Singapore Dollars</option>
      <option value="SKK">Slovakia Koruna</option>
      <option value="ZAR">South Africa Rand</option>
      <option value="KRW">South Korea Won</option>
      <option value="ESP">Spain Pesetas</option>
      <option value="XDR">Special Drawing Right (IMF)</option>
      <option value="SDD">Sudan Dinar</option>
      <option value="SEK">Sweden Krona</option>
      <option value="CHF">Switzerland Francs</option>
      <option value="TWD">Taiwan Dollars</option>
      <option value="THB">Thailand Baht</option>
      <option value="TTD">Trinidad and Tobago Dollars</option>
      <option value="TRL">Turkey Lira</option>
      <option value="VEB">Venezuela Bolivar</option>
      <option value="ZMK">Zambia Kwacha</option>
      <option value="EUR">Euro</option>
      <option value="XCD">Eastern Caribbean Dollars</option>
      <option value="XDR">Special Drawing Right (IMF)</option>
      <option value="XAG">Silver Ounces</option>
      <option value="XAU">Gold Ounces</option>
      <option value="XPD">Palladium Ounces</option>
      <option value="XPT">Platinum Ounces</option>
    </select>
    <br> &nbsp;ยอดเงินรวม/ยอดเงินรวมภาษีมูลค่าเพิ่ม :
    <input name="grand_total_amount" type="number" id="grand_total_amount">
    <select name="grand_total_amount-invoice_currency_code">
      <option value="USD" selected="selected">United States Dollars</option>
      <option value="EUR">Euro</option>
      <option value="GBP">United Kingdom Pounds</option>
      <option value="DZD">Algeria Dinars</option>
      <option value="ARP">Argentina Pesos</option>
      <option value="AUD">Australia Dollars</option>
      <option value="ATS">Austria Schillings</option>
      <option value="BSD">Bahamas Dollars</option>
      <option value="BBD">Barbados Dollars</option>
      <option value="BEF">Belgium Francs</option>
      <option value="BMD">Bermuda Dollars</option>
      <option value="BRR">Brazil Real</option>
      <option value="BGL">Bulgaria Lev</option>
      <option value="CAD">Canada Dollars</option>
      <option value="CLP">Chile Pesos</option>
      <option value="CNY">China Yuan Renmimbi</option>
      <option value="CYP">Cyprus Pounds</option>
      <option value="CSK">Czech Republic Koruna</option>
      <option value="DKK">Denmark Kroner</option>
      <option value="NLG">Dutch Guilders</option>
      <option value="XCD">Eastern Caribbean Dollars</option>
      <option value="EGP">Egypt Pounds</option>
      <option value="FJD">Fiji Dollars</option>
      <option value="FIM">Finland Markka</option>
      <option value="FRF">France Francs</option>
      <option value="DEM">Germany Deutsche Marks</option>
      <option value="XAU">Gold Ounces</option>
      <option value="GRD">Greece Drachmas</option>
      <option value="HKD">Hong Kong Dollars</option>
      <option value="HUF">Hungary Forint</option>
      <option value="ISK">Iceland Krona</option>
      <option value="INR">India Rupees</option>
      <option value="IDR">Indonesia Rupiah</option>
      <option value="IEP">Ireland Punt</option>
      <option value="ILS">Israel New Shekels</option>
      <option value="ITL">Italy Lira</option>
      <option value="JMD">Jamaica Dollars</option>
      <option value="JPY">Japan Yen</option>
      <option value="JOD">Jordan Dinar</option>
      <option value="KRW">Korea (South) Won</option>
      <option value="LBP">Lebanon Pounds</option>
      <option value="LUF">Luxembourg Francs</option>
      <option value="MYR">Malaysia Ringgit</option>
      <option value="MXP">Mexico Pesos</option>
      <option value="NLG">Netherlands Guilders</option>
      <option value="NZD">New Zealand Dollars</option>
      <option value="NOK">Norway Kroner</option>
      <option value="PKR">Pakistan Rupees</option>
      <option value="XPD">Palladium Ounces</option>
      <option value="PHP">Philippines Pesos</option>
      <option value="XPT">Platinum Ounces</option>
      <option value="PLZ">Poland Zloty</option>
      <option value="PTE">Portugal Escudo</option>
      <option value="ROL">Romania Leu</option>
      <option value="RUR">Russia Rubles</option>
      <option value="SAR">Saudi Arabia Riyal</option>
      <option value="XAG">Silver Ounces</option>
      <option value="SGD">Singapore Dollars</option>
      <option value="SKK">Slovakia Koruna</option>
      <option value="ZAR">South Africa Rand</option>
      <option value="KRW">South Korea Won</option>
      <option value="ESP">Spain Pesetas</option>
      <option value="XDR">Special Drawing Right (IMF)</option>
      <option value="SDD">Sudan Dinar</option>
      <option value="SEK">Sweden Krona</option>
      <option value="CHF">Switzerland Francs</option>
      <option value="TWD">Taiwan Dollars</option>
      <option value="THB">Thailand Baht</option>
      <option value="TTD">Trinidad and Tobago Dollars</option>
      <option value="TRL">Turkey Lira</option>
      <option value="VEB">Venezuela Bolivar</option>
      <option value="ZMK">Zambia Kwacha</option>
      <option value="EUR">Euro</option>
      <option value="XCD">Eastern Caribbean Dollars</option>
      <option value="XDR">Special Drawing Right (IMF)</option>
      <option value="XAG">Silver Ounces</option>
      <option value="XAU">Gold Ounces</option>
      <option value="XPD">Palladium Ounces</option>
      <option value="XPT">Platinum Ounces</option>
    </select>
    <br>
  </div>
</template>

<script>
  export default {
    name: "paymentInformation",
    data() {
      return {
        buttonIsSubmitted: 1
      };
    }
  };

</script>
