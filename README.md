# Taksi App — demo

## 1-qadam: GitHub'da repo yaratish
1. github.com'ga kiring, o'ng yuqorida **+** → **New repository**
2. Repository nomi: `taksi-app`
3. **Public** qilib qoldiring (Public bo'lsa, APK yasash bepul ishlaydi)
4. "Create repository" bosing (README qo'shmang, bo'sh repo bo'lsin)

## 2-qadam: Shu papkadagi fayllarni GitHub'ga yuklash
Eng oson yo'l — brauzer orqali:
1. Yaratilgan repo sahifasida **"uploading an existing file"** havolasini bosing
2. Ushbu papkadagi barcha fayl va papkalarni (package.json, src, .github va h.k.) shu yerga tashlang (drag & drop)
3. Pastda **"Commit changes"** tugmasini bosing

(Agar kompyuteringizda git o'rnatilgan bo'lsa, buyruqlar orqali ham qilsa bo'ladi — so'rasangiz, o'sha buyruqlarni ham yozib beraman.)

## 3-qadam: APK'ni avtomatik yasatish
1. Repo ichida **Actions** bo'limiga o'ting
2. "Build APK" ishchi jarayonini (workflow) tanlang
3. **"Run workflow"** tugmasini bosing → yana **"Run workflow"**
4. 3–5 daqiqa kuting (GitHub server o'zi build qiladi)
5. Jarayon tugagach, o'sha ishga tushgan run'ni oching → pastda **"Artifacts"** bo'limida `taksi-app-debug-apk` faylini yuklab oling
6. Zip ichidan `app-debug.apk` faylini telefoningizga o'tkazing, o'rnating (noma'lum manbadan o'rnatishga ruxsat berish kerak bo'lishi mumkin)

## Loyihani o'zingizda ishga tushirish (ixtiyoriy, agar Node.js bo'lsa)
```
npm install
npm run dev
```
Brauzerda `http://localhost:5173` ochiladi.

## Fayllar tuzilishi
- `src/App.jsx` — asosiy ilova kodi (Bosh sahifa + Barcha xizmatlar ekranlari)
- `src/assets/` — banner va xizmat ikonkalari (sizning rasmlaringiz)
- `.github/workflows/build-apk.yml` — APK'ni avtomatik yasaydigan sozlama
- `capacitor.config.json` — ilovaning nomi va ID'si shu yerda
