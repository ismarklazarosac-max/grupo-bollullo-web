
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Phone, Clock, Calendar, Coffee, Sun, Check } from 'lucide-react';
import { brunchConfig, localesConfig } from '../../config';
import { getBranding } from '../../branding';

export function BrunchPage() {
  const { brunchId } = useParams<{ brunchId: string }>();

  const brunch = brunchConfig.find(b => b.localId === brunchId);

  const localMap: Record<string, string> = {
    mirador: 'mirador-san-pedro',
    oasis: 'bollullo-oasis',
  };

  const local = localesConfig.find(l => l.id === localMap[brunchId || '']);

  // Branding
  const b = getBranding(brunchId || '') || null;
  const isMirador = brunchId === 'mirador';
  const isOasis = brunchId === 'oasis';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!brunch) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4">Brunch no encontrado</h1>
          <Link to="/" className="text-gold-500 hover:text-gold-400">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  // Superficies brunch: version mas luminosa que carta/local
  // para transmitir sensacion de mañana, luz natural y frescura
  const s = b?.surfaces;
  const pageBg = s
    ? isMirador ? '#241e14' : '#142820'
    : '#141414';
  const sectionBg = s
    ? isMirador ? '#1c1810' : '#0e1e16'
    : '#0e0e0e';
  const cardBg = s
    ? isMirador ? '#382e22' : '#1e3428'
    : '#1a1a1a';

  const accent = b?.colors.primary || '#d2a855';
  const accentSecondary = b?.colors.secondary || '#dbb977';
  const accentHover = b?.colors.accent || '#dbb977';
  const accentLight = b ? `${b.colors.primary}1a` : 'rgba(210,168,85,0.1)';
  const sectionBorderColor = b ? `${b.colors.primary}15` : undefined;

  // Gradientes
  const heroGradient = isMirador
    ? `linear-gradient(to top, ${pageBg} 0%, ${pageBg}cc 35%, rgba(65,50,38,0.12) 100%)`
    : isOasis
      ? `linear-gradient(to top, ${pageBg} 0%, ${pageBg}bb 35%, rgba(40,65,50,0.10) 100%)`
      : undefined;

  const ctaGradient = `linear-gradient(to right, ${pageBg} 0%, ${pageBg}ee 30%, ${pageBg}ee 70%, ${pageBg} 100%)`;

  // Boton
  const btnBg = isOasis ? (b?.colors.backgroundAlt || accent) : accent;
  const btnHover = isOasis ? (b?.colors.accent || accentHover) : accentHover;

  // Badge de precio
  const badgeBg = isOasis ? (b?.colors.backgroundAlt || accent) : accent;
  const badgeText = '#ffffff';

  return (
    <main className="pt-20" style={{ backgroundColor: pageBg }}>
      <section className="relative h-[55vh] sm:h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={brunch.image}
            alt={brunch.localName}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent"
            style={heroGradient ? { background: heroGradient } : undefined}
          />
        </div>

        <div className="relative h-full container-custom flex flex-col justify-end pb-12">
          <nav className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2">
            <ol className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/60">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Inicio</Link></li>
              <li><ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" /></li>
              <li><span style={{ color: accent }}>Brunch {brunch.localName}</span></li>
            </ol>
          </nav>

          <div className="animate-fade-up text-center">
            {/* Logo */}
            {b && (
              <img
                src={b.logo}
                alt={b.name}
                className="h-14 md:h-20 w-auto mx-auto mb-4 drop-shadow-lg"
              />
            )}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sun className="w-6 h-6" style={{ color: accent }} />
              <span className="text-white/80">Experiencia de fin de semana</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
              Brunch <span style={{ color: accent }}>{brunch.localName}</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {brunch.description}
            </p>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section
        className="py-8"
        style={{
          backgroundColor: sectionBg,
          borderTop: sectionBorderColor ? `1px solid ${sectionBorderColor}` : undefined,
          borderBottom: sectionBorderColor ? `1px solid ${sectionBorderColor}` : 'rgba(255,255,255,0.05)',
        }}
      >
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" style={{ color: accent }} />
              <div>
                <p className="text-white/60 text-sm">Horario</p>
                <p className="text-white">{brunch.schedule}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6" style={{ color: accent }} />
              <div>
                <p className="text-white/60 text-sm">Formato</p>
                <p className="text-white font-serif text-xl" style={{ color: accent }}>{brunch.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Coffee className="w-6 h-6" style={{ color: accent }} />
              <div>
                <p className="text-white/60 text-sm">Ambiente</p>
                <p className="text-white">Especialidad y producto fresco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu sections */}
      {brunch.menuSections && (
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="font-script text-xl mb-2 block" style={{ color: accent }}>Carta de brunch</span>
              <h2 className="font-serif text-4xl text-white">
                Especialidades de {brunch.localName}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {brunch.menuSections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="rounded-2xl border p-6 md:p-8"
                  style={{
                    backgroundColor: cardBg,
                    borderColor: b ? `${b.colors.primary}25` : 'rgba(255,255,255,0.1)',
                  }}
                >
                  <h3 className="font-serif text-2xl mb-6" style={{ color: b ? accentSecondary : '#ffffff' }}>{section.title}</h3>
                  <div className="space-y-5">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start justify-between gap-4 pb-4 last:border-b-0 last:pb-0"
                        style={{ borderBottom: `1px solid ${b ? b.colors.primary + '18' : 'rgba(255,255,255,0.1)'}` }}
                      >
                        <div className="flex-1">
                          <h4 className="font-serif text-xl text-white mb-1">{item.name}</h4>
                          <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                        </div>
                        <span className="font-serif text-xl whitespace-nowrap" style={{ color: accent }}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      <section
        className="py-16"
        style={{
          backgroundColor: sectionBg,
          borderTop: sectionBorderColor ? `1px solid ${sectionBorderColor}` : undefined,
        }}
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-script text-xl mb-2 block" style={{ color: accent }}>Lo más destacado</span>
              <h2 className="font-serif text-4xl text-white mb-6">
                Sabores para alargar la mañana
              </h2>
              <p className="text-white/70 mb-8">
                Una propuesta pensada para disfrutar sin prisa, entre café de especialidad, repostería artesana y platos con producto fresco.
              </p>

              <ul className="space-y-4">
                {brunch.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: accentLight }}
                    >
                      <Check className="w-4 h-4" style={{ color: accent }} />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src={brunch.image}
                alt={`Brunch en ${brunch.localName}`}
                className="rounded-lg w-full"
              />
              <div
                className="absolute -bottom-6 -left-6 p-6 rounded-lg"
                style={{ backgroundColor: badgeBg, color: badgeText }}
              >
                <p className="font-serif text-2xl md:text-3xl">{brunch.price}</p>
                <p className="text-sm opacity-90">producto cuidado y servicio relajado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" style={{ borderTop: sectionBorderColor ? `1px solid ${sectionBorderColor}` : undefined }}>
        <div className="absolute inset-0">
          <img src={brunch.image} alt="" className="w-full h-full object-cover opacity-10" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/90 to-[#141414]"
            style={{ background: ctaGradient }}
          />
        </div>
        <div className="container-custom relative text-center">
          {/* Logo sutil */}
          {b && (
            <img
              src={b.logo}
              alt=""
              className="h-12 w-auto mx-auto mb-6 opacity-40"
            />
          )}
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Reserva tu brunch
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Si quieres asegurar tu mesa para el fin de semana, ponte en contacto con el local y consulta disponibilidad.
          </p>
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
      </section>

      {/* Other brunch */}
      {brunchConfig.length > 1 && (
        <section
          className="py-16"
          style={{
            backgroundColor: sectionBg,
            borderTop: sectionBorderColor ? `1px solid ${sectionBorderColor}` : undefined,
          }}
        >
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="font-script text-xl mb-2 block" style={{ color: accent }}>Descubre más</span>
              <h2 className="font-serif text-3xl text-white">Brunch en otros locales</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {brunchConfig
                .filter(br => br.localId !== brunchId)
                .map((otherBrunch) => (
                  <Link
                    key={otherBrunch.localId}
                    to={`/brunch/${otherBrunch.localId}`}
                    className="group relative overflow-hidden rounded-lg aspect-video"
                  >
                    <img
                      src={otherBrunch.image}
                      alt={otherBrunch.localName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, #141414 0%, rgba(20,20,20,0.5) 50%, transparent 100%)` }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/60 text-sm mb-1">Brunch en</p>
                      <h3 className="font-serif text-2xl text-white group-hover:text-gold-400 transition-colors">
                        {otherBrunch.localName}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
      {/* Smooth transition to footer */}
      <div className="h-20" style={{ background: `linear-gradient(to bottom, ${pageBg}, #141414)` }} />
    </main>
  );
}
