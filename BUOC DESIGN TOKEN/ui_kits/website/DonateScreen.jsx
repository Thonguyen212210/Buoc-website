const { Card: DnCard, Button: DnBtn, Input: DnInput, Badge: DnBadge, ProgressBar: DnProgress, IconButton: DnIconBtn } = window.BCDesignSystem_b342dd;

function DonateScreen({ open, onClose }) {
  const c = window.CAMPAIGN;
  const [step, setStep] = React.useState(1);
  const [amount, setAmount] = React.useState(200000);
  const [custom, setCustom] = React.useState('');
  const [pkg, setPkg] = React.useState('one');
  const [name, setName] = React.useState('');
  const [msg, setMsg] = React.useState('');

  React.useEffect(() => { if (open) { setStep(1); } }, [open]);
  if (!open) return null;

  const presets = [100000, 200000, 500000, 1000000];
  const packages = [
    { id: 'one', label: 'Một suất tham gia', sub: 'Học bổng 50% cho 1 em', amt: 200000, icon: 'gift' },
    { id: 'full', label: 'Trọn vẹn một mùa hè', sub: 'Học bổng 100% cho 1 em', amt: 400000, icon: 'tent' },
    { id: 'group', label: 'Cả một nhóm bạn', sub: 'Đồng hành cùng 5 em', amt: 2000000, icon: 'users' },
  ];
  const fmt = (n) => new Intl.NumberFormat('vi-VN').format(n);
  const finalAmount = custom ? parseInt(custom.replace(/\D/g, '') || '0', 10) : amount;

  const overlay = {
    position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(42,15,61,0.55)',
    backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
  };
  const panel = { width: 520, maxWidth: '100%', maxHeight: '92vh', overflowY: 'auto', borderRadius: 'var(--radius-lg)' };

  return (
    <div style={overlay} onClick={onClose}>
      <div style={panel} onClick={e => e.stopPropagation()}>
        <DnCard variant="default" padding="lg" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 16, right: 16 }}>
            <DnIconBtn variant="ghost" label="Đóng" onClick={onClose}><BcIcon name="x" size={20} /></DnIconBtn>
          </div>

          {step !== 4 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              {[1, 2, 3].map(s => (
                <div key={s} style={{ flex: 1, height: 5, borderRadius: 'var(--radius-pill)', background: s <= step ? 'var(--cream-500)' : 'var(--purple-100)' }} />
              ))}
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 6px' }}>Chọn số tiền quyên góp</h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '0 0 20px' }}>Mọi đóng góp đều được dùng minh bạch cho trại sinh.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
                {presets.map(p => (
                  <button key={p} onClick={() => { setAmount(p); setCustom(''); }} style={{
                    cursor: 'pointer', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'left',
                    border: '2px solid', borderColor: !custom && amount === p ? 'var(--color-primary)' : 'var(--border-subtle)',
                    background: !custom && amount === p ? 'var(--color-primary-soft)' : 'var(--surface-card)',
                    fontFamily: 'var(--font-body)',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>{fmt(p)}₫</div>
                  </button>
                ))}
              </div>
              <DnInput label="Hoặc nhập số khác" prefix="₫" suffix="VNĐ" placeholder="500.000" value={custom} onChange={e => setCustom(e.target.value)} />
              <div style={{ marginTop: 24 }}>
                <DnBtn variant="accent" full size="lg" onClick={() => setStep(2)} iconRight={<BcIcon name="arrowRight" size={18} />} disabled={finalAmount <= 0}>
                  Tiếp tục · {fmt(finalAmount)}₫
                </DnBtn>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 6px' }}>Gói học bổng bạn muốn trao</h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '0 0 20px' }}>Chọn cách đóng góp của bạn tạo tác động.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {packages.map(p => (
                  <button key={p.id} onClick={() => setPkg(p.id)} style={{
                    cursor: 'pointer', padding: '14px 16px', borderRadius: 'var(--radius-md)', textAlign: 'left',
                    border: '2px solid', borderColor: pkg === p.id ? 'var(--color-primary)' : 'var(--border-subtle)',
                    background: pkg === p.id ? 'var(--color-primary-soft)' : 'var(--surface-card)',
                    display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'var(--font-body)',
                  }}>
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--cream-200)', color: 'var(--cream-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <BcIcon name={p.icon} size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{p.label}</div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{p.sub}</div>
                    </div>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid', borderColor: pkg === p.id ? 'var(--color-primary)' : 'var(--border-strong)', background: pkg === p.id ? 'var(--color-primary)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {pkg === p.id && <BcIcon name="check" size={13} color="#fff" />}
                    </div>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <DnBtn variant="secondary" onClick={() => setStep(1)}><BcIcon name="arrowLeft" size={16} /></DnBtn>
                <DnBtn variant="accent" full size="lg" onClick={() => setStep(3)} iconRight={<BcIcon name="arrowRight" size={18} />}>Tiếp tục</DnBtn>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 6px' }}>Thông tin của bạn</h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '0 0 20px' }}>Để Bước gửi lời cảm ơn và cập nhật hành trình.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
                <DnInput label="Họ và tên" placeholder="Nguyễn Văn A" value={name} onChange={e => setName(e.target.value)} />
                <DnInput label="Email" type="email" placeholder="ban@email.com" />
                <DnInput label="Lời nhắn gửi các em (không bắt buộc)" placeholder="Chúc các em một mùa hè rực rỡ!" value={msg} onChange={e => setMsg(e.target.value)} />
              </div>
              <DnCard variant="soft" padding="md" style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Tổng quyên góp</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--color-primary)' }}>{fmt(finalAmount)}₫</span>
              </DnCard>
              <div style={{ display: 'flex', gap: 10 }}>
                <DnBtn variant="secondary" onClick={() => setStep(2)}><BcIcon name="arrowLeft" size={16} /></DnBtn>
                <DnBtn variant="accent" full size="lg" onClick={() => setStep(4)} iconLeft={<BcIcon name="heart" size={18} />}>Hoàn tất quyên góp</DnBtn>
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center', padding: '12px 8px' }}>
              <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--success-soft)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <BcIcon name="checkCircle" size={40} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 8px' }}>Cảm ơn {name || 'bạn'}!</h2>
              <p style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-xl)', color: 'var(--cream-700)', margin: '0 0 14px' }}>Bạn vừa cùng các em bước thêm một bước</p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 24px' }}>
                Đóng góp <b style={{ color: 'var(--text-strong)' }}>{fmt(finalAmount)}₫</b> của bạn đã được ghi nhận. Bước sẽ gửi email cập nhật hành trình của trại sinh đến bạn.
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <DnBtn variant="secondary" iconLeft={<BcIcon name="share" size={16} />}>Lan toả</DnBtn>
                <DnBtn variant="primary" onClick={onClose}>Hoàn tất</DnBtn>
              </div>
            </div>
          )}
        </DnCard>
      </div>
    </div>
  );
}
window.DonateScreen = DonateScreen;
