const { Card: DnCard, Button: DnBtn, Input: DnInput, Badge: DnBadge, ProgressBar: DnProgress, IconButton: DnIconBtn } = window.BCDesignSystem_b342dd;

function DonateScreen({ open, onClose, config }) {
  const c = window.CAMPAIGN;
  const [step, setStep] = React.useState(1);
  const [amount, setAmount] = React.useState(200000);
  const [custom, setCustom] = React.useState('');
  
  const [name, setName] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [facebook, setFacebook] = React.useState('');
  const [supportType, setSupportType] = React.useState('');
  const [items, setItems] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [generatedRegId, setGeneratedRegId] = React.useState(null);

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => { if (open) { setStep(1); } }, [open]);
  if (!open) return null;

  const presets = [100000, 200000, 500000, 1000000];
  const fmt = (n) => new Intl.NumberFormat('vi-VN').format(n);
  const finalAmount = custom ? parseInt(custom.replace(/\D/g, '') || '0', 10) : amount;

  const overlay = {
    position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(42,15,61,0.55)',
    backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
  };
  const panel = { width: 560, maxWidth: '100%', maxHeight: '92vh', overflowY: 'auto', borderRadius: 'var(--radius-lg)' };

  const handleRegister = async (overrideItems) => {
    if (!name || !contact || !supportType) return null;
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, facebook, support_type: supportType, items: overrideItems, message })
      });
      const data = await res.json();
      setIsSubmitting(false);
      return data.id;
    } catch(e) { console.error(e); setIsSubmitting(false); return null; }
  };

  const handleNextStep1 = async () => {
    if (supportType === 'vat') {
      await handleRegister(items);
      setStep(4);
    } else {
      setStep(2);
    }
  };

  const handleGenerateQR = async () => {
    const regId = await handleRegister(fmt(finalAmount) + ' ₫');
    setGeneratedRegId(regId);
    setStep(3);
  };

  const introText = (
    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24, textAlign: 'justify' }}>
      <p style={{ margin: '0 0 10px', color: 'var(--text-strong)' }}>💜 <b>BƯỚC 2026 - HÀNH TRÌNH VẠN DẶM BẮT ĐẦU BẰNG MỘT BƯỚC CHÂN.</b></p>
      <p style={{ margin: '0 0 10px' }}>✨ Tuổi trẻ luôn mang trong mình những khát vọng đẹp đẽ về tri thức, trải nghiệm và sự trưởng thành. Thế nhưng, không phải mọi bạn trẻ đều có điều kiện và cơ hội như nhau để bắt đầu hành trình ấy.</p>
      <p style={{ margin: '0 0 10px' }}>📚 Khoảng cách về điều kiện sống đôi khi trở thành rào cản vô hình, khiến những tiềm năng đáng quý chưa có cơ hội được khơi mở.</p>
      <p style={{ margin: '0 0 10px' }}>💜 BƯỚC được hình thành như một không gian học hỏi, trải nghiệm và kết nối dành cho học sinh trung học, hướng đến việc trang bị kỹ năng, nuôi dưỡng tư duy và khơi dậy tinh thần chủ động.</p>
      <p style={{ margin: '0 0 10px' }}>🌟 BƯỚC tin rằng sự trưởng thành không đến từ những bước nhảy vọt, mà được tạo nên từ những bước đi nhỏ bé nhưng bền bỉ.</p>
      <p style={{ margin: '0 0 10px' }}>📩 Mọi thắc mắc xin vui lòng liên hệ qua:<br/>
      - Fanpage: <a href="https://www.facebook.com/Buocprojectxinchao" target="_blank" style={{ color: 'var(--color-primary)' }}>BƯỚC Project</a><br/>
      - SĐT: 0913915659 (Minh Hào - Cố vấn) | 0867527988 (Gia Hân - Trưởng BTC)</p>
    </div>
  );

  return (
    <div style={overlay} onClick={onClose}>
      <div style={panel} onClick={e => e.stopPropagation()}>
        <DnCard variant="default" padding="lg" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}>
            <DnIconBtn variant="ghost" label="Đóng" onClick={onClose}><BcIcon name="x" size={20} /></DnIconBtn>
          </div>

          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 16px', paddingRight: 32 }}>GÂY QUỸ ĐỒNG HÀNH CÙNG BƯỚC 2026</h2>
              {introText}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24, padding: 16, background: 'var(--cream-100)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', margin: '0 0 4px' }}>Thông tin đăng ký</h3>
                <DnInput label="Họ và tên của bạn *" placeholder="Nguyễn Văn A" value={name} onChange={e => setName(e.target.value)} />
                <DnInput label="Số điện thoại hoặc Email liên hệ *" placeholder="0912345678" value={contact} onChange={e => setContact(e.target.value)} />
                <DnInput label="Link Facebook để thuận tiện kết nối (không bắt buộc)" placeholder="https://facebook.com/..." value={facebook} onChange={e => setFacebook(e.target.value)} />
                
                <div style={{ marginTop: 8 }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-strong)', marginBottom: 12 }}>Bạn muốn đồng hành cùng BƯỚC 2026 dưới hình thức nào? *</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', padding: 12, background: 'var(--surface-card)', borderRadius: 8, border: supportType === 'kim' ? '2px solid var(--color-primary)' : '2px solid transparent' }}>
                      <input type="radio" name="supportType" value="kim" checked={supportType === 'kim'} onChange={() => setSupportType('kim')} />
                      <span style={{ fontWeight: 500, color: 'var(--text-strong)' }}>💰 Hỗ trợ hiện kim (Chuyển khoản)</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', padding: 12, background: 'var(--surface-card)', borderRadius: 8, border: supportType === 'vat' ? '2px solid var(--color-primary)' : '2px solid transparent' }}>
                      <input type="radio" name="supportType" value="vat" checked={supportType === 'vat'} onChange={() => setSupportType('vat')} />
                      <span style={{ fontWeight: 500, color: 'var(--text-strong)' }}>🎒 Hỗ trợ hiện vật (Gửi quà tặng)</span>
                    </label>
                  </div>
                </div>

                {supportType === 'vat' && (
                  <div style={{ marginTop: 8 }}>
                    <DnInput label="Bạn muốn chia sẻ hiện vật gì (Sách, Bút, Balo...)? *" placeholder="Ví dụ: 10 bộ sách giáo khoa" value={items} onChange={e => setItems(e.target.value)} />
                  </div>
                )}

                <div style={{ marginTop: 8 }}>
                  <DnInput label="Lời nhắn gửi các em (sẽ hiển thị trên Bảng vinh danh)" placeholder="Chúc các em một mùa hè rực rỡ!" value={message} onChange={e => setMessage(e.target.value)} />
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <DnBtn variant="accent" full size="lg" onClick={handleNextStep1} disabled={!name || !contact || !supportType || (supportType==='vat' && !items) || isSubmitting}>
                  {isSubmitting ? 'Đang gửi...' : 'Tiếp tục'}
                </DnBtn>
              </div>
            </div>
          )}

          {step === 2 && (
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
              
              <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
                <DnBtn variant="secondary" onClick={() => setStep(1)}><BcIcon name="arrowLeft" size={16} /></DnBtn>
                <DnBtn variant="accent" full size="lg" onClick={handleGenerateQR} iconRight={<BcIcon name="arrowRight" size={18} />} disabled={finalAmount <= 0 || isSubmitting}>
                  {isSubmitting ? 'Đang xử lý...' : `Tạo mã QR · ${fmt(finalAmount)}₫`}
                </DnBtn>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '12px 8px' }}>
              <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--success-soft)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <BcIcon name="checkCircle" size={40} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 8px' }}>Cảm ơn {name || 'bạn'}!</h2>
              <p style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-xl)', color: 'var(--cream-700)', margin: '0 0 14px' }}>Bạn hãy quét mã QR bên dưới để chuyển khoản nhé</p>
              
              <div style={{ background: '#fff', padding: 16, borderRadius: 12, display: 'inline-block', marginBottom: 20 }}>
                {config && (
                  <img 
                    src={`${config.qrBase}?bank=${config.bank.name}&acc=${config.bank.account}&amount=${finalAmount}&des=${encodeURIComponent(config.transferPrefix + (generatedRegId ? ' ' + generatedRegId : '') + ' ' + (name || 'NGUYEN VAN A'))}&template=compact`} 
                    alt="VietQR" 
                    style={{ width: '100%', maxWidth: 300, height: 'auto', objectFit: 'contain' }}
                  />
                )}
              </div>

              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 24px' }}>
                Đóng góp <b style={{ color: 'var(--text-strong)' }}>{fmt(finalAmount)}₫</b> của bạn sẽ được tự động ghi nhận ngay sau khi chuyển khoản thành công.
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <DnBtn variant="secondary" onClick={() => setStep(2)}>Quay lại</DnBtn>
                <DnBtn variant="primary" onClick={onClose}>Hoàn tất</DnBtn>
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ padding: '12px 8px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--success-soft)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <BcIcon name="heart" size={32} />
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 8px' }}>Cảm ơn {name || 'bạn'}!</h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '0 0 20px' }}>Form đăng ký đã được ghi nhận.</p>
              </div>

              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.6, background: 'var(--cream-100)', padding: 16, borderRadius: 12, marginBottom: 20, textAlign: 'justify' }}>
                <p style={{ margin: '0 0 10px', color: 'var(--text-strong)', fontWeight: 600 }}>Những món quà yêu thương dành cho BƯỚC 2026</p>
                <p style={{ margin: '0 0 10px' }}>Ban Tổ chức ưu tiên tiếp nhận hiện vật còn mới hoặc có chất lượng sử dụng từ 80% trở lên. Một số hiện vật phù hợp:</p>
                <ul style={{ paddingLeft: 20, margin: '0 0 10px' }}>
                  <li>📚 Sách, truyện tranh, sách kỹ năng...</li>
                  <li>✏️ Dụng cụ học tập (tập vở, bút, màu vẽ...)</li>
                  <li>🍪 Bánh kẹo, sữa đóng gói (còn HSD trên 1 tháng)</li>
                  <li>🎒 Ba lô, đèn học, bình nước cá nhân...</li>
                  <li>🎨 Đồ dùng thủ công, giấy màu, đồ chơi giáo dục...</li>
                </ul>
                <p style={{ margin: 0 }}>Ban Tổ chức sẽ sớm liên hệ với bạn qua SĐT/Email để hướng dẫn cách thức và địa chỉ nhận quà. Cảm ơn bạn rất nhiều! 💜</p>
              </div>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <DnBtn variant="secondary" onClick={() => setStep(1)}>Quay lại</DnBtn>
                <DnBtn variant="primary" onClick={onClose}>Đóng</DnBtn>
              </div>
            </div>
          )}

        </DnCard>
      </div>
    </div>
  );
}
window.DonateScreen = DonateScreen;
