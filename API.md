# Olex Systems API Dokümantasyonu

## Genel Bilgiler

### Base URL
```
https:/olexfilms.tr/api/v1
```

### Gerekli Headers
Tüm API isteklerinde aşağıdaki header'lar zorunludur:

```
X-API-Version: 1.0
X-Platform: iOS/Android
```

### Standart Response Formatı
```json
{
    "status": true/false,
    "message": "İşlem ile ilgili açıklayıcı mesaj",
    "data": { 
        // Response verisi veya hata detayları
    }
}
```

## Endpoints

### 1. OTP (SMS) Gönderme
Müşteriye SMS ile doğrulama kodu gönderir.

```
POST /auth/send-otp
```

#### Request
```json
{
    "phone": "5321234567"  // 10 haneli telefon numarası
}
```

#### Başarılı Response
```json
{
    "status": true,
    "message": "Tek kullanımlık şifre gönderildi",
    "data": {
        "customer_id": 123
    }
}
```

#### Hata Response
```json
{
    "status": false,
    "message": "Geçersiz telefon numarası",
    "data": {
        "phone": [
            "The phone field is required",
            "The phone must be at least 10 characters"
        ]
    }
}
```

### 2. OTP Doğrulama
Gönderilen OTP kodunu doğrular ve müşteri bilgilerini döner.

```
POST /auth/verify-otp
```

#### Request
```json
{
    "customer_id": 123,
    "otp": "123456"  // 6 haneli doğrulama kodu
}
```

#### Başarılı Response
```json
{
    "status": true,
    "message": "Doğrulama başarılı",
    "data": {
        "customer_id": 123,
        "name": "John Doe",
        "phone": "5321234567"
    }
}
```

#### Hata Response
```json
{
    "status": false,
    "message": "Geçersiz doğrulama kodu",
    "data": null
}
```

## Hata Kodları

| HTTP Kodu | Açıklama |
|-----------|----------|
| 200 | Başarılı |
| 400 | Geçersiz istek (Validasyon hatası) |
| 401 | Yetkisiz erişim |
| 404 | Kaynak bulunamadı |
| 500 | Sunucu hatası |

## iOS Kullanım Örneği (Swift)

```swift
struct ApiClient {
    static let baseURL = "https://api.olex-systems.com/api/v1"
    
    static let headers = [
        "X-API-Version": "1.0",
        "X-Platform": "iOS",
        "Content-Type": "application/json"
    ]
    
    static func sendOTP(phone: String) async throws -> Result {
        let url = URL(string: "\(baseURL)/auth/send-otp")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.allHTTPHeaderFields = headers
        
        let body = ["phone": phone]
        request.httpBody = try? JSONEncoder().encode(body)
        
        let (data, _) = try await URLSession.shared.data(for: request)
        let result = try JSONDecoder().decode(Result.self, from: data)
        return result
    }
}

// Kullanım
Task {
    do {
        let result = try await ApiClient.sendOTP(phone: "5321234567")
        if result.status {
            print("OTP gönderildi: \(result.data.customer_id)")
        }
    } catch {
        print("Hata: \(error)")
    }
}
```

## Android Kullanım Örneği (Kotlin)

```kotlin
object ApiClient {
    private const val BASE_URL = "https://api.olex-systems.com/api/v1"
    
    private val headers = mapOf(
        "X-API-Version" to "1.0",
        "X-Platform" to "Android",
        "Content-Type" to "application/json"
    )
    
    suspend fun sendOTP(phone: String): Result {
        return withContext(Dispatchers.IO) {
            val url = "$BASE_URL/auth/send-otp"
            val client = OkHttpClient()
            
            val body = JSONObject().apply {
                put("phone", phone)
            }
            
            val request = Request.Builder()
                .url(url)
                .headers(Headers.of(headers))
                .post(body.toString().toRequestBody("application/json".toMediaType()))
                .build()
                
            val response = client.newCall(request).execute()
            // Response işleme
        }
    }
}

// Kullanım
lifecycleScope.launch {
    try {
        val result = ApiClient.sendOTP("5321234567")
        if (result.status) {
            println("OTP gönderildi: ${result.data.customerId}")
        }
    } catch (e: Exception) {
        println("Hata: ${e.message}")
    }
}
``` 