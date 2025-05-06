
const products = {
  electronics: [],
  tools: [],
  fashion: []
};

function renderProducts() {
  for (let cat in products) {
    const container = document.getElementById(cat + "-list");
    if (!container) continue;
    container.innerHTML = "";
    products[cat].forEach((p, i) => {
      container.innerHTML += \`
        <div class="product">
          <img src="\${p.image}" alt="\${p.name}">
          <h3>\${p.name}</h3>
          <p>\${p.price} دج</p>
          <button onclick="selectProduct('\${p.name}')">أطلب</button>
        </div>
      \`;
    });
  }
}

function selectProduct(name) {
  document.getElementById("selected-product").value = name;
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

function placeOrder() {
  const name = document.getElementById("client-name").value;
  const phone = document.getElementById("client-phone").value;
  const wilaya = document.getElementById("wilaya").value;
  const address = document.getElementById("client-address").value;
  const product = document.getElementById("selected-product").value;
  alert("تم إرسال الطلب لمنتج: " + product + " من " + name + " (" + wilaya + ")");
}

const wilayas = ["أدرار", "الشلف", "الأغواط", "أم البواقي", "باتنة", "بجاية", "بسكرة", "بشار", "البليدة", "البويرة",
"تمنراست", "تبسة", "تلمسان", "تيارت", "تيزي وزو", "الجزائر", "الجلفة", "جيجل", "سطيف", "سعيدة", "سكيكدة", "سيدي بلعباس",
"عنابة", "قالمة", "قسنطينة", "المدية", "مستغانم", "المسيلة", "معسكر", "ورقلة", "وهران", "البيض", "إليزي", "برج بوعريريج",
"بومرداس", "الطارف", "تندوف", "تيسمسيلت", "الوادي", "خنشلة", "سوق أهراس", "تيبازة", "ميلة", "عين الدفلى", "النعامة",
"عين تموشنت", "غرداية", "غليزان", "تميمون", "برج باجي مختار", "أولاد جلال", "بني عباس", "عين صالح", "عين قزام",
"تقرت", "جانت", "المغير", "المنيعة"];

const wilayaSelect = document.getElementById("wilaya");
wilayas.forEach(w => {
  wilayaSelect.innerHTML += \`<option>\${w}</option>\`;
});

renderProducts();
