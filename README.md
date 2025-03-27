# 📱 React Navigation Kayıt Formu Uygulaması

Bu proje, **React Native** ve **React Navigation** kullanarak geliştirilmiş basit bir **Üye Kayıt Formu** uygulamasıdır. Kullanıcılar ad, soyad, yaş, e-posta ve memleket bilgilerini girerek kayıt olabilmektedir.

## 🚀 Özellikler
- 📌 **React Navigation** ile sayfalar arası geçiş
- 📌 **useState** kullanarak form yönetimi
- 📌 **useEffect** ile dinamik başlık değiştirme
- 📌 Temiz ve kullanıcı dostu arayüz

## 🛠️ Kullanılan Teknolojiler
- **React Native**
- **React Navigation** (Stack Navigation)
- **Expo** (Opsiyonel)

## 📦 Kurulum

### 1️⃣ Gerekli Paketleri Yükleme
Öncelikle projenizi klonlayın ve bağımlılıkları yükleyin:
```bash
# Projeyi klonlayın
git clone https://github.com/kullaniciadi/proje-adi.git
cd proje-adi

# Bağımlılıkları yükleyin
npm install
```

### 2️⃣ React Navigation Bağımlılıkları
```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
npm install @react-navigation/stack
```

### 3️⃣ Uygulamayı Çalıştırma
```bash
npx react-native run-android   # Android için
npx react-native run-ios       # iOS için
```

## 📷 Ekran Görüntüsü
 ![kb1](https://github.com/user-attachments/assets/045c5ab5-0fb2-48b6-adac-c0508748048d) ![kb2](https://github.com/user-attachments/assets/050a005f-30b4-4e5e-9569-5f0bf10dd95c) ![kb3](https://github.com/user-attachments/assets/52c95bda-2d10-4448-b0fc-c74a1298608a)




## 📌 Proje Dosya Yapısı
```
📂 proje-adi
 ┣ 📂 src
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 WelcomeScreen.js
 ┃ ┃ ┣ 📜 MemberSignScreen.js
 ┃ ┃ ┣ 📜 MemberResultScreen.js
 ┃ ┣ 📂 components
 ┣ 📜 App.js
 ┣ 📜 package.json
 ┗ 📜 README.md
```
