# Müşteri Yönetimi Modülü

## Genel Bakış

Olex Systems projesi, bayilerin ve çalışanların müşteri bilgilerini yönetebilmesini sağlayan kapsamlı bir müşteri yönetim sistemi sunmaktadır. Bu modül, müşteri bilgilerinin kaydedilmesi, güncellenmesi ve müşterilere özel hizmetlerin takibi gibi işlevleri içerir.

## Müşteri Özellikleri

Müşteri modelinde (`Customers`) bulunan temel özellikler:

- **Temel Bilgiler**: İsim, e-posta, telefon
- **İlişkiler**: Bağlı olduğu bayi ve çalışan bilgileri
- **İletişim Tercihleri**: Bildirim ayarları (e-posta, SMS, push)
- **Kişisel Bilgiler**: Doğum tarihi, cinsiyet
- **Adres Bilgileri**: Açık adres

## Müşteri Tipleri

Sistem, bireysel ve kurumsal müşterileri desteklemektedir:

- **Bireysel Müşteriler**: Kişisel bilgiler içerir
- **Kurumsal Müşteriler**: Ek olarak vergi bilgileri (vergi adı, vergi numarası, vergi dairesi) içerir

## Müşteri-Bayi İlişkisi

- Her müşteri bir bayiye (`dealer_id`) bağlıdır
- Müşteriler aynı zamanda bir çalışana (`worker_id`) da atanabilir
- Bayiler kendi müşterilerini görüntüleyebilir ve yönetebilir
- Çalışanlar kendilerine atanan müşterileri görüntüleyebilir ve yönetebilir

## Bildirim Yönetimi

Müşterilere çeşitli kanallar üzerinden bildirim gönderilebilir:

- E-posta bildirimleri
- SMS bildirimleri
- Push bildirimleri (OneSignal entegrasyonu ile)

## Müşteri Servisleri

Müşteriler için oluşturulan servisler, `Services` modeli üzerinden takip edilir:

- Her müşteriye ait servis geçmişi görüntülenebilir
- Müşterinin aldığı hizmetler ve ürünler listelenir
- Garanti bilgileri ve durumları takip edilebilir

## Önemli Fonksiyonlar

### Müşteri Listeleme

- `getCustomersForDealer()`: Bayiye ait müşterileri listeler
- `customers()`: User modeli üzerinden bayiye ait müşterileri listeler

### Servis İlişkileri

- `getServices()`: Müşteriye ait servisleri listeler

## Veritabanı Yapısı

Müşteri yönetimi için temel veritabanı tabloları:

- `customers`: Temel müşteri bilgilerini içerir
- İlgili göç dosyaları:
  - `2024_05_02_154451_create_customers_table.php`: Ana müşteri tablosunu oluşturur
  - `2024_05_03_154451_add_corporate_fields_to_customers_table.php`: Kurumsal müşteri alanlarını ekler

## Rotalar

Müşteri yönetimi ile ilgili temel rotalar:

- `/super/customers`: Super admin için müşteri yönetimi
- `/dealer/customers`: Bayi için müşteri yönetimi
- `/worker/customers`: Çalışan için müşteri yönetimi
- `/customer/{hash}`: Müşteri bildirim sayfası
- `/customer/{hash}/store`: Müşteri bilgilerini güncelleme
