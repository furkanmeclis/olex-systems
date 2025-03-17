# Komponent Kullanım Rehberi

## PrimeReact Komponentleri

### Card
```jsx
import { Card } from 'primereact/card';

<Card className="bg-gray-800 border-none shadow-lg">
    {/* İçerik */}
</Card>
```
- `className`: Tailwind sınıfları ile özelleştirilebilir
- `title`: Kart başlığı (opsiyonel)
- `subTitle`: Alt başlık (opsiyonel)

### InputSwitch
```jsx
import { InputSwitch } from 'primereact/inputswitch';

const [checked, setChecked] = useState(false);

<InputSwitch
    checked={checked}
    onChange={(e) => setChecked(e.value)}
/>
```
- `checked`: Switch durumu (boolean)
- `onChange`: Değişiklik eventi
- `disabled`: Devre dışı bırakma (boolean)

### Avatar
```jsx
import { Avatar } from 'primereact/avatar';

<Avatar
    image="https://example.com/avatar.jpg"
    size="xlarge"
    shape="circle"
    className="w-24 h-24"
/>
```
- `image`: Avatar resmi URL'i
- `size`: large, xlarge
- `shape`: circle, square
- `label`: Resim yoksa gösterilecek metin

### Button
```jsx
import { Button } from 'primereact/button';

<Button
    label="Tıkla"
    icon="pi pi-check"
    className="p-button-rounded p-button-outlined"
/>
```
- `label`: Buton metni
- `icon`: PrimeIcons ikonu
- `severity`: success, info, warning, danger
- `outlined`: Kenarlıklı stil
- `rounded`: Yuvarlak köşeler

## Framer Motion Animasyonları

### Basit Fade-In ve Slide
```jsx
import { motion } from 'framer-motion';

<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
>
    {/* İçerik */}
</motion.div>
```

### Staggered Animasyon (Liste öğeleri için)
```jsx
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

<motion.div
    variants={container}
    initial="hidden"
    animate="show"
>
    {items.map(item => (
        <motion.div key={item.id} variants={item}>
            {/* İçerik */}
        </motion.div>
    ))}
</motion.div>
```

## Tailwind CSS Önemli Sınıflar

### Responsive Tasarım
- `md:flex-row`: Orta ekranlarda yatay düzen
- `grid-cols-1 md:grid-cols-2`: Responsive grid
- `p-4 md:p-6`: Responsive padding

### Karanlık Tema
- `bg-gray-900`: Koyu arka plan
- `bg-gray-800`: Kart arka planı
- `bg-gray-700`: Vurgu arka planı
- `text-gray-100`: Ana metin rengi
- `text-gray-400`: İkincil metin rengi

### Flex ve Grid
- `flex items-center`: Dikey hizalama
- `justify-between`: Öğeler arası boşluk
- `gap-3`: Öğeler arası boşluk
- `space-y-4`: Dikey boşluk
