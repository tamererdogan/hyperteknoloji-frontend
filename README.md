# Hyper Teknoloji Frontend – Teknik Değerlendirme Uygulaması

Bu proje, Hyper Teknoloji tarafından gönderilen teknik değerlendirme görevi kapsamında geliştirilmiş basit bir ürün listeleme ve sepet yönetimi uygulamasıdır.

Backend tarafı **Laravel**, frontend tarafı **React + Vite** kullanılarak geliştirilmiştir.

---

## 🚀 Kurulum ve Çalıştırma

### 1. Repository'yi klonlayın

```bash
git clone https://github.com/tamererdogan/hyperteknoloji-frontend
```

### 2. .env dosyasını düzenleyin

```bash
Proje dizininde bulunan .env dosyasını açıp VITE_API_URL değerine backend'inizin servis edildiği URL'i girin.

Örnek:
VITE_API_URL=http://localhost:8000/api
```

### 3. Proje dizinine geçin

```bash
cd hyperteknoloji-frontend
```

### 4. Proje bağımlılıklarını indirin

```bash
npm install
```

### 5. Projeyi başlatın

```bash
npm run dev
```

Uygulama varsayılan olarak http://localhost:5173 adresinde çalışır.

## 🛒 Sepet Mekanizması

Sepet verilerini kalıcı olarak saklama yöntemi olarak Local Storage kullandım.

### Strateji:

- Sepet Local Storage ile persistent hale getirilmiştir.
- Sepet React Context üzerinden anlık olarak yönetilir.
- Ürün ekleme/çıkarma updateQuantity() fonksiyonu ile merkezi olarak yapılır.
- UI tarafında sepet dropdown olarak ele alınmıştır.
- Dropdown mobil ve desktop için farklı açılma davranışları sergileyecek şekilde uygulanmıştır.

### Avantajları:

- Expire olmaz
- Cookie boyut limitine takılmaz
- Sayfa yenilense bile veri kaybolmaz
- Büyük JSON objelerini rahatça saklar

## ⚠️ Bilinen Eksiklikler / Sınırlar

- API üzerinden ürün detayları çekilmemiştir.
- Ürünler kategoriye göre filtrelenecek hale getirilmemiştir.
- API üzerinde search mekanizması bulunmadığı için entegre edilmemiştir.
- ListProduct endpoint'i üzerinden totalItem bilgisi gelmediği için sayfalama "Daha fazla yükle" şeklinde yapılmıştır.
