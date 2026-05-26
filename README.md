# 🚀 Portfolio — محمند محمد سلاوي

موقع Portfolio احترافي ثابت (Static) — HTML + CSS + JavaScript فقط.

---

## 📁 هيكل الملفات

```
portfolio/
├── index.html          ← الصفحة الرئيسية
├── style.css           ← جميع الأنماط والتصميم
├── script.js           ← المنطق والبيانات الديناميكية
├── README.md           ← هذا الملف
└── assets/
    └── images/         ← ضع صورك هنا
        ├── profile.jpg       ← صورتك الشخصية
        ├── cert-html.jpg     ← صور الشهادات
        └── ...
```

---

## ✏️ كيفية التعديل

### 1. الصورة الشخصية
افتح `index.html`، ابحث عن:
```html
<!-- <img src="assets/images/profile.jpg" alt="محمند محمد سلاوي" /> -->
```
أزل التعليق وغيّر المسار لصورتك.

### 2. الاسم والمعلومات الشخصية
في `index.html`، ابحث عن التعليقات مثل:
```
<!-- ===== قم بتعديل الاسم هنا ===== -->
```

### 3. المشاريع
في `script.js`، ابحث عن:
```javascript
const projects = [ ... ]
```
عدّل كل مشروع أو أضف جديداً.

### 4. الشهادات
في `script.js`، ابحث عن:
```javascript
const certificates = [ ... ]
```

### 5. المهارات (نسب الاحتراف)
في `index.html`، ابحث عن:
```html
<div class="skill-fill" data-width="90">
```
غيّر الرقم (من 0 إلى 100).

### 6. الألوان
في `style.css`، ابحث عن:
```css
:root {
  --accent: #6366f1;        ← اللون الأساسي
  --accent-2: #a855f7;      ← اللون الثانوي
```

---

## 🖼️ إضافة الصور

1. ضع الصور في مجلد `assets/images/`
2. للصور الشخصية: `assets/images/profile.jpg`
3. لصور المشاريع: أضف المسار في `gallery` داخل `script.js`
4. لصور الشهادات: أضف `image: "assets/images/cert-name.jpg"` في كائن الشهادة

---

## 🚀 التشغيل

افتح `index.html` مباشرة في أي متصفح، أو استضف الملفات على:
- GitHub Pages
- Netlify
- Vercel
- أي استضافة ويب

---

## 📱 الدعم

- ✅ Responsive — يعمل على الجوال والكمبيوتر
- ✅ Dark Theme
- ✅ RTL (عربي)
- ✅ لا يحتاج Backend
- ✅ لا يحتاج Database
