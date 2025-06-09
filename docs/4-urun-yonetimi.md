# Ürün Yönetimi Modülü

## Genel Bakış

Olex Systems projesi, ürünlerin yönetilmesini sağlayan kapsamlı bir ürün yönetim sistemi sunmaktadır. Bu modül, ürünlerin kaydedilmesi, stok takibi, ürün kodları yönetimi ve kategorilendirme gibi işlevleri içerir.

## Ürün Özellikleri

Ürün modelinde (`Products`) bulunan temel özellikler:

- **SKU**: Ürün için benzersiz stok kodu
- **İsim**: Ürün adı
- **Açıklama**: Ürün açıklaması
- **Fiyat**: Ürün fiyatı
- **Resim**: Ürün görseli
- **Garanti**: Ürün garanti süresi
- **Kategori**: Ürünün ait olduğu kategori
- **Aktiflik Durumu**: Ürünün aktif olup olmadığı

## Ürün Kodları

Sistem, ürünlerin takibi için benzersiz ürün kodları kullanır (`ProductCode` modeli):

- Her ürün için birden fazla kod oluşturulabilir
- Kodlar, merkez veya bayi lokasyonlarında bulunabilir
- Kodların kullanım durumu takip edilir
- Kodlar servislerde kullanıldığında ilgili servis ile ilişkilendirilir

## Kategori Yönetimi

Ürünler, kategoriler altında gruplandırılır (`Categories` modeli):

- Kategoriler hiyerarşik olarak düzenlenebilir
- Her ürün bir kategoriye ait olmalıdır
- Kategoriler aktif/pasif olarak işaretlenebilir

## Stok Yönetimi

Ürün stokları, `StockRecords` modeli üzerinden takip edilir:

- Merkez ve bayiler için ayrı stok takibi
- Stok hareketlerinin kaydedilmesi
- Stok durumlarının raporlanması

## Sipariş Yönetimi

Ürün siparişleri, `Orders` ve `OrderItems` modelleri üzerinden yönetilir:

- Bayilerin merkeze ürün siparişi verebilmesi
- Sipariş durumlarının takibi
- Sipariş geçmişinin görüntülenmesi

## Önemli Fonksiyonlar

### Ürün Kodu Yönetimi

- `getCodes()`: Ürüne ait kodları listeler
- `controlProductCode()`: Ürün kodunun geçerliliğini kontrol eder

### Stok Yönetimi

- `getStockRecords()`: User modeli üzerinden kullanıcının stok kayıtlarını listeler

## Veritabanı Yapısı

Ürün yönetimi için temel veritabanı tabloları:

- `products`: Temel ürün bilgilerini içerir
- `product_codes`: Ürün kodlarını içerir
- `categories`: Ürün kategorilerini içerir
- `stock_records`: Stok hareketlerini içerir
- `orders`: Sipariş bilgilerini içerir
- `order_items`: Sipariş kalemlerini içerir

## Rotalar

Ürün yönetimi ile ilgili temel rotalar:

- `/super/products`: Super admin için ürün yönetimi
- `/super/products/list-all`: Tüm ürünleri listeleme
- `/super/products/control-sku`: SKU kontrolü
- `/super/stock-management`: Stok yönetimi
- `/super/orders`: Sipariş yönetimi
- `/worker/products/check-product`: Çalışan için ürün kontrolü
