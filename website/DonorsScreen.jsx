const { Card: DwCard, Badge: DwBadge, Avatar: DwAvatar, Button: DwBtn, ProgressBar: DwProgress, Stat: DwStat } = window.BCDesignSystem_b342dd;

function DonorsScreen({ onDonate, onNavigate }) {
  const c = window.CAMPAIGN;
  const updates = [
    { date: 'Tháng 4 - 5', title: 'Tuyển Ban Tổ Chức (BTC)', text: 'Kỳ tuyển Ban Tổ Chức (BTC) cho 3 phân ban chuyên môn.', tag: 'Nhân sự' },
    { date: 'Tháng 5 - 6', title: 'Tuyển chọn Trại sinh', text: 'Kỳ tuyển Trại sinh trải qua 2 vòng (Tiểu luận và Phỏng vấn) với số lượng dự kiến chọn ra 20 - 25 bạn.', tag: 'Trại sinh' },
    { date: 'Tháng 7', title: 'Chương trình học tập', text: 'Tiến hành Chương trình học thông qua các module và bài tập được thiết kế theo nhu cầu.', tag: 'Đào tạo' },
    { date: 'Tháng 8', title: 'Trại hè chính thức', text: 'Sự kiện Trại hè chính thức diễn ra tại TP. Buôn Ma Thuột. Hình thức bao gồm thuyết trình nhóm, workshop và networking. Lịch trình dự kiến diễn ra trong 4 ngày với các mốc: Giới thiệu & kết nối (Ngày 1), Hoạt động training (Ngày 2), Chia sẻ & gắn kết (Ngày 3) và Lời chào tạm biệt (Ngày 4).', tag: 'Trại hè' },
    { date: 'Tháng 10 - 11', title: 'Tổng kết & Chuyển giao', text: 'Tổng kết và chuyển giao, đánh giá lại các tác động của dự án và hoàn thiện tài liệu để duy trì dự án một cách bền vững.', tag: 'Bền vững' }
  ];
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      {/* header band */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--gradient-night)', padding: '56px 28px 40px', color: 'var(--text-on-dark)' }}>
        <img src="https://cdn.buoc.site/assets/bg-starry-night.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, mixBlendMode: 'screen' }} />
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
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', gap: 16, marginTop: 18 }}>
              <DwStat value={c.donors} label="Nhà hảo tâm" align="center" />
              <DwStat value={`${c.goal > 0 ? Math.round((c.raised / c.goal) * 100) : 0}%`} label="Mục tiêu đạt được" align="center" />
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 1.65, textAlign: 'center', margin: '18px 0 0' }}>
              Chiến dịch gây quỹ đã khép lại thành công. Xin chân thành cảm ơn sự đồng hành của các mạnh thường quân.
            </p>
          </DwCard>

          <DwCard variant="soft" padding="lg">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', margin: '0 0 16px' }}>Lộ trình dự án</h3>
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
