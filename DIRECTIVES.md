# OLEX Films Mobile App Tasarım Yönergeleri

## 🎨 Renk Paleti

### Ana Renkler
- **Koyu Yeşil Tonları (Arka Plan Gradyanı)**
  - Başlangıç: `#001100`
  - Orta: `#002200`
  - Son: `#000a00`

### Vurgu Renkleri
- **Rolex Altın**
  - Ana: `#E6B800`
  - Açık: `#FFD700`
  - Gradient: `from-[#E6B800] via-[#FFD700] to-[#E6B800]`

### Yeşil Tonları (UI Elementleri)
- **Butonlar ve Kartlar**
  - Açık: `#004d00`
  - Orta: `#003300`
  - Koyu: `#002200`

### Nötr Renkler
- Beyaz: `#FFFFFF`
- Gri-400: `#9CA3AF`
- Gri-500: `#6B7280`

## 🎯 Tasarım Prensipleri

### Genel Görünüm
- Modern ve fütüristik tasarım
- Koyu tema öncelikli
- Yarı saydam (glassmorphism) efektler
- Yumuşak gölgeler ve gradyanlar

### Tipografi
- **Başlıklar**
  - Boyut: 24-32px
  - Ağırlık: Bold/Semi-bold
  - Renk: Beyaz veya Rolex Altın

- **Alt Başlıklar**
  - Boyut: 18-20px
  - Ağırlık: Semi-bold
  - Renk: Gri-400 veya Beyaz

- **Normal Metin**
  - Boyut: 14-16px
  - Ağırlık: Regular
  - Renk: Gri-400

### Boşluklar ve Padding
- Container Padding: 24px
- Element Arası Boşluk: 16-20px
- İç Padding (Kartlar): 16px
- Buton Padding: Yatay 20px, Dikey 12px

## 💫 Animasyonlar

### Geçiş Animasyonları
- Sayfa geçişleri: Fade ve Slide
- Element girişleri: Bottom-up veya Fade-in
- Buton interaksiyonları: Scale ve Opacity

### Zamanlama
- Kısa geçişler: 200-300ms
- Orta geçişler: 400-500ms
- Uzun geçişler: 600-800ms

## 🎯 UI Elementleri

### Kartlar
```jsx
{
    backgroundColor: 'rgba(0, 24, 0, 0.5)',
    borderColor: 'rgba(0, 77, 0, 0.3)',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
}
```

### Butonlar
```jsx
{
    // Primary Button
    primary: {
        backgroundColor: '#004d00',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12,
        shadowColor: '#E6B800',
        shadowOpacity: 0.2,
    },
    // Secondary Button
    secondary: {
        backgroundColor: 'rgba(0, 34, 0, 0.5)',
        borderColor: '#004d00',
        borderWidth: 1,
    }
}
```

### Input Alanları
```jsx
{
    backgroundColor: 'rgba(0, 34, 0, 0.5)',
    borderColor: 'rgba(0, 77, 0, 0.3)',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    color: '#FFFFFF',
}
```

## 📱 Özel Komponentler

### Header
- Yarı saydam arka plan
- Logo ve menü butonu
- Sticky pozisyonlama
- Yükseklik: 60-64px

### Navigation
- Tab bar veya Drawer navigation
- İkonlar ve metin kombinasyonu
- Aktif durum için altın rengi vurgu

### Modal/Dialog
- Blur efektli overlay
- Yumuşak köşeler (borderRadius: 20)
- Yukarıdan aşağı animasyon

## 🔄 Durum Göstergeleri

### Loading
- Spinner veya Skeleton loading
- Rolex altın rengi
- Minimal ve zarif

### Success/Error
- Toast mesajları
- Yumuşak slide animasyonları
- İkon ve metin kombinasyonu

## 📱 Responsive Tasarım

### Breakpoints
- Small: < 360px
- Medium: 360px - 400px
- Large: > 400px

### Adaptif Tasarım
- Dinamik font boyutları
- Esnek grid sistem
- Safe area insets

## 🎨 Görsel Varlıklar

### İkonlar
- Outline stili
- 24x24px boyutu
- 2px çizgi kalınlığı

### Logolar
- SVG formatı
- Beyaz veya altın rengi
- Minimum yükseklik: 32px

## 💡 En İyi Uygulamalar

1. **Tutarlılık**
   - UI elementlerinde tutarlı spacing
   - Benzer elementler için aynı stil
   - Tutarlı animasyon süreleri

2. **Erişilebilirlik**
   - Minimum dokunma alanı: 44x44px
   - Yeterli kontrast oranı
   - Anlamlı metin alternatifleri

3. **Performans**
   - Optimize edilmiş görseller
   - Hafif animasyonlar
   - Minimal shadow kullanımı

4. **Kullanıcı Deneyimi**
   - Haptik geri bildirim
   - Görsel geri bildirim
   - Akıcı geçişler 