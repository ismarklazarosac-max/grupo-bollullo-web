import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Phone, MapPin } from 'lucide-react';
import { cartasConfig, localesConfig } from '../../config';
import { getBranding } from '../../branding';

export function CartaPage() {
  const { cartaId } = useParams<{ cartaId: string }>();

  const carta = cartasConfig.find(c => c.localId === cartaId);

  const localMap: Record<string, string> = {
    'mirador': 'mirador-san-pedro',
    'oasis': 'bollullo-oasis',
    'chiringuito': 'bollullo-chiringuito'
  };

  const local = localesConfig.find(l => l.id === localMap[cartaId || '']);

  // Branding
  const b = getBranding(cartaId || '') || null;
  const isOasis = cartaId === 'oasis';
  const isChiringuito = cartaId === 'chiringuito';
  const isMirador = cartaId === 'mirador';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!carta) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4">Carta no encontrada</h1>
          <Link to="/" className="text-gold-500 hover:text-gold-400">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  // --- Superficies y colores ---
  const s = b?.surfaces;
  const pageBg = s?.page || '#141414';
  const sectionBg = s?.section || '#0e0e0e';
  const cardBg = s?.card || '#1d1d1d';
  const accent = b?.colors.primary || '#d2a855';
  const accentSecondary = b?.colors.secondary || '#dbb977';
  const accentHover = b?.colors.accent || '#dbb977';
  const accentBorder = b ? `${b.colors.primary}40` : 'rgba(210,168,85,0.25)';
  const dividerColor = b ? `${b.colors.primary}30` : 'rgba(210,168,85,0.2)';
  const sectionBorder = b ? `${b.colors.primary}18` : undefined;

  // Gradientes
  const heroGradient = isMirador
    ? `linear-gradient(to top, ${pageBg} 0%, ${pageBg}dd 30%, rgba(65,50,38,0.25) 100%)`
    : isOasis
      ? `linear-gradient(to top, ${pageBg} 0%, ${pageBg}cc 30%, rgba(40,65,50,0.20) 100%)`
      : isChiringuito
        ? `linear-gradient(to top, ${pageBg} 0%, ${pageBg}cc 30%, rgba(20,40,70,0.22) 100%)`
        : undefined;

  // Botones
  const btnBg = isOasis ? (b?.colors.backgroundAlt || accent) : accent;
  const btnHover = isOasis ? (b?.colors.accent || accentHover) : isChiringuito ? (b?.colors.backgroundAlt || accentHover) : accentHover;

  return (
    <main className="pt-20" style={{ backgroundColor: pageBg }}>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={carta.heroImage || local?.heroImage || '/images/hero-banner.jpg'}
            alt={carta.localName}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: heroGradient || `linear-gradient(to top, #141414 0%, rgba(20,20,20,0.6) 40%, rgba(20,20,20,0.3) 100%)` }}
          />
        </div>

        <div className="relative h-full container-custom flex flex-col justify-end pb-12">
          <nav className="absolute top-8 left-1/2 -translate-x-1/2">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Inicio</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><span style={{ color: accent }}>Carta {carta.localName}</span></li>
            </ol>
          </nav>

          <div className="animate-fade-up text-center">
            {b && (
              <img src={b.logo} alt={b.name} className="h-16 md:h-24 w-auto mx-auto mb-5 drop-shadow-lg" />
            )}
            <span className="font-script text-2xl mb-2 block" style={{ color: accent }}>Nuestra Carta</span>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">{carta.localName}</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Descubre nuestra selección de platos preparados con ingredientes frescos y de proximidad
            </p>
            {b && (
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-px w-12" style={{ backgroundColor: accent }} />
                <span className="text-xs tracking-[0.25em] uppercase" style={{ color: accentSecondary }}>
                  {isMirador ? 'Gastronomía de autor' : isOasis ? 'Cocina fresca y natural' : 'Sabores del mar'}
                </span>
                <div className="h-px w-12" style={{ backgroundColor: accent }} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section
        className="py-16"
        style={{ borderTop: sectionBorder ? `1px solid ${sectionBorder}` : undefined }}
      >
        <div className="container-custom max-w-4xl">
          {carta.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              {/* Category header */}
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl text-white mb-3">{category.title}</h2>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-8" style={{ backgroundColor: dividerColor }} />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent, opacity: 0.6 }} />
                  <div className="h-px w-8" style={{ backgroundColor: dividerColor }} />
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-start gap-4 p-6 rounded-lg border transition-all duration-200"
                    style={{
                      backgroundColor: cardBg,
                      borderColor: `${accent}12`,
                      borderLeftWidth: '3px',
                      borderLeftColor: `${accent}30`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderLeftColor = accent;
                      (e.currentTarget as HTMLElement).style.borderColor = accentBorder;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderLeftColor = `${accent}30`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${accent}12`;
                    }}
                  >
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-white mb-1">{item.name}</h3>
                      <p className="text-white/55 text-sm">{item.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="font-serif text-2xl font-medium" style={{ color: accent }}>{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info & CTA */}
      <section
        className="py-16"
        style={{
          backgroundColor: sectionBg,
          borderTop: sectionBorder ? `1px solid ${sectionBorder}` : undefined,
        }}
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-3xl text-white mb-4">
                ¿Tienes alguna alergia o intolerancia?
              </h2>
              <p className="text-white/70 mb-6">
                Nuestro equipo está preparado para adaptar nuestros platos a tus necesidades dietéticas.
                No dudes en consultarnos.
              </p>
              <div className="flex flex-wrap gap-4">
                {local && (
                  <>
                    <div className="flex items-center gap-2 text-white/60">
                      <MapPin className="w-5 h-5" style={{ color: accent }} />
                      <span>{local.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <Phone className="w-5 h-5" style={{ color: accent }} />
                      <a
                        href={`tel:${local.phone}`}
                        className="transition-colors"
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = accentHover; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ''; }}
                      >
                        {local.phone}
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/60 mb-4">Reserva tu mesa ahora</p>
              {local && (
                <a
                  href={`tel:${local.phone}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded font-medium transition-colors"
                  style={{ backgroundColor: btnBg, color: '#ffffff' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = btnHover; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = btnBg; }}
                >
                  <Phone className="w-5 h-5" />
                  Llamar para reservar
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Menus */}
      <section className="py-16" style={{ borderTop: sectionBorder ? `1px solid ${sectionBorder}` : undefined }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-script text-xl mb-2 block" style={{ color: accent }}>Explora más</span>
            <h2 className="font-serif text-3xl text-white">Otras cartas</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cartasConfig
              .filter(c => c.localId !== cartaId)
              .map((otherCarta) => {
                const otherLocal = localesConfig.find(l => l.id === localMap[otherCarta.localId]);
                return (
                  <Link
                    key={otherCarta.localId}
                    to={`/cartas/${otherCarta.localId}`}
                    className="group relative overflow-hidden rounded-lg aspect-video"
                  >
                    <img
                      src={otherLocal?.heroImage || '/images/hero-banner.jpg'}
                      alt={otherCarta.localName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, #141414 0%, rgba(20,20,20,0.5) 50%, transparent 100%)` }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-xl text-white group-hover:text-gold-400 transition-colors">
                        {otherCarta.localName}
                      </h3>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* Smooth transition to footer */}
      <div className="h-20" style={{ background: `linear-gradient(to bottom, ${pageBg}, #141414)` }} />
    </main>
  );
}
