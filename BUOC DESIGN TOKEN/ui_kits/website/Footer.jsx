function Footer({ onDonate }) {
  const { Button: FBtn } = window.BCDesignSystem_b342dd;
  return (
    <footer style={{ background: 'var(--gradient-night)', color: 'var(--text-on-dark)', position: 'relative', overflow: 'hidden' }}>
      <img src="../../assets/bg-starry-night.png" alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', opacity: 0.35, mixBlendMode: 'screen', pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px 36px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'space-between' }}>
          <div style={{ maxWidth: 320 }}>
            <img src="../../assets/logo-buoc-cream.png" alt="Bước" style={{ height: 52, marginBottom: 16 }} />
            <p style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-lg)', color: 'var(--cream-300)', margin: '0 0 8px' }}>
              Hành trình vạn dặm bắt đầu từ một bước chân
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)', lineHeight: 1.7, margin: 0 }}>
              Dự án xã hội trao cơ hội tiếp cận hoạt động ngoại khoá &amp; kỹ năng sống cho học sinh cấp 2 vùng Tây Nguyên.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            {[
              { h: 'Dự án', items: ['Về Bước', 'Hai giai đoạn', 'Học bổng trại hè', 'Câu chuyện'] },
              { h: 'Tham gia', items: ['Quyên góp', 'Trở thành mentor', 'Đối tác đồng hành', 'Lan toả'] },
              { h: 'Liên hệ', items: ['hello@buoc.vn', 'Đắk Lắk, Tây Nguyên', 'Facebook', 'Instagram'] },
            ].map(col => (
              <div key={col.h}>
                <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-300)', fontWeight: 700, marginBottom: 14 }}>{col.h}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map(it => (
                    <a key={it} href="#" onClick={e => e.preventDefault()} style={{ color: 'var(--text-on-dark-muted)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>{it}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 22, borderTop: '1px solid var(--border-on-dark)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-on-dark-muted)' }}>© 2026 Dự án Bước · Phi lợi nhuận vì cộng đồng</span>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#" onClick={e => e.preventDefault()} style={{ color: 'var(--cream-200)' }}><BcIcon name="facebook" size={18} /></a>
            <a href="#" onClick={e => e.preventDefault()} style={{ color: 'var(--cream-200)' }}><BcIcon name="instagram" size={18} /></a>
            <a href="#" onClick={e => e.preventDefault()} style={{ color: 'var(--cream-200)' }}><BcIcon name="mail" size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
