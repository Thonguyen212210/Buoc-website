const { Button: HBtn, Badge: HBadge, Card: HCard, ProgressBar: HProgress, Stat: HStat, Avatar: HAvatar, Tag: HTag } = window.BCDesignSystem_b342dd;

function fmtVnd(n) { return new Intl.NumberFormat('vi-VN').format(n); }

function HomeHero({ c, onDonate, onNavigate }) {
  return (
    <section style={{ position: 'relative', color: 'var(--text-on-dark)', overflow: 'hidden' }}>
      <img src="../../assets/bg-starry-night.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(42,15,61,0.45) 0%, rgba(61,26,82,0.25) 50%, rgba(96,48,120,0.55) 100%)' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 28px 150px', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
            <HBadge variant="onDark" dot>Đang gây quỹ</HBadge>
            <HBadge variant="onDark"><BcIcon name="mapPin" size={12} style={{ marginRight: 5, verticalAlign: '-2px' }} />Tây Nguyên</HBadge>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-4xl)', lineHeight: 1.05, letterSpacing: 'var(--tracking-tight)', margin: '0 0 16px', color: 'var(--cream-100)' }}>
            Mỗi bước chân hôm nay,<br />một tương lai rộng mở
          </h1>
          <p style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-2xl)', color: 'var(--cream-300)', margin: '0 0 18px', lineHeight: 1.1 }}>
            Hành trình vạn dặm bắt đầu từ một bước chân
          </p>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-on-dark-muted)', lineHeight: 1.7, maxWidth: 480, margin: '0 0 28px' }}>
            Gây quỹ trại hè kỹ năng sống cho học sinh cấp 2 vùng Tây Nguyên — nơi các em được tiếp cận tư duy phản biện, AI và những hoạt động ngoại khoá đầu đời.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <HBtn variant="accent" size="lg" onClick={onDonate} iconLeft={<BcIcon name="heart" size={18} />}>Quyên góp ngay</HBtn>
            <HBtn variant="secondary" size="lg" onClick={() => onNavigate('story')} style={{ color: 'var(--cream-100)', borderColor: 'rgba(255,240,168,0.5)' }}>
              <BcIcon name="play" size={15} style={{ marginRight: 8 }} />Xem hành trình
            </HBtn>
          </div>
        </div>
      </div>
      {/* Floating progress card overlapping the next section */}
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 28px' }}>
        <div style={{ position: 'absolute', right: 28, bottom: 0, transform: 'translateY(50%)', width: 380, maxWidth: 'calc(100% - 56px)' }}>
          <HCard variant="default" padding="lg" style={{ boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>Trại hè Bước · Mùa 2026</div>
            <HProgress raised={c.raised} goal={c.goal} showLabel tone="gold" size="lg" />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
              <HStat value={c.donors} label="Nhà hảo tâm" />
              <HStat value={c.scholarships} label="Suất học bổng" />
              <HStat value={c.daysLeft} label="Ngày còn lại" />
            </div>
            <div style={{ marginTop: 20 }}>
              <HBtn variant="primary" full onClick={onDonate}>Đồng hành cùng các em</HBtn>
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
    <section style={{ background: 'var(--surface-page)', padding: '170px 28px 80px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ maxWidth: 620, marginBottom: 44 }}>
          <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-700)', fontWeight: 700, marginBottom: 12 }}>Vì sao có Bước?</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', margin: '0 0 14px', lineHeight: 1.1 }}>
            Trao cho các em một mùa hè biết ước mơ
          </h2>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
            Bước hoạt động dưới dạng một dự án trại hè, đưa những hoạt động ngoại khoá và kỹ năng sống đến gần hơn với học sinh vùng cao.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
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

function Phases({ onNavigate }) {
  const phases = [
    { tag: 'Phase 1', icon: 'bookOpen', title: 'Tập huấn kỹ năng', dur: 'Trước trại hè', text: 'Các buổi training về tư duy phản biện, phương pháp học tập và làm quen với AI.', points: ['Tư duy phản biện', 'Cách học hiệu quả', 'Nhập môn AI'] },
    { tag: 'Phase 2', icon: 'tent', title: 'Trại hè 4 ngày 3 đêm', dur: '4 ngày · 3 đêm', text: 'Các bạn cùng học tập, thực hành và trải nghiệm trong một môi trường trại hè đúng nghĩa.', points: ['Hoạt động nhóm', 'Thực hành dự án', 'Kết nối &amp; sẻ chia'] },
  ];
  return (
    <section style={{ background: 'var(--surface-card)', padding: '80px 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
          <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-700)', fontWeight: 700, marginBottom: 12 }}>Tiến trình dự án</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', margin: 0, lineHeight: 1.1 }}>Hai giai đoạn, một hành trình</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
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

function FundUse({ c, onDonate }) {
  const rows = [
    { label: 'Hoạt động & dụng cụ học tập', pct: 45, color: 'var(--purple-600)' },
    { label: 'Ăn uống cho trại sinh', pct: 35, color: 'var(--purple-400)' },
    { label: 'Hậu cần & di chuyển', pct: 20, color: 'var(--cream-500)' },
  ];
  return (
    <section style={{ background: 'var(--surface-page)', padding: '80px 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream-700)', fontWeight: 700, marginBottom: 12 }}>Quỹ kêu gọi</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', margin: '0 0 14px', lineHeight: 1.1 }}>
            5.000.000₫ được dùng minh bạch
          </h2>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 1.7, margin: '0 0 28px' }}>
            Toàn bộ số tiền kêu gọi đi thẳng đến trải nghiệm của các em — từ dụng cụ học tập, bữa ăn đến hậu cần trại hè.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {rows.map(r => (
              <div key={r.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)', marginBottom: 7 }}>
                  <span style={{ color: 'var(--text-strong)', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: r.label }} />
                  <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>{r.pct}%</span>
                </div>
                <div style={{ height: 10, background: 'var(--purple-100)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                  <div style={{ width: r.pct + '%', height: '100%', background: r.color, borderRadius: 'var(--radius-pill)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <HCard variant="accent" padding="lg" style={{ textAlign: 'center' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--gradient-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', color: 'var(--purple-800)' }}>
            <BcIcon name="gift" size={30} />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-strong)' }}>200.000₫</div>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', margin: '8px 0 20px', lineHeight: 1.6 }}>
            đủ để một em có suất ăn &amp; dụng cụ trong suốt 4 ngày trại hè.
          </p>
          <HBtn variant="primary" full onClick={onDonate}>Tặng một suất</HBtn>
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
      <img src="../../assets/bg-starry-night.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, mixBlendMode: 'screen' }} />
      <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
        <BcIcon name="sparkles" size={32} color="var(--cream-300)" style={{ marginBottom: 16 }} />
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-3xl)', color: 'var(--cream-100)', margin: '0 0 14px', lineHeight: 1.1 }}>
          Một bước của bạn, vạn dặm của các em
        </h2>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-on-dark-muted)', lineHeight: 1.7, margin: '0 0 28px' }}>
          Cùng Bước trao cho học sinh Tây Nguyên một mùa hè được học, được chơi, và được mơ ước.
        </p>
        <HBtn variant="accent" size="lg" onClick={onDonate} iconLeft={<BcIcon name="heart" size={18} />}>Quyên góp ngay</HBtn>
      </div>
    </section>
  );
}

function HomeScreen({ onDonate, onNavigate }) {
  const c = window.CAMPAIGN;
  return (
    <div>
      <HomeHero c={c} onDonate={onDonate} onNavigate={onNavigate} />
      <Mission />
      <Phases onNavigate={onNavigate} />
      <FundUse c={c} onDonate={onDonate} />
      <DonorStrip c={c} onNavigate={onNavigate} />
      <FinalCta onDonate={onDonate} />
      <Footer onDonate={onDonate} />
    </div>
  );
}
window.HomeScreen = HomeScreen;
