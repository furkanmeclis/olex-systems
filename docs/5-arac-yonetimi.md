# Araç Yönetimi Modülü

## Genel Bakış

Olex Systems projesi, araç marka ve modellerinin yönetilmesini sağlayan bir araç yönetim sistemi sunmaktadır. Bu modül, servis işlemlerinde kullanılan araç bilgilerinin standartlaştırılmasını ve yönetilmesini sağlar.

## Araç Marka Özellikleri

Araç Marka modelinde (`CarBrand`) bulunan temel özellikler:

- **İsim**: Marka adı
- **Logo**: Marka logosu
- **Harici ID**: Dış sistemlerle entegrasyon için ID
- **Son Güncelleme**: Markanın son güncellenme tarihi
- **Aktiflik Durumu**: Markanın aktif olup olmadığı

## Araç Model Özellikleri

Araç Model modelinde (`CarModel`) bulunan temel özellikler:

- **Marka ID**: Bağlı olduğu marka
- **İsim**: Model adı
- **Harici ID**: Dış sistemlerle entegrasyon için ID
- **Son Güncelleme**: Modelin son güncellenme tarihi
- **Aktiflik Durumu**: Modelin aktif olup olmadığı

## Yumuşak Silme (Soft Delete)

Hem marka hem de model kayıtları için yumuşak silme özelliği bulunmaktadır:

- Silinen kayıtlar veritabanından tamamen silinmez
- `deleted_at` alanı ile silme işlemi takip edilir
- Gerektiğinde silinen kayıtlar geri getirilebilir

## İlişkiler

- Bir marka birden fazla modele sahip olabilir (one-to-many ilişkisi)
- Her model bir markaya aittir

## Özel Fonksiyonlar

### Logo Yönetimi

- `getLogoUrlAttribute()`: Marka logosunun URL'sini döndüren özel bir accessor

### İlişki Fonksiyonları

- `models()`: Bir markaya ait modelleri döndürür
- `brand()`: Bir modelin ait olduğu markayı döndürür

## Servis Entegrasyonu

Araç bilgileri, servis kayıtlarında JSON formatında kullanılır:

- Servis kayıtlarında araç marka ve modeli seçilebilir
- Marka logoları servis kayıtlarında görüntülenebilir
- `matchLogos()` fonksiyonu ile servis kayıtlarındaki marka bilgileri güncellenir

## Veri İçe Aktarma

Sistem, araç verilerinin dışarıdan içe aktarılmasını destekler:

- Toplu marka ve model verisi yükleme
- Mevcut verileri güncelleme
- Aktif/pasif durumunu toplu olarak değiştirme

## Veritabanı Yapısı

Araç yönetimi için temel veritabanı tabloları:

- `car_brands`: Araç markalarını içerir
- `car_models`: Araç modellerini içerir

## Rotalar

Araç yönetimi ile ilgili temel rotalar:

- `/super/car/brands`: Marka yönetimi
- `/super/car/brands/{brand}/models`: Model yönetimi
- `/super/car/data/import`: Veri içe aktarma
- `/match-logos`: Logo eşleştirme

## API Entegrasyonu

Sistem, harici araç veritabanları ile entegrasyon için altyapı sunar:

- Harici ID'ler ile eşleştirme
- Toplu veri güncelleme
- Son güncelleme tarihlerini takip etme
