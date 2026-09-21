const { Button: HdrButton, IconButton: HdrIconButton } = window.BCDesignSystem_b342dd;

function Header({ onNavigate, onDonate, transparent = false, active = 'home' }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('kit-scroll');
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 40);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const onDark = transparent && !scrolled;
  const links = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'aboutus', label: 'Về chúng tôi' },
    { id: 'campaign', label: 'Thành tích' },
    { id: 'donors', label: 'Nhà hảo tâm' },
  ];

  const handleNav = (id) => {
    if (id === 'donors') {
      onNavigate('donors');
    } else if (id === 'aboutus') {
      onNavigate('aboutus');
    } else {
      onNavigate('home');
      setTimeout(() => {
        if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
        if (id === 'campaign') document.getElementById('recap-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: onDark ? 'rgba(42,15,61,0.85)' : 'rgba(255,253,248,0.86)',
      backdropFilter: 'saturate(140%) blur(12px)',
      borderBottom: onDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--border-subtle)',
      transition: 'all var(--dur-base) var(--ease-out)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px 28px',
        display: 'flex', alignItems: 'center', gap: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img
            src={onDark ? 'https://cdn.buoc.site/assets/logo-buoc-cream.png' : 'https://cdn.buoc.site/assets/logo-buoc.png'}
            alt="Bước" onClick={() => onNavigate('home')}
            style={{ height: 28, width: 'auto', cursor: 'pointer' }}
          />
          <div className="hide-mobile" style={{ width: 1, height: 28, background: onDark ? 'rgba(255,255,255,0.2)' : 'var(--border-subtle)' }} />
          <div className="hide-mobile" style={{ background: 'rgba(255,255,255,0.95)', padding: '5px 14px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--purple-800)', textTransform: 'uppercase', letterSpacing: 0.5, lineHeight: 1.2, whiteSpace: 'nowrap' }}>Bảo trợ pháp lý</span>
            <span style={{ width: 1, alignSelf: 'stretch', background: 'var(--purple-100)' }} />
            <img src="/assets/rainbow-school.webp" alt="Rainbow School" style={{ height: 32, width: 'auto', display: 'block' }} />
          </div>
        </div>
        <nav className="hide-mobile" style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
          {links.map(l => (
            <button key={l.id} onClick={() => handleNav(l.id)} style={{
              border: 'none', background: 'transparent', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
              fontWeight: active === l.id ? 'var(--weight-bold)' : 'var(--weight-medium)',
              color: onDark ? 'var(--cream-100)' : (active === l.id ? 'var(--color-primary)' : 'var(--text-body)'),
              padding: '8px 12px', borderRadius: 'var(--radius-pill)',
              opacity: onDark && active !== l.id ? 0.85 : 1,
            }}>{l.label}</button>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="show-mobile-flex" style={{ display: 'none' }}>
            <HdrIconButton variant={onDark ? 'onDark' : 'soft'} label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
              <BcIcon name={menuOpen ? "x" : "menu"} size={20} />
            </HdrIconButton>
          </div>
          <div className="hide-mobile" style={{ display: 'flex' }}>
            <HdrIconButton variant={onDark ? 'onDark' : 'soft'} label="Chia sẻ">
              <BcIcon name="share" size={18} />
            </HdrIconButton>
          </div>
          <HdrButton variant="accent" size="md" onClick={() => handleNav('donors')} iconLeft={<BcIcon name="heart" size={16} />}>
            Nhà hảo tâm
          </HdrButton>
        </div>
      </div>
      {menuOpen && (
        <div className="show-mobile-flex" style={{
          display: 'none', position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--surface-page)', padding: '16px 28px', flexDirection: 'column', gap: 16,
          borderBottom: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)'
        }}>
          {links.map(l => (
            <div key={l.id} onClick={() => { setMenuOpen(false); handleNav(l.id); }} style={{
              padding: '12px 0', fontSize: 'var(--text-lg)', fontWeight: active === l.id ? 'bold' : 'normal',
              color: active === l.id ? 'var(--purple-800)' : 'var(--text-body)', borderBottom: '1px solid var(--border-subtle)'
            }}>
              {l.label}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
window.Header = Header;
