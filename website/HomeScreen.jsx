const { Button: HBtn, Badge: HBadge, Card: HCard, ProgressBar: HProgress, Stat: HStat, Avatar: HAvatar, Tag: HTag } = window.BCDesignSystem_b342dd;

function fmtVnd(n) { return new Intl.NumberFormat('vi-VN').format(n); }

function HomeHero({ c, onDonate, onNavigate, onPlayVideo }) {
  return (
    <section style={{ position: 'relative', color: 'var(--text-on-dark)' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <img src="https://cdn.buoc.site/assets/Background.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(42,15,61,0.45) 0%, rgba(61,26,82,0.25) 50%, rgba(96,48,120,0.55) 100%)' }} />
      </div>
      <div className="grid-responsive pad-mobile" style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 28px 100px', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
            <HBadge variant="onDark" dot>Đã gây quỹ thành công</HBadge>
            <HBadge variant="onDark"><BcIcon name="mapPin" size={12} style={{ marginRight: 5, verticalAlign: '-2px' }} />Tây Nguyên</HBadge>
          </div>
          <h1 className="text-responsive-h1" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-4xl)', lineHeight: 1.15, letterSpacing: 'var(--tracking-tight)', margin: '0 0 16px', color: 'var(--cream-100)' }}>
            Mỗi bước chân hôm nay, một tương lai rộng mở
          </h1>
          <p className="text-responsive-h2" style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-2xl)', color: 'var(--cream-300)', margin: '0 0 18px', lineHeight: 1.1 }}>
            Hành trình vạn dặm bắt đầu từ một bước chân
          </p>
          <p className="text-responsive-p" style={{ fontSize: 'var(--text-md)', color: 'var(--text-on-dark-muted)', lineHeight: 1.7, maxWidth: 480, margin: '0 0 28px' }}>
            Trại hè kỹ năng sống cho học sinh cấp 2 vùng Tây Nguyên — nơi các em được tiếp cận tư duy phản biện, AI và những hoạt động ngoại khoá đầu đời.
          </p>
          <div className="hero-btns-mobile" style={{ display: 'flex', gap: 12 }}>
            <HBtn variant="secondary" size="lg" onClick={onPlayVideo} style={{ color: 'var(--cream-100)', borderColor: 'rgba(255,240,168,0.5)' }}>
              <BcIcon name="play" size={15} style={{ marginRight: 8 }} />Xem hành trình
            </HBtn>
          </div>
        </div>
        
        <div className="card-center-mobile hero-card-container" style={{ justifySelf: 'end', width: '100%', maxWidth: 400 }}>
          <HCard variant="default" padding="lg" className="hero-card" style={{ boxShadow: 'var(--shadow-lg)', minHeight: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <img src="https://cdn.buoc.site/assets/logo-buoc.png" alt="Bước" className="hero-card-logo" style={{ height: 120, marginBottom: 16 }} />
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>Trại hè Bước · Mùa 2026</div>
              <div style={{ marginBottom: 16, display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: 8, rowGap: 2 }}>
                <span className="hero-card-amount" style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: 'var(--tracking-tight)', whiteSpace: 'nowrap' }}>{fmtVnd(c.raised)}₫</span>
                <span className="hero-card-goal" style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap' }}>/ {fmtVnd(c.goal)}₫</span>
              </div>
              <HProgress raised={c.raised} goal={c.goal} tone="gold" size="lg" />
            </div>
            <div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 1.65, textAlign: 'center', margin: '28px 0 16px' }}>
                Chiến dịch gây quỹ đã khép lại thành công. Bước xin chân thành cảm ơn sự đồng hành và hỗ trợ quý báu từ các mạnh thường quân.
              </p>
              <HBtn variant="primary" full size="lg" onClick={() => onNavigate('donors')} iconRight={<BcIcon name="arrowRight" size={16} />}>Danh sách nhà hảo tâm</HBtn>
            </div>
          </HCard>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const items = [
    { icon: 'users', title: 'Học sinh cấp 2', text: 'Các bạn 13–18 tuổi ở vùng Tây Nguyên, nơi ít cơ hội tiếp cận hoạt động ngoại khoá.' },
    { icon: 'lightbulb', title: 'Kỹ năng cho tương lai', text: 'Tư duy phản biện, cách học hiệu quả và làm quen với AI — hành trang bước vào đời.' },
    { icon: 'handHeart', title: 'Học bổng 50–100%', text: 'Chi phí trại hè được tài trợ qua các gói học bổng, để không em nào bị bỏ lại.' },
  ];
  return (
    <section className="pad-mobile" style={{ background: 'var(--surface-page)', padding: '100px 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: 12 }}>Vì sao có Bước</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', color: 'var(--purple-900)', margin: '0 0 16px', lineHeight: 1.1 }}>Giáo dục là đặc quyền?</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: 0, lineHeight: 1.5 }}>Trẻ em ở vùng xa không thiếu khả năng, các em chỉ thiếu một hệ sinh thái để phát huy tiềm năng đó.</p>
        </div>
        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {items.map(it => (
            <HCard key={it.title} variant="default" padding="lg" hoverable>
              <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--purple-100)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <BcIcon name={it.icon} size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', margin: '0 0 8px' }}>{it.title}</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{it.text}</p>
            </HCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function SocialImpactQuote({ image, imageAlt, objectPosition = 'center center', quote, name, role }) {
  return (
    <div className="social-impact-quote" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      height: '100%',
      padding: '24px 22px',
      borderRadius: 20,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,240,168,0.15)',
    }}>
      <img
        src={image}
        alt={imageAlt}
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition,
          flexShrink: 0,
          marginBottom: 16,
          boxShadow: '0 0 0 4px rgba(255,240,168,0.3)',
        }}
      />
      <blockquote style={{ margin: 0, padding: 0 }}>
        <p style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'var(--text-lg)',
          color: 'var(--cream-200)',
          lineHeight: 1.55,
          margin: '0 0 14px',
        }}>
          “{quote}”
        </p>
        <footer style={{ fontSize: 'var(--text-sm)', color: 'var(--cream-400)', fontWeight: 600, lineHeight: 1.4 }}>
          {name} · {role}
        </footer>
      </blockquote>
    </div>
  );
}

function SocialImpact() {
  const quotes = [
    {
      image: 'https://cdn.buoc.site/assets/anh-khoa.png',
      imageAlt: 'Võ Nguyễn Anh Khoa — Trại sinh Bước 2024',
      objectPosition: 'center 20%',
      quote: 'Với mình, hành trình đầu tiên khi được biết đến hoạt động ngoại khoá là cơ hội được tham gia trại hè Bước. Một mùa hè mở ra nhiều hơn một cơ hội cho mình được giải đáp những thắc mắc đầu tiên trong chặng hành trình sau này của mình.',
      name: 'Võ Nguyễn Anh Khoa',
      role: 'Trại sinh Bước 2024',
    },
    {
      image: 'https://cdn.buoc.site/assets/quang-huy.png',
      imageAlt: 'Phạm Hoàng Quang Huy — Trại sinh Bước',
      objectPosition: 'center 35%',
      quote: 'Là một học sinh ở huyện nhỏ, mình chưa từng nghĩ sẽ có cơ hội tham gia những hoạt động ngoại khóa ý nghĩa như ở Trại hè Bước. Tại đây, mình được khám phá một chân trời mới, nơi những trải nghiệm đã giúp mình nhận ra những điều mới mẻ về bản thân và thế giới xung quanh.',
      name: 'Phạm Hoàng Quang Huy',
      role: 'Trại sinh Bước 2024',
    },
  ];

  return (
    <section className="pad-mobile" style={{ background: 'var(--purple-800)', color: 'var(--cream-100)', padding: '80px 28px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 50% -20%, var(--cream-100), transparent 70%)' }} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-500)', fontWeight: 700, marginBottom: 12 }}>Tác động Xã hội</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', color: 'var(--cream-100)', margin: 0, lineHeight: 1.1 }}>Kiến tạo giá trị thực</h2>
        </div>
        
        <div className="grid-responsive social-impact-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--cream-300)', marginBottom: 8, lineHeight: 1 }}>
              <AnimatedCounter end={4} suffix="/5" />
            </div>
            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--cream-100)', marginBottom: 8 }}>Tỉnh Tây Nguyên</div>
            <p style={{ fontSize: 'var(--text-md)', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Trại sinh đến từ mọi miền của Tây Nguyên - Việt Nam.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--cream-300)', marginBottom: 8, lineHeight: 1 }}>
              <AnimatedCounter end={95} suffix="+" />
            </div>
            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--cream-100)', marginBottom: 8 }}>Học sinh tham gia</div>
            <p style={{ fontSize: 'var(--text-md)', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Cung cấp cơ hội trải nghiệm thực tế và rèn luyện kỹ năng.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--cream-300)', marginBottom: 8, lineHeight: 1 }}>
              <AnimatedCounter end={4} />
            </div>
            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--cream-100)', marginBottom: 8 }}>Sự kiện lớn</div>
            <p style={{ fontSize: 'var(--text-md)', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Tổng cộng 4 sự kiện lớn đã được tổ chức trong hành trình của Bước.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--cream-300)', marginBottom: 8, lineHeight: 1 }}>
              Hơn <AnimatedCounter end={90} suffix="%" />
            </div>
            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--cream-100)', marginBottom: 8 }}>Tiếp tục phát triển sau trại</div>
            <p style={{ fontSize: 'var(--text-md)', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Trại sinh tham gia thêm ít nhất một hoạt động ngoại khóa hoặc thử một đam mê mới sau trại.</p>
          </div>
        </div>

        <div className="social-impact-quotes">
          {quotes.map((q) => (
            <SocialImpactQuote key={q.name} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const days = [
    { day: 'Ngày 1', title: 'Giới thiệu & kết nối', img: 'https://cdn.buoc.site/assets/recap2025/ngay1.png' },
    { day: 'Ngày 2', title: 'Hoạt động training', img: 'https://cdn.buoc.site/assets/recap2025/ngay2.png' },
    { day: 'Ngày 3', title: 'Chia sẻ & gắn kết', img: 'https://cdn.buoc.site/assets/recap2025/ngay3.png' },
    { day: 'Ngày 4', title: 'Lời chào tạm biệt', img: 'https://cdn.buoc.site/assets/recap2025/ngay4.png' }
  ];

  return (
    <section id="video-section" className="pad-mobile" style={{ background: 'var(--surface-page)', padding: '60px 28px 80px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'center', marginBottom: 48 }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-xl)', background: '#000', display: 'flex' }}>
            <video src="https://cdn.buoc.site/assets/Video%20recap.mp4" controls style={{ width: '100%', display: 'block' }} />
          </div>
          <div className="center-mobile" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 className="text-responsive-h2" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--purple-900)', margin: 0 }}>
              Trại hè giáo dục <span style={{ whiteSpace: 'nowrap' }}>“Bước 2025”</span>
            </h3>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
              Diễn ra trong 4 ngày 3 đêm, trại hè đã tạo sự kết nối giữa trại sinh và BTC thông qua các hoạt động sáng tạo, tư duy phản biện, tìm hiểu khoa học và chia sẻ kiến thức.
            </p>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
              Các bạn Trại sinh được hoạt động nhóm trình bày Ứng dụng kỹ năng Giải quyết vấn đề nhằm đưa ra giải pháp cho những vấn đề trong xã hội.
            </p>
          </div>
        </div>

        <div className="recap-days-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {days.map((d, idx) => (
            <HCard 
              key={idx} 
              padding="none" 
              style={{ 
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                background: 'var(--surface-card)'
              }}
            >
              <div style={{ position: 'relative', paddingTop: '75%', background: '#f0f0f0', overflow: 'hidden' }}>
                <img 
                  src={d.img} 
                  alt={`${d.day} - ${d.title}`} 
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 4 }}>
                  {d.day}
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 700, color: 'var(--text-strong)', margin: 0 }}>
                  {d.title}
                </h4>
              </div>
            </HCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Phases({ onNavigate }) {
  const phases = [
    { tag: 'Phase 1', icon: 'bookOpen', title: 'Tập huấn kỹ năng', dur: 'Trước trại hè', text: 'Các buổi training về tư duy phản biện, phương pháp học tập và làm quen với AI.', points: ['Tư duy phản biện', 'Cách học hiệu quả', 'Nhập môn AI'] },
    { tag: 'Phase 2', icon: 'tent', title: 'Trại hè 4 ngày 3 đêm', dur: '4 ngày · 3 đêm', text: 'Các bạn cùng học tập, thực hành và trải nghiệm trong một môi trường trại hè đúng nghĩa.', points: ['Hoạt động nhóm', 'Thực hành dự án', 'Kết nối &amp; sẻ chia'] },
  ];
  return (
    <section id="phases-section" style={{ background: 'var(--surface-card)', padding: '80px 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
          <div className="text-responsive-p" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-700)', fontWeight: 700, marginBottom: 12 }}>Tiến trình dự án</div>
          <h2 className="text-responsive-h1" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', margin: 0, lineHeight: 1.1 }}>Hai giai đoạn, một hành trình</h2>
        </div>
        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {phases.map((p, i) => (
            <HCard key={p.tag} variant={i === 1 ? 'dark' : 'soft'} padding="lg">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: i === 1 ? 'rgba(255,240,168,0.16)' : 'var(--purple-100)', color: i === 1 ? 'var(--cream-300)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BcIcon name={p.icon} size={24} />
                </div>
                <div>
                  <HBadge variant={i === 1 ? 'onDark' : 'accent'}>{p.tag}</HBadge>
                  <div style={{ fontSize: 'var(--text-xs)', color: i === 1 ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', marginTop: 4 }}>{p.dur}</div>
                </div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: i === 1 ? 'var(--cream-100)' : 'var(--text-strong)', margin: '0 0 10px' }}>{p.title}</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: i === 1 ? 'var(--text-on-dark-muted)' : 'var(--text-body)', lineHeight: 1.7, margin: '0 0 18px' }} dangerouslySetInnerHTML={{ __html: p.text }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.points.map(pt => (
                  <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'var(--text-sm)', color: i === 1 ? 'var(--cream-100)' : 'var(--text-strong)' }}>
                    <BcIcon name="checkCircle" size={18} color={i === 1 ? 'var(--cream-300)' : 'var(--success)'} />
                    <span dangerouslySetInnerHTML={{ __html: pt }} />
                  </div>
                ))}
              </div>
            </HCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecapGallery() {
  return (
    <section id="recap-section" className="pad-mobile" style={{ background: 'var(--surface-card)', padding: '0 28px 80px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-700)', fontWeight: 700, marginBottom: 12 }}>Nhìn lại chặng đường</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', color: 'var(--purple-900)', margin: 0, lineHeight: 1.1 }}>Mùa 1 & Mùa 2</h2>
        </div>
        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <HCard padding="none" style={{ overflow: 'hidden' }}>
            <img src="https://cdn.buoc.site/assets/Recap2024.jpg" alt="Recap 2024" style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: 20, textAlign: 'center', fontWeight: 700, color: 'var(--text-strong)', fontSize: 'var(--text-lg)' }}>Mùa 1 - 2024</div>
          </HCard>
          <HCard padding="none" style={{ overflow: 'hidden' }}>
            <img src="https://cdn.buoc.site/assets/Recap2025.jpg" alt="Recap 2025" style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: 20, textAlign: 'center', fontWeight: 700, color: 'var(--text-strong)', fontSize: 'var(--text-lg)' }}>Mùa 2 - 2025</div>
          </HCard>
        </div>
      </div>
    </section>
  );
}

function Recap2024() {
  const days = [
    { day: 'Ngày 1', title: 'Gắn kết', img: 'https://cdn.buoc.site/assets/recap2024/ngay1.png' },
    { day: 'Ngày 2', title: 'Ngày khoa học', img: 'https://cdn.buoc.site/assets/recap2024/ngay2.png' },
    { day: 'Ngày 3', title: 'Tư duy phản biện', img: 'https://cdn.buoc.site/assets/recap2024/ngay3.png' },
    { day: 'Ngày 4', title: 'Ngày chia sẻ', img: 'https://cdn.buoc.site/assets/recap2024/ngay4.png' },
    { day: 'Ngày 5', title: 'Lời tạm biệt', img: 'https://cdn.buoc.site/assets/recap2024/ngay5.png' }
  ];

  return (
    <section className="pad-mobile" style={{ background: 'var(--surface-card)', padding: '0 28px 80px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 32, marginBottom: 48, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-700)', fontWeight: 700, marginBottom: 8 }}>Nhìn lại chặng đường</div>
            <h2 className="text-responsive-h2" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', color: 'var(--purple-900)', margin: 0, lineHeight: 1.2 }}>
              Trại hè giáo dục <span style={{ whiteSpace: 'nowrap' }}>“Bước 2024”</span>
            </h2>
          </div>
          <div className="text-responsive-p" style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 12px' }}>
              Diễn ra trong 5 ngày 4 đêm, trại hè đã truyền tải nhiều chủ đề khác nhau tới các bạn trại sinh. Đồng hành cùng các bạn khám phá các hoạt động ngoại khóa, STEM, và kỹ năng mềm.
            </p>
            <p style={{ margin: 0 }}>
              Trại hè cũng mang đến những hoạt động chia sẻ kinh nghiệm học tập/ dự án xã hội, với sự đồng hành của Ban Tổ Chức và 2 diễn giả.
            </p>
          </div>
        </div>

        <div className="recap-days-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {days.map((d, idx) => (
            <HCard 
              key={idx} 
              padding="none" 
              style={{ 
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                background: 'var(--surface-card)'
              }}
            >
              <div style={{ position: 'relative', paddingTop: '75%', background: '#f0f0f0', overflow: 'hidden' }}>
                <img 
                  src={d.img} 
                  alt={`${d.day} - ${d.title}`} 
                  style={{ 
                    position: 'absolute', 
                    top: d.shrink ? '5%' : 0, 
                    left: d.shrink ? '5%' : 0, 
                    width: d.shrink ? '90%' : '100%', 
                    height: d.shrink ? '90%' : '100%', 
                    objectFit: d.shrink ? 'contain' : 'cover' 
                  }} 
                />
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 4 }}>
                  {d.day}
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 700, color: 'var(--text-strong)', margin: 0 }}>
                  {d.title}
                </h4>
              </div>
            </HCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivityImage({ src, alt, aspectRatio = '4/3', objectPosition = 'center center' }) {
  return (
    <div style={{
      position: 'relative',
      aspectRatio,
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      background: 'var(--purple-50)',
    }}>
      <img
        src={src}
        alt={alt}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition, display: 'block' }}
      />
    </div>
  );
}

function ActivityGallery() {
  return (
    <section className="pad-mobile activity-gallery" style={{ background: 'var(--cream-100)', padding: '80px 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-700)', fontWeight: 700, marginBottom: 12 }}>Trải nghiệm Trại sinh</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', margin: 0, lineHeight: 1.1 }}>Học tập, thực hành và sẻ chia</h2>
        </div>

        <div className="activity-gallery-stack">
          <div className="activity-gallery-pair">
            <ActivityImage src="https://cdn.buoc.site/assets/NGUYENHIENLE.jpg" alt="Trại sinh Bước — hoạt động học tập" aspectRatio="3/2" />
            <ActivityImage src="https://cdn.buoc.site/assets/Thason.jpg" alt="Trại sinh Bước — trải nghiệm thực tế" aspectRatio="3/2" objectPosition="center 30%" />
          </div>

          <div className="activity-gallery-split">
            <div className="activity-gallery-copy">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 16px', lineHeight: 1.25 }}>Giáo dục Thực tế Trực quan</h3>
              <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
                Trại sinh được trực tiếp tham gia các hoạt động giáo dục thực tế trực quan, khơi dậy niềm đam mê khoa học và tìm tòi khám phá thông qua những thí nghiệm sinh động, giúp các em tự do sáng tạo và hiểu rõ hơn về thế giới xung quanh.
              </p>
            </div>
            <div className="activity-gallery-duo">
              <ActivityImage src="https://cdn.buoc.site/assets/Thinghiem1.jpg" alt="Thí nghiệm khoa học tại trại hè" aspectRatio="1" />
              <ActivityImage src="https://cdn.buoc.site/assets/Thinghiem2.jpg" alt="Trại sinh thực hành thí nghiệm" aspectRatio="1" />
            </div>
          </div>

          <div className="activity-gallery-split activity-gallery-split-reverse">
            <div className="activity-gallery-duo">
              <ActivityImage src="https://cdn.buoc.site/assets/hoatdong.jpg" alt="Hoạt động nhóm tại trại hè" aspectRatio="1" />
              <ActivityImage src="https://cdn.buoc.site/assets/hoatdong3.jpg" alt="Trò chơi tập thể rèn kỹ năng mềm" aspectRatio="1" />
            </div>
            <div className="activity-gallery-copy">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 16px', lineHeight: 1.25 }}>Rèn luyện Kĩ năng Mềm</h3>
              <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
                Học sinh được trải nghiệm các hoạt động thảo luận nhóm và trò chơi tập thể, từ đó rèn luyện tư duy phản biện, kĩ năng làm việc nhóm, giao tiếp và xử lý tình huống — những hành trang vô giá cho sự phát triển trong tương lai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FundUse() {
  const docs = [
    { href: '/proposal', label: 'Hồ sơ dự án', icon: 'bookOpen' },
    { href: '/stakeholders', label: 'Quyền lợi nhà tài trợ', icon: 'shield' },
    { href: '/budgeting', label: 'Dự trù kinh phí', icon: 'target' },
  ];
  return (
    <section className="pad-mobile fund-section" style={{ background: 'var(--surface-page)', padding: '80px 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <HCard variant="soft" padding="lg">
          <div className="text-responsive-p" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-700)', fontWeight: 700, marginBottom: 16 }}>Minh bạch &amp; tài liệu</div>
          <div className="fund-section-docs">
            <div className="fund-section-commitment">
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
                <strong>Cam kết minh bạch:</strong> Nhằm bảo đảm tính công khai và minh bạch tuyệt đối, toàn bộ sao kê tài khoản nhận tài trợ từ cộng đồng sẽ được công bố rộng rãi cùng báo cáo tài chính chi tiết trong giai đoạn tổng kết nhiệm kỳ (dự kiến vào tháng 9 - 10). Mọi sự đóng góp của bạn đều được trân trọng, cam kết sử dụng đúng mục đích và mang lại giá trị thực chất nhất cho các em học sinh.
              </p>
            </div>
            <div className="fund-section-docs-actions">
              {docs.map((doc) => (
                <HBtn
                  key={doc.href}
                  variant="secondary"
                  size="md"
                  iconLeft={<BcIcon name={doc.icon} size={16} />}
                  iconRight={<BcIcon name="arrowRight" size={16} />}
                  onClick={() => window.open(doc.href, '_blank', 'noopener,noreferrer')}
                >
                  {doc.label}
                </HBtn>
              ))}
            </div>
          </div>
        </HCard>
      </div>
    </section>
  );
}

function DonorStrip({ c, onNavigate }) {
  return (
    <section style={{ background: 'var(--surface-card)', padding: '72px 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 8px' }}>
          {c.donors} tấm lòng đã cùng Bước
        </h2>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', margin: '0 0 28px' }}>Mỗi cái tên là một lời chúc gửi đến các em.</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          {c.recentDonors.slice(0, 7).map((d, i) => (
            <div key={i} style={{ marginLeft: i ? -12 : 0 }}><HAvatar name={d.name} size="lg" ring style={{ boxShadow: '0 0 0 3px var(--surface-card)' }} /></div>
          ))}
          <div style={{ marginLeft: -12, width: 60, height: 60, borderRadius: '50%', background: 'var(--purple-700)', color: 'var(--cream-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 'var(--text-sm)', boxShadow: '0 0 0 3px var(--surface-card)' }}>+{c.donors - 7}</div>
        </div>
        <HBtn variant="secondary" onClick={() => onNavigate('donors')} iconRight={<BcIcon name="arrowRight" size={16} />}>Xem bảng vinh danh</HBtn>
      </div>
    </section>
  );
}

function FinalCta({ onDonate }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--gradient-night)', padding: '88px 28px', textAlign: 'center' }}>
      <img src="https://cdn.buoc.site/assets/Background.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, mixBlendMode: 'screen' }} />
      <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
        <BcIcon name="sparkles" size={32} color="var(--cream-300)" style={{ marginBottom: 16 }} />
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-3xl)', color: 'var(--cream-100)', margin: '0 0 14px', lineHeight: 1.1 }}>
          Một bước của bạn, vạn dặm của các em
        </h2>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-on-dark-muted)', lineHeight: 1.7, margin: '0 0 28px' }}>
          Nhờ sự chung tay của các mạnh thường quân, học sinh Tây Nguyên sẽ có một mùa hè được học, được chơi, và được mơ ước.
        </p>
      </div>
    </section>
  );
}

function HomeScreen({ onDonate, onNavigate }) {
  const c = window.CAMPAIGN;
  return (
    <div>
      <HomeHero c={c} onDonate={onDonate} onNavigate={onNavigate} onPlayVideo={() => {
        const el = document.getElementById('video-section');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }} />
      <Mission />
      <SocialImpact />
      <Phases onNavigate={onNavigate} />
      <RecapGallery />
      <Recap2024 />
      <VideoSection />
      <ActivityGallery />
      <FundUse />
      <DonorStrip c={c} onNavigate={onNavigate} />
      <FinalCta onDonate={onDonate} />
      <Footer onDonate={onDonate} />
    </div>
  );
}
window.HomeScreen = HomeScreen;
