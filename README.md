# Prerna Creations — Official Website

A multi-page business website for **Prerna Creations**, a premium bedsheet store in Allahabad. Built with React + Vite + Tailwind CSS. No backend — orders via WhatsApp.

---

## 🔗 Live Info

- **WhatsApp:** +91 99352 57300
- **Address:** 50/A Lalbahadur Shastri Marg, Opp. Girl's High School, Civil Lines, Allahabad
- **Instagram:** [@prernacreationsbedsheet](https://www.instagram.com/prernacreationsbedsheet/)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | UI Framework |
| Vite | 5.x | Build Tool |
| Tailwind CSS | 3.x | Styling |
| React Router DOM | 6.x | Page Routing |
| React Icons | 5.x | Icons (FI + FA) |

---

## 📁 Project Structure

```
prerna-creations/
├── public/
│   └── favicon.webp              ← Brand logo (favicon)
│
├── src/
│   ├── assets/
│   │   └── products/             ← Product images
│   │       ├── 1.jpg
│   │       ├── 2.jpg
│   │       └── ... (up to 8.jpg)
│   │
│   ├── components/
│   │   ├── Navbar.jsx            ← Sticky navbar with mobile menu
│   │   ├── Footer.jsx            ← Footer with links + contact
│   │   ├── WhatsAppFloat.jsx     ← Floating WhatsApp button
│   │   ├── ProductCard.jsx       ← Reusable product card
│   │   └── SectionHeader.jsx     ← Reusable section heading
│   │
│   ├── data/
│   │   └── products.js           ← All product data (name, category, image)
│   │
│   ├── pages/
│   │   ├── Home.jsx              ← Hero + Features + Products + Testimonials
│   │   ├── Catalog.jsx           ← Product grid with search + filter
│   │   ├── About.jsx             ← Brand story + Why us + Map
│   │   └── Contact.jsx           ← WhatsApp CTA + Quick messages + Map
│   │
│   ├── utils/
│   │   └── whatsapp.js           ← WhatsApp link generator
│   │
│   ├── App.jsx                   ← Router setup
│   ├── main.jsx                  ← Entry point
│   └── index.css                 ← Tailwind + global styles
│
├── .env                          ← WhatsApp number config
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/prerna-creations.git
cd prerna-creations
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variable

Create a `.env` file in the root:

```env
VITE_WHATSAPP_NUMBER=919935257300
```

### 4. Add product images

Place your product images in:

```
src/assets/products/1.jpg
src/assets/products/2.jpg
... up to 8.jpg
```

### 5. Add favicon/logo

Place the brand logo at:

```
public/favicon.webp
```

### 6. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder. Upload this to any hosting (Hostinger, Netlify, Vercel etc.)

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, features, featured products, testimonials |
| Catalog | `/catalog` | All products with search + category filter |
| About | `/about` | Brand story, why us, store location map |
| Contact | `/contact` | WhatsApp CTA, quick messages, contact details |

---

## 📦 Adding New Products

Open `src/data/products.js` and add a new entry:

```js
{
  id: 9,
  name: 'Your Product Name',
  category: 'Fitted',        // Fitted / Printed / Plain / King Size / Queen Size
  size: 'Double Bed',        // Double Bed / King Size / Queen Size
  image: '/src/assets/products/9.jpg',
  tag: 'New',                // Bestseller / New / Popular / Premium / '' (empty)
}
```

Then add the image at `src/assets/products/9.jpg`.

---

## 💬 WhatsApp Integration

All order buttons use `wa.me` links — no paid API needed.

```
https://wa.me/919935257300?text=Hi, I want to order: [Product Name]
```

The utility function is in `src/utils/whatsapp.js`:

```js
orderLink('Teal Flower Fitted Bedsheet')
// → https://wa.me/919935257300?text=Hi%2C%20I%20want%20to%20order%3A%20Teal%20Flower%20Fitted%20Bedsheet...
```

---

## 🎨 Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Brand Red | `#C8102E` | Navbar, buttons, accents |
| Red Dark | `#A00D24` | Button hover |
| Red Light | `#FFF0F0` | Section backgrounds |
| Near Black | `#1A1A1A` | Body text |

---

## 🌐 Deployment

### Netlify (Free)
```bash
npm run build
# Drag & drop dist/ folder to netlify.com/drop
```

### Vercel (Free)
```bash
npm install -g vercel
vercel
```

### Hostinger
```bash
npm run build
# Upload dist/ folder contents via File Manager
```

> **Note:** For React Router to work on hosting, configure URL rewrite:
> All routes → `index.html`

For Netlify, create `public/_redirects`:
```
/* /index.html 200
```

---

## 📝 License

Private project — Prerna Creations, Allahabad. All rights reserved.