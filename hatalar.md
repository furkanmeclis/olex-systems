# Sık Karşılaşılan Hatalar ve Çözümleri

## PrimeReact Hataları

### 1. "Cannot read properties of undefined (reading 'value')"
**Hata Nedeni**: InputSwitch veya diğer form elemanlarında onChange eventi doğru yapılandırılmamış.

**Çözüm**:
```jsx
// Hatalı Kullanım
onChange={setChecked(e.value)}

// Doğru Kullanım
onChange={(e) => setChecked(e.value)}
```

### 2. "PrimeReact components are not styled"
**Hata Nedeni**: PrimeReact CSS dosyaları import edilmemiş.

**Çözüm**:
```jsx
// App.jsx veya ana dosyada ekleyin
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
```

## Framer Motion Hataları

### 1. "Cannot create div element"
**Hata Nedeni**: motion komponenti doğrudan JSX elementi olmayan bir komponente uygulanmış.

**Çözüm**:
```jsx
// Hatalı Kullanım
const MyComponent = motion(CustomComponent);

// Doğru Kullanım
const MyComponent = motion.div;
// veya
const MyComponent = motion(React.forwardRef((props, ref) => <div ref={ref} {...props} />));
```

### 2. "AnimatePresence" Hataları
**Hata Nedeni**: Koşullu render edilen elementlerde AnimatePresence kullanılmamış.

**Çözüm**:
```jsx
import { AnimatePresence, motion } from 'framer-motion';

function Component() {
    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    Content
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

## Tailwind CSS Hataları

### 1. "Styles not applying"
**Hata Nedeni**: Tailwind sınıfları yanlış yazılmış veya purge edilmiş.

**Çözüm**:
1. Sınıf adlarını kontrol edin
2. tailwind.config.js dosyasında content ayarlarını kontrol edin:
```js
module.exports = {
    content: [
        "./resources/**/*.{js,jsx,ts,tsx}",
        "./resources/**/*.blade.php",
    ],
    // ...
}
```

### 2. "Responsive classes not working"
**Hata Nedeni**: Yanlış breakpoint kullanımı veya sıralama.

**Çözüm**:
```jsx
// Hatalı Kullanım (sıralama önemli)
<div className="md:flex-row flex-col flex">

// Doğru Kullanım
<div className="flex flex-col md:flex-row">
```

## React Hooks Hataları

### 1. "React Hook useEffect has missing dependencies"
**Hata Nedeni**: useEffect dependency array'de eksik bağımlılıklar.

**Çözüm**:
```jsx
// Hatalı Kullanım
useEffect(() => {
    doSomething(prop);
}, []); // ESLint warning

// Doğru Kullanım
useEffect(() => {
    doSomething(prop);
}, [prop]); // prop'u dependency array'e ekleyin
```

### 2. "Cannot update state while rendering"
**Hata Nedeni**: Render sırasında state güncelleme.

**Çözüm**:
```jsx
// Hatalı Kullanım
function Component() {
    const [state, setState] = useState(0);
    setState(1); // Direkt render içinde state güncelleme

    return <div>{state}</div>;
}

// Doğru Kullanım
function Component() {
    const [state, setState] = useState(0);
    
    useEffect(() => {
        setState(1);
    }, []); // useEffect içinde state güncelleme

    return <div>{state}</div>;
}
```
