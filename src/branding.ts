// =============================================================================
// Grupo Bollullo - Branding por Restaurante
// =============================================================================
// Configuración visual diferenciada para cada local.
// Cada restaurante mantiene su identidad propia dentro del grupo.
// =============================================================================

export interface RestaurantBranding {
  id: string;
  name: string;
  logo: string;
  brandboard: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
    backgroundAlt: string;
  };
  /** Superficies oscuras con tinte de marca para fondos de pagina */
  surfaces: {
    page: string;       // Fondo principal de pagina
    section: string;    // Secciones alternas (mas profundo)
    card: string;       // Tarjetas y bloques elevados
  };
  fonts: {
    heading: string;
    body: string;
  };
  tone: string;
  notes: string;
}

export const brandingMap: Record<string, RestaurantBranding> = {
  // ---------------------------------------------------------------------------
  // Mirador San Pedro
  // ---------------------------------------------------------------------------
  "mirador-san-pedro": {
    id: "mirador-san-pedro",
    name: "Bollullo Mirador San Pedro",
    logo: "/branding/mirador/logo-mirador.png",
    brandboard: "/branding/mirador/brandboard-mirador.png",
    colors: {
      primary: "#83684D",     // Bronce oscuro
      secondary: "#CAB5B8",   // Rosa empolvado
      accent: "#BC6E5B",      // Terracota suave
      text: "#4C3A2A",        // Marron oscuro
      background: "#ECE1D6",  // Crema calido
      backgroundAlt: "#B9A191", // Arena
    },
    surfaces: {
      page: "#201a10",       // Fondo calido tierra — se nota el tinte marron
      section: "#171208",    // Secciones alternas, ambar profundo
      card: "#342a1c",       // Card bronce elevada, claramente calida
    },
    fonts: {
      heading: "'Cormorant Garamond', serif",
      body: "'Montserrat', sans-serif",
    },
    tone: "Sofisticado, calido y editorial. Lujo accesible con toques clasicos. Texturas marmol y piedra natural, acabados dorados.",
    notes: "Fondos claros crema/marfil. Botones bronce o terracota. Fotografias grandes con luz natural. Espaciado generoso, layout editorial. Evitar colores frios o neon.",
  },

  // ---------------------------------------------------------------------------
  // Bollullo Oasis
  // ---------------------------------------------------------------------------
  "bollullo-oasis": {
    id: "bollullo-oasis",
    name: "Bollullo Oasis",
    logo: "/branding/oasis/logo-oasis.png",
    brandboard: "/branding/oasis/brandboard-oasis.png",
    colors: {
      primary: "#AEDACC",     // Verde menta
      secondary: "#E1EBD6",   // Verde palido
      accent: "#C8B576",      // Dorado
      text: "#4C3A2A",        // Marron oscuro
      background: "#F9F5EB",  // Crema suave
      backgroundAlt: "#8EB79C", // Verde salvia
    },
    surfaces: {
      page: "#0e1e16",       // Fondo verde profundo — se nota el tinte natural
      section: "#0a1610",    // Secciones alternas, jungla nocturna
      card: "#1a3028",       // Card verde bosque, claramente natural
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Montserrat', sans-serif",
    },
    tone: "Fresco, natural y luminoso. Tropical-chic con elementos de plumeria y hojas. Brunch, atardeceres y gastronomia casual-premium.",
    notes: "Fondos crema o verde palido. Acentos verde salvia y dorado. Mucha luz natural, vegetacion y vistas al puerto. Mucho espacio blanco. Evitar tonos oscuros dominantes.",
  },

  // ---------------------------------------------------------------------------
  // Bollullo Chiringuito
  // ---------------------------------------------------------------------------
  "bollullo-chiringuito": {
    id: "bollullo-chiringuito",
    name: "Bollullo Chiringuito",
    logo: "/branding/chiringuito/logo-chiringuito.png",
    brandboard: "/branding/chiringuito/brandboard-chiringuito.png",
    colors: {
      primary: "#4B8EED",     // Azul cielo
      secondary: "#A9D7FF",   // Azul claro
      accent: "#1CB860",      // Verde esmeralda
      text: "#103670",        // Azul oscuro
      background: "#F2E6CA",  // Arena / beige calido
      backgroundAlt: "#003670", // Azul marino profundo
    },
    surfaces: {
      page: "#0c1828",       // Fondo azul oceano — se nota el tinte marino
      section: "#081220",    // Secciones alternas, noche costera profunda
      card: "#142840",       // Card navy elevada, claramente costera
    },
    fonts: {
      heading: "'Poppins', sans-serif",
      body: "'Montserrat', sans-serif",
    },
    tone: "Vibrante, fresco y costero. Elementos marinos (olas, conchas, gaviotas). Energia y alegria sin perder calidad.",
    notes: "Gradientes azul suave o blanco con acentos azules. Verde esmeralda como acento puntual. Fotos de playa, mar, cocteles, mariscos. Mas dinamico y jugueton que Mirador u Oasis.",
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Obtiene el branding de un restaurante por su localId de config.ts.
 * Acepta tanto IDs de locales ("mirador-san-pedro") como IDs cortos ("mirador").
 */
export function getBranding(localId: string): RestaurantBranding | undefined {
  // Mapeo de IDs cortos (usados en cartas/brunch) a IDs completos (usados en locales)
  const shortIdMap: Record<string, string> = {
    mirador: "mirador-san-pedro",
    oasis: "bollullo-oasis",
    chiringuito: "bollullo-chiringuito",
  };

  const fullId = shortIdMap[localId] || localId;
  return brandingMap[fullId];
}

/**
 * Genera variables CSS inline para aplicar los colores de marca de un restaurante.
 * Usar como: <div style={getBrandingStyles("mirador")}>
 */
export function getBrandingStyles(localId: string): React.CSSProperties {
  const branding = getBranding(localId);
  if (!branding) return {};

  return {
    "--brand-primary": branding.colors.primary,
    "--brand-secondary": branding.colors.secondary,
    "--brand-accent": branding.colors.accent,
    "--brand-text": branding.colors.text,
    "--brand-bg": branding.colors.background,
    "--brand-bg-alt": branding.colors.backgroundAlt,
  } as React.CSSProperties;
}
