# 💳 CreditCheck – Sistem Intern de Verificare și Evaluare Credit

**CreditCheck** este o aplicație web internă dedicată băncilor și instituțiilor financiare pentru **gestionarea, verificarea și evaluarea riscului de credit** al clienților. Sistemul integrează o interfață de introducere a datelor despre clienți și împrumuturi, precum și o pagină de rezultat care afișează **predicțiile de performanță ale creditului (NPL – Non-Performing Loan)** folosind un ansamblu de modele de învățare automată (Ensemble) [oai_citation:0‡index.html](sediment://file_000000006dbc61f5beffd0f5d47c8b32) [oai_citation:1‡rezultat.html](sediment://file_000000001df061f5b3639bbdd4d4bf60).

---

## 🧩 Structura proiectului

| Fișier / Folder | Descriere |
|------------------|-----------|
| `index.html` | Pagina principală a sistemului intern. Include formularul de verificare a unui credit, împărțit pe secțiuni tematice: Client, Împrumut, Garanții și Indicatori financiari. |
| `rezultat.html` | Pagina de afișare a rezultatelor analizei de risc. Prezintă scorul NPL, categoria de risc, recomandarea de decizie și detalii despre credit. |
| `style.css` | Fișierul de stilizare globală. Definește designul modern, responsive, cu temă întunecată și accente cian. |
| `script.js` | Logica JavaScript a aplicației. Gestionează schimbarea limbii, validarea formularului, trimiterea datelor către API și afișarea dinamică a textelor și etichetelor. |
| `aidan-bartos-v9rZ3Yz6fSg-unsplash.jpg` | Imaginea de fundal utilizată în ambele pagini, contribuind la estetica profesională a interfeței. |

---

## 🌐 Funcționalități principale

### 🔹 1. Formulare dinamice
- Utilizatorul completează date despre:
  - Segmentul și regiunea clientului
  - Venitul lunar, tipul de împrumut, perioada și suma
  - Indicatori financiari: **PTI**, **DTI**, **LTV**
  - Detalii despre garanții, sectorul de angajare și existența unui garant.
- Valorile sunt validate înainte de trimitere.
- Câmpurile obligatorii sunt marcate cu `*`.

### 🔹 2. Suport multilingv
Interfața este complet traductibilă în trei limbi:
- **Română (RO)**
- **Engleză (EN)**
- **Rusă (RU)**  
Textele, etichetele și opțiunile formularului sunt încărcate dintr-un obiect JS multilingv și salvate în `localStorage`.

### 🔹 3. Evaluare și raport NPL
După completarea formularului, datele sunt procesate local si printr-un API intern și rezultatul este afișat în `rezultat.html`, incluzând:
- **Probabilitatea NPL (%);**
- **Categoria de risc** (Scăzut, Mediu-Scăzut, Mediu, Ridicat, Foarte Ridicat);
- **Predicțiile modelelor individuale**: Logistic Regression, Random Forest, XGBoost.

### 🔹 4. Design și UX
- Interfață **modernă și adaptabilă (responsive)**, cu transparențe, gradient și blur.
- Stil consistent între pagini: navbar fix, form-uri segmentate, efecte „fade-in” și animații tip „cursor blinking”.
- Butoane de acțiune:
  - `Verificare` – trimite datele pentru analiză;
  - `Resetare` – golește formularul;
  - `Înapoi la Formular` și `Printează Raport` – în pagina rezultatului.

---

## ⚙️ Arhitectură și logică

1. **Frontend:**
   - HTML5, CSS3, JavaScript
   - Pagini conectate prin URL (`index.html` → `rezultat.html`).
   - LocalStorage reține datele și limba selectată.

2. **Funcții cheie (din `script.js`):**
   - `setLanguage(lang)` – schimbă toate etichetele conform limbii selectate.
   - `prepareApiData()` – prelucrează și normalizează datele pentru trimiterea la API.
   - `typeWriter()` – efect vizual de scriere a textului de întâmpinare.
   - `updateDropdownOptions()` – actualizează etichetele meniurilor derulante conform limbii.

3. **Backend:**
   - Integrare cu un API intern de analiză ML pentru scoringul creditelor.
   - API-ul returneaza un JSON cu rezultatele

---

## 🧠 Tehnologii utilizate

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Design:** Google Fonts – Poppins, culori inspirate din `#00c6ff` și `#0072ff`
- **Responsive Layout:** Grid și Flexbox
- **Compatibilitate:** Chrome, Safari, Firefox, Edge

---

## 👩🏼‍💻 Autori

Viorelina — Frontend & UI Development
Vasile - Backend Development

Datastorm NPL Team — Arhitectură și analiză de date

---

## 🖼️ Capturi și stil vizual

- Fundal: *aidan-bartos-v9rZ3Yz6fSg-unsplash.jpg* (Unsplash)  
- Efecte vizuale:
  - fundal blurat cu overlay semi-transparent
  - culori contrastante cian/alb pe fundal negru
  - carduri cu efect hover subtil pentru detalii

---

## 📋 Concluzie

**CreditCheck** oferă un sistem intern complet pentru analiza performanței creditelor, cu accent pe **claritate, estetică profesională și funcționalitate multilingvă**.  
Este ideal pentru bănci, echipe de risc și departamente financiare ce doresc o interfață intuitivă și modernă pentru verificarea și raportarea creditelor.

---

