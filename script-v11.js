/* =========================================================
   ZAKI IN CHINA - script.js
   Version complète et simplifiée
   ========================================================= */

const WHATSAPP_NUMBER = "213541275346";

const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbzQD0m8G0GFWM5ZdFsBmtWoLGZ05Lja-7RUJVnNyO0JS-UyLwdwJ4vmbjn7xYlPQt5O/exec";


/* =========================================================
   ELEMENTS HTML
   ========================================================= */

const body = document.body;
const html = document.documentElement;

const vehicleForm =
    document.getElementById("vehicleForm");

const themeToggle =
    document.getElementById("themeToggle");

const languageButtons =
    document.querySelectorAll(".language-button");

const notification =
    document.getElementById("notification");

const notificationMessage =
    document.querySelector(".notification-message");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   CHAMPS DU FORMULAIRE
   ========================================================= */

const carSelect =
    document.getElementById("car");

const otherCarGroup =
    document.getElementById("otherCarGroup");

const otherCarInput =
    document.getElementById("otherCar");

const vehicleStateSelect =
    document.getElementById("vehicleState");

const mileageGroup =
    document.getElementById("mileageGroup");

const mileageSelect =
    document.getElementById("mileage");

const paintGroup =
    document.getElementById("paintGroup");

const paintStateSelect =
    document.getElementById("paintState");

const budgetInput =
    document.getElementById("budget");


/* =========================================================
   TRADUCTIONS
   ========================================================= */

const translations = {

    fr: {

        brandLocation:
            "Importation automobile depuis la Chine",

        heroBadge:
            "Votre projet automobile commence ici",

        heroTitle:
            "Votre prochaine voiture,<br><span>depuis la Chine.</span>",

        heroDescription:
            "Décrivez-nous le véhicule que vous recherchez et notre équipe vous accompagnera dans votre projet.",

        formTitle:
            "Votre demande",

        formSubtitle:
            "Remplissez les informations de votre projet automobile.",

        personalInformation:
            "Informations personnelles",

        lastName:
            "Nom",

        firstName:
            "Prénom",

        phone:
            "Numéro de téléphone",

        vehicleInformation:
            "Votre véhicule",

        vehicleState:
            "État du véhicule",

        vehicleStatePlaceholder:
            "Sélectionnez l'état du véhicule",

        vehicleNew:
            "Véhicule neuve 00 KM",

        vehicleUsed:
            "Véhicule de moins de 3 ans",

        car:
            "Voiture souhaitée",

        carSelectPlaceholder:
            "Sélectionnez votre voiture",

        carLivanManualRoof:
            "LIVAN Manuelle Avec Toit",

        carLivanAuto:
            "LIVAN Auto",

        carCoolrayBattle:
            "COOLRAY Battle",

        carCoolrayFull:
            "COOLRAY FULL Option",

        carCoolrayManual:
            "COOLRAY Manuelle",

        carOther:
            "Autre",

        otherCar:
            "Autre véhicule",

        otherCarPlaceholder:
            "Indiquez le véhicule souhaité",

        mileage:
            "Kilométrage souhaité",

        mileagePlaceholder:
            "Sélectionnez le kilométrage",

        mileageUnder10:
            "Moins de 10k KM",

        mileage10to30:
            "Entre 10k KM et 30k KM",

        mileage40plus:
            "40k KM ou plus",

        paintState:
            "État de la peinture",

        paintStatePlaceholder:
            "Sélectionnez l'état de la peinture",

        paintOriginal:
            "Peinture d'origine — zéro peinture refaite",

        paintTouched:
            "Avec des retouches de peinture",

        color:
            "Couleur souhaitée",

        colorSelectPlaceholder:
            "Sélectionnez votre couleur",

        colorWhite:
            "Blanc",

        colorSilver:
            "Silver",

        colorGray:
            "Gris",

        colorChameleon:
            "Caméléon",

        colorBlue:
            "Bleu",

        colorOther:
            "Autre",

        port:
            "Port de destination",

        portSelectPlaceholder:
            "Sélectionnez votre port",

        portAnnaba:
            "Annaba",

        portAlger:
            "Alger",

        portSkikda:
            "Skikda",

        portBedjaya:
            "Bedjaya",

        portOran:
            "Oran",

        portOther:
            "Autre",

        budget:
            "Budget",

        budgetPlaceholder:
            "Ex : 250",

        million:
            "Million",

        deliveryInformation:
            "Livraison",

        fastDelivery:
            "Livraison rapide",

        fastDeliveryMeta:
            "... Environ 35 jours (+ 4 Million)",

        fastDeliveryDescription:
            "Je souhaite bénéficier d'une option de livraison rapide.",

        yes:
            "Oui",

        no:
            "Non",

        privacyNote:
            "Vos informations sont utilisées uniquement pour traiter votre demande.",

        submitButton:
            "Envoyer ma demande",

        trustOneTitle:
            "Accompagnement",

        trustOneText:
            "Un suivi de votre projet",

        trustTwoTitle:
            "Véhicules",

        trustTwoText:
            "Choisissez selon vos besoins",

        trustThreeTitle:
            "Contact direct",

        trustThreeText:
            "Échangez directement avec nous",

        footerText:
            "Zaki in China. Tous droits réservés.",

        codedBy:
            "Coded by Abdou",

        creatorPhone:
            "+213773637232",

        creatorEmail:
            "Abdouboul1@hotmail.com",

        lastNamePlaceholder:
            "Votre nom",

        firstNamePlaceholder:
            "Votre prénom",

        phonePlaceholder:
            "+213 XX XX XX XX",

        themeDarkLabel:
            "Activer le mode clair",

        themeLightLabel:
            "Activer le mode sombre",

        notificationLanguage:
            "Langue changée",

        notificationThemeLight:
            "Mode clair activé",

        notificationThemeDark:
            "Mode sombre activé",

        notificationWhatsApp:
            "Ouverture de WhatsApp...",

        notificationError:
            "Veuillez remplir tous les champs obligatoires.",

        notificationPhone:
            "Veuillez renseigner un numéro de téléphone valide.",

        whatsappTitle:
            "*NOUVELLE DEMANDE DE VÉHICULE*",

        whatsappClient:
            "*CLIENT*",

        whatsappContact:
            "*CONTACT*",

        whatsappVehicle:
            "*VÉHICULE*",

        whatsappLogistics:
            "*LOGISTIQUE*",

        whatsappLastName:
            "Nom",

        whatsappFirstName:
            "Prénom",

        whatsappPhone:
            "Téléphone",

        whatsappCar:
            "Voiture souhaitée",

        whatsappVehicleState:
            "État du véhicule",

        whatsappMileage:
            "Kilométrage",

        whatsappPaintState:
            "État de la peinture",

        whatsappColor:
            "Couleur souhaitée",

        whatsappPort:
            "Port de destination",

        whatsappBudget:
            "Budget",

        whatsappFastDelivery:
            "Livraison rapide",

        whatsappFooter:
            "Zaki in China"
    },


    en: {

        brandLocation:
            "Automotive import from China",

        heroBadge:
            "Your automotive project starts here",

        heroTitle:
            "Your next car,<br><span>from China.</span>",

        heroDescription:
            "Tell us about the vehicle you are looking for and our team will assist you throughout your project.",

        formTitle:
            "Your request",

        formSubtitle:
            "Fill in the details of your automotive project.",

        personalInformation:
            "Personal information",

        lastName:
            "Last name",

        firstName:
            "First name",

        phone:
            "Phone number",

        vehicleInformation:
            "Your vehicle",

        vehicleState:
            "Vehicle condition",

        vehicleStatePlaceholder:
            "Select vehicle condition",

        vehicleNew:
            "Brand-new vehicle 00 KM",

        vehicleUsed:
            "Vehicle less than 3 years old",

        car:
            "Desired vehicle",

        carSelectPlaceholder:
            "Select your vehicle",

        carLivanManualRoof:
            "LIVAN Manual With Roof",

        carLivanAuto:
            "LIVAN Automatic",

        carCoolrayBattle:
            "COOLRAY Battle",

        carCoolrayFull:
            "COOLRAY FULL Option",

        carCoolrayManual:
            "COOLRAY Manual",

        carOther:
            "Other",

        otherCar:
            "Other vehicle",

        otherCarPlaceholder:
            "Enter the desired vehicle",

        mileage:
            "Mileage",

        mileagePlaceholder:
            "Select mileage",

        mileageUnder10:
            "Less than 10k KM",

        mileage10to30:
            "Between 10k KM and 30k KM",

        mileage40plus:
            "40k KM or more",

        paintState:
            "Paint condition",

        paintStatePlaceholder:
            "Select paint condition",

        paintOriginal:
            "Original paint — no repainting",

        paintTouched:
            "With paint touch-ups",

        color:
            "Desired color",

        colorSelectPlaceholder:
            "Select your color",

        colorWhite:
            "White",

        colorSilver:
            "Silver",

        colorGray:
            "Gray",

        colorChameleon:
            "Chameleon",

        colorBlue:
            "Blue",

        colorOther:
            "Other",

        port:
            "Destination port",

        portSelectPlaceholder:
            "Select your port",

        portAnnaba:
            "Annaba",

        portAlger:
            "Algiers",

        portSkikda:
            "Skikda",

        portBedjaya:
            "Bejaia",

        portOran:
            "Oran",

        portOther:
            "Other",

        budget:
            "Budget",

        budgetPlaceholder:
            "Ex: 250",

        million:
            "Million",

        deliveryInformation:
            "Delivery",

        fastDelivery:
            "Fast delivery",

        fastDeliveryMeta:
            "... Approximately 35 days (+ 4 Million)",

        fastDeliveryDescription:
            "I would like to benefit from a fast delivery option.",

        yes:
            "Yes",

        no:
            "No",

        privacyNote:
            "Your information is used only to process your request.",

        submitButton:
            "Send my request",

        trustOneTitle:
            "Assistance",

        trustOneText:
            "Project follow-up",

        trustTwoTitle:
            "Vehicles",

        trustTwoText:
            "Choose according to your needs",

        trustThreeTitle:
            "Direct contact",

        trustThreeText:
            "Talk directly with our team",

        footerText:
            "Zaki in China. All rights reserved.",

        codedBy:
            "Coded by Abdou",

        creatorPhone:
            "+213773637232",

        creatorEmail:
            "Abdouboul1@hotmail.com",

        lastNamePlaceholder:
            "Your last name",

        firstNamePlaceholder:
            "Your first name",

        phonePlaceholder:
            "+213 XX XX XX XX",

        themeDarkLabel:
            "Enable light mode",

        themeLightLabel:
            "Enable dark mode",

        notificationLanguage:
            "Language changed",

        notificationThemeLight:
            "Light mode activated",

        notificationThemeDark:
            "Dark mode activated",

        notificationWhatsApp:
            "Opening WhatsApp...",

        notificationError:
            "Please fill in all required fields.",

        notificationPhone:
            "Please enter a valid phone number.",

        whatsappTitle:
            "*NEW VEHICLE REQUEST*",

        whatsappClient:
            "*CLIENT*",

        whatsappContact:
            "*CONTACT*",

        whatsappVehicle:
            "*VEHICLE*",

        whatsappLogistics:
            "*LOGISTICS*",

        whatsappLastName:
            "Last name",

        whatsappFirstName:
            "First name",

        whatsappPhone:
            "Phone",

        whatsappCar:
            "Desired vehicle",

        whatsappVehicleState:
            "Vehicle condition",

        whatsappMileage:
            "Mileage",

        whatsappPaintState:
            "Paint condition",

        whatsappColor:
            "Desired color",

        whatsappPort:
            "Destination port",

        whatsappBudget:
            "Budget",

        whatsappFastDelivery:
            "Fast delivery",

        whatsappFooter:
            "Zaki in China"
    },


    ar: {

        brandLocation:
            "استيراد السيارات من الصين",

        heroBadge:
            "مشروع سيارتك يبدأ من هنا",

        heroTitle:
            "سيارتك القادمة،<br><span>من الصين.</span>",

        heroDescription:
            "أخبرنا عن السيارة التي تبحث عنها وسيرافقك فريقنا في جميع مراحل مشروعك.",

        formTitle:
            "طلبك",

        formSubtitle:
            "أدخل معلومات مشروعك الخاص بالسيارة.",

        personalInformation:
            "المعلومات الشخصية",

        lastName:
            "اللقب",

        firstName:
            "الاسم",

        phone:
            "رقم الهاتف",

        vehicleInformation:
            "السيارة المطلوبة",

        vehicleState:
            "حالة السيارة",

        vehicleStatePlaceholder:
            "اختر حالة السيارة",

        vehicleNew:
            "سيارة جديدة 00 كم",

        vehicleUsed:
            "سيارة أقل من 3 سنوات",

        car:
            "السيارة المطلوبة",

        carSelectPlaceholder:
            "اختر سيارتك",

        carLivanManualRoof:
            "LIVAN يدوي مع سقف",

        carLivanAuto:
            "LIVAN أوتوماتيك",

        carCoolrayBattle:
            "COOLRAY Battle",

        carCoolrayFull:
            "COOLRAY FULL Option",

        carCoolrayManual:
            "COOLRAY يدوي",

        carOther:
            "أخرى",

        otherCar:
            "سيارة أخرى",

        otherCarPlaceholder:
            "اكتب السيارة المطلوبة",

        mileage:
            "عدد الكيلومترات",

        mileagePlaceholder:
            "اختر عدد الكيلومترات",

        mileageUnder10:
            "أقل من 10 آلاف كم",

        mileage10to30:
            "بين 10 آلاف و30 ألف كم",

        mileage40plus:
            "40 ألف كم أو أكثر",

        paintState:
            "حالة الطلاء",

        paintStatePlaceholder:
            "اختر حالة الطلاء",

        paintOriginal:
            "طلاء أصلي — بدون إعادة طلاء",

        paintTouched:
            "مع إصلاحات في الطلاء",

        color:
            "اللون المطلوب",

        colorSelectPlaceholder:
            "اختر اللون",

        colorWhite:
            "أبيض",

        colorSilver:
            "فضي",

        colorGray:
            "رمادي",

        colorChameleon:
            "كامليون",

        colorBlue:
            "أزرق",

        colorOther:
            "أخرى",

        port:
            "ميناء الوصول",

        portSelectPlaceholder:
            "اختر ميناء الوصول",

        portAnnaba:
            "عنابة",

        portAlger:
            "الجزائر",

        portSkikda:
            "سكيكدة",

        portBedjaya:
            "بجاية",

        portOran:
            "وهران",

        portOther:
            "أخرى",

        budget:
            "الميزانية",

        budgetPlaceholder:
            "مثال: 250",

        million:
            "مليون",

        deliveryInformation:
            "التوصيل",

        fastDelivery:
            "توصيل سريع",

        fastDeliveryMeta:
            "... حوالي 35 يومًا (+ 4 مليون)",

        fastDeliveryDescription:
            "أرغب في الاستفادة من خيار التوصيل السريع.",

        yes:
            "نعم",

        no:
            "لا",

        privacyNote:
            "تُستخدم معلوماتك فقط لمعالجة طلبك.",

        submitButton:
            "إرسال طلبي",

        trustOneTitle:
            "مرافقة",

        trustOneText:
            "متابعة مشروعك",

        trustTwoTitle:
            "السيارات",

        trustTwoText:
            "اختر حسب احتياجاتك",

        trustThreeTitle:
            "اتصال مباشر",

        trustThreeText:
            "تواصل مباشرة مع فريقنا",

        footerText:
            "Zaki in China. جميع الحقوق محفوظة.",

        codedBy:
            "Coded by Abdou",

        creatorPhone:
            "+213773637232",

        creatorEmail:
            "Abdouboul1@hotmail.com",

        lastNamePlaceholder:
            "أدخل لقبك",

        firstNamePlaceholder:
            "أدخل اسمك",

        phonePlaceholder:
            "+213 XX XX XX XX",

        themeDarkLabel:
            "تفعيل الوضع الفاتح",

        themeLightLabel:
            "تفعيل الوضع الداكن",

        notificationLanguage:
            "تم تغيير اللغة",

        notificationThemeLight:
            "تم تفعيل الوضع الفاتح",

        notificationThemeDark:
            "تم تفعيل الوضع الداكن",

        notificationWhatsApp:
            "جاري فتح واتساب...",

        notificationError:
            "يرجى ملء جميع الحقول المطلوبة.",

        notificationPhone:
            "يرجى إدخال رقم هاتف صحيح.",

        whatsappTitle:
            "*طلب سيارة جديد*",

        whatsappClient:
            "*العميل*",

        whatsappContact:
            "*معلومات الاتصال*",

        whatsappVehicle:
            "*السيارة*",

        whatsappLogistics:
            "*معلومات الشحن*",

        whatsappLastName:
            "اللقب",

        whatsappFirstName:
            "الاسم",

        whatsappPhone:
            "الهاتف",

        whatsappCar:
            "السيارة المطلوبة",

        whatsappVehicleState:
            "حالة السيارة",

        whatsappMileage:
            "عدد الكيلومترات",

        whatsappPaintState:
            "حالة الطلاء",

        whatsappColor:
            "اللون المطلوب",

        whatsappPort:
            "ميناء الوصول",

        whatsappBudget:
            "الميزانية",

        whatsappFastDelivery:
            "التوصيل السريع",

        whatsappFooter:
            "Zaki in China"
    }
};


/* =========================================================
   LANGUE / THÈME
   ========================================================= */

let currentLanguage =
    localStorage.getItem("zakiLanguage") || "fr";

if (!translations[currentLanguage]) {
    currentLanguage = "fr";
}

let currentTheme =
    localStorage.getItem("zakiTheme") || "dark";

if (
    currentTheme !== "dark" &&
    currentTheme !== "light"
) {
    currentTheme = "dark";
}


/* =========================================================
   NOTIFICATION
   ========================================================= */

let notificationTimeout;

function showNotification(message) {

    if (
        !notification ||
        !notificationMessage
    ) {
        return;
    }

    clearTimeout(notificationTimeout);

    notificationMessage.textContent =
        message;

    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {

        notification.classList.remove("show");

    }, 2800);
}


/* =========================================================
   THÈME
   ========================================================= */

function updateThemeAccessibility() {

    if (!themeToggle) {
        return;
    }

    const dictionary =
        translations[currentLanguage];

    const lightMode =
        body.classList.contains("light-mode");

    themeToggle.setAttribute(
        "aria-pressed",
        lightMode ? "true" : "false"
    );

    themeToggle.setAttribute(
        "aria-label",
        lightMode
            ? dictionary.themeLightLabel
            : dictionary.themeDarkLabel
    );
}


function applyTheme(theme) {

    body.classList.toggle(
        "light-mode",
        theme === "light"
    );

    currentTheme = theme;

    localStorage.setItem(
        "zakiTheme",
        theme
    );

    updateThemeAccessibility();
}


/* =========================================================
   TRADUCTION
   ========================================================= */

function translatePage(language) {

    const dictionary =
        translations[language];

    if (!dictionary) {
        return;
    }

    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const key =
                element.dataset.i18n;

            if (
                dictionary[key] !== undefined
            ) {
                element.innerHTML =
                    dictionary[key];
            }

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach((element) => {

            const key =
                element.dataset
                    .i18nPlaceholder;

            if (
                dictionary[key] !== undefined
            ) {
                element.placeholder =
                    dictionary[key];
            }

        });


    html.lang = language;

    html.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    languageButtons.forEach((button) => {

        const active =
            button.dataset.language ===
            language;

        button.classList.toggle(
            "active",
            active
        );

        button.setAttribute(
            "aria-pressed",
            active ? "true" : "false"
        );

    });


    currentLanguage =
        language;

    localStorage.setItem(
        "zakiLanguage",
        language
    );

    updateThemeAccessibility();
}


/* =========================================================
   CHANGEMENT DE LANGUE
   ========================================================= */

languageButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const language =
                button.dataset.language;

            if (
                !translations[language] ||
                language === currentLanguage
            ) {
                return;
            }

            translatePage(language);

            showNotification(
                translations[language]
                    .notificationLanguage
            );

        }
    );

});


/* =========================================================
   CHANGEMENT DARK / LIGHT
   ========================================================= */

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            const newTheme =
                body.classList.contains(
                    "light-mode"
                )
                    ? "dark"
                    : "light";

            applyTheme(newTheme);

            const dictionary =
                translations[currentLanguage];

            showNotification(
                newTheme === "light"
                    ? dictionary
                        .notificationThemeLight
                    : dictionary
                        .notificationThemeDark
            );

        }
    );

}


/* =========================================================
   CHAMPS CONDITIONNELS
   ========================================================= */

function updateConditionalFields() {

    /* -------------------------
       AUTRE VÉHICULE
       ------------------------- */

    if (
        carSelect &&
        otherCarGroup &&
        otherCarInput
    ) {

        const other =
            carSelect.value === "Autre";

        otherCarGroup.style.display =
            other
                ? "flex"
                : "none";

        otherCarInput.required =
            other;

        if (!other) {
            otherCarInput.value = "";
        }
    }


    /* -------------------------
       VÉHICULE MOINS DE 3 ANS
       ------------------------- */

    if (
        vehicleStateSelect &&
        mileageGroup &&
        mileageSelect &&
        paintGroup &&
        paintStateSelect
    ) {

        const usedVehicle =
            vehicleStateSelect.value ===
            "Véhicule de moins de 3 ans";


        mileageGroup.style.display =
            usedVehicle
                ? "flex"
                : "none";

        paintGroup.style.display =
            usedVehicle
                ? "flex"
                : "none";


        mileageSelect.required =
            usedVehicle;

        paintStateSelect.required =
            usedVehicle;


        if (!usedVehicle) {

            mileageSelect.value = "";

            paintStateSelect.value = "";

        }
    }
}


/* =========================================================
   ÉCOUTE DES CHANGEMENTS
   ========================================================= */

if (carSelect) {

    carSelect.addEventListener(
        "change",
        updateConditionalFields
    );

}


if (vehicleStateSelect) {

    vehicleStateSelect.addEventListener(
        "change",
        updateConditionalFields
    );

}


/* =========================================================
   BUDGET — 3 CASES
   ========================================================= */

const budgetDigits =
    document.querySelectorAll(".budget-digit");


function updateBudgetValue() {

    if (!budgetInput) {
        return;
    }

    budgetInput.value =
        Array.from(budgetDigits)
            .map(input => input.value)
            .join("");
}


budgetDigits.forEach(
    (digit, index) => {

        /* -------------------------
           SAISIE D'UN CHIFFRE
           ------------------------- */

        digit.addEventListener(
            "input",
            () => {

                digit.value =
                    digit.value
                        .replace(/\D/g, "")
                        .slice(0, 1);


                updateBudgetValue();


                /* Passage automatique
                   à la case suivante */

                if (
                    digit.value &&
                    index < budgetDigits.length - 1
                ) {

                    budgetDigits[index + 1].focus();

                }

            }
        );


        /* -------------------------
           RETOUR ARRIÈRE
           ------------------------- */

        digit.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Backspace" &&
                    !digit.value &&
                    index > 0
                ) {

                    budgetDigits[index - 1].focus();

                }

            }
        );


        /* -------------------------
           COLLAGE DE 3 CHIFFRES
           Exemple : 250
           ------------------------- */

        digit.addEventListener(
            "paste",
            (event) => {

                event.preventDefault();


                const pasted =
                    event.clipboardData
                        .getData("text")
                        .replace(/\D/g, "")
                        .slice(0, 3);


                pasted
                    .split("")
                    .forEach(
                        (number, position) => {

                            if (
                                budgetDigits[index + position]
                            ) {

                                budgetDigits[index + position]
                                    .value = number;

                            }

                        }
                    );


                updateBudgetValue();


                const nextEmpty =
                    Array.from(budgetDigits)
                        .findIndex(
                            input => !input.value
                        );


                if (nextEmpty !== -1) {

                    budgetDigits[nextEmpty].focus();

                } else {

                    budgetDigits[
                        budgetDigits.length - 1
                    ].focus();

                }

            }
        );

    }
);


/* =========================================================
   OUTILS FORMULAIRE
   ========================================================= */

function getValue(id) {

    const element =
        document.getElementById(id);

    if (!element) {
        return "";
    }

    return element.value.trim();
}


function getFastDeliveryValue() {

    const selected =
        document.querySelector(
            'input[name="fastDelivery"]:checked'
        );

    return selected
        ? selected.value
        : "";
}


function isPhoneValid(phone) {

    const cleanedPhone =
        phone.replace(
            /[\s().-]/g,
            ""
        );

    return /^\+?[0-9]{8,15}$/
        .test(cleanedPhone);
}


/* =========================================================
   MESSAGE WHATSAPP
   ========================================================= */

function buildWhatsAppMessage(data) {

    const dictionary =
        translations[currentLanguage];

    const separator =
        "━━━━━━━━━━━━━━━━━━";


    return [

        dictionary.whatsappTitle,

        separator,

        dictionary.whatsappClient,

        `${dictionary.whatsappLastName} : ${data.lastName}`,

        `${dictionary.whatsappFirstName} : ${data.firstName}`,

        "",

        dictionary.whatsappContact,

        `${dictionary.whatsappPhone} : ${data.phone}`,

        "",

        dictionary.whatsappVehicle,

        `${dictionary.whatsappCar} : ${data.car}`,

        `${dictionary.whatsappVehicleState} : ${data.vehicleState}`,

        ...(data.mileage
            ? [
                `${dictionary.whatsappMileage} : ${data.mileage}`
            ]
            : []),

        ...(data.paintState
            ? [
                `${dictionary.whatsappPaintState} : ${data.paintState}`
            ]
            : []),

        `${dictionary.whatsappColor} : ${data.color}`,

        ...(data.budget
            ? [
                `${dictionary.whatsappBudget} : ${data.budget} ${dictionary.million}`
            ]
            : []),

        "",

        dictionary.whatsappLogistics,

        `${dictionary.whatsappPort} : ${data.port}`,

        `${dictionary.whatsappFastDelivery} : ${data.fastDelivery}`,

        "",

        separator,

        dictionary.whatsappFooter

    ].join("\n");
}


/* =========================================================
   ENVOI DU FORMULAIRE
   ========================================================= */

if (vehicleForm) {

    vehicleForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            /* -------------------------
               VOITURE
               ------------------------- */

            const selectedCar =
                getValue("car");

            const otherCar =
                getValue("otherCar");


            const finalCar =
                selectedCar === "Autre"
                    ? (
                        otherCar
                            ? `Autre : ${otherCar}`
                            : ""
                    )
                    : selectedCar;


            /* -------------------------
               DONNÉES
               ------------------------- */

            const data = {

                lastName:
                    getValue("lastName"),

                firstName:
                    getValue("firstName"),

                phone:
                    getValue("phone"),

                car:
                    finalCar,

                vehicleState:
                    getValue("vehicleState"),

                mileage:
                    getValue("mileage"),

                paintState:
                    getValue("paintState"),

                color:
                    getValue("color"),

                port:
                    getValue("port"),

                budget:
                    getValue("budget"),

                fastDelivery:
                    getFastDeliveryValue()

            };


            /* -------------------------
   VALIDATION
   ------------------------- */

const baseComplete =

    data.lastName &&
    data.firstName &&
    data.phone &&
    data.car &&
    data.vehicleState &&
    data.color &&
    data.port &&
    data.fastDelivery;


const conditionalComplete =

    data.vehicleState ===
    "Véhicule de moins de 3 ans"

        ? (
            data.mileage &&
            data.paintState
        )

        : true;


const budgetComplete =
    /^\d{3}$/.test(data.budget);


/* -------------------------
   FOCUS AUTOMATIQUE
   ------------------------- */

function focusField(element) {

    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    setTimeout(() => {

        element.focus();

        /* Pour les champs texte :
           placer le curseur à la fin */

        if (
            typeof element.setSelectionRange ===
            "function"
        ) {

            const length =
                element.value.length;

            element.setSelectionRange(
                length,
                length
            );

        }

    }, 400);
}


/* -------------------------
   CHAMPS OBLIGATOIRES
   ------------------------- */

if (!data.lastName) {

    focusField(
        document.getElementById("lastName")
    );

    showNotification(
        translations[currentLanguage]
            .notificationError
    );

    return;
}


if (!data.firstName) {

    focusField(
        document.getElementById("firstName")
    );

    showNotification(
        translations[currentLanguage]
            .notificationError
    );

    return;
}


if (!data.phone) {

    focusField(
        document.getElementById("phone")
    );

    showNotification(
        translations[currentLanguage]
            .notificationError
    );

    return;
}


if (!data.car) {

    if (
        carSelect &&
        carSelect.value === "Autre"
    ) {

        focusField(otherCarInput);

    } else {

        focusField(carSelect);

    }

    showNotification(
        translations[currentLanguage]
            .notificationError
    );

    return;
}


if (!data.vehicleState) {

    focusField(vehicleStateSelect);

    showNotification(
        translations[currentLanguage]
            .notificationError
    );

    return;
}


/* -------------------------
   VÉHICULE DE MOINS DE 3 ANS
   ------------------------- */

if (
    data.vehicleState ===
    "Véhicule de moins de 3 ans"
) {

    if (!data.mileage) {

        focusField(mileageSelect);

        showNotification(
            translations[currentLanguage]
                .notificationError
        );

        return;
    }


    if (!data.paintState) {

        focusField(paintStateSelect);

        showNotification(
            translations[currentLanguage]
                .notificationError
        );

        return;
    }

}


/* -------------------------
   COULEUR
   ------------------------- */

if (!data.color) {

    focusField(
        document.getElementById("color")
    );

    showNotification(
        translations[currentLanguage]
            .notificationError
    );

    return;
}


/* -------------------------
   PORT
   ------------------------- */

if (!data.port) {

    focusField(
        document.getElementById("port")
    );

    showNotification(
        translations[currentLanguage]
            .notificationError
    );

    return;
}


/* -------------------------
   BUDGET
   ------------------------- */

if (!budgetComplete) {

    const firstEmptyBudget =
        Array.from(budgetDigits)
            .find(
                input => !input.value
            );


    focusField(
        firstEmptyBudget ||
        budgetDigits[0]
    );

    showNotification(
        translations[currentLanguage]
            .notificationError
    );

    return;
}


/* -------------------------
   LIVRAISON
   ------------------------- */

if (!data.fastDelivery) {

    const deliveryOption =
        document.querySelector(
            'input[name="fastDelivery"]'
        );

    focusField(deliveryOption);

    showNotification(
        translations[currentLanguage]
            .notificationError
    );

    return;
}

            /* -------------------------
               TÉLÉPHONE
               ------------------------- */

            if (
    !isPhoneValid(
        data.phone
    )
) {

    const phoneField =
        document.getElementById("phone");

    focusField(phoneField);

    showNotification(
        translations[currentLanguage]
            .notificationPhone
    );

    return;
}


            /* -------------------------
               WHATSAPP
               ------------------------- */

            if (
                !WHATSAPP_NUMBER ||
                WHATSAPP_NUMBER.includes(
                    "XXXXXXXX"
                )
            ) {

                showNotification(
                    "⚠️ Configurez d'abord le numéro WhatsApp dans script.js."
                );

                return;
            }


            const whatsappMessage =
                buildWhatsAppMessage(data);


            const whatsappURL =
    `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
        whatsappMessage
    )}`;


            /* -------------------------
               GOOGLE SHEETS
               ------------------------- */

            try {

                navigator.sendBeacon(

                    GOOGLE_SHEET_URL,

                    new Blob(
                        [
                            JSON.stringify(data)
                        ],
                        {
                            type:
                                "text/plain;charset=UTF-8"
                        }
                    )

                );

            } catch (error) {

                console.warn(
                    "Google Sheets sendBeacon error:",
                    error
                );

            }


            /* -------------------------
   CONFIRMATION
   ------------------------- */

const successOverlay =
    document.getElementById("successOverlay");

if (successOverlay) {

    successOverlay.classList.add("show");

    successOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* -------------------------
   OUVERTURE WHATSAPP
   ------------------------- */

setTimeout(
    () => {

        window.location.href =
            whatsappURL;

    },
    2000
);

        }
    );

}


/* =========================================================
   INITIALISATION
   ========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}

applyTheme(currentTheme);

translatePage(currentLanguage);

updateConditionalFields();


/* =========================================================
   ANIMATION FOCUS INPUTS
   ========================================================= */

document
    .querySelectorAll(
        ".form-group input"
    )
    .forEach((input) => {

        input.addEventListener(
            "focus",
            () => {

                input
                    .closest(".form-group")
                    ?.classList.add(
                        "is-focused"
                    );

            }
        );


        input.addEventListener(
            "blur",
            () => {

                input
                    .closest(".form-group")
                    ?.classList.remove(
                        "is-focused"
                    );

            }
        );

    });