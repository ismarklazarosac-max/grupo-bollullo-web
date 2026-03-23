// =============================================================================
// Grupo Bollullo - Configuration
// =============================================================================
// Configuración completa del sitio web de Grupo Bollullo Restauración
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Grupo Bollullo | Restauración Premium en Tenerife",
  description: "Descubre la excelencia gastronómica canaria en Grupo Bollullo. Tres locales únicos: Mirador San Pedro, Bollullo Oasis y Bollullo Chiringuito. Experiencias culinarias inolvidables en Tenerife.",
  language: "es",
  keywords: "restaurantes Tenerife, gastronomía canaria, Grupo Bollullo, Mirador San Pedro, Bollullo Oasis, Bollullo Chiringuito, comida canaria, restaurantes Los Realejos, restaurantes Candelaria, restaurantes La Orotava",
  ogImage: "/images/hero-banner.webp",
  canonical: "https://grupobollullo.es",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Grupo",
  brandSubname: "Bollullo",
  tagline: "Restauración",
  navLinks: [
    {
      name: "Inicio",
      href: "/",
      icon: "Home",
    },
    {
      name: "Locales",
      href: "#locales",
      icon: "Grape",
      dropdown: [
        { name: "Mirador San Pedro", href: "/locales/mirador-san-pedro" },
        { name: "Bollullo Oasis", href: "/locales/bollullo-oasis" },
        { name: "Bollullo Chiringuito", href: "/locales/bollullo-chiringuito" },
      ],
    },
    {
      name: "Cartas",
      href: "#cartas",
      icon: "BookOpen",
      dropdown: [
        { name: "Carta Mirador", href: "/cartas/mirador" },
        { name: "Carta Oasis", href: "/cartas/oasis" },
        { name: "Carta Chiringuito", href: "/cartas/chiringuito" },
      ],
    },
    {
      name: "Brunch",
      href: "#brunch",
      icon: "Users",
      dropdown: [
        { name: "Brunch Mirador", href: "/brunch/mirador" },
        { name: "Brunch Oasis", href: "/brunch/oasis" },
      ],
    },
    {
      name: "Eventos",
      href: "/eventos",
      icon: "Newspaper",
    },
  ],
  ctaButtonText: "Reservar",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "Grupo",
  brandSubname: "Bollullo",
  yearText: "Desde 2010",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Experiencia Gastronómica Canaria",
  mainTitle: "Sabores del Atlántico\nen Tenerife",
  ctaButtonText: "Descubre Nuestros Locales",
  ctaTarget: "#locales",
  stats: [
    { value: 3, suffix: "", label: "Restaurantes" },
    { value: 15, suffix: "+", label: "Años de Experiencia" },
    { value: 50, suffix: "K+", label: "Clientes Satisfechos" },
  ],
  decorativeText: "GASTRONOMÍA CANARIA",
  backgroundImage: "/images/hero-banner.webp",
};

// -----------------------------------------------------------------------------
// Wine Showcase Config - Adaptado para Platos/Experiencias
// -----------------------------------------------------------------------------
export interface Wine {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface WineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WineQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface WineShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Wine[];
  features: WineFeature[];
  quote: WineQuote;
}

export const wineShowcaseConfig: WineShowcaseConfig = {
  scriptText: "Nuestra Propuesta",
  subtitle: "EXPERIENCIAS CULINARIAS",
  mainTitle: "Sabores que Cuentan Historias",
  wines: [
    {
      id: "tradicion",
      name: "Cocina",
      subtitle: "Tradicional Canaria",
      year: "",
      image: "/images/plato-gourmet-1.webp",
      filter: "",
      glowColor: "bg-amber-600/20",
      description: "Recetas auténticas transmitidas de generación en generación, elaboradas con ingredientes locales de primera calidad.",
      tastingNotes: "Papas arrugadas con mojo, gofio escaldado, y más delicias de la gastronomía canaria.",
      alcohol: "",
      temperature: "Servido caliente",
      aging: "Receta tradicional",
    },
    {
      id: "pescado",
      name: "Pescado",
      subtitle: "Fresco del Atlántico",
      year: "",
      image: "/images/plato-gourmet-2.webp",
      filter: "",
      glowColor: "bg-blue-500/20",
      description: "Pescado fresco traído diariamente de las costas de Tenerife, preparado con técnicas que respetan su sabor natural.",
      tastingNotes: "Lubina, vieja, cherne y más especies locales cocinadas a la plancha o en salsa.",
      alcohol: "",
      temperature: "Servido caliente",
      aging: "Del mar a la mesa",
    },
    {
      id: "carne",
      name: "Carnes",
      subtitle: "Selectas y Tiernas",
      year: "",
      image: "/images/plato-gourmet-3.webp",
      filter: "",
      glowColor: "bg-red-800/20",
      description: "Cortes premium de carne local y nacional, madurados y cocinados a la perfección.",
      tastingNotes: "Solomillo, chuletón, conejo en salmorejo y especialidades de la casa.",
      alcohol: "",
      temperature: "A tu gusto",
      aging: "Selección premium",
    },
  ],
  features: [
    {
      icon: "Wine",
      title: "Ingredientes Locales",
      description: "Productos frescos de proveedores canarios",
    },
    {
      icon: "Thermometer",
      title: "Cocina al Momento",
      description: "Elaboración artesanal en el instante",
    },
    {
      icon: "Clock",
      title: "Tradición Familiar",
      description: "Recetas transmitidas generaciones",
    },
    {
      icon: "Sparkles",
      title: "Presentación Única",
      description: "Cada plato es una obra de arte",
    },
  ],
  quote: {
    text: "La cocina canaria es el alma de nuestra tierra, el mar y la montaña en cada bocado.",
    attribution: "Chef Ejecutivo",
    prefix: "",
  },
};

// -----------------------------------------------------------------------------
// Winery Carousel Config - Adaptado para Locales
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "Nuestros Espacios",
  subtitle: "TRES LOCALES ÚNICOS",
  mainTitle: "Descubre Cada Rincón",
  locationTag: "Tenerife, Islas Canarias",
  slides: [
    {
      image: "/images/locales/mirador/hero.webp",
      title: "Mirador",
      subtitle: "San Pedro",
      area: "Vistas",
      unit: "Panorámicas",
      description: "Ubicado en Los Realejos, ofrece vistas espectaculares al valle de La Orotava y al océano Atlántico. Un espacio donde la naturaleza y la gastronomía se fusionan.",
    },
    {
      image: "/images/locales/oasis/hero.webp",
      title: "Bollullo",
      subtitle: "Oasis",
      area: "Ambiente",
      unit: "Sofisticado",
      description: "En el corazón de Candelaria, un oasis de elegancia y sabor. Diseño contemporáneo que rinde homenaje a la tradición canaria.",
    },
    {
      image: "/images/locales/chiringuito/hero.webp",
      title: "Bollullo",
      subtitle: "Chiringuito",
      area: "Playa",
      unit: "Paradisíaca",
      description: "En La Orotava, a orillas del Atlántico. El lugar perfecto para disfrutar del sol, el mar y la mejor cocina de playa de Tenerife.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Museum Config - Adaptado para Historia/Grupo
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MuseumTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface MuseumTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: MuseumTabContent;
}

export interface MuseumQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface MuseumConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: MuseumTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: MuseumQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const museumConfig: MuseumConfig = {
  scriptText: "Nuestra Historia",
  subtitle: "RAÍCES CANARIAS",
  mainTitle: "Pasión por la Gastronomía",
  introText: "En el corazón del Atlántico, sobre la vibrante isla de Tenerife, se alza el Grupo Bollullo como un referente de la gastronomía canaria. Un lugar donde la tradición se encuentra con la modernidad.",
  timeline: [
    { year: "2010", event: "Apertura del primer restaurante" },
    { year: "2015", event: "Expansión con Bollullo Oasis" },
    { year: "2018", event: "Inauguración del Chiringuito" },
    { year: "2024", event: "Reconocimiento nacional" },
  ],
  tabs: [
    {
      id: "historia",
      name: "Historia",
      icon: "History",
      image: "/images/museum-tab1.webp",
      content: {
        title: "Un Sueño Familiar",
        description: "Lo que comenzó como un pequeño restaurante familiar se ha convertido en un grupo de referencia gastronómica en Tenerife.",
        highlight: "Más de 15 años de excelencia",
      },
    },
    {
      id: "cocina",
      name: "Cocina",
      icon: "BookOpen",
      image: "/images/museum-tab2.webp",
      content: {
        title: "Tradición y Vanguardia",
        description: "Nuestra cocina respeta las recetas tradicionales canarias mientras incorpora técnicas modernas.",
        highlight: "Ingredientes 100% locales",
      },
    },
    {
      id: "reconocimientos",
      name: "Premios",
      icon: "Award",
      image: "/images/museum-tab3.webp",
      content: {
        title: "Excelencia Reconocida",
        description: "Nuestro compromiso con la calidad nos ha valido reconocimientos en el ámbito gastronómico canario.",
        highlight: "Premios a la mejor cocina local",
      },
    },
  ],
  openingHours: "Consultar horarios por local",
  openingHoursLabel: "Horarios",
  ctaButtonText: "Conoce Nuestra Historia",
  yearBadge: "2010",
  yearBadgeLabel: "Fundado",
  quote: {
    prefix: "",
    text: "Cada plato es un tributo a nuestra tierra, un pedacito de Tenerife que llevamos a tu mesa.",
    attribution: "Fundadores",
  },
  founderPhotoAlt: "Fundadores de Grupo Bollullo",
  founderPhoto: "/images/museum-tab1.webp",
};

// -----------------------------------------------------------------------------
// News Config - Adaptado para Testimonios y Experiencias
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface NewsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const newsConfig: NewsConfig = {
  scriptText: "Experiencias",
  subtitle: "DESCUBRE MÁS",
  mainTitle: "Momentos Especiales",
  viewAllText: "Ver Todo",
  readMoreText: "Leer Más",
  articles: [
    {
      id: 1,
      image: "/images/brunch/mirador/hero.webp",
      title: "Brunch Dominical",
      excerpt: "Disfruta de nuestro exclusivo brunch los fines de semana con vistas panorámicas.",
      date: "Todos los domingos",
      category: "Experiencia",
    },
    {
      id: 2,
      image: "/images/eventos.webp",
      title: "Eventos Privados",
      excerpt: "Celebra tus momentos especiales en nuestros espacios únicos con catering personalizado.",
      date: "Bajo reserva",
      category: "Celebraciones",
    },
    {
      id: 3,
      image: "/images/coctel.webp",
      title: "Cócteles de Autor",
      excerpt: "Descubre nuestra carta de cócteles inspirados en los sabores de Canarias.",
      date: "Todos los días",
      category: "Bebidas",
    },
  ],
  testimonialsScriptText: "Opiniones",
  testimonialsSubtitle: "LO QUE DICEN NUESTROS CLIENTES",
  testimonialsMainTitle: "Experiencias Reales",
  testimonials: [
    {
      name: "María García",
      role: "Madrid",
      text: "Una experiencia gastronómica inolvidable. Las vistas desde el Mirador son espectaculares y la comida excepcional.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Tenerife",
      text: "El mejor lugar para disfrutar de la cocina canaria auténtica. El servicio es impecable y el ambiente único.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Barcelona",
      text: "Descubrimos el Chiringuito y nos encantó. Playa, buena comida y el mejor ambiente de Tenerife.",
      rating: 5,
    },
  ],
  storyScriptText: "Nuestra Filosofía",
  storySubtitle: "COMPROMISO CON LA CALIDAD",
  storyTitle: "De la Tierra a la Mesa",
  storyParagraphs: [
    "En Grupo Bollullo creemos en el poder de los ingredientes locales. Trabajamos directamente con productores de Tenerife para llevar a tu mesa lo mejor de nuestra tierra.",
    "Cada plato cuenta una historia de dedicación, pasión y respeto por la tradición culinaria canaria. Nuestros chefs combinan técnicas ancestrales con innovación creativa.",
  ],
  storyTimeline: [
    { value: "3", label: "Restaurantes" },
    { value: "50+", label: "Platos Únicos" },
    { value: "100%", label: "Compromiso" },
  ],
  storyQuote: {
    prefix: "",
    text: "La verdadera cocina canaria nace del respeto por nuestros productos y nuestra gente.",
    attribution: "Equipo Grupo Bollullo",
  },
  storyImage: "/images/slider03.webp",
  storyImageCaption: "Interior de nuestro restaurante",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Contacto",
  subtitle: "ESTAMOS AQUÍ PARA TI",
  mainTitle: "Haz tu Reserva",
  introText: "Reserva tu mesa o consulta cualquier duda. Nuestro equipo estará encantado de atenderte.",
  contactInfoTitle: "Información de Contacto",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Mirador San Pedro",
      value: "Mirador de San Pedro, 38419 Los Realejos",
      subtext: "Tenerife",
    },
    {
      icon: "Phone",
      label: "Teléfono",
      value: "+34 922 34 08 75",
      subtext: "Reservas",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "info@grupobollullo.es",
      subtext: "Consultas generales",
    },
    {
      icon: "Clock",
      label: "Horario",
      value: "Lunes a Domingo",
      subtext: "10:00 - 23:00",
    },
  ],
  form: {
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre completo",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    phoneLabel: "Teléfono",
    phonePlaceholder: "+34 600 000 000",
    visitDateLabel: "Fecha de visita",
    visitorsLabel: "Número de personas",
    visitorsOptions: ["1", "2", "3-5", "6-10", "10+"],
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntanos qué necesitas...",
    submitText: "Enviar Reserva",
    submittingText: "Enviando...",
    successMessage: "¡Gracias! Tu reserva ha sido enviada. Te contactaremos pronto.",
    errorMessage: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
  },
  privacyNotice: "Al enviar este formulario, aceptas nuestra política de privacidad.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "Grupo Bollullo",
  tagline: "Restauración",
  description: "Experiencia gastronómica canaria en tres ubicaciones únicas de Tenerife. Tradición, calidad y pasión en cada plato.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/grupobollullo" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/grupobollullo" },
  ],
  linkGroups: [
    {
      title: "Locales",
      links: [
        { name: "Mirador San Pedro", href: "/locales/mirador-san-pedro" },
        { name: "Bollullo Oasis", href: "/locales/bollullo-oasis" },
        { name: "Bollullo Chiringuito", href: "/locales/bollullo-chiringuito" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Aviso Legal", href: "/aviso-legal" },
        { name: "Política de Privacidad", href: "/privacidad" },
        { name: "Política de Cookies", href: "/cookies" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "Tenerife, Islas Canarias" },
    { icon: "Phone", text: "+34 922 34 08 75" },
    { icon: "Mail", text: "info@grupobollullo.es" },
  ],
  newsletterLabel: "Suscríbete a nuestra newsletter",
  newsletterPlaceholder: "Tu email",
  newsletterButtonText: "Suscribirse",
  newsletterSuccessText: "¡Gracias por suscribirte!",
  newsletterErrorText: "Ha ocurrido un error. Inténtalo de nuevo.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  copyrightText: "© 2024 Grupo Bollullo. Todos los derechos reservados.",
  legalLinks: ["Aviso Legal", "Privacidad", "Cookies"],
  icpText: "",
  backToTopText: "Volver arriba",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Volver arriba",
};

// -----------------------------------------------------------------------------
// Locales Config - Configuración específica para cada local
// -----------------------------------------------------------------------------

export interface LocalStoryBlock {
  label: string;
  heading: string;
  text: string;
  image: { src: string; alt: string };
}

export interface LocalInfo {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  address: string;
  phone: string;
  schedule: string;
  heroImage: string;
  features: string[];
  /** Storytelling editorial — apertura narrativa */
  storyHeadline?: string;
  storyHeadlineAccent?: string;
  storyIntro?: string;
  /** Bloques narrativos con imagen (mínimo 3 para layout completo) */
  story?: LocalStoryBlock[];
}

export const localesConfig: LocalInfo[] = [
  {
    id: "mirador-san-pedro",
    name: "Mirador",
    subtitle: "San Pedro",
    description: "Cocina canaria de altura frente al valle de La Orotava. Donde la carta cambia con las estaciones y el paisaje, con la luz.",
    address: "Mirador de San Pedro, 38419 Los Realejos, Santa Cruz de Tenerife",
    phone: "+34 922 34 08 75",
    schedule: "Lunes a Domingo: 10:00 - 23:00",
    heroImage: "/images/locales/mirador/hero.webp",
    features: ["Vistas panorámicas", "Terraza exterior", "Aparcamiento", "Accesible"],
    storyHeadline: "Un horizonte",
    storyHeadlineAccent: "que se saborea",
    storyIntro: "Hay lugares que se visitan y lugares que se viven. Mirador de San Pedro es de los segundos.",
    story: [
      {
        label: "El Enclave",
        heading: "Donde el valle se abre al océano",
        text: "Encaramado sobre el valle de La Orotava, Mirador de San Pedro se asoma al Atlántico como un balcón entre cielo y mar. Cada mesa es primera fila: los acantilados, la costa norte, la luz que cambia el paisaje hora a hora. Llegar aquí ya cambia el ritmo del día.",
        image: { src: "/images/mirador-san-pedro.webp", alt: "Vistas panorámicas desde la terraza de Mirador de San Pedro al valle de La Orotava y el océano Atlántico" },
      },
      {
        label: "La Cocina",
        heading: "Raíz canaria, alma mediterránea",
        text: "Nuestra carta nace de la tierra y el mar de Tenerife. Pescado fresco de aguas atlánticas, verduras de las medianías, quesos artesanos de la isla — cocinados con respeto al origen y con la precisión del buen oficio. Cocina canaria con acento mediterráneo que no busca impresionar: busca que quieras repetir.",
        image: { src: "/images/cartas/mirador/hero.webp", alt: "Propuesta gastronómica de Mirador de San Pedro — cocina canaria con matices mediterráneos" },
      },
      {
        label: "La Experiencia",
        heading: "Detenerse. Contemplar. Disfrutar.",
        text: "Sentarse en Mirador es decidir que el tiempo puede esperar. Compartir un plato elaborado con mimo mientras el sol desciende sobre el horizonte. Brindar con calma. Dejar que la conversación fluya entre sabores y paisaje. De esos sitios donde luego cierras los ojos y todavía ves la luz cayendo sobre la mesa.",
        image: { src: "/images/brunch/mirador/hero.webp", alt: "Experiencia gastronómica al atardecer en Mirador de San Pedro" },
      },
    ],
  },
  {
    id: "bollullo-oasis",
    name: "Bollullo",
    subtitle: "Oasis",
    description: "Cocina canaria con acento mediterráneo en el paseo marítimo de Candelaria. Brunch los fines de semana, terraza frente al Atlántico y la calma de quien sabe disfrutar.",
    address: "Avda. La Constitución, 46, C.C. El Pozo, local 9, 38530 Candelaria, Santa Cruz de Tenerife",
    phone: "+34 822 04 22 63",
    schedule: "Lunes-Martes: 12:30-22:00 | Miércoles: Cerrado | Jueves: 12:30-22:00 | Viernes: 12:30-23:00 | Sábado: 9:30-23:00 | Domingo: 9:30-22:00",
    heroImage: "/images/locales/oasis/hero.webp",
    features: ["Aire acondicionado", "Terraza", "Menú especial", "Zona infantil"],
    storyHeadline: "Un refugio entre",
    storyHeadlineAccent: "el mar y la mesa",
    storyIntro: "En el corazón de Candelaria, donde la brisa del Atlántico se cuela entre las calles, Oasis nació para ser exactamente eso: un oasis.",
    story: [
      {
        label: "El Refugio",
        heading: "A pasos del mar, junto a la Basílica",
        text: "En la zona turística de Candelaria, junto a la icónica Basílica, Bollullo Oasis se abre como un refugio de sabor y calma. Un espacio luminoso donde el murmullo del Atlántico acompaña cada momento y la brisa marina entra sin pedir permiso. Un sitio al que se llega paseando y del que cuesta irse.",
        image: { src: "/images/locales/oasis/hero.webp", alt: "Fachada y terraza de Bollullo Oasis en Candelaria, junto al mar" },
      },
      {
        label: "La Cocina",
        heading: "Tradición canaria, creatividad mediterránea",
        text: "Nuestra cocina honra las recetas de siempre y las reinventa con toques que sorprenden. Arroces elaborados con mimo, pescados frescos del Atlántico, mariscos de temporada — cada plato sabe a lo que es: producto bien tratado, sabores nítidos. Una carta pensada para compartir sin prisa.",
        image: { src: "/images/cartas/oasis/hero.webp", alt: "Propuesta gastronómica de Bollullo Oasis — arroces, pescados y cocina canaria creativa" },
      },
      {
        label: "La Experiencia",
        heading: "Luz, brisa y sabor",
        text: "Desayunar un brunch en la terraza cada fin de semana. Celebrar una ocasión especial con menú personalizado. O simplemente sentarse, pedir algo rico y dejar que la tarde pase entre conversación y luz natural. En Oasis, cada visita es un pequeño paréntesis de bienestar.",
        image: { src: "/images/brunch/oasis/hero.webp", alt: "Brunch en la terraza de Bollullo Oasis — luz natural y ambiente relajado junto al mar" },
      },
    ],
  },
  {
    id: "bollullo-chiringuito",
    name: "Bollullo",
    subtitle: "Chiringuito",
    description: "Al final de un camino entre plataneras, donde la costa norte muestra su cara más salvaje. Cocina canaria con los pies en la arena.",
    address: "Camino el Bollullo, 113, 38314 La Orotava, Santa Cruz de Tenerife",
    phone: "+34 922 351 596",
    schedule: "Miércoles a Lunes: 11:00 - 21:00 | Martes: Cerrado",
    heroImage: "/images/locales/chiringuito/hero.webp",
    features: ["Acceso directo playa", "Hamacas", "Barra de cócteles", "Música en vivo"],
    storyHeadline: "Donde la isla",
    storyHeadlineAccent: "se vive descalzo",
    storyIntro: "Hay un camino entre plataneras que desciende hasta el mar. Al final, donde la espuma besa la arena negra, está Chiringuito Bollullo.",
    story: [
      {
        label: "La Costa",
        heading: "Un rincón escondido en la costa norte",
        text: "Enclavado junto a una de las playas más espectaculares de Tenerife, Chiringuito Bollullo es ese lugar que parece existir fuera del mapa. Arena volcánica, acantilados que abrazan la bahía y un horizonte atlántico que no tiene fin. La naturaleza marca el ritmo. El reloj sobra.",
        image: { src: "/images/locales/chiringuito/hero.webp", alt: "Playa de Bollullo — arena volcánica, acantilados y horizonte atlántico en la costa norte de Tenerife" },
      },
      {
        label: "La Cocina",
        heading: "Fresco, canario y sin complicaciones",
        text: "Nuestra cocina celebra lo mejor de la isla con la honestidad del producto fresco. Las famosas papas arrugadas con mojo, pescado recién capturado, ensaladas creativas con ingredientes de temporada, sándwiches gourmet y opciones vegetarianas — todo con el sabor directo de una tierra volcánica que mira al mar.",
        image: { src: "/images/cartas/chiringuito/hero.webp", alt: "Cocina canaria fresca en Chiringuito Bollullo — pescado, papas arrugadas y ensaladas creativas" },
      },
      {
        label: "La Experiencia",
        heading: "Arena, brisa y buen comer",
        text: "Comer con los pies en la arena. Tomarse algo fresco escuchando el romper de las olas. Dejar que la brisa salada sea el único reloj. Chiringuito Bollullo es la versión más auténtica del placer sencillo: buena comida, buenas vistas y la sensación de que el verano no tiene prisa por acabar.",
        image: { src: "/images/cartas/chiringuito/postre.webp", alt: "Momento dulce frente al mar en Chiringuito Bollullo — la experiencia de la playa en cada bocado" },
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// Cartas Config - Menús para cada local
// -----------------------------------------------------------------------------

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface CartaInfo {
  localId: string;
  localName: string;
  heroImage: string;
  categories: MenuCategory[];
  description?: string;
}

export const cartasConfig: CartaInfo[] = [
  {
    "localId": "mirador",
    "localName": "Mirador San Pedro",
    "heroImage": "/images/cartas/mirador/hero.webp",
    "categories": [
      {
        "title": "Entrantes",
        "items": [
          {
            "name": "Papas arrugadas con mojo",
            "description": "Papas canarias, mojo rojo y verde casero",
            "price": "6,50€"
          },
          {
            "name": "Queso asado con miel y almendras",
            "description": "Queso de cabra canario, miel de palma, almendras tostadas",
            "price": "10,50€"
          },
          {
            "name": "Croquetas de jamón ibérico",
            "description": "Receta tradicional, bechamel cremosa",
            "price": "9,50€"
          },
          {
            "name": "Ensaladilla rusa con ventresca",
            "description": "Receta casera, atún ventresca, aceitunas manzanilla",
            "price": "8,50€"
          },
          {
            "name": "Gambas al ajillo",
            "description": "Gambas frescas, aceite de oliva virgen, ajo, guindilla",
            "price": "12,50€"
          },
          {
            "name": "Pulpo a la plancha",
            "description": "Con cachelos, pimentón de la Vera y aceite de oliva",
            "price": "16,00€"
          },
          {
            "name": "Calamares a la andaluza",
            "description": "Fritos con limón y alioli casero",
            "price": "11,50€"
          },
          {
            "name": "Tartar de atún rojo",
            "description": "Atún rojo, aguacate, sésamo, salsa de soja, wasabi",
            "price": "16,50€"
          }
        ]
      },
      {
        "title": "Pescados del Atlántico",
        "items": [
          {
            "name": "Cherne a la plancha",
            "description": "Pescado blanco local, jugoso y tierno, con mojo verde",
            "price": "22,00€"
          },
          {
            "name": "Vieja a la espalda",
            "description": "Clásico canario, asado con cebolla, pimientos y especias",
            "price": "20,50€"
          },
          {
            "name": "Sama frita",
            "description": "Delicado, crujiente por fuera, tierno por dentro",
            "price": "24,00€"
          },
          {
            "name": "Bacalao al pil pil",
            "description": "Bacalao desalado, emulsión de ajo y aceite de oliva",
            "price": "19,50€"
          },
          {
            "name": "Lubina a la sal",
            "description": "Cocinada en costra de sal, servida con salsa de tomate",
            "price": "26,00€"
          },
          {
            "name": "Paella de marisco",
            "description": "Arroz bomba, gambas, mejillones, calamares, almejas (mín. 2 pers.)",
            "price": "21,00€"
          }
        ]
      },
      {
        "title": "Carnes",
        "items": [
          {
            "name": "Chuletón de ternera gallega",
            "description": "A la parrilla, con patatas fritas caseras y pimientos",
            "price": "28,00€"
          },
          {
            "name": "Solomillo de cerdo ibérico",
            "description": "Con salsa de mostaza y miel, puré de patata",
            "price": "18,50€"
          },
          {
            "name": "Cordero asado",
            "description": "Paletilla de cordero lechal, patatas panaderas",
            "price": "24,50€"
          },
          {
            "name": "Pollo al ajillo",
            "description": "Pollo campero, ajo, guindilla, vino blanco",
            "price": "15,50€"
          },
          {
            "name": "Secreto ibérico",
            "description": "A la parrilla, con patatas al horno y verduras",
            "price": "19,50€"
          },
          {
            "name": "Carrillada de ternera",
            "description": "Estofada con vino tinto, puré de patata trufado",
            "price": "17,50€"
          }
        ]
      },
      {
        "title": "Arroces",
        "items": [
          {
            "name": "Arroz caldoso con bogavante",
            "description": "Arroz bomba, bogavante, caldo de marisco (mín. 2 pers.)",
            "price": "32,00€"
          },
          {
            "name": "Arroz negro con alioli",
            "description": "Con tinta de calamar, gambas y alioli casero",
            "price": "19,50€"
          },
          {
            "name": "Risotto de setas",
            "description": "Arroz carnaroli, boletus, parmesano, trufa",
            "price": "16,50€"
          }
        ]
      },
      {
        "title": "Postres de la Isla",
        "items": [
          {
            "name": "Bienmesabe",
            "description": "Postre tradicional canario con almendra, huevo y azúcar",
            "price": "6,50€"
          },
          {
            "name": "Frangollo",
            "description": "Postre de maíz con leche, canela y limón",
            "price": "5,50€"
          },
          {
            "name": "Tarta de queso",
            "description": "Estilo basco, coulis de frutos rojos",
            "price": "7,00€"
          },
          {
            "name": "Coulant de chocolate",
            "description": "Con helado de vainilla de Madagascar",
            "price": "7,50€"
          },
          {
            "name": "Tiramisú de la casa",
            "description": "Receta tradicional con café de especialidad",
            "price": "6,50€"
          },
          {
            "name": "Plátano asado con miel",
            "description": "Plátano canario, miel de palma, helado de vainilla",
            "price": "6,00€"
          }
        ]
      },
      {
        "title": "Bebidas",
        "items": [
          {
            "name": "Vinos de la isla",
            "description": "Listán blanco, tinto o rosado de Tenerife",
            "price": "15,00€"
          },
          {
            "name": "Cervezas artesanales",
            "description": "Selección de cervezas locales",
            "price": "4,00€"
          },
          {
            "name": "Café de especialidad",
            "description": "Espresso, cortado, cappuccino, flat white",
            "price": "2,50€"
          },
          {
            "name": "Digestivos",
            "description": "Ron miel, hierbas, licor de plátano",
            "price": "4,50€"
          }
        ]
      }
    ],
    "description": "Carta del Mirador de San Pedro, Tenerife. Cocina canaria con matices mediterráneos. Pescados del Atlántico, carnes y postres de la isla con vistas panorámicas."
  },
  {
    "localId": "oasis",
    "localName": "Bollullo Oasis",
    "heroImage": "/images/cartas/oasis/hero.webp",
    "categories": [
      {
        "title": "Para Compartir",
        "items": [
          {
            "name": "Tabla de quesos canarios",
            "description": "Selección de 5 quesos de la isla con miel de palma y frutos secos",
            "price": "18,00€"
          },
          {
            "name": "Tabla de embutidos ibéricos",
            "description": "Jamón, chorizo, salchichón, lomo, pan con tomate",
            "price": "16,50€"
          },
          {
            "name": "Hummus trio",
            "description": "Clásico, remolacha y pimiento asado con pan de pita",
            "price": "10,50€"
          },
          {
            "name": "Nachos con guacamole",
            "description": "Totopos, guacamole casero, pico de gallo, jalapeños, crema agria",
            "price": "11,00€"
          },
          {
            "name": "Croquetas variadas",
            "description": "Jamón ibérico, boletus, espinacas y queso de cabra",
            "price": "9,50€"
          },
          {
            "name": "Pulpo a la gallega",
            "description": "Con cachelos, pimentón de la Vera y aceite de oliva",
            "price": "16,00€"
          }
        ]
      },
      {
        "title": "Bowls",
        "items": [
          {
            "name": "Poke bowl de salmón",
            "description": "Arroz, salmón marinado, aguacate, edamame, pepino, sésamo",
            "price": "14,50€"
          },
          {
            "name": "Buddha bowl",
            "description": "Quinoa, garbanzos, aguacate, zanahoria, hummus, tahini",
            "price": "12,50€"
          },
          {
            "name": "Bowl de atún tataki",
            "description": "Atún sellado, arroz, aguacate, mango, salsa teriyaki",
            "price": "15,50€"
          },
          {
            "name": "Bowl de pollo teriyaki",
            "description": "Pollo marinado, arroz, verduras salteadas, sésamo",
            "price": "13,50€"
          }
        ]
      },
      {
        "title": "Ceviches",
        "items": [
          {
            "name": "Ceviche clásico",
            "description": "Pescado del día, lima, cilantro, cebolla morada, maíz cancha",
            "price": "13,50€"
          },
          {
            "name": "Ceviche de gambas",
            "description": "Gambas frescas, leche de tigre, ají, choclo",
            "price": "14,50€"
          },
          {
            "name": "Ceviche mixto",
            "description": "Pescado, gambas y pulpo, leche de tigre, camote",
            "price": "15,50€"
          },
          {
            "name": "Tiradito de atún",
            "description": "Atún rojo, salsa de ají amarillo, sésamo, cilantro",
            "price": "14,00€"
          }
        ]
      },
      {
        "title": "Ensaladas",
        "items": [
          {
            "name": "Ensalada Oasis",
            "description": "Mix de hojas verdes, aguacate, tomate cherry, pipas, vinagreta de frutos rojos",
            "price": "10,50€"
          },
          {
            "name": "Ensalada César",
            "description": "Lechuga romana, pollo, crutons, parmesano, salsa César casera",
            "price": "12,50€"
          },
          {
            "name": "Ensalada de burrata",
            "description": "Tomate heirloom, burrata, pesto, albahaca, reducción de balsámico",
            "price": "13,50€"
          },
          {
            "name": "Ensalada de quinoa",
            "description": "Quinoa, pepino, tomate, cebolla, cilantro, lima, aguacate",
            "price": "11,50€"
          }
        ]
      },
      {
        "title": "Principales",
        "items": [
          {
            "name": "Hamburguesa Oasis",
            "description": "Carne de ternera, queso cheddar, bacon, cebolla caramelizada, salsa especial",
            "price": "14,50€"
          },
          {
            "name": "Fish & chips",
            "description": "Pescado del día en tempura, patatas fritas caseras, tártara",
            "price": "15,00€"
          },
          {
            "name": "Risotto de setas",
            "description": "Arroz carnaroli, boletus, parmesano, trufa",
            "price": "14,00€"
          },
          {
            "name": "Tacos de pescado",
            "description": "Tres tacos, pescado crispy, repollo, salsa de yogur, lima",
            "price": "12,50€"
          }
        ]
      },
      {
        "title": "Postres",
        "items": [
          {
            "name": "Tarta de queso",
            "description": "Estilo basco, coulis de frutos rojos",
            "price": "6,50€"
          },
          {
            "name": "Coulant de chocolate",
            "description": "Con helado de vainilla de Madagascar",
            "price": "7,00€"
          },
          {
            "name": "Tiramisú de la casa",
            "description": "Receta tradicional con café de especialidad",
            "price": "6,50€"
          },
          {
            "name": "Sorbete de fruta",
            "description": "Sabor del día, consulta con tu camarero",
            "price": "5,00€"
          }
        ]
      },
      {
        "title": "Cocktails de Autor",
        "items": [
          {
            "name": "Oasis Mule",
            "description": "Vodka, jengibre fresco, lima, cerveza de jengibre",
            "price": "9,50€"
          },
          {
            "name": "Atlantic Sour",
            "description": "Whiskey, limón, clara de huevo, vino tinto flotado",
            "price": "10,00€"
          },
          {
            "name": "Canarian Mojito",
            "description": "Ron local, hierbabuena, lima, azúcar de caña, soda",
            "price": "8,50€"
          },
          {
            "name": "Passion Margarita",
            "description": "Tequila, maracuyá, lima, triple sec, sal de lava",
            "price": "9,50€"
          },
          {
            "name": "Elderflower Spritz",
            "description": "Prosecco, licor de saúco, soda, limón",
            "price": "8,50€"
          },
          {
            "name": "Mocktail del día",
            "description": "Cóctel sin alcohol, consulta con tu camarero",
            "price": "6,50€"
          }
        ]
      }
    ],
    "description": "Carta del Bollullo Oasis, Puerto de la Cruz. Cocina social y compartida. Bowls, ceviches, tablas de queso canario y cocktails de autor."
  },
  {
    "localId": "chiringuito",
    "localName": "Bollullo Chiringuito",
    "heroImage": "/images/cartas/chiringuito/hero.webp",
    "categories": [
      {
        "title": "Para Picar",
        "items": [
          {
            "name": "Papas arrugadas con mojo",
            "description": "Papas canarias, mojo rojo y verde casero",
            "price": "5,50€"
          },
          {
            "name": "Croquetas de pescado",
            "description": "De corvina y gambas, bechamel cremosa",
            "price": "7,50€"
          },
          {
            "name": "Gambas al ajillo",
            "description": "Gambas frescas, aceite de oliva, ajo, guindilla",
            "price": "10,50€"
          },
          {
            "name": "Pulpo a la plancha",
            "description": "Con cachelos y pimentón de la Vera",
            "price": "14,50€"
          },
          {
            "name": "Ensaladilla rusa",
            "description": "Receta tradicional con atún y aceitunas",
            "price": "6,50€"
          },
          {
            "name": "Queso asado con miel",
            "description": "Queso de cabra canario, miel de palma",
            "price": "8,50€"
          }
        ]
      },
      {
        "title": "Del Mar",
        "items": [
          {
            "name": "Lapas a la plancha",
            "description": "Con mojo verde y limón (ración)",
            "price": "12,00€"
          },
          {
            "name": "Mejillones al vapor",
            "description": "Con vino blanco y hierbas (ración)",
            "price": "10,00€"
          },
          {
            "name": "Calamares a la andaluza",
            "description": "Fritos con limón y alioli",
            "price": "11,50€"
          },
          {
            "name": "Boquerones en vinagre",
            "description": "Frescos, con ajo y perejil",
            "price": "7,50€"
          },
          {
            "name": "Ceviche del día",
            "description": "Pescado fresco, lima, cilantro, cebolla morada",
            "price": "13,50€"
          },
          {
            "name": "Tartar de atún",
            "description": "Atún rojo, aguacate, sésamo, salsa de soja",
            "price": "15,00€"
          }
        ]
      },
      {
        "title": "Pescado a la Plancha",
        "items": [
          {
            "name": "Cherne",
            "description": "Pescado blanco local, jugoso y tierno",
            "price": "18,00€"
          },
          {
            "name": "Vieja",
            "description": "Clásico canario, sabor intenso",
            "price": "16,50€"
          },
          {
            "name": "Sama",
            "description": "Delicado, ideal para compartir",
            "price": "19,50€"
          },
          {
            "name": "Bocinegro",
            "description": "Pescado azul, sabor intenso al mar",
            "price": "17,00€"
          }
        ]
      },
      {
        "title": "Fritura",
        "items": [
          {
            "name": "Chopitos",
            "description": "Puntillas de calamar, crujientes",
            "price": "9,50€"
          },
          {
            "name": "Boquerones fritos",
            "description": "Con harina de garbanzo, limón",
            "price": "8,50€"
          },
          {
            "name": "Adobo",
            "description": "Pescado azul marinado y frito, estilo Cádiz",
            "price": "10,00€"
          },
          {
            "name": "Fritura mixta",
            "description": "Calamares, gambas, pescado variado",
            "price": "16,00€"
          }
        ]
      },
      {
        "title": "Postres",
        "items": [
          {
            "name": "Frangollo",
            "description": "Postre tradicional canario con maíz, leche y canela",
            "price": "4,50€"
          },
          {
            "name": "Bienmesabe",
            "description": "Almendra, huevo, azúcar, bizcocho",
            "price": "5,00€"
          },
          {
            "name": "Plátano asado con miel",
            "description": "Plátano canario, miel de palma, helado",
            "price": "5,50€"
          },
          {
            "name": "Flan de la casa",
            "description": "Con caramelo y nata montada",
            "price": "4,50€"
          }
        ]
      },
      {
        "title": "Bebidas",
        "items": [
          {
            "name": "Cerveza local",
            "description": "Dorada o tropical, caña o jarra",
            "price": "2,50€"
          },
          {
            "name": "Sangría de la casa",
            "description": "Por copa o jarra para compartir",
            "price": "4,50€"
          },
          {
            "name": "Vino blanco local",
            "description": "Listán blanco de Tenerife",
            "price": "12,00€"
          },
          {
            "name": "Refrescos",
            "description": "Coca-cola, limonada, naranja, tónica",
            "price": "2,50€"
          }
        ]
      }
    ],
    "description": "Carta del Bollullo Chiringuito, Playa Bollullo. Tapas atlánticas, pescado del día a la plancha, lapas a la brasa y fritura. La carta más auténtica de Tenerife."
  }
];

// -----------------------------------------------------------------------------
// Brunch Config
// -----------------------------------------------------------------------------

export interface BrunchInfo {
  localId: string;
  localName: string;
  description: string;
  schedule: string;
  price: string;
  includes: string[];
  image: string;
  menuSections?: MenuCategory[];
  metaDescription?: string;
}

export const brunchConfig: BrunchInfo[] = [
  {
    "localId": "mirador",
    "localName": "Mirador San Pedro",
    "description": "Brunch frente al Atlántico desde uno de los mejores miradores de Tenerife. Despierta con vistas panorámicas, café de especialidad y los sabores más auténticos de la isla.",
    "schedule": "Sábados y domingos · 10:00 - 14:00",
    "price": "A la carta",
    "includes": [
      "Tostada de aguacate · 8,50€",
      "Tostada de tomate rallado · 7,00€",
      "Huevos rancheros · 10,00€",
      "Huevos benedictine · 11,50€",
      "Tortitas de la casa · 9,00€",
      "Croissant de almendra · 4,50€",
      "Café de especialidad · 2,50€",
      "Zumo natural · 4,00€"
    ],
    "image": "/images/brunch/mirador/hero.webp",
    "menuSections": [
      {
        "title": "Tostadas & Pan",
        "items": [
          {
            "name": "Tostada de aguacate",
            "description": "Aguacate local, semillas, tomate cherry, pan de masa madre",
            "price": "8,50€"
          },
          {
            "name": "Tostada de tomate rallado",
            "description": "Tomate canario, aove, jamón ibérico (opcional)",
            "price": "7,00€"
          },
          {
            "name": "Sándwich de salmón",
            "description": "Salmón ahumado, queso crema, alcaparras, eneldo",
            "price": "10,50€"
          },
          {
            "name": "Brioche de la casa",
            "description": "Con mantequilla y mermelada artesana",
            "price": "5,50€"
          }
        ]
      },
      {
        "title": "Huevos",
        "items": [
          {
            "name": "Huevos rancheros",
            "description": "Dos huevos de gallina canaria, salsa ranchera, frijoles, tortilla",
            "price": "10,00€"
          },
          {
            "name": "Huevos benedictine",
            "description": "Dos huevos pochados, holandesa, espinacas, muffin inglés",
            "price": "11,50€"
          },
          {
            "name": "Tortilla abierta",
            "description": "Con espárragos trigueros y queso de cabra",
            "price": "9,50€"
          }
        ]
      },
      {
        "title": "Dulces & Repostería",
        "items": [
          {
            "name": "Tortitas de la casa",
            "description": "Con sirope de palma, frutos rojos y nata",
            "price": "9,00€"
          },
          {
            "name": "Croissant de almendra",
            "description": "Repostería artesana recién horneada",
            "price": "4,50€"
          },
          {
            "name": "Tarta de queso",
            "description": "Estilo basco, coulis de frutos rojos",
            "price": "6,50€"
          },
          {
            "name": "Bowl de açaí",
            "description": "Açaí, granola casera, plátano, coco",
            "price": "8,50€"
          }
        ]
      },
      {
        "title": "Bebidas",
        "items": [
          {
            "name": "Café de especialidad",
            "description": "Espresso, cortado, cappuccino, flat white",
            "price": "2,50€"
          },
          {
            "name": "Zumo natural",
            "description": "Naranja, pomelo, zanahoria, manzana",
            "price": "4,00€"
          },
          {
            "name": "Smoothie de temporada",
            "description": "Consulta nuestra selección del día",
            "price": "5,50€"
          },
          {
            "name": "Té & infusiones",
            "description": "Selección de tés premium",
            "price": "3,00€"
          }
        ]
      }
    ],
    "metaDescription": "Brunch en Mirador de San Pedro, Tenerife. Tostadas de aguacate, huevos de gallina canaria, repostería artesana y café de especialidad con vistas al Atlántico."
  },
  {
    "localId": "oasis",
    "localName": "Bollullo Oasis",
    "description": "Luz natural, mesas compartidas y brisa atlántica. El brunch más social de Tenerife, donde las mañanas se alargan entre amigos, buen café y platos para compartir.",
    "schedule": "Sábados y domingos · 09:00 - 14:00",
    "price": "A la carta",
    "includes": [
      "Bowl de açaí · 9,50€",
      "Bowl de yogur griego · 8,00€",
      "Tostada de aguacate · 8,50€",
      "Tostada de hummus · 7,50€",
      "Tortitas de la casa · 9,00€",
      "Waffle belga · 8,50€",
      "Café de especialidad · 2,50€",
      "Zumo natural exprimido · 4,00€"
    ],
    "image": "/images/brunch/oasis/hero.webp",
    "menuSections": [
      {
        "title": "Bowls & Saludables",
        "items": [
          {
            "name": "Bowl de açaí",
            "description": "Açaí, granola casera, plátano, arándanos, coco",
            "price": "9,50€"
          },
          {
            "name": "Bowl de yogur griego",
            "description": "Yogur, fruta de temporada, miel, frutos secos",
            "price": "8,00€"
          },
          {
            "name": "Bowl de quinoa",
            "description": "Quinoa, aguacate, tomate, pepino, hummus",
            "price": "10,50€"
          },
          {
            "name": "Poke bowl",
            "description": "Arroz, salmón o atún, edamame, aguacate, sésamo",
            "price": "13,50€"
          }
        ]
      },
      {
        "title": "Tostadas",
        "items": [
          {
            "name": "Tostada de aguacate",
            "description": "Aguacate, semillas, tomate cherry, rúcula",
            "price": "8,50€"
          },
          {
            "name": "Tostada de hummus",
            "description": "Hummus casero, verduras asadas, pimentón",
            "price": "7,50€"
          },
          {
            "name": "Tostada de queso crema",
            "description": "Queso crema, salmón ahumado, alcaparras",
            "price": "9,50€"
          }
        ]
      },
      {
        "title": "Dulces & Repostería",
        "items": [
          {
            "name": "Tortitas de la casa",
            "description": "Con sirope de palma, frutos rojos y nata montada",
            "price": "9,00€"
          },
          {
            "name": "Waffle belga",
            "description": "Con helado de vainilla y salsa de chocolate",
            "price": "8,50€"
          },
          {
            "name": "Croissant de mantequilla",
            "description": "Repostería artesana recién horneada",
            "price": "3,50€"
          },
          {
            "name": "Cinnamon roll",
            "description": "Rollito de canela con glaseado",
            "price": "4,50€"
          },
          {
            "name": "Tarta de zanahoria",
            "description": "Con frosting de queso crema",
            "price": "5,50€"
          }
        ]
      },
      {
        "title": "Bebidas",
        "items": [
          {
            "name": "Café de especialidad",
            "description": "Espresso, cortado, cappuccino, flat white, latte",
            "price": "2,50€"
          },
          {
            "name": "Zumo natural exprimido",
            "description": "Naranja, pomelo, o mixto",
            "price": "4,00€"
          },
          {
            "name": "Smoothie de temporada",
            "description": "Consulta nuestra selección del día",
            "price": "5,50€"
          },
          {
            "name": "Té matcha latte",
            "description": "Matcha ceremonial con leche vegetal",
            "price": "4,50€"
          },
          {
            "name": "Kombucha artesanal",
            "description": "Sabores rotativos de productores locales",
            "price": "4,00€"
          }
        ]
      }
    ],
    "metaDescription": "Brunch en Bollullo Oasis, Puerto de la Cruz. Luz natural, mesas compartidas, bowls de temporada, zumos naturales y repostería de la casa."
  }
];

// -----------------------------------------------------------------------------
// Eventos Config
// -----------------------------------------------------------------------------

export interface EventoInfo {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const eventosConfig = {
  heroImage: "/images/eventos.webp",
  title: "Eventos y Celebraciones",
  subtitle: "Haz de tu Evento una Experiencia Inolvidable",
  description: "En Grupo Bollullo ponemos a tu disposición nuestros espacios únicos para celebrar momentos especiales. Desde reuniones íntimas hasta grandes celebraciones, nuestro equipo se encarga de cada detalle.",
  eventos: [
    {
      title: "Celebraciones Privadas",
      description: "Cumpleaños, aniversarios, reuniones familiares... Celebra tus momentos especiales en un entorno único.",
      image: "/images/eventos.webp",
      features: ["Menú personalizado", "Decoración incluida", "Servicio dedicado"],
    },
    {
      title: "Eventos Corporativos",
      description: "Reuniones de empresa, team building, cenas de Navidad. Ofrecemos soluciones a medida para tu empresa.",
      image: "/images/slider03.webp",
      features: ["Salón privado", "Proyector y pantalla", "Coffee break"],
    },
    {
      title: "Bodas y Banquetes",
      description: "El día más especial de tu vida merece un escenario extraordinario. Creamos experiencias inolvidables.",
      image: "/images/hero-banner.webp",
      features: ["Menú degustación", "Coordinación integral", "Espacios únicos"],
    },
  ] as EventoInfo[],
  contactInfo: {
    title: "Solicita Información",
    description: "Cuéntanos sobre tu evento y te prepararemos una propuesta personalizada.",
    phone: "+34 922 34 08 75",
    email: "eventos@grupobollullo.es",
  },
};
