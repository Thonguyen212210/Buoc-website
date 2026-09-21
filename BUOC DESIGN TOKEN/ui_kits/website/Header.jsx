const { Button: HdrButton, IconButton: HdrIconButton } = window.BCDesignSystem_b342dd;

function Header({ onNavigate, onDonate, transparent = false, active = 'home' }) {
  const [scrolled, setScrolled] = React.useState(false);
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
    { id: 'campaign', label: 'Dự án' },
    { id: 'story', label: 'Hành trình' },
    { id: 'donors', label: 'Nhà hảo tâm' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: onDark ? 'transparent' : 'rgba(255,253,248,0.86)',
      backdropFilter: onDark ? 'none' : 'saturate(140%) blur(12px)',
      borderBottom: onDark ? '1px solid transparent' : '1px solid var(--border-subtle)',
      transition: 'all var(--dur-base) var(--ease-out)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px 28px',
        display: 'flex', alignItems: 'center', gap: 24,
      }}>
        <img
          src={onDark ? '../../assets/logo-buoc-cream.png' : '../../assets/logo-buoc.png'}
          alt="Bước" onClick={() => onNavigate('home')}
          style={{ height: 38, width: 'auto', cursor: 'pointer' }}
        />
        <nav style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
          {links.map(l => (
            <button key={l.id} onClick={() => onNavigate(l.id)} style={{
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
          <HdrIconButton variant={onDark ? 'onDark' : 'soft'} label="Chia sẻ">
            <BcIcon name="share" size={18} />
          </HdrIconButton>
          <HdrButton variant="accent" size="md" onClick={onDonate} iconLeft={<BcIcon name="heart" size={16} />}>
            Quyên góp
          </HdrButton>
        </div>
      </div>
    </header>
  );
}
window.Header = Header;
