const yesNoFields = [
  "salary_project","guarantor_present","urban","previous_dpd_30","previous_dpd_60"
];

const texts = {
  ro:{
    dashboard:"Dashboard",
    form:"Verifică credit",
    contact:"Contacte",
    welcome:"Sistem intern CreditCheck – gestionare credite și rapoarte de performanță.",
    
    formTitle:"Verifică performanța creditului",
    infoBanner:"Completează toate câmpurile cu * pentru a putea valida cererea.",
    
    sectionClient:"Informații Client",
    sectionLoan:"Detalii Împrumut",
    sectionCollateral:"Garanții",
    sectionFinancial:"Informații Financiare",
    sectionHistory:"Istoric Credit",
    
    labelSegment:"Segment Client",
    labelRegion:"Regiunea",
    labelUrban:"Tip Reședință",
    labelUrbanCheck:"Urban (bifați dacă client din zona urbană)",
    labelEmployer:"Sector de Angajare",
    labelLoanType:"Tip Credit",
    labelCurrency:"Moneda",
    labelLoanAmount:"Suma Împrumutului",
    labelLoanAmountMdl:"Suma Împrumutului (MDL)",
    labelTenor:"Perioada (luni)",
    labelInterest:"Rata Dobânzii Anuală (%)",
    labelOrigDate:"Data Acordării",
    labelInflation:"Inflație la Acordare (%)",
    labelPolicyRate:"Rata Politicii Monetare (%)",
    labelCollateralType:"Tip Garanție",
    labelLtv:"Raport LTV (Loan-to-Value)",
    labelGuarantor:"Garant Prezent",
    labelGuarantorCheck:"Client are garant",
    labelIncome:"Venit Lunar (MDL)",
    labelRemittances:"Ponderea Remitențelor",
    labelDti:"DTI (Debt-to-Income)",
    labelPti:"PTI (Payment-to-Income)",
    labelSalary:"Proiect Salarial",
    labelSalaryCheck:"Salariul este plătit prin bancă",
    labelNumLoans:"Număr Împrumuturi Anterioare",
    labelCreditScore:"Scor de Credit",
    labelArrears:"Restanțe Anterioare",
    labelDpd30:"Restanță ≥30 zile",
    labelDpd60:"Restanță ≥60 zile",
    
    optSelectSegment:"Selectați segmentul",
    optSelectRegion:"Selectați regiunea",
    optSelectEmployer:"Selectați sectorul",
    optSelectLoan:"Selectați tipul",
    optSelectCurrency:"Selectați moneda",
    
    optRetail:"Retail",
    optMicro:"Micro",
    optSME:"IMM (Small and Medium Enterprise)",
    optPublic:"Public",
    optPrivate:"Privat",
    optAgriculture:"Agricultură",
    optTrade:"Comerț",
    optConstruction:"Construcții",
    optIT:"IT",
    optServices:"Servicii",
    optConsumer:"Consum",
    optMortgage:"Ipotecar",
    optAuto:"Auto",
    optSMEWC:"Capital de Lucru IMM",
    optSMEInv:"Investiții IMM",
    optAgri:"Agricol Sezonier",
    optMDL:"MDL (Leu Moldovenesc)",
    optEUR:"EUR (Euro)",
    optUSD:"USD (Dolar American)",
    optNoCollateral:"Fără garanție",
    optGuarantorColl:"Garanție Personală",
    optCar:"Autovehicul",
    optRealEstate:"Imobil",
    optEquipment:"Echipament",
    
    helpLoanAmount:"În moneda selectată",
    helpLoanAmountMdl:"Suma în MDL",
    helpTenor:"Perioada în luni",
    helpInterest:"Rata anuală în procente",
    helpInflation:"Rata inflației la momentul acordării",
    helpPolicyRate:"Rata BNM la momentul acordării",
    helpLtv:"Raportul împrumut/valoare (0 = fără garanție)",
    helpIncome:"Venitul lunar în MDL",
    helpRemittances:"Între 0 și 1 (25% = 0.25)",
    helpDti:"Raport datorii/venit",
    helpPti:"Raport plată/venit",
    helpNumLoans:"Număr de împrumuturi anterioare",
    helpCreditScore:"Scor de credit (mai mare = risc mai mic)",
    
    btnReset:"Resetare",
    btnSubmit:"Verificare",
    formSuccess:"Cererea a fost trimisă cu succes! Datele vor fi procesate pentru evaluare.",
    
    contactTitle:"Contacte",
    email:"Email: admin@creditcheck.md | Tel: +373 600 00000",
    risk:"Manager Risc: risk.team@creditcheck.md",
    it:"Departament IT: support@creditcheck.md",
    footer:"© 2025 CreditCheck | Sistem Intern"
  },
  en:{
    dashboard:"Dashboard",
    form:"Verify loan",
    contact:"Contacts",
    welcome:"CreditCheck Internal System – Manage loans and performance reports.",
    
    formTitle:"Verify loan performance",
    infoBanner: "Fields with * are mandatory.",
    
    sectionClient:"Client Information",
    sectionLoan:"Loan Details",
    sectionCollateral:"Collateral",
    sectionFinancial:"Financial Information",
    sectionHistory:"Credit History",
    
    labelSegment:"Client Segment",
    labelRegion:"Region",
    labelUrban:"Residence Type",
    labelUrbanCheck:"Urban (check if client from urban area)",
    labelEmployer:"Employment Sector",
    labelLoanType:"Loan Type",
    labelCurrency:"Currency",
    labelLoanAmount:"Loan Amount",
    labelLoanAmountMdl:"Loan Amount (MDL)",
    labelTenor:"Tenor (months)",
    labelInterest:"Annual Interest Rate (%)",
    labelOrigDate:"Origination Date",
    labelInflation:"Inflation at Origination (%)",
    labelPolicyRate:"Policy Rate at Origination (%)",
    labelCollateralType:"Collateral Type",
    labelLtv:"LTV Ratio (Loan-to-Value)",
    labelGuarantor:"Guarantor Present",
    labelGuarantorCheck:"Client has guarantor",
    labelIncome:"Monthly Income (MDL)",
    labelRemittances:"Remittances Share",
    labelDti:"DTI (Debt-to-Income)",
    labelPti:"PTI (Payment-to-Income)",
    labelSalary:"Salary Project",
    labelSalaryCheck:"Salary paid through bank",
    labelNumLoans:"Number of Previous Loans",
    labelCreditScore:"Credit Score",
    labelArrears:"Previous Arrears",
    labelDpd30:"Arrears ≥30 days",
    labelDpd60:"Arrears ≥60 days",
    
    optSelectSegment:"Select segment",
    optSelectRegion:"Select region",
    optSelectEmployer:"Select sector",
    optSelectLoan:"Select type",
    optSelectCurrency:"Select currency",
    
    optRetail:"Retail",
    optMicro:"Micro",
    optSME:"SME (Small and Medium Enterprise)",
    optPublic:"Public",
    optPrivate:"Private",
    optAgriculture:"Agriculture",
    optTrade:"Trade",
    optConstruction:"Construction",
    optIT:"IT",
    optServices:"Services",
    optConsumer:"Consumer",
    optMortgage:"Mortgage",
    optAuto:"Auto",
    optSMEWC:"SME Working Capital",
    optSMEInv:"SME Investment",
    optAgri:"Agricultural Seasonal",
    optMDL:"MDL (Moldovan Leu)",
    optEUR:"EUR (Euro)",
    optUSD:"USD (US Dollar)",
    optNoCollateral:"No collateral",
    optGuarantorColl:"Personal Guarantee",
    optCar:"Vehicle",
    optRealEstate:"Real Estate",
    optEquipment:"Equipment",
    
    helpLoanAmount:"In selected currency",
    helpLoanAmountMdl:"Amount in MDL",
    helpTenor:"Period in months",
    helpInterest:"Annual rate in percentage",
    helpInflation:"Inflation rate at origination",
    helpPolicyRate:"Central bank rate at origination",
    helpLtv:"Loan-to-value ratio (0 = no collateral)",
    helpIncome:"Monthly income in MDL",
    helpRemittances:"Between 0 and 1 (25% = 0.25)",
    helpDti:"Debt-to-income ratio",
    helpPti:"Payment-to-income ratio",
    helpNumLoans:"Number of previous loans",
    helpCreditScore:"Credit score (higher = lower risk)",
    
    btnReset:"Reset",
    btnSubmit:"Verify",
    formSuccess:"Application submitted successfully! Data will be processed for evaluation.",
    
    contactTitle:"Contacts",
    email:"Email: admin@creditcheck.md | Tel: +373 600 00000",
    risk:"Risk Manager: risk.team@creditcheck.md",
    it:"IT Department: support@creditcheck.md",
    footer:"© 2025 CreditCheck | Internal Employee System"
  },
  ru:{
    dashboard:"Панель",
    form:"Проверить кредит",
    contact:"Контакты",
    welcome:"Внутренняя система CreditCheck – управление кредитами и отчетами.",
    
    formTitle:"Проверить эффективность кредита",
    infoBanner:"Все поля помечанные * обязательны к заполнению.",
    
    sectionClient:"Информация о Клиенте",
    sectionLoan:"Детали Кредита",
    sectionCollateral:"Обеспечение",
    sectionFinancial:"Финансовая Информация",
    sectionHistory:"Кредитная История",
    
    labelSegment:"Сегмент Клиента",
    labelRegion:"Регион",
    labelUrban:"Тип Резиденции",
    labelUrbanCheck:"Городской (если клиент из городской зоны)",
    labelEmployer:"Сектор Занятости",
    labelLoanType:"Тип Кредита",
    labelCurrency:"Валюта",
    labelLoanAmount:"Сумма Кредита",
    labelLoanAmountMdl:"Сумма Кредита (MDL)",
    labelTenor:"Период (месяцев)",
    labelInterest:"Годовая Процентная Ставка (%)",
    labelOrigDate:"Дата Предоставления",
    labelInflation:"Инфляция при Предоставлении (%)",
    labelPolicyRate:"Ставка Денежной Политики (%)",
    labelCollateralType:"Тип Обеспечения",
    labelLtv:"Коэффициент LTV",
    labelGuarantor:"Наличие Поручителя",
    labelGuarantorCheck:"У клиента есть поручитель",
    labelIncome:"Месячный Доход (MDL)",
    labelRemittances:"Доля Переводов",
    labelDti:"DTI (Долг/Доход)",
    labelPti:"PTI (Платёж/Доход)",
    labelSalary:"Зарплатный Проект",
    labelSalaryCheck:"Зарплата через банк",
    labelNumLoans:"Кол-во Предыдущих Кредитов",
    labelCreditScore:"Кредитный Рейтинг",
    labelArrears:"Предыдущие Задолженности",
    labelDpd30:"Задолженность ≥30 дней",
    labelDpd60:"Задолженность ≥60 дней",
    
    optSelectSegment:"Выберите сегмент",
    optSelectRegion:"Выберите регион",
    optSelectEmployer:"Выберите сектор",
    optSelectLoan:"Выберите тип",
    optSelectCurrency:"Выберите валюту",
    
    optRetail:"Розница",
    optMicro:"Микро",
    optSME:"МСП (Малые и Средние Предприятия)",
    optPublic:"Государственный",
    optPrivate:"Частный",
    optAgriculture:"Сельское Хозяйство",
    optTrade:"Торговля",
    optConstruction:"Строительство",
    optIT:"ИТ",
    optServices:"Услуги",
    optConsumer:"Потребительский",
    optMortgage:"Ипотечный",
    optAuto:"Авто",
    optSMEWC:"Оборотный Капитал МСП",
    optSMEInv:"Инвестиции МСП",
    optAgri:"Сезонный Сельхоз",
    optMDL:"MDL (Молдавский Лей)",
    optEUR:"EUR (Евро)",
    optUSD:"USD (Доллар США)",
    optNoCollateral:"Без обеспечения",
    optGuarantorColl:"Личная Гарантия",
    optCar:"Транспорт",
    optRealEstate:"Недвижимость",
    optEquipment:"Оборудование",
    
    helpLoanAmount:"В выбранной валюте",
    helpLoanAmountMdl:"Сумма в MDL",
    helpTenor:"Период в месяцах",
    helpInterest:"Годовая ставка в процентах",
    helpInflation:"Уровень инфляции при выдаче",
    helpPolicyRate:"Ставка ЦБ при выдаче",
    helpLtv:"Коэффициент кредит/стоимость (0 = без залога)",
    helpIncome:"Месячный доход в MDL",
    helpRemittances:"Между 0 и 1 (25% = 0.25)",
    helpDti:"Соотношение долг/доход",
    helpPti:"Соотношение платёж/доход",
    helpNumLoans:"Количество предыдущих кредитов",
    helpCreditScore:"Кредитный скоринг (больше = меньше риск)",
    
    btnReset:"Сброс",
    btnSubmit:"Проверить",
    formSuccess:"Заявка успешно отправлена! Данные будут обработаны.",
    
    contactTitle:"Контакты",
    email:"Email: admin@creditcheck.md | Тел: +373 600 00000",
    risk:"Менеджер Рисков: risk.team@creditcheck.md",
    it:"ИТ Департамент: support@creditcheck.md",
    footer:"© 2025 CreditCheck | Внутренняя Система Сотрудников"
  }
};

function setTextById(id, text) {
  const el = document.getElementById(id);
  if (el) {
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT") {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  }
}

function updateDropdownOptions(lang) {
  const t = texts[lang];
  
  const segment = document.getElementById("segment");
  if (segment) {
    segment.options[0].text = t.optSelectSegment;
    segment.options[1].text = t.optRetail;
    segment.options[2].text = t.optMicro;
    segment.options[3].text = t.optSME;
  }
  
  const region = document.getElementById("region");
  if (region) {
    region.options[0].text = t.optSelectRegion;
  }
  
  const employer = document.getElementById("employer_sector");
  if (employer) {
    employer.options[0].text = t.optSelectEmployer;
    employer.options[1].text = t.optPublic;
    employer.options[2].text = t.optPrivate;
    employer.options[3].text = t.optAgriculture;
    employer.options[4].text = t.optTrade;
    employer.options[5].text = t.optConstruction;
    employer.options[6].text = t.optIT;
    employer.options[7].text = t.optServices;
  }
  
  const loanType = document.getElementById("loan_type");
  if (loanType) {
    loanType.options[0].text = t.optSelectLoan;
    loanType.options[1].text = t.optConsumer;
    loanType.options[2].text = t.optMortgage;
    loanType.options[3].text = t.optAuto;
    loanType.options[4].text = t.optSMEWC;
    loanType.options[5].text = t.optSMEInv;
    loanType.options[6].text = t.optAgri;
  }
  
  const currency = document.getElementById("currency");
  if (currency) {
    currency.options[0].text = t.optSelectCurrency;
    currency.options[1].text = t.optMDL;
    currency.options[2].text = t.optEUR;
    currency.options[3].text = t.optUSD;
  }
  
  const collateral = document.getElementById("collateral_type");
  if (collateral) {
    collateral.options[0].text = t.optNoCollateral;
    collateral.options[1].text = t.optGuarantorColl;
    collateral.options[2].text = t.optCar;
    collateral.options[3].text = t.optRealEstate;
    collateral.options[4].text = t.optEquipment;
  }
}

function setLanguage(lang) {
  const t = texts[lang];
  
  localStorage.setItem('creditCheckLanguage', lang);
  
  document.querySelectorAll("#menu button").forEach((btn, i) => {
    btn.textContent = [t.dashboard, t.form, t.contact][i];
  });
  
  const welcomeEl = document.getElementById("welcome-text");
  if (welcomeEl) {
    welcomeEl.textContent = "";
    typeWriter(t.welcome, welcomeEl, 0);
  }
  
  setTextById("form-title", t.formTitle);
  setTextById("info-banner", t.infoBanner);
  
  setTextById("section-client", t.sectionClient);
  setTextById("section-loan", t.sectionLoan);
  setTextById("section-collateral", t.sectionCollateral);
  setTextById("section-financial", t.sectionFinancial);
  setTextById("section-history", t.sectionHistory);
  
  setTextById("label-segment", t.labelSegment);
  setTextById("label-region", t.labelRegion);
  setTextById("label-urban", t.labelUrban);
  setTextById("label-urban-check", t.labelUrbanCheck);
  setTextById("label-employer", t.labelEmployer);
  setTextById("label-loan-type", t.labelLoanType);
  setTextById("label-currency", t.labelCurrency);
  setTextById("label-loan-amount", t.labelLoanAmount);
  setTextById("label-loan-amount-mdl", t.labelLoanAmountMdl);
  setTextById("label-tenor", t.labelTenor);
  setTextById("label-interest", t.labelInterest);
  setTextById("label-orig-date", t.labelOrigDate);
  setTextById("label-inflation", t.labelInflation);
  setTextById("label-policy-rate", t.labelPolicyRate);
  setTextById("label-collateral-type", t.labelCollateralType);
  setTextById("label-ltv", t.labelLtv);
  setTextById("label-guarantor", t.labelGuarantor);
  setTextById("label-guarantor-check", t.labelGuarantorCheck);
  setTextById("label-income", t.labelIncome);
  setTextById("label-remittances", t.labelRemittances);
  setTextById("label-dti", t.labelDti);
  setTextById("label-pti", t.labelPti);
  setTextById("label-salary", t.labelSalary);
  setTextById("label-salary-check", t.labelSalaryCheck);
  setTextById("label-num-loans", t.labelNumLoans);
  setTextById("label-credit-score", t.labelCreditScore);
  setTextById("label-arrears", t.labelArrears);
  setTextById("label-dpd30", t.labelDpd30);
  setTextById("label-dpd60", t.labelDpd60);
  
  setTextById("help-loan-amount", t.helpLoanAmount);
  setTextById("help-loan-amount-mdl", t.helpLoanAmountMdl);
  setTextById("help-tenor", t.helpTenor);
  setTextById("help-interest", t.helpInterest);
  setTextById("help-inflation", t.helpInflation);
  setTextById("help-policy-rate", t.helpPolicyRate);
  setTextById("help-ltv", t.helpLtv);
  setTextById("help-income", t.helpIncome);
  setTextById("help-remittances", t.helpRemittances);
  setTextById("help-dti", t.helpDti);
  setTextById("help-pti", t.helpPti);
  setTextById("help-num-loans", t.helpNumLoans);
  setTextById("help-credit-score", t.helpCreditScore);
  
  setTextById("btn-reset", t.btnReset);
  setTextById("btn-submit", t.btnSubmit);
  
  setTextById("contact-title", t.contactTitle);
  setTextById("contact-email", t.email);
  setTextById("contact-risk", t.risk);
  setTextById("contact-it", t.it);
  
  setTextById("footer-text", t.footer);
  
  updateDropdownOptions(lang);
}

function scrollToSection(id) {
  const header = document.getElementById("navbar");
  const target = document.getElementById(id);
  if (!target || !header) return;
  const y = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight + 1;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function typeWriter(txt, el, i) {
  if (i < txt.length) {
    el.textContent += txt.charAt(i);
    setTimeout(() => typeWriter(txt, el, i + 1), 50);
  }
}

window.onload = () => {
  const savedLang = localStorage.getItem('creditCheckLanguage') || 'ro';
  setLanguage(savedLang);
  
  const langSelector = document.getElementById('language-selector');
  if (langSelector) {
    langSelector.value = savedLang;
  }

  const obs = new IntersectionObserver(e => {
    e.forEach(x => { if (x.isIntersecting) x.target.classList.add("visible"); });
  }, { threshold: 0.2 });
  document.querySelectorAll(".fade").forEach(s => obs.observe(s));

  document.querySelectorAll("#menu button").forEach(btn => {
    btn.addEventListener("click", () => scrollToSection(btn.dataset.key));
  });

  const currencySelect = document.getElementById("currency");
  const loanAmountCcy = document.getElementById("loan_amount_ccy");
  const loanAmountMdl = document.getElementById("loan_amount_mdl");
  
  if (currencySelect && loanAmountCcy && loanAmountMdl) {
    function updateMdlField() {
      const selectedCurrency = currencySelect.value;
      
      if (selectedCurrency === "MDL") {
        loanAmountMdl.readOnly = true;
        loanAmountMdl.value = loanAmountCcy.value;
        loanAmountMdl.style.opacity = "0.6";
        loanAmountMdl.style.cursor = "not-allowed";
        loanAmountMdl.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
      } else {
        loanAmountMdl.readOnly = false;
        loanAmountMdl.style.opacity = "1";
        loanAmountMdl.style.cursor = "text";
        loanAmountMdl.style.backgroundColor = "";
      }
    }
    
    currencySelect.addEventListener("change", updateMdlField);
    
    loanAmountCcy.addEventListener("input", function() {
      if (currencySelect.value === "MDL") {
        loanAmountMdl.value = loanAmountCcy.value;
      }
    });
    
    updateMdlField();
  }

  const formEl = document.getElementById("loanForm");
  if (formEl) {
    formEl.addEventListener("submit", async function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = {};
      
      formData.forEach((value, key) => {
        if (yesNoFields.includes(key)) {
          data[key] = value === '1' ? 1 : 0;
        } else {
          data[key] = value;
        }
      });

      yesNoFields.forEach(field => {
        if (!data[field]) data[field] = 0;
      });
      
      const loanAmountMdlEl = document.getElementById("loan_amount_mdl");
      if (loanAmountMdlEl && loanAmountMdlEl.readOnly) {
        data.loan_amount_mdl = loanAmountMdlEl.value;
      }
      
      const apiData = prepareApiData(data);
      
      console.log('Sending data to API:', apiData);
      
      const submitBtn = document.getElementById('btn-submit');
      const originalText = submitBtn.textContent;
      
      try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Se procesează...';
        
        const response = await fetch('https://npl-api.onrender.com/predict_npl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiData)
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ detail: 'Eroare necunoscută' }));
          throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('API Response:', result);
        
        localStorage.setItem('creditCheckResult', JSON.stringify(result));
        localStorage.setItem('creditCheckRequest', JSON.stringify(apiData));
        
        window.location.href = 'rezultat.html';
        
      } catch (error) {
        console.error('Error:', error);
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        
        let errorMsg = 'Eroare la procesarea datelor. Vă rugăm să încercați din nou.\n\n';
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
          errorMsg += 'API-ul nu este disponibil.';
        } else {
          errorMsg += 'Detalii: ' + error.message;
        }
        alert(errorMsg);
      }
      
    });
  }
};

function prepareApiData(formData) {
  const originationDate = new Date(formData.origination_date);
  const tenorMonths = parseInt(formData.tenor_months) || 12;
  const maturityDate = new Date(originationDate);
  maturityDate.setMonth(maturityDate.getMonth() + tenorMonths);
  
  const monthlyIncome = parseFloat(formData.monthly_income_mdl) || 0;
  const loanAmountMdl = parseFloat(formData.loan_amount_mdl) || 0;
  const interestRate = parseFloat(formData.interest_rate_annual) || 0;
  const monthlyRate = interestRate / 100 / 12;
  
  let installmentMdl = 0;
  if (monthlyRate > 0 && tenorMonths > 0) {
    installmentMdl = loanAmountMdl * (monthlyRate * Math.pow(1 + monthlyRate, tenorMonths)) / 
                     (Math.pow(1 + monthlyRate, tenorMonths) - 1);
  } else if (loanAmountMdl > 0 && tenorMonths > 0) {
    installmentMdl = loanAmountMdl / tenorMonths;
  }
  
  const dti = parseFloat(formData.dti) || 0;
  const pti = parseFloat(formData.pti) || 0;
  const currency = formData.currency || 'MDL';
  const fxMismatch = (currency !== 'MDL') ? 1 : 0;
  
  let loanAmountCcy = parseFloat(formData.loan_amount_ccy) || 0;
  if (currency === 'MDL') {
    loanAmountCcy = loanAmountMdl;
  }
  
  const inflationAtOrigination = parseFloat(formData.inflation_at_origination) || 7.5;
  const policyRateAtOrigination = parseFloat(formData.policy_rate_at_origination) || 6.5;

  const originationYear = originationDate.getFullYear();
  const shock20222023 = (originationYear === 2022 || originationYear === 2023) ? 1 : 0;
  
  return {
    origination_date: formData.origination_date,
    maturity_date: maturityDate.toISOString().split('T')[0],
    loan_amount_mdl: loanAmountMdl,
    monthly_income_mdl: parseFloat(formData.monthly_income_mdl) || 0,
    interest_rate_annual: parseFloat(formData.interest_rate_annual) || 0,
    credit_bureau_score: parseFloat(formData.credit_bureau_score) || 0,
    pti: parseFloat(formData.pti) || 0,
    dti: parseFloat(formData.dti) || 0,
    tenor_months: tenorMonths,
    loan_amount_ccy: loanAmountCcy,
    currency: currency,
    segment: formData.segment || '',
    region: formData.region || '',
    urban: parseInt(formData.urban) || 0,
    loan_type: formData.loan_type || '',
    collateral_type: formData.collateral_type || '',
    ltv: parseFloat(formData.ltv) || 0,
    salary_project: parseInt(formData.salary_project) || 0,
    employer_sector: formData.employer_sector || '',
    remittances_share_income: parseFloat(formData.remittances_share_income) || 0,
    guarantor_present: parseInt(formData.guarantor_present) || 0,
    num_loans_bureau: parseInt(formData.num_loans_bureau) || 0,
    previous_dpd_30: parseInt(formData.previous_dpd_30) || 0,
    previous_dpd_60: parseInt(formData.previous_dpd_60) || 0,
    installment_mdl: installmentMdl,
    fx_mismatch: fxMismatch,
    inflation_at_origination: inflationAtOrigination,
    policy_rate_at_origination: policyRateAtOrigination,
    shock_2022_2023: shock20222023
  };
}
