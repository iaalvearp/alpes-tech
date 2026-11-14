/**
 * brief-content.ts — Textos del Brief en español e inglés.
 * Las claves coinciden exactamente con src/data/brief-schema.ts.
 */

export type Lang = "es" | "en";

export interface BriefOption {
  key: string;
  label: string;
}

export interface BriefShowIf {
  field: string;
  equals?: string;
  notEquals?: string;
}

interface BaseQuestion {
  key: string;
  label: string;
  showIf?: BriefShowIf;
  hint?: string;
}

export interface BriefTextQuestion extends BaseQuestion {
  type: "text" | "textarea" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
}

export interface BriefChoiceQuestion extends BaseQuestion {
  type: "single" | "multi";
  options: BriefOption[];
}

export type BriefQuestion = BriefTextQuestion | BriefChoiceQuestion;

export interface BriefStep {
  title: string;
  intro?: string;
  questions: BriefQuestion[];
}

export interface BriefContent {
  eyebrow: string;
  heading: string;
  subtitle: string;
  progress: string;
  back: string;
  next: string;
  submit: string;
  sending: string;
  successTitle: string;
  successText: string;
  errorText: string;
  consentLabel: string;
  requiredError: string;
  emailError: string;
  emailSuggestion: string;
  consentError: string;
  otherFields: Record<
    string,
    { label: string; placeholder: string; error: string }
  >;
  countryPlaceholder: string;
  countryListLabel: string;
  countrySuggestion: string;
  phoneCountryLabel: string;
  phoneEcError: string;
  phoneLengthError: string;
  steps: BriefStep[];
}

const es: BriefContent = {
  eyebrow: "Brief",
  heading: "Cuéntanos tu proyecto",
  subtitle:
    "Unas preguntas rápidas para entender lo que necesitas. Te tomará unos 5 minutos.",
  progress: "Paso {current} de {total}",
  back: "Atrás",
  next: "Siguiente",
  submit: "Enviar",
  sending: "Enviando...",
  successTitle: "¡Gracias!",
  successText: "Revisaremos tu información y te contactaremos pronto.",
  errorText:
    "No pudimos enviar tus respuestas. Revisa tu conexión e inténtalo de nuevo.",
  consentLabel:
    "Acepto que usen mis datos solo para contactarme sobre este proyecto.",
  requiredError: "Este campo es obligatorio.",
  emailError: "Escribe un correo válido.",
  emailSuggestion: "¿Quisiste decir {email}?",
  consentError: "Debes aceptar para que podamos contactarte.",
  otherFields: {
    objetivos: {
      label: "Otro objetivo",
      placeholder: "Cuéntanos cuál otro objetivo tienes",
      error: "Cuéntanos cuál para poder ayudarte",
    },
    idiomas: {
      label: "Otro idioma",
      placeholder: "¿Qué otro idioma necesitas?",
      error: "Cuéntanos cuál para poder ayudarte",
    },
  },
  countryPlaceholder: "Escribe tu país",
  countryListLabel: "Países",
  countrySuggestion: "¿Quisiste decir {country}?",
  phoneCountryLabel: "País del WhatsApp",
  phoneEcError:
    "Escribe un celular ecuatoriano válido, por ejemplo 0991234567",
  phoneLengthError: "Revisa el número: debe tener entre 6 y 15 dígitos",
  steps: [
    {
      title: "Cuéntanos de tu empresa",
      questions: [
        { key: "nombre", type: "text", label: "Tu nombre", required: true },
        {
          key: "empresa",
          type: "text",
          label: "Nombre de tu empresa",
          required: true,
        },
        { key: "correo", type: "email", label: "Correo", required: true },
        {
          key: "whatsapp",
          type: "tel",
          label: "WhatsApp (con código de país, ej. +593...)",
          placeholder: "+593...",
        },
        { key: "ciudad", type: "text", label: "Ciudad" },
        { key: "pais", type: "text", label: "País" },
        {
          key: "actividad",
          type: "textarea",
          label: "¿A qué se dedica tu empresa? (en una frase)",
        },
        {
          key: "compradores",
          type: "multi",
          label: "¿Quién te compra?",
          options: [
            { key: "empresas", label: "Otras empresas" },
            { key: "personas", label: "Personas o público en general" },
            { key: "exterior", label: "Compradores de otros países" },
            { key: "no_se", label: "Aún no lo sé" },
          ],
        },
      ],
    },
    {
      title: "¿Qué quieres lograr con tu web?",
      questions: [
        {
          key: "objetivos",
          type: "multi",
          label: "Elige tus objetivos",
          hint: "Marca todos los que apliquen",
          options: [
            { key: "encontrarme", label: "Que me encuentren en Google" },
            { key: "mostrar", label: "Mostrar mis productos o servicios" },
            { key: "cotizaciones", label: "Recibir pedidos de cotización" },
            { key: "confianza", label: "Verme profesional y generar confianza" },
            { key: "vender", label: "Vender en línea" },
            { key: "otro", label: "Otro" },
          ],
        },
        {
          key: "tiene_web",
          type: "single",
          label: "¿Ya tienes web?",
          options: [
            { key: "no", label: "No tengo web" },
            { key: "renovar", label: "Tengo una y quiero renovarla" },
            {
              key: "distinta",
              label: "Tengo una y quiero una totalmente distinta",
            },
          ],
        },
        {
          key: "web_actual_url",
          type: "text",
          label: "Enlace de tu web actual",
          placeholder: "https://...",
          showIf: { field: "tiene_web", notEquals: "no" },
        },
      ],
    },
    {
      title: "¿Qué debe tener tu web?",
      questions: [
        {
          key: "funciones",
          type: "multi",
          label: "Selecciona las funciones que necesitas",
          options: [
            { key: "quienes_somos", label: "Quiénes somos" },
            { key: "catalogo", label: "Catálogo de productos" },
            { key: "servicios", label: "Servicios" },
            { key: "galeria", label: "Galería de fotos" },
            { key: "video", label: "Video de la empresa" },
            {
              key: "certificaciones",
              label: "Certificaciones y sellos de calidad",
            },
            { key: "mapa_mercados", label: "Mapa de países a los que vendo" },
            { key: "noticias", label: "Noticias o blog" },
            { key: "contacto_mapa", label: "Contacto con mapa" },
            { key: "whatsapp_boton", label: "Botón de WhatsApp" },
            {
              key: "formulario_cotizacion",
              label: "Formulario para que me pidan cotización",
            },
            {
              key: "catalogo_descargable",
              label: "Catálogo descargable (PDF)",
            },
          ],
        },
        {
          key: "idiomas",
          type: "single",
          label: "¿En qué idiomas?",
          options: [
            { key: "es", label: "Solo español" },
            { key: "es_en", label: "Español e inglés" },
            { key: "otro", label: "Otro idioma" },
          ],
        },
        {
          key: "volumen",
          type: "single",
          label: "¿Cuántos productos o servicios quieres mostrar?",
          options: [
            { key: "pocos", label: "Pocos (hasta 10)" },
            { key: "varios", label: "Varios (de 10 a 50)" },
            { key: "muchos", label: "Muchos (más de 50)" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "materiales",
          type: "single",
          label: "¿Tienes logo, fotos y textos listos?",
          options: [
            { key: "todo", label: "Todo listo" },
            { key: "algunos", label: "Tengo algunos" },
            { key: "nada", label: "No tengo y necesito ayuda" },
          ],
        },
      ],
    },
    {
      title: "Estilo y tiempos",
      questions: [
        {
          key: "estilo",
          type: "single",
          label: "¿Qué estilo te gusta?",
          options: [
            { key: "corporativo", label: "Serio y corporativo" },
            { key: "moderno", label: "Moderno" },
            { key: "calido", label: "Cálido y cercano" },
            { key: "elegante", label: "Elegante" },
            { key: "no_se", label: "No estoy seguro" },
          ],
        },
        {
          key: "referencias",
          type: "textarea",
          label: "Enlaces de webs que te gusten (opcional)",
          placeholder: "https://...",
        },
        {
          key: "plazo",
          type: "single",
          label: "¿Para cuándo la necesitas?",
          options: [
            { key: "urgente", label: "Lo antes posible" },
            { key: "un_mes", label: "En 1 mes" },
            { key: "dos_tres_meses", label: "En 2 o 3 meses" },
            { key: "sin_apuro", label: "Sin apuro" },
          ],
        },
        {
          key: "mantenimiento",
          type: "single",
          label:
            "¿Quieres que nos encarguemos también de los cambios y el mantenimiento después?",
          options: [
            { key: "si", label: "Sí, que ustedes se encarguen" },
            { key: "no", label: "No, yo me encargo" },
            { key: "no_se", label: "No sé" },
          ],
        },
      ],
    },
    {
      title: "Tu web y tu correo de hoy",
      intro:
        "Estas preguntas nos ayudan a evitar sorpresas. Si no sabes, marca 'No sé' y nosotros lo averiguamos.",
      questions: [
        {
          key: "dominio_tiene",
          type: "single",
          label:
            "¿Tu empresa tiene dominio? (la dirección de internet, como tuempresa.com)",
          options: [
            { key: "si", label: "Sí" },
            { key: "no", label: "No" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "dominio_nombre",
          type: "text",
          label: "¿Cuál es?",
          placeholder: "tuempresa.com",
          showIf: { field: "dominio_tiene", equals: "si" },
        },
        {
          key: "dominio_quien",
          type: "single",
          label: "¿Quién lo compró y tiene la clave?",
          showIf: { field: "dominio_tiene", equals: "si" },
          options: [
            { key: "empresa", label: "Yo o alguien de mi empresa" },
            { key: "proveedor", label: "Un proveedor externo" },
            { key: "tercero", label: "Un familiar o amigo" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "web_ubicacion",
          type: "single",
          label: "¿Dónde está hoy tu web?",
          showIf: { field: "tiene_web", notEquals: "no" },
          options: [
            {
              key: "hosting",
              label: "En un proveedor de hosting (GoDaddy, Hostinger u otro)",
            },
            { key: "servidor_propio", label: "En un servidor de mi empresa" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "servidor",
          type: "single",
          label:
            "¿Tu empresa tiene un servidor propio o contratado? (un computador siempre encendido que guarda sistemas o archivos)",
          options: [
            { key: "propio", label: "Sí, uno propio dentro de la empresa" },
            { key: "alquilado", label: "Sí, alquilado en internet (VPS)" },
            { key: "no", label: "No" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "soporte_ti",
          type: "single",
          label:
            "¿Tienen una persona o empresa que les cuide los sistemas de computación?",
          options: [
            { key: "interno", label: "Sí, una persona de mi empresa" },
            { key: "externo", label: "Sí, un proveedor externo" },
            { key: "no", label: "No" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "correo_dominio",
          type: "single",
          label:
            "¿Usas correos con el nombre de tu empresa? (nombre@tuempresa.com)",
          options: [
            { key: "si", label: "Sí" },
            { key: "no", label: "No" },
          ],
        },
        {
          key: "correo_servicio",
          type: "single",
          label: "¿Con qué servicio?",
          showIf: { field: "correo_dominio", equals: "si" },
          options: [
            { key: "google", label: "Google (Gmail con mi dominio)" },
            { key: "microsoft", label: "Microsoft (Outlook u Office)" },
            { key: "hosting", label: "El de mi proveedor de hosting" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "sistema_interno",
          type: "single",
          label:
            "¿Usas algún sistema propio para inventario, facturación o pedidos?",
          options: [
            { key: "si", label: "Sí" },
            { key: "no", label: "No" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "sistema_interno_detalle",
          type: "text",
          label: "¿Cuál?",
          showIf: { field: "sistema_interno", equals: "si" },
        },
        {
          key: "google_aparece",
          type: "single",
          label:
            "¿Tu web actual aparece en Google cuando buscan tu empresa?",
          showIf: { field: "tiene_web", notEquals: "no" },
          options: [
            { key: "primero", label: "Sí, en los primeros lugares" },
            { key: "abajo", label: "Sí, pero más abajo" },
            { key: "no_aparece", label: "No aparece" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "caida_tolerancia",
          type: "single",
          label:
            "¿Te preocupa que la web esté apagada unas horas durante el cambio?",
          showIf: { field: "tiene_web", notEquals: "no" },
          options: [
            { key: "no_puede", label: "Sí, no puede apagarse" },
            { key: "unas_horas", label: "Unas horas no importan" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "quien_actualiza",
          type: "single",
          label:
            "¿Quién va a actualizar la web después? (productos, fotos, noticias)",
          options: [
            { key: "empresa", label: "Alguien de mi empresa" },
            { key: "ustedes", label: "Prefiero que lo hagan ustedes" },
            { key: "no_se", label: "No sé" },
          ],
        },
        {
          key: "redes",
          type: "single",
          label: "¿Tienes redes sociales o Google Business?",
          options: [
            { key: "si", label: "Sí" },
            { key: "algunas", label: "Algunas" },
            { key: "no", label: "No" },
          ],
        },
        {
          key: "redes_texto",
          type: "text",
          label: "Enlaces (opcional)",
          placeholder: "https://...",
          showIf: { field: "redes", notEquals: "no" },
        },
      ],
    },
    {
      title: "Último detalle",
      questions: [
        {
          key: "notas",
          type: "textarea",
          label: "Cuéntanos algo más (opcional)",
        },
      ],
    },
  ],
};

const en: BriefContent = {
  eyebrow: "Brief",
  heading: "Tell us about your project",
  subtitle:
    "A few quick questions so we can understand what you need. It takes about 5 minutes.",
  progress: "Step {current} of {total}",
  back: "Back",
  next: "Next",
  submit: "Send",
  sending: "Sending...",
  successTitle: "Thank you!",
  successText: "We'll review your information and contact you soon.",
  errorText:
    "We couldn't send your answers. Please check your connection and try again.",
  consentLabel:
    "I agree that my data will be used only to contact me about this project.",
  requiredError: "This field is required.",
  emailError: "Enter a valid email address.",
  emailSuggestion: "Did you mean {email}?",
  consentError: "You need to accept so we can contact you.",
  otherFields: {
    objetivos: {
      label: "Other goal",
      placeholder: "Tell us what other goal you have",
      error: "Tell us which one so we can help you",
    },
    idiomas: {
      label: "Other language",
      placeholder: "Which other language do you need?",
      error: "Tell us which one so we can help you",
    },
  },
  countryPlaceholder: "Type your country",
  countryListLabel: "Countries",
  countrySuggestion: "Did you mean {country}?",
  phoneCountryLabel: "WhatsApp country",
  phoneEcError:
    "Enter a valid Ecuadorian mobile number, for example 0991234567",
  phoneLengthError: "Check the number: it must have between 6 and 15 digits",
  steps: [
    {
      title: "Tell us about your company",
      questions: [
        { key: "nombre", type: "text", label: "Your name", required: true },
        {
          key: "empresa",
          type: "text",
          label: "Your company name",
          required: true,
        },
        { key: "correo", type: "email", label: "Email", required: true },
        {
          key: "whatsapp",
          type: "tel",
          label: "WhatsApp (with country code, e.g. +593...)",
          placeholder: "+593...",
        },
        { key: "ciudad", type: "text", label: "City" },
        { key: "pais", type: "text", label: "Country" },
        {
          key: "actividad",
          type: "textarea",
          label: "What does your company do? (in one sentence)",
        },
        {
          key: "compradores",
          type: "multi",
          label: "Who buys from you?",
          options: [
            { key: "empresas", label: "Other businesses" },
            { key: "personas", label: "People or the general public" },
            { key: "exterior", label: "Buyers from other countries" },
            { key: "no_se", label: "I don't know yet" },
          ],
        },
      ],
    },
    {
      title: "What do you want to achieve with your website?",
      questions: [
        {
          key: "objetivos",
          type: "multi",
          label: "Choose your goals",
          hint: "Select all that apply",
          options: [
            { key: "encontrarme", label: "Show up on Google" },
            { key: "mostrar", label: "Show my products or services" },
            { key: "cotizaciones", label: "Receive quote requests" },
            { key: "confianza", label: "Look professional and build trust" },
            { key: "vender", label: "Sell online" },
            { key: "otro", label: "Other" },
          ],
        },
        {
          key: "tiene_web",
          type: "single",
          label: "Do you already have a website?",
          options: [
            { key: "no", label: "I don't have one" },
            { key: "renovar", label: "I have one and want to renew it" },
            {
              key: "distinta",
              label: "I have one and want a completely different one",
            },
          ],
        },
        {
          key: "web_actual_url",
          type: "text",
          label: "Link to your current website",
          placeholder: "https://...",
          showIf: { field: "tiene_web", notEquals: "no" },
        },
      ],
    },
    {
      title: "What should your website include?",
      questions: [
        {
          key: "funciones",
          type: "multi",
          label: "Select the features you need",
          options: [
            { key: "quienes_somos", label: "About us" },
            { key: "catalogo", label: "Product catalog" },
            { key: "servicios", label: "Services" },
            { key: "galeria", label: "Photo gallery" },
            { key: "video", label: "Company video" },
            { key: "certificaciones", label: "Certifications and quality seals" },
            { key: "mapa_mercados", label: "Map of the countries I sell to" },
            { key: "noticias", label: "News or blog" },
            { key: "contacto_mapa", label: "Contact with map" },
            { key: "whatsapp_boton", label: "WhatsApp button" },
            {
              key: "formulario_cotizacion",
              label: "Form so customers can request a quote",
            },
            { key: "catalogo_descargable", label: "Downloadable catalog (PDF)" },
          ],
        },
        {
          key: "idiomas",
          type: "single",
          label: "In which languages?",
          options: [
            { key: "es", label: "Spanish only" },
            { key: "es_en", label: "Spanish and English" },
            { key: "otro", label: "Another language" },
          ],
        },
        {
          key: "volumen",
          type: "single",
          label: "How many products or services do you want to show?",
          options: [
            { key: "pocos", label: "A few (up to 10)" },
            { key: "varios", label: "Several (10 to 50)" },
            { key: "muchos", label: "Many (more than 50)" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "materiales",
          type: "single",
          label: "Do you have your logo, photos and texts ready?",
          options: [
            { key: "todo", label: "Everything is ready" },
            { key: "algunos", label: "I have some of it" },
            { key: "nada", label: "I don't have it and need help" },
          ],
        },
      ],
    },
    {
      title: "Style and timing",
      questions: [
        {
          key: "estilo",
          type: "single",
          label: "What style do you like?",
          options: [
            { key: "corporativo", label: "Serious and corporate" },
            { key: "moderno", label: "Modern" },
            { key: "calido", label: "Warm and friendly" },
            { key: "elegante", label: "Elegant" },
            { key: "no_se", label: "I'm not sure" },
          ],
        },
        {
          key: "referencias",
          type: "textarea",
          label: "Links to websites you like (optional)",
          placeholder: "https://...",
        },
        {
          key: "plazo",
          type: "single",
          label: "When do you need it?",
          options: [
            { key: "urgente", label: "As soon as possible" },
            { key: "un_mes", label: "In 1 month" },
            { key: "dos_tres_meses", label: "In 2 or 3 months" },
            { key: "sin_apuro", label: "No rush" },
          ],
        },
        {
          key: "mantenimiento",
          type: "single",
          label:
            "Would you like us to also handle changes and maintenance afterwards?",
          options: [
            { key: "si", label: "Yes, let your team handle it" },
            { key: "no", label: "No, I'll handle it myself" },
            { key: "no_se", label: "I don't know" },
          ],
        },
      ],
    },
    {
      title: "Your current website and email",
      intro:
        "These questions help us avoid surprises. If you don't know, mark 'I don't know' and we'll find out for you.",
      questions: [
        {
          key: "dominio_tiene",
          type: "single",
          label:
            "Does your company have a domain? (the internet address, like yourcompany.com)",
          options: [
            { key: "si", label: "Yes" },
            { key: "no", label: "No" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "dominio_nombre",
          type: "text",
          label: "What is it?",
          placeholder: "yourcompany.com",
          showIf: { field: "dominio_tiene", equals: "si" },
        },
        {
          key: "dominio_quien",
          type: "single",
          label: "Who bought it and has the password?",
          showIf: { field: "dominio_tiene", equals: "si" },
          options: [
            { key: "empresa", label: "Me or someone at my company" },
            { key: "proveedor", label: "An external provider" },
            { key: "tercero", label: "A relative or friend" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "web_ubicacion",
          type: "single",
          label: "Where is your website hosted today?",
          showIf: { field: "tiene_web", notEquals: "no" },
          options: [
            {
              key: "hosting",
              label: "With a hosting provider (GoDaddy, Hostinger or another)",
            },
            { key: "servidor_propio", label: "On a company server" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "servidor",
          type: "single",
          label:
            "Does your company have its own or rented server? (a computer that stays on and stores systems or files)",
          options: [
            { key: "propio", label: "Yes, one inside the company" },
            { key: "alquilado", label: "Yes, rented online (VPS)" },
            { key: "no", label: "No" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "soporte_ti",
          type: "single",
          label:
            "Do you have a person or company that takes care of your computer systems?",
          options: [
            { key: "interno", label: "Yes, someone at my company" },
            { key: "externo", label: "Yes, an external provider" },
            { key: "no", label: "No" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "correo_dominio",
          type: "single",
          label:
            "Do you use email addresses with your company name? (name@yourcompany.com)",
          options: [
            { key: "si", label: "Yes" },
            { key: "no", label: "No" },
          ],
        },
        {
          key: "correo_servicio",
          type: "single",
          label: "Which service?",
          showIf: { field: "correo_dominio", equals: "si" },
          options: [
            { key: "google", label: "Google (Gmail with my domain)" },
            { key: "microsoft", label: "Microsoft (Outlook or Office)" },
            { key: "hosting", label: "My hosting provider's service" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "sistema_interno",
          type: "single",
          label:
            "Do you use your own system for inventory, invoicing or orders?",
          options: [
            { key: "si", label: "Yes" },
            { key: "no", label: "No" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "sistema_interno_detalle",
          type: "text",
          label: "Which one?",
          showIf: { field: "sistema_interno", equals: "si" },
        },
        {
          key: "google_aparece",
          type: "single",
          label:
            "Does your current website show up on Google when people search for your company?",
          showIf: { field: "tiene_web", notEquals: "no" },
          options: [
            { key: "primero", label: "Yes, in the top results" },
            { key: "abajo", label: "Yes, but further down" },
            { key: "no_aparece", label: "It doesn't show up" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "caida_tolerancia",
          type: "single",
          label:
            "Are you worried about the website being down for a few hours during the switch?",
          showIf: { field: "tiene_web", notEquals: "no" },
          options: [
            { key: "no_puede", label: "Yes, it cannot go down" },
            { key: "unas_horas", label: "A few hours are fine" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "quien_actualiza",
          type: "single",
          label:
            "Who will update the website afterwards? (products, photos, news)",
          options: [
            { key: "empresa", label: "Someone at my company" },
            { key: "ustedes", label: "I'd rather you handle it" },
            { key: "no_se", label: "I don't know" },
          ],
        },
        {
          key: "redes",
          type: "single",
          label: "Do you have social media or Google Business?",
          options: [
            { key: "si", label: "Yes" },
            { key: "algunas", label: "Some" },
            { key: "no", label: "No" },
          ],
        },
        {
          key: "redes_texto",
          type: "text",
          label: "Links (optional)",
          placeholder: "https://...",
          showIf: { field: "redes", notEquals: "no" },
        },
      ],
    },
    {
      title: "One last detail",
      questions: [
        {
          key: "notas",
          type: "textarea",
          label: "Tell us anything else (optional)",
        },
      ],
    },
  ],
};

export const briefContent: Record<Lang, BriefContent> = { es, en };
