function Footer({ onDonate }) {
  const { Button: FBtn } = window.BCDesignSystem_b342dd;
  return (
    <footer style={{ background: 'var(--purple-950)', color: 'var(--text-on-dark)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px 36px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'space-between' }}>
          <div style={{ maxWidth: 320 }}>
            <img src="https://cdn.buoc.site/assets/logo-buoc-cream.png" alt="Bước" style={{ height: 52, marginBottom: 16 }} />
            <p style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-lg)', color: 'var(--cream-300)', margin: '0 0 8px' }}>
              Hành trình vạn dặm bắt đầu từ một bước chân
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)', lineHeight: 1.7, margin: 0 }}>
              Dự án xã hội trao cơ hội tiếp cận hoạt động ngoại khoá &amp; kỹ năng sống cho học sinh cấp 2 vùng Tây Nguyên.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            {[
              { h: 'Dự án', items: [{label: 'Về Bước', href: '/aboutus'}, {label: 'Hai giai đoạn', href: '/#phases-section'}, {label: 'Học bổng trại hè', href: '/'}, {label: 'Câu chuyện', href: '/#recap-section'}] },
              { h: 'Tham gia', items: [{label: 'Trở thành mentor', href: 'https://www.facebook.com/Buocprojectxinchao'}, {label: 'Đối tác đồng hành', href: 'https://www.facebook.com/Buocprojectxinchao'}, {label: 'Lan toả', href: 'https://www.facebook.com/Buocprojectxinchao'}] },
              { h: 'Liên hệ', items: [{label: 'buocproject.workspace@gmail.com', href: 'mailto:buocproject.workspace@gmail.com'}, {label: 'Đắk Lắk, Tây Nguyên', href: '#'}, {label: 'Facebook', href: 'https://www.facebook.com/Buocprojectxinchao'}, {label: 'Instagram', href: 'https://www.instagram.com/buoc_duongcung/'}] },
            ].map(col => (
              <div key={col.h}>
                <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-300)', fontWeight: 700, marginBottom: 14 }}>{col.h}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map(it => {
                    const isDonate = it.label === 'Quyên góp';
                    return (
                      <a 
                        key={it.label} 
                        href={it.href} 
                        onClick={isDonate ? (e) => { e.preventDefault(); onDonate(); } : undefined}
                        target={it.href.startsWith('http') ? "_blank" : "_self"} 
                        style={{ color: 'var(--text-on-dark-muted)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}
                      >
                        {it.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 22, borderTop: '1px solid var(--border-on-dark)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-on-dark-muted)' }}>© 2026 Dự án Bước · Phi lợi nhuận vì cộng đồng · Developed by Phuc Tho</span>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="https://www.facebook.com/Buocprojectxinchao" target="_blank" style={{ color: 'var(--cream-200)' }}><BcIcon name="facebook" size={18} /></a>
            <a href="https://www.instagram.com/buoc_duongcung/" target="_blank" style={{ color: 'var(--cream-200)' }}><BcIcon name="instagram" size={18} /></a>
            <a href="mailto:buocproject.workspace@gmail.com" style={{ color: 'var(--cream-200)' }}><BcIcon name="mail" size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
