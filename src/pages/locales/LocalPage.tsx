import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ChevronRight, Star, Utensils, Wine, Calendar } from 'lucide-react';
import { localesConfig } from '../../config';
import { getBranding } from '../../branding';

export function LocalPage() {
  const { localId } = useParams<{ localId: string }>();

  const local = localesConfig.find(l => l.id === localId);

  // Branding visual por local
  const isMirador = local?.id === 'mirador-san-pedro';
  const isOasis = local?.id === 'bollullo-oasis';
  const isChiringuito = local?.id === 'bollullo-chiringuito';
  const b = getBranding(localId || '') || null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!local) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4">Local no encontrado</h1>
          <Link to="/" className="text-gold-500 hover:text-gold-400">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  // --- Superficies y colores de marca ---
  const s = b?.surfaces;
  const pageBg = s?.page || '#141414';
  const sectionBg = s?.section || '#0e0e0e';
  const cardBg = s?.card || '#1d1d1d';

  const accent = b?.colors.primary || undefined;
  const accentHover = b?.colors.accent || undefined;
  const accentLight = b ? `${b.colors.primary}1a` : undefined;
  const accentBorder = b ? `${b.colors.primary}4d` : undefined;

  // Gradiente hero: cada local funde la foto hacia su propio fondo de pagina
  const heroGradient = b
    ? isMirador
      ? `linear-gradient(to top, ${pageBg} 0%, ${pageBg}cc 35%, rgba(65,50,38,0.18) 100%)`
      : isOasis
        ? `linear-gradient(to top, ${pageBg} 0%, ${pageBg}bb 35%, rgba(40,65,50,0.15) 100%)`
        : `linear-gradient(to top, ${pageBg} 0%, ${pageBg}bb 35%, rgba(30,50,75,0.18) 100%)`
    : undefined;

  // Gradiente CTA: overlay horizontal que funde la foto con el fondo
  const ctaGradient = b
    ? `linear-gradient(to right, ${pageBg} 0%, ${pageBg}dd 30%, ${pageBg}dd 70%, ${pageBg} 100%)`
    : undefined;

  // Borde sutil de separación entre secciones con tinte de marca
  const sectionBorderColor = b ? `${b.colors.primary}15` : undefined;

  return (
    <main className="pt-20" style={{ backgroundColor: pageBg }}>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={local.heroImage}
            alt={local.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent"
            style={heroGradient ? { background: heroGradient } : undefined}
          />
        </div>

        <div className="relative h-full container-custom flex flex-col justify-end pb-16">
          <nav className="absolute top-8 left-1/2 -translate-x-1/2">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link to="/" className="hover:text-gold-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li>
                <Link to="/#locales" className="hover:text-gold-400 transition-colors">
                  Locales
                </Link>
              </li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li style={accent ? { color: accent } : undefined} className={!b ? 'text-gold-400' : ''}>
                {local.name} {local.subtitle}
              </li>
            </ol>
          </nav>

          <div className="animate-fade-up">
            {/* Logo del restaurante */}
            {b && (
              <img
                src={b.logo}
                alt={b.name}
                className="h-20 md:h-28 w-auto mb-6 drop-shadow-lg"
              />
            )}

            <span
              className={`font-script text-2xl mb-2 block ${!b ? 'text-gold-400' : ''}`}
              style={accent ? { color: accent } : undefined}
            >
              Grupo Bollullo
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">
              {local.name}{' '}
              <span
                className={!b ? 'text-gold-400' : ''}
                style={accent ? { color: accent } : undefined}
              >
                {local.subtitle}
              </span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">{local.description}</p>

            {/* Linea decorativa de marca */}
            {b && (
              <div className="flex items-center gap-3 mt-6">
                <div className="h-px w-16" style={{ backgroundColor: accent }} />
                <span className="text-sm tracking-[0.2em] uppercase" style={{ color: b.colors.secondary }}>
                  {isMirador ? 'Valle · Tradición · Atardecer' : isOasis ? 'Candelaria · Brisa · Terraza' : 'Arena · Olas · Sabor'}
                </span>
                <div className="h-px w-16" style={{ backgroundColor: accent }} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section
        className="py-16 bg-[#0e0e0e]"
        style={{
          backgroundColor: sectionBg,
          borderTop: sectionBorderColor ? `1px solid ${sectionBorderColor}` : undefined,
        }}
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Address */}
            <div
              className="rounded-lg p-6 border border-white/5 transition-colors"
              style={{ backgroundColor: cardBg }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentBorder || 'rgba(210,168,85,0.3)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: accentLight || 'rgba(210,168,85,0.1)' }}
                >
                  <MapPin className="w-6 h-6" style={{ color: accent || '#d2a855' }} />
                </div>
                <h3 className="font-serif text-xl text-white">Dirección</h3>
              </div>
              <p className="text-white/70">{local.address}</p>
            </div>

            {/* Phone */}
            <div
              className="rounded-lg p-6 border border-white/5 transition-colors"
              style={{ backgroundColor: cardBg }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentBorder || 'rgba(210,168,85,0.3)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: accentLight || 'rgba(210,168,85,0.1)' }}
                >
                  <Phone className="w-6 h-6" style={{ color: accent || '#d2a855' }} />
                </div>
                <h3 className="font-serif text-xl text-white">Reservas</h3>
              </div>
              <a
                href={`tel:${local.phone}`}
                className="text-white/70 transition-colors"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = accentHover || '#dbb977'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ''; }}
              >
                {local.phone}
              </a>
            </div>

            {/* Schedule */}
            <div
              className="rounded-lg p-6 border border-white/5 transition-colors"
              style={{ backgroundColor: cardBg }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentBorder || 'rgba(210,168,85,0.3)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: accentLight || 'rgba(210,168,85,0.1)' }}
                >
                  <Clock className="w-6 h-6" style={{ color: accent || '#d2a855' }} />
                </div>
                <h3 className="font-serif text-xl text-white">Horario</h3>
              </div>
              <p className="text-white/70">{local.schedule}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EDITORIAL STORYTELLING ═══ */}
      {local.story && local.story.length >= 3 && (
        <>
          {/* ── Apertura narrativa ── */}
          <section
            className="pt-24 md:pt-32 pb-6"
            style={{ borderTop: sectionBorderColor ? `1px solid ${sectionBorderColor}` : undefined }}
          >
            <div className="container-custom">
              <div className="max-w-2xl mx-auto text-center">
                <span
                  className={`font-script text-2xl md:text-3xl block mb-5 ${!b ? 'text-gold-400' : ''}`}
                  style={accent ? { color: accent } : undefined}
                >
                  Nuestra historia
                </span>
                {local.storyHeadline && (
                  <h2 className="font-serif text-4xl md:text-[3.5rem] text-white leading-[1.1] mb-8">
                    {local.storyHeadline}{' '}
                    {local.storyHeadlineAccent && (
                      <>
                        <br className="hidden md:block" />
                        <span
                          className={!b ? 'text-gold-400' : ''}
                          style={accent ? { color: accent } : undefined}
                        >
                          {local.storyHeadlineAccent}
                        </span>
                      </>
                    )}
                  </h2>
                )}
                <div
                  className="h-px w-16 mx-auto mb-8"
                  style={{ backgroundColor: accent || '#d2a855' }}
                />
                {local.storyIntro && (
                  <p className="text-white/50 text-lg md:text-xl italic font-serif leading-relaxed">
                    {local.storyIntro}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* ── Story blocks — layout varía por restaurante ── */}

          {isOasis ? (
            /* ═══════════════════════════════════════════════
               OASIS — Editorial aérea: panorámica + centrado
               Personalidad: luminosa, fresca, abierta, marina
               ═══════════════════════════════════════════════ */
            <>
              {/* ─ OASIS Bloque 1: Imagen panorámica cinematográfica + panel texto centrado ─ */}
              <section className="py-14 md:py-20">
                <div className="container-custom">
                  <div className="overflow-hidden rounded-lg mb-10 md:mb-14">
                    <div className="aspect-[16/9] md:aspect-[5/2]">
                      <img
                        src={local.story[0].image.src}
                        alt={local.story[0].image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="max-w-2xl mx-auto text-center">
                    <span
                      className={`uppercase text-xs tracking-[0.25em] block mb-4 ${!b ? 'text-gold-400' : ''}`}
                      style={accent ? { color: accent } : undefined}
                    >
                      {local.story[0].label}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                      {local.story[0].heading}
                    </h3>
                    <p className="text-white/60 leading-relaxed max-w-xl mx-auto">
                      {local.story[0].text}
                    </p>
                  </div>
                </div>
              </section>

              {/* ─ OASIS Bloque 2: Imagen derecha, texto izquierda ─ */}
              <section className="py-12 md:py-20">
                <div className="container-custom">
                  <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <span
                        className={`uppercase text-xs tracking-[0.25em] block mb-4 ${!b ? 'text-gold-400' : ''}`}
                        style={accent ? { color: accent } : undefined}
                      >
                        {local.story[1].label}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                        {local.story[1].heading}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {local.story[1].text}
                      </p>
                    </div>
                    <div className="md:col-span-7 order-1 md:order-2 overflow-hidden rounded-lg">
                      <div className="aspect-[4/3]">
                        <img
                          src={local.story[1].image.src}
                          alt={local.story[1].image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─ OASIS Bloque 3: Full-width aéreo — overlay suave, texto centrado ─ */}
              <section className="relative py-28 md:py-36 my-8 md:my-16">
                <div className="absolute inset-0">
                  <img
                    src={local.story[2].image.src}
                    alt={local.story[2].image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${pageBg} 0%, ${pageBg}dd 25%, ${pageBg}99 55%, ${pageBg}55 100%)`,
                    }}
                  />
                </div>
                <div className="container-custom relative text-center">
                  <div className="max-w-xl mx-auto">
                    <span
                      className={`uppercase text-xs tracking-[0.25em] block mb-4 ${!b ? 'text-gold-400' : ''}`}
                      style={accent ? { color: accent } : undefined}
                    >
                      {local.story[2].label}
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-[1.1]">
                      {local.story[2].heading}
                    </h3>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">
                      {local.story[2].text}
                    </p>
                  </div>
                </div>
              </section>
            </>
          ) : isChiringuito ? (
            /* ═══════════════════════════════════════════════
               CHIRINGUITO — Costero y libre: texto primero + overlay costero
               Personalidad: marina, vibrante, desenfadada, veraniega
               ═══════════════════════════════════════════════ */
            <>
              {/* ─ CHIRINGUITO Bloque 1: Texto izquierda, imagen dominante derecha ─ */}
              <section className="py-12 md:py-20">
                <div className="container-custom">
                  <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
                    <div className="md:col-span-4 order-2 md:order-1">
                      <span
                        className={`uppercase text-xs tracking-[0.25em] block mb-4 ${!b ? 'text-gold-400' : ''}`}
                        style={accent ? { color: accent } : undefined}
                      >
                        {local.story[0].label}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                        {local.story[0].heading}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {local.story[0].text}
                      </p>
                    </div>
                    <div className="md:col-span-8 order-1 md:order-2 overflow-hidden rounded-lg">
                      <div className="aspect-[3/2]">
                        <img
                          src={local.story[0].image.src}
                          alt={local.story[0].image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─ CHIRINGUITO Bloque 2: Full-width costero — overlay desde la derecha, texto derecha ─ */}
              <section className="relative py-28 md:py-36 my-8 md:my-16">
                <div className="absolute inset-0">
                  <img
                    src={local.story[1].image.src}
                    alt={local.story[1].image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to left, ${pageBg}f2 0%, ${pageBg}bb 40%, transparent 100%), linear-gradient(to top, ${pageBg} 0%, transparent 30%)`,
                    }}
                  />
                </div>
                <div className="container-custom relative flex md:justify-end">
                  <div className="max-w-lg md:text-right">
                    <span
                      className={`uppercase text-xs tracking-[0.25em] block mb-4 ${!b ? 'text-gold-400' : ''}`}
                      style={accent ? { color: accent } : undefined}
                    >
                      {local.story[1].label}
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-[1.1]">
                      {local.story[1].heading}
                    </h3>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">
                      {local.story[1].text}
                    </p>
                  </div>
                </div>
              </section>

              {/* ─ CHIRINGUITO Bloque 3: Imagen dominante izquierda + texto derecha ─ */}
              <section className="py-12 md:py-20">
                <div className="container-custom">
                  <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
                    <div className="md:col-span-8 overflow-hidden rounded-lg">
                      <div className="aspect-[3/2]">
                        <img
                          src={local.story[2].image.src}
                          alt={local.story[2].image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <span
                        className={`uppercase text-xs tracking-[0.25em] block mb-4 ${!b ? 'text-gold-400' : ''}`}
                        style={accent ? { color: accent } : undefined}
                      >
                        {local.story[2].label}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                        {local.story[2].heading}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {local.story[2].text}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            /* ═══════════════════════════════════════════════
               MIRADOR — Zigzag cinematográfico
               Personalidad: dramática, cálida, contemplativa
               ═══════════════════════════════════════════════ */
            <>
              {/* ─ Bloque 1: Imagen izquierda, texto derecha ─ */}
              <section className="py-12 md:py-20">
                <div className="container-custom">
                  <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
                    <div className="md:col-span-7 overflow-hidden rounded-lg">
                      <div className="aspect-[4/3]">
                        <img
                          src={local.story[0].image.src}
                          alt={local.story[0].image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-5">
                      <span
                        className={`uppercase text-xs tracking-[0.25em] block mb-4 ${!b ? 'text-gold-400' : ''}`}
                        style={accent ? { color: accent } : undefined}
                      >
                        {local.story[0].label}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                        {local.story[0].heading}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {local.story[0].text}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─ Bloque 2: Texto izquierda, imagen derecha (zigzag) ─ */}
              <section className="py-12 md:py-20">
                <div className="container-custom">
                  <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <span
                        className={`uppercase text-xs tracking-[0.25em] block mb-4 ${!b ? 'text-gold-400' : ''}`}
                        style={accent ? { color: accent } : undefined}
                      >
                        {local.story[1].label}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                        {local.story[1].heading}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {local.story[1].text}
                      </p>
                    </div>
                    <div className="md:col-span-7 order-1 md:order-2 overflow-hidden rounded-lg">
                      <div className="aspect-[4/3]">
                        <img
                          src={local.story[1].image.src}
                          alt={local.story[1].image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ─ Bloque 3: Inmersivo full-width — overlay dramático, texto lateral ─ */}
              <section className="relative py-28 md:py-36 my-8 md:my-16">
                <div className="absolute inset-0">
                  <img
                    src={local.story[2].image.src}
                    alt={local.story[2].image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: b
                        ? `linear-gradient(to right, ${pageBg}f2 0%, ${pageBg}cc 40%, transparent 100%), linear-gradient(to top, ${pageBg} 0%, transparent 40%)`
                        : 'linear-gradient(to right, #141414f2 0%, #141414cc 40%, transparent 100%), linear-gradient(to top, #141414 0%, transparent 40%)',
                    }}
                  />
                </div>
                <div className="container-custom relative">
                  <div className="max-w-lg">
                    <span
                      className={`uppercase text-xs tracking-[0.25em] block mb-4 ${!b ? 'text-gold-400' : ''}`}
                      style={accent ? { color: accent } : undefined}
                    >
                      {local.story[2].label}
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-[1.1]">
                      {local.story[2].heading}
                    </h3>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">
                      {local.story[2].text}
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* ── Cierre editorial — reserva integrada ── */}
          <section className="py-10 md:py-14">
            <div className="container-custom">
              <div className="max-w-md mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div
                    className="h-px flex-1 max-w-[60px]"
                    style={{ backgroundColor: accent || '#d2a855' }}
                  />
                  <span
                    className={`font-script text-xl ${!b ? 'text-gold-400' : ''}`}
                    style={accent ? { color: accent } : undefined}
                  >
                    Reservas
                  </span>
                  <div
                    className="h-px flex-1 max-w-[60px]"
                    style={{ backgroundColor: accent || '#d2a855' }}
                  />
                </div>
                <a
                  href={`tel:${local.phone}`}
                  className="font-serif text-2xl md:text-3xl text-white block mb-3 transition-colors"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = accent || '#d2a855'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
                >
                  {local.phone}
                </a>
                <p className="text-white/35 text-sm leading-relaxed">
                  {local.schedule}
                  <br />
                  {local.address}
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Features */}
      <section className="py-16" style={{ borderTop: sectionBorderColor ? `1px solid ${sectionBorderColor}` : undefined }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span
              className={`font-script text-xl mb-2 block ${!b ? 'text-gold-400' : ''}`}
              style={accent ? { color: accent } : undefined}
            >
              Características
            </span>
            <h2 className="font-serif text-4xl text-white">¿Qué nos hace especiales?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {local.features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: accentLight || 'rgba(210,168,85,0.1)' }}
                >
                  <Star className="w-8 h-8" style={{ color: accent || '#d2a855' }} />
                </div>
                <p className="text-white/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section
        className="py-16"
        style={{
          backgroundColor: sectionBg,
          borderTop: sectionBorderColor ? `1px solid ${sectionBorderColor}` : undefined,
        }}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <span
              className={`font-script text-xl mb-2 block ${!b ? 'text-gold-400' : ''}`}
              style={accent ? { color: accent } : undefined}
            >
              Descubre más
            </span>
            <h2 className="font-serif text-4xl text-white">Explora nuestra oferta</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to={`/cartas/${local.id === 'mirador-san-pedro' ? 'mirador' : local.id === 'bollullo-oasis' ? 'oasis' : 'chiringuito'}`}
              className="group rounded-lg p-8 border border-white/5 transition-all"
              style={{ backgroundColor: cardBg }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentBorder || 'rgba(210,168,85,0.3)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; }}
            >
              <Utensils className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" style={{ color: accent || '#d2a855' }} />
              <h3 className="font-serif text-xl text-white mb-2">Nuestra Carta</h3>
              <p className="text-white/60 mb-4">Descubre los platos que hacen único este local</p>
              <span
                className="flex items-center gap-2 group-hover:gap-3 transition-all"
                style={{ color: accent || '#dbb977' }}
              >
                Ver carta <ChevronRight className="w-4 h-4" />
              </span>
            </Link>

            {(local.id === 'mirador-san-pedro' || local.id === 'bollullo-oasis') && (
              <Link
                to={`/brunch/${local.id === 'mirador-san-pedro' ? 'mirador' : 'oasis'}`}
                className="group rounded-lg p-8 border border-white/5 transition-all"
                style={{ backgroundColor: cardBg }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentBorder || 'rgba(210,168,85,0.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; }}
              >
                <Calendar className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" style={{ color: accent || '#d2a855' }} />
                <h3 className="font-serif text-xl text-white mb-2">Brunch</h3>
                <p className="text-white/60 mb-4">Disfruta de nuestro brunch de fin de semana</p>
                <span
                  className="flex items-center gap-2 group-hover:gap-3 transition-all"
                  style={{ color: accent || '#dbb977' }}
                >
                  Ver brunch <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            )}

            <Link
              to="/eventos"
              className="group rounded-lg p-8 border border-white/5 transition-all"
              style={{ backgroundColor: cardBg }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentBorder || 'rgba(210,168,85,0.3)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; }}
            >
              <Wine className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" style={{ color: accent || '#d2a855' }} />
              <h3 className="font-serif text-xl text-white mb-2">Eventos</h3>
              <p className="text-white/60 mb-4">Celebra tus momentos especiales con nosotros</p>
              <span
                className="flex items-center gap-2 group-hover:gap-3 transition-all"
                style={{ color: accent || '#dbb977' }}
              >
                Más información <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" style={{ borderTop: sectionBorderColor ? `1px solid ${sectionBorderColor}` : undefined }}>
        <div className="absolute inset-0">
          <img src={local.heroImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-[#141414]"
            style={ctaGradient ? { background: ctaGradient } : undefined}
          />
        </div>
        <div className="container-custom relative text-center">
          {/* Logo sutil en CTA */}
          {b && (
            <img
              src={b.logo}
              alt=""
              className="h-12 w-auto mx-auto mb-6 opacity-40"
            />
          )}
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Reserva tu experiencia
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            No esperes más para disfrutar de la mejor gastronomía canaria en un entorno único
          </p>
          <a
            href={`tel:${local.phone}`}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded font-medium transition-colors ${!b ? 'bg-gold-500 text-[#141414] hover:bg-gold-400' : ''}`}
            style={b ? {
              backgroundColor: isOasis ? b.colors.backgroundAlt : b.colors.primary,
              color: '#ffffff',
            } : undefined}
            onMouseEnter={b ? (e) => { (e.currentTarget as HTMLElement).style.backgroundColor = isOasis ? b.colors.accent : isChiringuito ? b.colors.backgroundAlt : b.colors.accent; } : undefined}
            onMouseLeave={b ? (e) => { (e.currentTarget as HTMLElement).style.backgroundColor = isOasis ? b.colors.backgroundAlt : b.colors.primary; } : undefined}
          >
            <Phone className="w-5 h-5" />
            Llamar para reservar
          </a>
        </div>
      </section>

      {/* Smooth transition to footer */}
      <div className="h-20" style={{ background: `linear-gradient(to bottom, ${pageBg}, #141414)` }} />
    </main>
  );
}
