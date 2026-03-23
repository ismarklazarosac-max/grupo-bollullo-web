import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, Users, Building2, Heart, Check, Sparkles } from 'lucide-react';
import { eventosConfig } from '../config';
import { getBranding } from '../branding';

// ---------------------------------------------------------------------------
// Paleta "Grupo Bollullo" para la pagina de Eventos
// No pertenece a ningun local — es identidad de grupo, premium y neutra.
// ---------------------------------------------------------------------------
const grupo = {
  page:    '#18161a',   // Gris-violeta muy oscuro
  section: '#121014',   // Secciones alternas, mas profundo
  card:    '#252228',   // Superficies elevadas
  accent:  '#d2a855',   // Dorado grupo (gold-500)
  accentHover: '#dbb977',
  accentLight: 'rgba(210,168,85,0.12)',
  accentBorder: 'rgba(210,168,85,0.30)',
  borderSubtle: 'rgba(210,168,85,0.10)',
};

// Mapeo de localId de la seccion "Elige tu ubicacion" a brandingId
const locationCards = [
  { to: '/locales/mirador-san-pedro', brandId: 'mirador-san-pedro', img: '/images/locales/mirador/hero.webp', name: 'Mirador San Pedro', sub: 'Vistas panorámicas' },
  { to: '/locales/bollullo-oasis',    brandId: 'bollullo-oasis',    img: '/images/locales/oasis/hero.webp',   name: 'Bollullo Oasis',    sub: 'Elegancia urbana' },
  { to: '/locales/bollullo-chiringuito', brandId: 'bollullo-chiringuito', img: '/images/locales/chiringuito/hero.webp', name: 'Bollullo Chiringuito', sub: 'Ambiente playero' },
];

export function EventosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20" style={{ backgroundColor: grupo.page }}>
      {/* ================================================================= */}
      {/* Hero                                                              */}
      {/* ================================================================= */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[420px]">
        <div className="absolute inset-0">
          <img
            src={eventosConfig.heroImage}
            alt="Eventos"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${grupo.page} 0%, ${grupo.page}cc 35%, rgba(24,22,26,0.15) 100%)`,
            }}
          />
        </div>

        <div className="relative h-full container-custom flex flex-col justify-end pb-16">
          <nav className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Inicio</Link></li>
              <li><ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" /></li>
              <li className="text-gold-400">Eventos</li>
            </ol>
          </nav>

          <div className="animate-fade-up text-center">
            {/* SVG decorativo grupo */}
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8" style={{ color: grupo.accent }} />
            </div>
            <span className="font-script text-gold-400 text-2xl mb-2 block">Celebraciones</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white mb-4 sm:mb-6">
              {eventosConfig.title}
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              {eventosConfig.description}
            </p>
            {/* Linea decorativa grupo */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-16" style={{ backgroundColor: grupo.accent }} />
              <span className="text-sm tracking-[0.2em] uppercase" style={{ color: grupo.accentHover }}>
                Grupo Bollullo
              </span>
              <div className="h-px w-16" style={{ backgroundColor: grupo.accent }} />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Tipos de Eventos                                                  */}
      {/* ================================================================= */}
      <section
        className="py-20"
        style={{
          backgroundColor: grupo.section,
          borderTop: `1px solid ${grupo.borderSubtle}`,
        }}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="font-script text-gold-400 text-xl mb-2 block">Nuestros servicios</span>
            <h2 className="font-serif text-4xl text-white">Tipos de eventos</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {eventosConfig.eventos.map((evento, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden border border-white/5 transition-all"
                style={{ backgroundColor: grupo.card }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = grupo.accentBorder; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={evento.image}
                    alt={evento.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-white mb-3">{evento.title}</h3>
                  <p className="text-white/60 mb-6">{evento.description}</p>

                  <ul className="space-y-2 mb-6">
                    {evento.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-white/70">
                        <Check className="w-4 h-4" style={{ color: grupo.accent }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Caracteristicas (Grupos / Empresas / Celebraciones)               */}
      {/* ================================================================= */}
      <section
        className="py-20"
        style={{ borderTop: `1px solid ${grupo.borderSubtle}` }}
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users,     title: 'Grupos',         desc: 'Desde reuniones íntimas hasta grandes celebraciones de hasta 100 personas' },
              { icon: Building2, title: 'Empresas',       desc: 'Soluciones a medida para eventos corporativos y team building' },
              { icon: Heart,     title: 'Celebraciones',  desc: 'Bodas, aniversarios, cumpleaños y momentos especiales' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="p-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: grupo.accentLight }}
                >
                  <Icon className="w-8 h-8" style={{ color: grupo.accent }} />
                </div>
                <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
                <p className="text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CTA Contacto                                                      */}
      {/* ================================================================= */}
      <section
        className="py-20 relative"
        style={{ borderTop: `1px solid ${grupo.borderSubtle}` }}
      >
        <div className="absolute inset-0">
          <img src={eventosConfig.heroImage} alt="" className="w-full h-full object-cover opacity-10" />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${grupo.section} 0%, ${grupo.section}ee 30%, ${grupo.section}ee 70%, ${grupo.section} 100%)`,
            }}
          />
        </div>

        <div className="container-custom relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-script text-gold-400 text-xl mb-2 block">Contacto</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              {eventosConfig.contactInfo.title}
            </h2>
            <p className="text-white/70 text-lg mb-10">
              {eventosConfig.contactInfo.description}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <a
                href={`tel:${eventosConfig.contactInfo.phone}`}
                className="flex items-center gap-3 px-6 py-4 rounded-lg border border-white/10 transition-colors"
                style={{ backgroundColor: grupo.card }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = grupo.accentBorder; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'; }}
              >
                <Phone className="w-6 h-6" style={{ color: grupo.accent }} />
                <div className="text-left">
                  <p className="text-white/60 text-sm">Teléfono</p>
                  <p className="text-white">{eventosConfig.contactInfo.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${eventosConfig.contactInfo.email}`}
                className="flex items-center gap-3 px-6 py-4 rounded-lg border border-white/10 transition-colors"
                style={{ backgroundColor: grupo.card }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = grupo.accentBorder; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'; }}
              >
                <Mail className="w-6 h-6" style={{ color: grupo.accent }} />
                <div className="text-left">
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-white">{eventosConfig.contactInfo.email}</p>
                </div>
              </a>
            </div>

            <a
              href={`mailto:${eventosConfig.contactInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-medium transition-colors"
              style={{ backgroundColor: grupo.accent, color: '#141414' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = grupo.accentHover; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = grupo.accent; }}
            >
              <Mail className="w-5 h-5" />
              Solicitar información
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Elige tu ubicacion — aqui SI se aplica branding por local          */}
      {/* ================================================================= */}
      <section
        className="py-20"
        style={{
          backgroundColor: grupo.section,
          borderTop: `1px solid ${grupo.borderSubtle}`,
        }}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="font-script text-gold-400 text-xl mb-2 block">Nuestros espacios</span>
            <h2 className="font-serif text-4xl text-white">Elige tu ubicación</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationCards.map((loc) => {
              const lb = getBranding(loc.brandId);
              const locAccent = lb?.colors.primary || grupo.accent;
              return (
                <Link
                  key={loc.to}
                  to={loc.to}
                  className="group relative overflow-hidden rounded-lg aspect-[4/5]"
                >
                  <img
                    src={loc.img}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${grupo.page} 0%, ${grupo.page}4d 50%, transparent 100%)`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-white group-hover:text-gold-400 transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-white/60">{loc.sub}</p>
                    {/* Linea de acento del local */}
                    <div
                      className="h-0.5 w-0 group-hover:w-12 transition-all duration-500 mt-2 rounded-full"
                      style={{ backgroundColor: locAccent }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Smooth transition to footer */}
      <div className="h-20" style={{ background: `linear-gradient(to bottom, ${grupo.page}, #141414)` }} />
    </main>
  );
}
