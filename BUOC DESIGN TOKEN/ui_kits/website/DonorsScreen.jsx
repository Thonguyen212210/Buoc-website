const { Card: DwCard, Badge: DwBadge, Avatar: DwAvatar, Button: DwBtn, ProgressBar: DwProgress, Stat: DwStat } = window.BCDesignSystem_b342dd;

function DonorsScreen({ onDonate, onNavigate }) {
  const c = window.CAMPAIGN;
  const updates = [
    { date: '12/06/2026', title: 'Hoàn tất Phase 1 tại trường THCS Ea Tu', text: 'Ba buổi tập huấn tư duy phản biện đã diễn ra với 40 bạn học sinh hào hứng tham gia.', tag: 'Phase 1' },
    { date: '02/06/2026', title: 'Chốt danh sách 30 trại sinh đầu tiên', text: 'Các bạn được nhận học bổng từ 50% đến 100% chi phí trại hè mùa này.', tag: 'Học bổng' },
    { date: '20/05/2026', title: 'Khởi động chiến dịch gây quỹ', text: 'Cảm ơn những nhà hảo tâm đầu tiên đã đặt viên gạch cho hành trình của Bước.', tag: 'Cột mốc' },
  ];
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      {/* header band */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--gradient-night)', padding: '56px 28px 40px', color: 'var(--text-on-dark)' }}>
        <img src="../../assets/bg-starry-night.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, mixBlendMode: 'screen' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-3xl)', color: 'var(--cream-100)', margin: '0 0 8px' }}>Bảng vinh danh nhà hảo tâm</h1>
          <p style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-xl)', color: 'var(--cream-300)', margin: 0 }}>Cảm ơn vì đã bước cùng các em</p>
        </div>
      </section>

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 28px 72px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'start' }}>
        {/* Donor list */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-strong)', margin: 0 }}>Đóng góp gần đây</h2>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{c.donors} nhà hảo tâm</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {c.recentDonors.map((d, i) => (
              <DwCard key={i} variant="default" padding="md" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <DwAvatar name={d.name} size="md" ring={d.top} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{d.name}</span>
                    {d.top && <DwBadge variant="accent" size="sm">Nhà hảo tâm vàng</DwBadge>}
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontStyle: d.msg ? 'italic' : 'normal', marginTop: 2 }}>
                    {d.msg || 'Chúc các em một mùa hè ý nghĩa!'}
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-primary)' }}>{new Intl.NumberFormat('vi-VN').format(d.amount)}₫</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>{d.when}</div>
                </div>
              </DwCard>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <DwBtn variant="ghost">Xem thêm</DwBtn>
          </div>
        </div>

        {/* Sidebar: progress + updates */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'sticky', top: 90 }}>
          <DwCard variant="default" padding="lg">
            <DwProgress raised={c.raised} goal={c.goal} showLabel tone="gold" />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 18 }}>
              <DwStat value={c.donors} label="Nhà hảo tâm" />
              <DwStat value={c.daysLeft} label="Ngày còn lại" />
            </div>
            <div style={{ marginTop: 18 }}><DwBtn variant="accent" full onClick={onDonate} iconLeft={<BcIcon name="heart" size={16} />}>Cùng góp một bước</DwBtn></div>
          </DwCard>

          <DwCard variant="soft" padding="lg">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', margin: '0 0 16px' }}>Cập nhật dự án</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {updates.map((u, i) => (
                <div key={i} style={{ display: 'flex', gap: 12 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--cream-600)', marginTop: 5 }} />
                    {i < updates.length - 1 && <div style={{ width: 2, flex: 1, background: 'var(--purple-200)', marginTop: 4 }} />}
                  </div>
                  <div style={{ paddingBottom: 4 }}>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)', marginBottom: 3 }}>{u.date}</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-strong)', fontSize: 'var(--text-sm)', marginBottom: 4 }}>{u.title}</div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.6 }}>{u.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </DwCard>
        </div>
      </div>
      <Footer onDonate={onDonate} />
    </div>
  );
}
window.DonorsScreen = DonorsScreen;
