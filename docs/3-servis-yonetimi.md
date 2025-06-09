# Servis Yönetimi Modülü

## Genel Bakış

Olex Systems projesi, araç servis işlemlerinin yönetilmesini sağlayan kapsamlı bir servis yönetim sistemi sunmaktadır. Bu modül, müşterilere sunulan hizmetlerin kaydedilmesi, takibi ve raporlanması gibi işlevleri içerir.

## Servis Özellikleri

Servis modelinde (`Services`) bulunan temel özellikler:

- **Servis Numarası**: Her servis için benzersiz bir tanımlayıcı
- **İlişkiler**: Müşteri, çalışan ve bayi bilgileri
- **Durum Bilgisi**: Servisin güncel durumu (beklemede, devam ediyor, tamamlandı, iptal edildi)
- **Araç Bilgileri**: JSON formatında araç detayları
- **Notlar**: Servis ile ilgili özel notlar
- **Durum Geçmişi**: Servisin durum değişikliklerinin tarihçesi (JSON formatında)

## Servis Durumları

Sistem, servisler için farklı durumları desteklemektedir:

- **Beklemede (pending)**: Yeni oluşturulan servis
- **Devam Ediyor (progress)**: İşleme alınmış servis
- **Tamamlandı (completed)**: Tamamlanmış servis
- **İptal Edildi (cancelled)**: İptal edilmiş servis

## Servis-Ürün İlişkisi

Servislerde kullanılan ürünler, `ServiceProducts` modeli üzerinden takip edilir:

- Her servise bir veya birden fazla ürün eklenebilir
- Ürünlerin garanti bilgileri takip edilebilir
- Ürünler için kod takibi yapılabilir

## Garanti Yönetimi

Sistem, ürünlerin garanti takibini sağlar:

- Garanti başlangıç tarihi (servis tamamlandığı tarih)
- Garanti bitiş tarihi
- Garanti durumu (aktif, sona ermiş)
- Garanti ilerleme oranı

## Araç Bilgileri

Servis kayıtlarında araç bilgileri JSON formatında tutulur:

- Marka ve model bilgileri
- Marka logosu
- Araç detayları

## Önemli Fonksiyonlar

### Servis Yönetimi

- `addProducts()`: Servise ürün ekleme
- `getProducts()`: Servisteki ürünleri listeleme
- `getServices()`: Bayiye ait servisleri listeleme
- `getCustomerServices()`: Müşteriye ait servisleri listeleme

### İlişki Yönetimi

- `dealer()`: Servisin bağlı olduğu bayiyi döndürür
- `customer()`: Servisin bağlı olduğu müşteriyi döndürür

### Raporlama ve Grafikler

- `generateChartSuper()`: Super admin için grafik verileri oluşturur
- `generateChartAdmin()`: Bayi için grafik verileri oluşturur
- `generateChartCentral()`: Merkez için grafik verileri oluşturur

### Logo Eşleştirme

- `matchLogos()`: Araç markalarının logolarını servis kayıtlarıyla eşleştirir

## Veritabanı Yapısı

Servis yönetimi için temel veritabanı tabloları:

- `services`: Temel servis bilgilerini içerir
- `service_products`: Servislerde kullanılan ürünleri içerir

## Rotalar

Servis yönetimi ile ilgili temel rotalar:

- `/worker/services`: Çalışan için servis yönetimi
- `/dealer/services`: Bayi için servis yönetimi
- `/service-details/{id}`: Servis detayları
- `/warranty/{id}`: Garanti bilgileri
- `/warranty/{id}/pdf`: Garanti belgesi PDF çıktısı
