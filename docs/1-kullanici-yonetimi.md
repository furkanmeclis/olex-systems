# Kullanıcı Yönetimi Modülü

## Genel Bakış

Olex Systems projesi, farklı rol ve yetkilere sahip kullanıcı tiplerini içeren kapsamlı bir kullanıcı yönetim sistemi sunmaktadır. Sistem, hiyerarşik bir yapıda tasarlanmış olup, farklı kullanıcı rolleri arasında ilişkiler bulunmaktadır.

## Kullanıcı Rolleri

Sistem içerisinde tanımlı roller şunlardır:

- **Super Admin (`super`)**: Sistemin tüm özelliklerine erişim yetkisine sahip en üst düzey yönetici.
- **Merkez (`central`)**: Merkez ofis yöneticisi.
- **Merkez Satış Elemanı (`central_salesman`)**: Merkez ofisteki satış personeli.
- **Merkez İletişim Elemanı (`central_contact`)**: Merkez ofisteki iletişim personeli.
- **Merkez Depo Sorumlusu (`central_worker`)**: Merkez ofisteki depo yönetim personeli.
- **Bayi (`admin`)**: Bayilik yöneticisi, kendi çalışanlarını yönetebilir.
- **Çalışan (`worker`)**: Bayi altında çalışan personel.

## Kullanıcı İlişkileri

- Bayi (`admin`) rolündeki kullanıcılar, kendi çalışanlarını (`worker`) yönetebilir.
- Çalışanlar (`worker`), bir bayiye (`admin`) bağlıdır ve `parent_id` alanı ile ilişkilendirilir.
- Merkez rolleri (`central`, `central_salesman`, `central_contact`, `central_worker`), sistemin merkez yönetimini temsil eder.

## Kullanıcı Özellikleri

Kullanıcı modelinde (`User`) bulunan temel özellikler:

- Temel bilgiler: İsim, e-posta, şifre, telefon
- Rol bilgisi
- Profil resmi (avatar)
- Aktiflik durumu

## Bayi Detayları

Bayi rolündeki kullanıcılar için ek olarak şirket bilgileri tutulmaktadır:

- Şirket adı
- Şirket telefonu
- Şirket e-postası
- Adres bilgileri (ülke, şehir, ilçe, posta kodu, açık adres)

## Önemli Fonksiyonlar

### Kullanıcı Listeleme

- `getAllWorkers()`: Tüm çalışanları listeler
- `getCentralUsers()`: Merkez rolündeki kullanıcıları listeler
- `workers()`: Bir bayiye bağlı çalışanları listeler

### İlişki Yönetimi

- `dealer()`: Bir çalışanın bağlı olduğu bayiyi döndürür
- `company()`: Bayi rolündeki kullanıcının şirket bilgilerini döndürür

### Metrik ve İstatistikler

- `getMetrics()`: Kullanıcı rolüne göre ilgili metrikleri (çalışan sayısı, müşteri sayısı, servis sayısı vb.) döndürür

## Veritabanı Yapısı

Kullanıcı yönetimi için temel veritabanı tabloları:

- `users`: Tüm kullanıcı bilgilerini içerir
- `dealer_details`: Bayi rolündeki kullanıcıların şirket bilgilerini içerir

## Rotalar

Kullanıcı yönetimi ile ilgili temel rotalar:

- `/profile`: Profil düzenleme, güncelleme ve silme işlemleri
- `/super/central-users`: Merkez kullanıcılarının yönetimi
- `/super/dealers`: Bayilerin yönetimi
- `/dealer/workers`: Bayi altındaki çalışanların yönetimi
