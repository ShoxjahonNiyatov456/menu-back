# Elektron menu
  
- Routes

  - Settings
    - Schema
      - Phone numbers
        ```json
        phonenumbers:["+998955571302","+9982348748374"]
        ```
        Location
        Banner
        Title
        Language
        Description
      - SocialMediaLinks
        "socialMediaLinks": {
        "instagram": "https://instagram.com/restaurant",
        "telegram": "https://t.me/restaurant"
        },
        Logo
    - Route
      - Get
        /settings– barcha settinglarni olish
      - Post
        /settings– yangi settingslarni qo‘shish
      - Put
        /settings – settingsni yangilash
  - Products

    - Schema
      Name
      Images
      Price
      :id
      Description
      Category
      SellCount
    - Route

      ```json
      GET /api/products – barcha mahsulotlarni olish

      GET /api/products/:id – bitta mahsulotni olish

      POST /api/products – yangi mahsulot qo‘shish

      PUT /api/products/:id – mahsulotni yangilash

      DELETE /api/products/:id – mahsulotni o‘chirish
      ```

  - Categories
    - Schema
      {
      "id": "c1",
      "name": "Fast Food",
      }
    - Route
      - Get
        /categories – barcha kategoriyalarni olish
      - Get
        /categories/:id – bitta kategoriya
      - Post
        /categories – yangi kategoriya qo‘shish
      - Put
        /categories/:id – kategoriya yangilash
      - Delete
        /categories/:id – kategoriya o‘chirish
  - Order
    - Schema
      Totalprice
      OrderId
      Status
      History
      PhoneNumber
      Location
      - Items
        ```json
        products: [
             {
                 productId: String,
                 name: String,
                 quantity: Number,
                 price: Number
             }
        ],
        ```
    - Route
      - Get
        /orders → barcha buyurtmalar
        /orders/:id → bitta buyurtma tafsilotlari
      - Post
        /orders → yangi buyurtma qo‘shish
      - Put
        /orders/:id → buyurtmani yangilash (masalan, status)
      - delete
        /orders/:id → buyurtmani o‘chirish
  - Kombo
    - Route
      - Get
        /combos → Kombo mahsulotlar ro‘yxati
        /combos/id → 1 ta Kombo malumotlari
      - Post
        `/combos` → yangi kombo qo‘shish
      - Put
        `/combos/:id` → kombo yangilash
      - Delete
        `/combos/:id` → kombo o‘chirish
    - Schema
      | `name` | Combo nomi, masalan “Top Combo” |
      | ------ | ------------------------------- |
      | comboimage | Combo rasmi |
      | ---------- | ----------- |
      | id | Comboning id si |
      | --- | --------------- |
      | `description` | Qo‘shimcha izoh (ixtiyoriy) |
      | ------------- | --------------------------- |
      | `products` | Combo ichidagi mahsulotlar ro‘yxati |
      | ---------- | ----------------------------------- |
      | `products.productId` | Mahsulotning unikal ID |
      | -------------------- | ---------------------- |
      | `products.name` | Mahsulot nomi |
      | --------------- | ------------- |
      | `products.quantity` | Mahsulot miqdori, default 1 |
      | ------------------- | --------------------------- |
      | `comboPrice` | Combo umumiy narxi (agar chegirma bo‘lsa) |
      | ------------ | ----------------------------------------- |
      | `createdAt` / `updatedAt` | Avtomatik timestamp |
      | ------------------------- | ------------------- |
      | servings | Necha kishiga to’g’ri kelishi |
      | -------- | ----------------------------- |

# Qog’oz menu ning kamchiliklari

- **Vaqt yo‘qotish** – Afitsant menyuni olib kelishi uchun 2–3 minut ketadi, bu esa xizmat ko‘rsatish tezligini sekinlashtiradi.
- **Shikastlanish** – Qog‘oz menyular 2–3 oyda eskiradi yoki yirtiladi, doimiy ravishda yangilash kerak.
- **Narx o‘zgarishi** – Narxlarni yangilash uchun barcha menyularni qayta chiqarish zarur. Masalan:
  - 20 ta menyu × 300 000 so‘m = 6 mln so‘m
  - 5 yil davomida 30 mln so‘m faqat qog‘oz menyu uchun ketadi.
- **Gigiyena muammosi** – Qog‘oz menyular ko‘p odam qo‘lidan o‘tadi, gigiyenik jihatdan xavfli.
- **Moslashuvchanlik yo‘qligi** – Reklama, aksiyalar yoki yangi taomlarni tezda qo‘shib bo‘lmaydi.

# Elektron menyular afzalliklari

- **Tezkor narx o‘zgarishi** – Admin panel orqali narx va taomlarni darhol yangilash mumkin.
- **Arzonroq va uzoq muddatli** – 5 yilga hisoblaganda 1 marta atigi 7 mln so’mga sotib olib 23 mln so‘m tejash imkoniyati bor.
- **Qulaylik** – Telefon yoki planshetdan bir zumda menyuga kirish mumkin, afitsant kutish shart emas.
- **Dastavka xizmati integratsiyasi** – Buyurtmalarni bir zumda yetkazib berishga ulash mumkin.
  - **Avtomatlashtirish** – Mijoz vaqtini yo’qotmaslik uchun ovqat tanlansa, avtomatik ravishda ichimlik, salat va non qo‘shilib chiqadi.
- **Tilni tanlash imkoniyati** – O‘zbekcha, Ruscha, Inglizcha kabi variantlar orqali chet ellik mijozlarga ham qulaylik.
- **Gigiyenik va zamonaviy** – Qog‘oz menyu muammolari yo‘qoladi, zamonaviy ko‘rinadi.
- **Statistika** – Eng mashhur taomlar, ichimliklar va salatlar bo‘yicha tahlil olib boriladi.

# 📑 Texnik topshiriq (ТЗ) – Elektron menyu

## 🎯 Loyiha maqsadi

Restorandagi xizmat ko‘rsatish jarayonini tezlashtirish, xarajatlarni kamaytirish va mijozlarga qulaylik yaratish uchun elektron menyu ishlab chiqish.

## 📂 Modulalar

- **Settings**
- **Products**
- **Orders**
- **Kombo**
- **Categories**

## 👥 Rollar

- **Admin** – menyu va mahsulotlarni boshqaradi.
- **Mijoz** – buyurtma qiladi.

## 📊 Statistika

- Eng mashhur mahsulotlar (sellCount).
- Buyurtmalar soni va summasi.

## 📅 Muddat

- Admin panel: 1 hafta
- Test va optimizatsiya: 1 hafta
- **Umumiy: 1 oy**
- Backend tayyorlash: 2 hafta
