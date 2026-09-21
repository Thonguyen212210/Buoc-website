const { Button: AbBtn, Badge: AbBadge, Card: AbCard } = window.BCDesignSystem_b342dd;

function AboutSection({ eyebrow, title, children, dark = false }) {
  return (
    <section className="pad-mobile" style={{
      background: dark ? 'var(--purple-800)' : 'var(--surface-page)',
      color: dark ? 'var(--cream-100)' : 'inherit',
      padding: dark ? '72px 28px' : '64px 28px',
    }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {eyebrow && (
          <div style={{
            fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
            color: dark ? 'var(--cream-500)' : 'var(--text-muted)', fontWeight: 700, marginBottom: 12,
          }}>{eyebrow}</div>
        )}
        <h2 className="text-responsive-h2" style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)',
          color: dark ? 'var(--cream-100)' : 'var(--text-strong)', margin: '0 0 18px', lineHeight: 1.2,
        }}>{title}</h2>
        <div style={{ fontSize: 'var(--text-md)', color: dark ? 'rgba(255,255,255,0.88)' : 'var(--text-body)', lineHeight: 1.8 }}>
          {children}
        </div>
      </div>
    </section>
  );
}

function AboutList({ items }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span style={{
            width: 22, height: 22, borderRadius: '50%', background: 'var(--purple-100)', color: 'var(--color-primary)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
          }}>
            <BcIcon name="check" size={12} />
          </span>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 1.7 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AboutFeature({ title, text, image, imageAlt, reverse = false, imageScale = 1, compact = false }) {
  return (
    <div className="grid-responsive" style={{
      display: 'grid', gridTemplateColumns: compact ? '0.9fr 1.1fr' : '1fr 1fr', gap: compact ? 20 : 32, alignItems: 'center',
      direction: reverse ? 'rtl' : 'ltr',
    }}>
      <div style={{ direction: 'ltr', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={image}
          alt={imageAlt}
          style={{
            width: `${imageScale * 100}%`,
            maxWidth: '100%',
            maxHeight: compact ? 160 : undefined,
            borderRadius: compact ? 12 : 16,
            boxShadow: 'var(--shadow-md)',
            display: 'block',
            objectFit: 'contain',
          }}
        />
      </div>
      <div style={{ direction: 'ltr' }}>
        <h3 className="text-responsive-h2" style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: compact ? 'var(--text-lg)' : 'var(--text-xl)',
          color: 'var(--text-strong)', margin: '0 0 10px', lineHeight: 1.25,
        }}>{title}</h3>
        <p style={{ fontSize: compact ? 'var(--text-sm)' : 'var(--text-md)', color: 'var(--text-body)', lineHeight: 1.75, margin: 0 }}>{text}</p>
      </div>
    </div>
  );
}

function AboutPillarCard({ variant, title, text, image, imageAlt, imageScale = 0.5, tallImage = false }) {
  return (
    <AbCard variant={variant} padding="md" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        minHeight: tallImage ? 120 : 100, marginBottom: 14, flexShrink: 0,
      }}>
        <img
          src={image}
          alt={imageAlt}
          style={{
            width: `${imageScale * 100}%`,
            maxWidth: '100%',
            maxHeight: tallImage ? 120 : 96,
            borderRadius: tallImage ? 10 : 0,
            boxShadow: tallImage ? 'var(--shadow-sm)' : 'none',
            objectFit: tallImage ? 'cover' : 'contain',
            display: 'block',
          }}
        />
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-md)',
        color: 'var(--text-strong)', margin: '0 0 8px', lineHeight: 1.3,
      }}>{title}</h3>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
    </AbCard>
  );
}

function AboutPartTwo() {
  return (
    <section className="pad-mobile" style={{ background: 'var(--surface-page)', padding: '56px 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 36px' }}>
          <AbBadge variant="accent" style={{ marginBottom: 10 }}>Phần 2/2</AbBadge>
          <div style={{
            fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
            color: 'var(--text-muted)', fontWeight: 700, marginBottom: 10,
          }}>Về dự án Bước</div>
          <h2 className="text-responsive-h2" style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)',
            color: 'var(--text-strong)', margin: '0 0 12px', lineHeight: 1.15,
          }}>Chúng tôi là ai?</h2>
          <p className="text-responsive-p" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', margin: 0, lineHeight: 1.65 }}>
            Bảo trợ pháp lý, địa bàn hoạt động và định hướng phát triển bền vững của dự án.
          </p>
        </div>

        <div className="about-part2-layout">
          <div className="about-part2-top">
            <AboutPillarCard
              variant="default"
              title="Bảo trợ pháp lý"
              text={'Vào năm 2024, dự án giáo dục Bước nằm trong chiến dịch tình nguyện hè "Hoa Phượng Đỏ" trực thuộc Đoàn TNCS Hồ Chí Minh — Tỉnh Đắk Lắk.'}
              image="https://cdn.buoc.site/assets/tinh-doan.png"
              imageAlt="Logo Đoàn Thanh niên Cộng sản Hồ Chí Minh Tỉnh Đắk Lắk"
              imageScale={0.5}
            />

            <AbCard variant="soft" padding="md" className="about-part2-feature-card">
              <AboutFeature
                compact
                title="Địa phương hoạt động chính — Tây Nguyên"
                text="Với sự hỗ trợ của một số tổ chức tại địa phương và sự tham gia đông đảo của các tình nguyện viên nơi đây, chúng tôi lựa chọn Tp. Buôn Ma Thuột là nơi diễn ra các hoạt động chính của dự án và tạo tác động chủ yếu cho học sinh ở khắp Tây Nguyên."
                image="https://cdn.buoc.site/assets/tay-nguyen.jpg"
                imageAlt="Tượng đài Chiến thắng Buôn Ma Thuột, Tây Nguyên"
                imageScale={0.55}
              />
            </AbCard>
          </div>

          <AbCard variant="accent" padding="md" className="about-part2-bottom">
            <AboutFeature
              compact
              reverse
              title="Hướng tới Mục tiêu Phát triển Bền vững"
              text="Thông qua các hoạt động của dự án, chúng tôi mong muốn phát triển một cách bền vững, cụ thể thông qua việc mang đến những hoạt động giáo dục chất lượng cho thanh niên."
              image="https://cdn.buoc.site/assets/ben-vung-sdg.png"
              imageAlt="Mục tiêu Phát triển Bền vững 4 — Giáo dục chất lượng"
              imageScale={0.45}
            />
          </AbCard>
        </div>
      </div>
    </section>
  );
}

function AboutPhotoStrip() {
  return (
    <section className="pad-mobile about-photo-strip" style={{ background: 'var(--surface-page)', padding: '48px 28px 64px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="grid-responsive about-photo-strip-grid" style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 20, alignItems: 'start' }}>
          <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/3', minHeight: 280 }}>
            <img
              src="https://cdn.buoc.site/assets/buoc-mau-2024.png"
              alt="Trại sinh Trại hè Giáo dục Bước 2024"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 'auto 0 0 0', padding: '24px 28px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(42,15,61,0.82) 100%)',
            }}>
              <AbBadge variant="onDark" dot>Trại hè 2024</AbBadge>
              <p style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-xl)', color: 'var(--cream-200)', margin: '10px 0 0', lineHeight: 1.2 }}>
                Nụ cười và khoảnh khắc cùng nhau bước
              </p>
            </div>
          </div>

          <div className="about-photo-strip-side" style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-md)', aspectRatio: '4/5', maxHeight: 240, flexShrink: 0 }}>
              <img
                src="https://cdn.buoc.site/assets/about-thumb.png"
                alt="Dây đeo thẻ dự án Bước"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
              />
            </div>
            <AbCard variant="soft" padding="lg" style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <BcIcon name="sparkles" size={18} color="var(--color-primary)" />
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--purple-800)' }}>Tinh thần Bước</span>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
                Mỗi trại sinh, mỗi tình nguyện viên đều mang theo niềm tin rằng một bước nhỏ hôm nay có thể mở ra tương lai rộng lớn hơn.
              </p>
            </AbCard>
          </div>
        </div>
      </div>
    </section>
  );
}

const EB_MEMBERS = {
  advisors: [
    {
      name: "Nguyễn Văn Minh Hào",
      role: "Founder & Adviser",
      edu: "Đại học Ngoại Thương",
      img: "https://cdn.buoc.site/assets/eb/hao.png"
    },
    {
      name: "Lê Hồng Phúc",
      role: "Founding member & Supervisor",
      edu: "",
      img: "https://cdn.buoc.site/assets/eb/phuc.png",
      imgStyle: { transform: "scale(1.5) translate(18px, 15px)" }
    },
    {
      name: "Nguyễn Duy Phúc Thọ",
      role: "Adviser",
      edu: "",
      img: "https://cdn.buoc.site/assets/eb/tho.jpg"
    }
  ],
  presidents: [
    {
      name: "Cát Gia Hân",
      role: "President",
      edu: "",
      img: "https://cdn.buoc.site/assets/eb/han.png"
    },
    {
      name: "Nguyễn Gia Bảo Nghi",
      role: "Vice President",
      edu: "",
      img: "https://cdn.buoc.site/assets/eb/nghi.png"
    }
  ],
  board: [
    {
      name: "Nguyễn Gia Hưng",
      role: "Founding Member Head of Media",
      edu: "",
      img: "https://cdn.buoc.site/assets/eb/hung.png",
      objectPosition: "center 30%"
    },
    {
      name: "Trần Phạm Hạnh Dung",
      role: "Founding Member Vice-Head of Media",
      edu: "",
      img: "https://cdn.buoc.site/assets/eb/dung.png"
    },
    {
      name: "Đinh Vũ Nguyên",
      role: "Head of Program",
      edu: "",
      img: "https://cdn.buoc.site/assets/eb/nguyen.png"
    },
    {
      name: "Nguyễn Đức Huy",
      role: "Head of FI-EX (Finance & External Relations)",
      edu: "",
      img: "https://cdn.buoc.site/assets/eb/huy.png"
    }
  ]
};

function EbMemberCard({ name, role, edu, img, objectPosition, imgStyle }) {
  return (
    <div className="eb-card">
      <div className="eb-avatar-wrapper">
        <img
          src={img}
          alt={name}
          className="eb-avatar"
          style={imgStyle ? imgStyle : (objectPosition ? { objectPosition } : {})}
        />
      </div>
      <h4 className="eb-name">{name}</h4>
      <div className="eb-role">{role}</div>
      {edu && (
        <div className="eb-edu">
          <BcIcon name="bookOpen" size={13} style={{ flexShrink: 0, marginTop: -1 }} />
          <span>{edu}</span>
        </div>
      )}
    </div>
  );
}

function AboutTeamSection() {
  return (
    <section id="doi-ngu" className="pad-mobile about-team-section" style={{ background: 'var(--purple-100)', padding: '72px 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
          <div style={{
            fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
            color: 'var(--text-muted)', fontWeight: 700, marginBottom: 10,
          }}>Đội ngũ của Bước</div>
          <h2 className="text-responsive-h2" style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)',
            color: 'var(--text-strong)', margin: '0 0 12px', lineHeight: 1.15,
          }}>Ban điều hành</h2>
          <p className="text-responsive-p" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', margin: 0, lineHeight: 1.65 }}>
            Những gương mặt tâm huyết xây dựng và dẫn dắt các hoạt động giáo dục của dự án Bước.
          </p>
        </div>

        <div className="eb-group-title">Cố Vấn</div>
        <div className="eb-grid-3">
          {EB_MEMBERS.advisors.map((m, idx) => (
            <EbMemberCard key={idx} {...m} />
          ))}
        </div>

        <div className="eb-group-title">Chủ nhiệm</div>
        <div className="eb-grid-2">
          {EB_MEMBERS.presidents.map((m, idx) => (
            <EbMemberCard key={idx} {...m} />
          ))}
        </div>

        <div className="eb-group-title">Ban điều hành</div>
        <div className="eb-grid-4">
          {EB_MEMBERS.board.map((m, idx) => (
            <EbMemberCard key={idx} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUsScreen({ onDonate, onNavigate }) {
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--gradient-night)', padding: '72px 28px 64px', color: 'var(--text-on-dark)' }}>
        <img src="https://cdn.buoc.site/assets/Background.png" alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, mixBlendMode: 'screen',
        }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', textAlign: 'center' }}>
          <AbBadge variant="onDark" dot style={{ marginBottom: 16 }}>Dự án xã hội · Từ 2024</AbBadge>
          <div style={{
            fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
            color: 'var(--cream-500)', fontWeight: 700, marginBottom: 12,
          }}>Về chúng tôi</div>
          <h1 className="text-responsive-h1" style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-4xl)',
            color: 'var(--cream-100)', margin: '0 0 12px', lineHeight: 1.15, letterSpacing: 'var(--tracking-tight)',
          }}>Dự án giáo dục Bước</h1>
          <p style={{
            fontFamily: 'var(--font-script)', fontSize: 'var(--text-2xl)', color: 'var(--cream-300)',
            margin: '0 auto 24px', maxWidth: 560, lineHeight: 1.2,
          }}>
            Hành trình vạn dặm bắt đầu từ một bước chân
          </p>
          <p style={{
            fontSize: 'var(--text-md)', color: 'var(--text-on-dark-muted)', lineHeight: 1.7,
            maxWidth: 680, margin: '0 auto',
          }}>
            Mang đến chủ đề mới mẻ, kiến thức đa dạng và hành trang vững chắc cho học sinh Tây Nguyên trên hành trình trở thành công dân toàn cầu.
          </p>
        </div>
      </section>

      <AboutSection eyebrow="Giới thiệu chung" title="Bước là ai?">
        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr min(286px, 34%)', gap: 28, alignItems: 'start' }}>
          <p style={{ margin: 0 }}>
            <strong>“Bước”</strong> là một dự án xã hội được thành lập vào đầu năm 2024, hướng tới việc cung cấp các chủ đề mới mẻ và kiến thức đa dạng ở nhiều lĩnh vực khác nhau. Dự án được tạo ra dành riêng cho các bạn học sinh cấp 2, cấp 3 có tinh thần tò mò và hiếu học, nhằm giúp các bạn chuẩn bị hành trang vững chắc trong việc học tập và sẵn sàng trở thành những công dân toàn cầu trong tương lai.
          </p>
          <img
            src="https://cdn.buoc.site/assets/about-thumb.png"
            alt="Thương hiệu dự án Bước trên dây đeo"
            className="hide-mobile"
            style={{ width: '100%', maxWidth: 286, marginLeft: 'auto', borderRadius: 16, boxShadow: 'var(--shadow-sm)', objectFit: 'cover', aspectRatio: '4/5' }}
          />
        </div>
      </AboutSection>

      <AboutSection eyebrow="Sứ mệnh" title="Tại sao chúng tôi làm điều này?" dark>
        <p style={{ margin: '0 0 16px' }}>
          Chúng tôi nhận thấy rằng học sinh tại các khu vực tỉnh thành Tây Nguyên vẫn còn đang thiếu hụt nhiều cơ hội để học tập, phát triển bản thân cũng như tham gia các hoạt động ngoại khóa. Vì thế, <strong>“Bước”</strong> mang trong mình sứ mệnh đem đến những giá trị mới mẻ cho địa phương nói chung và học sinh, sinh viên nói riêng.
        </p>
      </AboutSection>

      <AboutSection eyebrow="Tầm nhìn" title="Tầm nhìn của Bước">
        <p style={{ margin: '0 0 16px' }}>
          Dự án Bước mong muốn trở thành nơi ươm mầm cho các bạn trẻ khát khao tri thức và có tinh thần cống hiến. Qua đó, chúng tôi khao khát xây dựng một cộng đồng gắn kết để cùng nhau kiến tạo một tương lai tốt đẹp hơn cho bản thân và cho quê hương.
        </p>
      </AboutSection>

      <AboutPhotoStrip />

      <section className="pad-mobile" style={{ background: 'var(--surface-card)', padding: '72px 28px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 40px' }}>
            <div style={{
              fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
              color: 'var(--cream-700)', fontWeight: 700, marginBottom: 12,
            }}>Đối tượng</div>
            <h2 className="text-responsive-h1" style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)',
              color: 'var(--text-strong)', margin: '0 0 16px', lineHeight: 1.1,
            }}>Chân dung đối tượng thụ hưởng</h2>
            <p className="text-responsive-p" style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', margin: 0, lineHeight: 1.7 }}>
              Những bạn trẻ tại Tây Nguyên — nơi chúng tôi gặp gỡ, lắng nghe và đồng hành trên hành trình học tập.
            </p>
          </div>

          <div style={{ maxWidth: 720, margin: '0 auto 40px', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img
              src="https://cdn.buoc.site/assets/doi-tuong-thu-huong.png"
              alt="Học sinh tham gia hoạt động của dự án Bước"
              style={{ width: '100%', aspectRatio: '3/2', display: 'block', objectFit: 'cover' }}
            />
          </div>

          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'stretch' }}>
            <AbCard variant="default" padding="lg" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--purple-100)',
                  color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <BcIcon name="users" size={20} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', color: 'var(--text-strong)', margin: 0, lineHeight: 1.3 }}>Nhân khẩu học</h3>
              </div>
              <AboutList items={[
                '14 đến 16 tuổi',
                'Học sinh cấp 2 hoặc cấp 3',
                'Đến từ những vùng còn thiếu hụt hoạt động ngoại khóa, các cơ hội phát triển bản thân và học tập',
              ]} />
            </AbCard>

            <AbCard variant="soft" padding="lg" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--cream-200)',
                  color: 'var(--cream-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <BcIcon name="target" size={20} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', color: 'var(--text-strong)', margin: 0, lineHeight: 1.3 }}>Mục tiêu &amp; nhu cầu</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                {[
                  { label: 'Nghề nghiệp', text: 'Tìm hiểu về cơ hội nghề nghiệp, kinh nghiệm thực tiễn từ anh chị đi trước.' },
                  { label: 'Học tập', text: 'Chuẩn bị hoặc mới lên cấp 3, làm quen với môi trường học tập mới mẻ và cạnh tranh.' },
                  { label: 'Kết nối', text: 'Gặp gỡ bạn bè, các anh chị đi trước và mở rộng mạng lưới quan hệ.' },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--purple-800)', marginBottom: 4 }}>{item.label}</div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </AbCard>

            <AbCard variant="default" padding="lg" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--purple-100)',
                  color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <BcIcon name="handHeart" size={20} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', color: 'var(--text-strong)', margin: 0, lineHeight: 1.3 }}>Giá trị tìm kiếm ở một trại sinh</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                {[
                  { title: 'Tinh thần cầu tiến', text: 'Luôn tìm kiếm các cơ hội học hỏi và gặp gỡ người mới để phát triển bản thân. Không ngại thất bại.' },
                  { title: 'Cống hiến xã hội', text: 'Có mong muốn phát triển bản thân và cả địa phương mình sinh ra.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <BcIcon name="checkCircle" size={18} color="var(--color-primary)" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-strong)', marginBottom: 4 }}>{item.title}</div>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AbCard>
          </div>

          <div className="show-mobile-flex" style={{ display: 'none', marginTop: 32, borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img
              src="https://cdn.buoc.site/assets/buoc-mau-2024.png"
              alt="Trại sinh Trại hè Giáo dục Bước 2024"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <AboutPartTwo />

      <AboutTeamSection />

      <section className="pad-mobile" style={{ background: 'var(--surface-page)', padding: '48px 28px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', margin: '0 0 24px', lineHeight: 1.7 }}>
            Bạn muốn đồng hành cùng hành trình của Bước?
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <AbBtn variant="accent" size="lg" onClick={() => onNavigate('donors')} iconLeft={<BcIcon name="heart" size={18} />}>Xem danh sách nhà hảo tâm</AbBtn>
            <AbBtn variant="secondary" size="lg" onClick={() => onNavigate('home')} iconLeft={<BcIcon name="arrowLeft" size={16} />}>Về trang chủ</AbBtn>
          </div>
        </div>
      </section>

      <Footer onDonate={onDonate} />
    </div>
  );
}

window.AboutUsScreen = AboutUsScreen;
