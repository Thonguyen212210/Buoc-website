

function ForwardCreateScreen({ onNavigate }) {
  const [slug, setSlug] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!slug || !url) {
      setMessage("Vui lòng điền đầy đủ thông tin");
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/shortlinks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, url })
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setMessage(`Tạo thành công! Link của bạn: https://buoc.site/${data.slug}`);
      } else {
        setMessage(data.message || "Có lỗi xảy ra");
      }
    } catch (err) {
      setMessage("Lỗi kết nối máy chủ");
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: 120, paddingBottom: 80, background: 'var(--surface-page)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 500, padding: 20 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 32, marginBottom: 24, color: 'var(--purple-800)', textAlign: 'center' }}>Tạo Link Rút Gọn</h1>
        <div style={{ background: 'var(--surface-card)', padding: 32, borderRadius: 20, border: '1px solid var(--purple-100)', boxShadow: 'var(--shadow-lg)' }}>
          {success ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--success-600)', fontSize: 18, marginBottom: 24, fontWeight: 500 }}>{message}</div>
              <button onClick={() => { setSuccess(false); setSlug(''); setUrl(''); }} style={{ background: 'var(--color-primary)', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: 99, cursor: 'pointer', fontWeight: 600, fontSize: 16 }}>Tạo link khác</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--text-strong)', fontSize: 15 }}>Đuôi link (buoc.site/...)</label>
                <input 
                  type="text" 
                  value={slug} 
                  onChange={e => setSlug(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ''))} 
                  placeholder="vidu: tuyensinh2026" 
                  style={{ width: '100%', padding: '14px 16px', borderRadius: 12, border: '2px solid var(--purple-100)', fontSize: 16, outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--purple-100)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--text-strong)', fontSize: 15 }}>Link gốc cần chuyển hướng (URL)</label>
                <input 
                  type="url" 
                  value={url} 
                  onChange={e => setUrl(e.target.value)} 
                  placeholder="https://docs.google.com/..." 
                  style={{ width: '100%', padding: '14px 16px', borderRadius: 12, border: '2px solid var(--purple-100)', fontSize: 16, outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--purple-100)'}
                />
              </div>
              {message && <div style={{ color: 'var(--error-600)', fontSize: 14, fontWeight: 500 }}>{message}</div>}
              <button type="submit" disabled={loading} style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', color: '#fff', border: 'none', padding: '16px 20px', borderRadius: 12, cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 600, fontSize: 16, opacity: loading ? 0.7 : 1, marginTop: 8, boxShadow: 'var(--shadow-md)' }}>
                {loading ? 'Đang tạo...' : 'Tạo Link'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
window.ForwardCreateScreen = ForwardCreateScreen;
