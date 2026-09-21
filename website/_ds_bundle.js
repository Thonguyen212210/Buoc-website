/* @ds-bundle: {"format":3,"namespace":"BCDesignSystem_b342dd","components":[{"name":"Card","sourcePath":"components/campaign/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/campaign/ProgressBar.jsx"},{"name":"Stat","sourcePath":"components/campaign/Stat.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/campaign/Card.jsx":"766c77d84e0b","components/campaign/ProgressBar.jsx":"a4e46026c32b","components/campaign/Stat.jsx":"948eabe182e7","components/core/Avatar.jsx":"d388b50ca40b","components/core/Badge.jsx":"bd206dc0bd2e","components/core/Button.jsx":"6d1d867c3f74","components/core/IconButton.jsx":"f40ac75b2a5a","components/core/Tag.jsx":"a6ec8275c991","components/forms/Input.jsx":"4d3ceb5ae82d","ui_kits/website/DonateScreen.jsx":"1837cad5c10c","ui_kits/website/DonorsScreen.jsx":"1e9814ede7d8","ui_kits/website/Footer.jsx":"845a5d923577","ui_kits/website/Header.jsx":"09b2d28f9b91","ui_kits/website/HomeScreen.jsx":"830718541e47","ui_kits/website/Icons.jsx":"598d1d9b7f65"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BCDesignSystem_b342dd = window.BCDesignSystem_b342dd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/campaign/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Soft, lifted surface container. The default Bước card. */
function Card({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    soft: {
      background: 'var(--purple-50)',
      border: '1px solid var(--purple-100)',
      color: 'var(--text-body)'
    },
    dark: {
      background: 'var(--gradient-night)',
      border: '1px solid var(--border-on-dark)',
      color: 'var(--text-on-dark)'
    },
    accent: {
      background: 'var(--cream-100)',
      border: '1px solid var(--cream-300)',
      color: 'var(--text-body)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-md)',
      padding: pads[padding],
      boxShadow: hover && hoverable ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover && hoverable ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: onClick ? 'pointer' : 'default',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/campaign/Card.jsx", error: String((e && e.message) || e) }); }

// components/campaign/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Donation-goal progress bar. Pass raised/goal, or a 0–100 `value`. */
function ProgressBar({
  value,
  raised,
  goal,
  size = 'md',
  showLabel = false,
  tone = 'gold',
  style = {},
  ...rest
}) {
  let pct = value;
  if (pct == null && goal) pct = raised / goal * 100;
  pct = Math.max(0, Math.min(100, pct || 0));
  const heights = {
    sm: 6,
    md: 10,
    lg: 14
  }[size];
  const fills = {
    gold: 'var(--gradient-gold)',
    purple: 'linear-gradient(100deg, var(--purple-500), var(--purple-700))'
  };
  const fmt = n => new Intl.NumberFormat('vi-VN').format(Math.round(n));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), showLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)'
    }
  }, raised != null ? `${fmt(raised)}₫` : `${Math.round(pct)}%`), goal != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "/ ", fmt(goal), "\u20AB")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: heights,
      background: 'var(--purple-100)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: fills[tone],
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/campaign/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/campaign/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A single big-number statistic (raised, donors, days left). */
function Stat({
  value,
  label,
  icon,
  align = 'start',
  tone = 'default',
  style = {},
  ...rest
}) {
  const colors = {
    default: 'var(--text-strong)',
    accent: 'var(--cream-700)',
    onDark: 'var(--cream-300)'
  };
  const labelColor = {
    default: 'var(--text-muted)',
    accent: 'var(--text-muted)',
    onDark: 'var(--text-on-dark-muted)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors[tone],
      marginBottom: '2px',
      display: 'inline-flex'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 1,
      color: colors[tone]
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: labelColor[tone],
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/campaign/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular avatar with image or initials fallback. */
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  style = {},
  ...rest
}) {
  const dims = {
    xs: 24,
    sm: 32,
    md: 44,
    lg: 60,
    xl: 88
  }[size] || size;
  const fontSize = typeof dims === 'number' ? dims * 0.4 : 18;
  const initials = name.trim().split(/\s+/).slice(-2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--purple-200)',
      color: 'var(--purple-700)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize,
      letterSpacing: '0.01em',
      boxShadow: ring ? '0 0 0 3px var(--paper-100), 0 0 0 5px var(--cream-300)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status / category pill. */
function Badge({
  variant = 'neutral',
  size = 'md',
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--purple-100)',
      color: 'var(--purple-700)'
    },
    accent: {
      background: 'var(--cream-200)',
      color: 'var(--cream-700)'
    },
    success: {
      background: 'var(--success-soft)',
      color: 'var(--success)'
    },
    warning: {
      background: 'var(--warning-soft)',
      color: 'var(--warning)'
    },
    error: {
      background: 'var(--error-soft)',
      color: 'var(--error)'
    },
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    onDark: {
      background: 'rgba(255,240,168,0.16)',
      color: 'var(--cream-200)'
    }
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-2xs)',
      padding: '3px 8px'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: '4px 11px'
    }
  };
  const dotColor = {
    neutral: 'var(--purple-500)',
    accent: 'var(--cream-600)',
    success: 'var(--success)',
    warning: 'var(--warning)',
    error: 'var(--error)',
    solid: 'var(--cream-300)',
    onDark: 'var(--cream-300)'
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      lineHeight: 1.4,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: dotColor
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bước primary action button. Rounded, warm, lifted.
 * Variants: primary (purple), accent (gold), secondary (outline), ghost.
 */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)',
      gap: '6px'
    },
    md: {
      padding: '12px 24px',
      fontSize: 'var(--text-base)',
      gap: '8px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: 'var(--text-md)',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    accent: {
      background: 'var(--gradient-gold)',
      color: 'var(--color-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverFx = !disabled && hover ? {
    primary: {
      background: 'var(--color-primary-hover)',
      boxShadow: 'var(--shadow-md)'
    },
    accent: {
      filter: 'brightness(0.97)',
      boxShadow: 'var(--shadow-md)'
    },
    secondary: {
      background: 'var(--color-primary-soft)',
      borderColor: 'var(--color-primary)'
    },
    ghost: {
      background: 'var(--color-primary-soft)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes[size].gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: sizes[size].fontSize,
      lineHeight: 1,
      padding: sizes[size].padding,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: full ? '100%' : 'auto',
      transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
      transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...hoverFx,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Compact square icon-only button. */
function IconButton({
  variant = 'soft',
  size = 'md',
  label,
  disabled = false,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const variants = {
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    soft: {
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)'
    },
    onDark: {
      background: 'rgba(255,240,168,0.14)',
      color: 'var(--cream-200)'
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      filter: hover && !disabled ? 'brightness(0.96)' : 'none',
      transition: 'filter var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Selectable / removable tag chip (filters, interests). */
function Tag({
  active = false,
  removable = false,
  onRemove,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.4,
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      border: '1.5px solid',
      borderColor: active ? 'var(--color-primary)' : 'var(--border-strong)',
      background: active ? 'var(--color-primary)' : hover && onClick ? 'var(--color-primary-soft)' : 'transparent',
      color: active ? 'var(--color-on-primary)' : 'var(--color-primary)',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: 0.7,
      fontSize: '1.1em',
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, helper/error, and optional adornments. */
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--error)' : focus ? 'var(--color-primary)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: disabled ? 'var(--surface-sunk)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      padding: '0 14px',
      boxShadow: focus ? error ? '0 0 0 4px var(--error-soft)' : 'var(--shadow-glow-purple)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-base)',
      whiteSpace: 'nowrap'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      padding: '12px 0',
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-base)',
      whiteSpace: 'nowrap'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DonateScreen.jsx
try { (() => {
const {
  Card: DnCard,
  Button: DnBtn,
  Input: DnInput,
  Badge: DnBadge,
  ProgressBar: DnProgress,
  IconButton: DnIconBtn
} = window.BCDesignSystem_b342dd;
function DonateScreen({
  open,
  onClose
}) {
  const c = window.CAMPAIGN;
  const [step, setStep] = React.useState(1);
  const [amount, setAmount] = React.useState(200000);
  const [custom, setCustom] = React.useState('');
  const [pkg, setPkg] = React.useState('one');
  const [name, setName] = React.useState('');
  const [msg, setMsg] = React.useState('');
  React.useEffect(() => {
    if (open) {
      setStep(1);
    }
  }, [open]);
  if (!open) return null;
  const presets = [100000, 200000, 500000, 1000000];
  const packages = [{
    id: 'one',
    label: 'Một suất tham gia',
    sub: 'Học bổng 50% cho 1 em',
    amt: 200000,
    icon: 'gift'
  }, {
    id: 'full',
    label: 'Trọn vẹn một mùa hè',
    sub: 'Học bổng 100% cho 1 em',
    amt: 400000,
    icon: 'tent'
  }, {
    id: 'group',
    label: 'Cả một nhóm bạn',
    sub: 'Đồng hành cùng 5 em',
    amt: 2000000,
    icon: 'users'
  }];
  const fmt = n => new Intl.NumberFormat('vi-VN').format(n);
  const finalAmount = custom ? parseInt(custom.replace(/\D/g, '') || '0', 10) : amount;
  const overlay = {
    position: 'fixed',
    inset: 0,
    zIndex: 200,
    background: 'rgba(42,15,61,0.55)',
    backdropFilter: 'blur(6px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  };
  const panel = {
    width: 520,
    maxWidth: '100%',
    maxHeight: '92vh',
    overflowY: 'auto',
    borderRadius: 'var(--radius-lg)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: overlay,
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: panel,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(DnCard, {
    variant: "default",
    padding: "lg",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(DnIconBtn, {
    variant: "ghost",
    label: "\u0110\xF3ng",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "x",
    size: 20
  }))), step !== 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 20
    }
  }, [1, 2, 3].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      height: 5,
      borderRadius: 'var(--radius-pill)',
      background: s <= step ? 'var(--cream-500)' : 'var(--purple-100)'
    }
  }))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, "Ch\u1ECDn s\u1ED1 ti\u1EC1n quy\xEAn g\xF3p"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, "M\u1ECDi \u0111\xF3ng g\xF3p \u0111\u1EC1u \u0111\u01B0\u1EE3c d\xF9ng minh b\u1EA1ch cho tr\u1EA1i sinh."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 16
    }
  }, presets.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => {
      setAmount(p);
      setCustom('');
    },
    style: {
      cursor: 'pointer',
      padding: '16px',
      borderRadius: 'var(--radius-md)',
      textAlign: 'left',
      border: '2px solid',
      borderColor: !custom && amount === p ? 'var(--color-primary)' : 'var(--border-subtle)',
      background: !custom && amount === p ? 'var(--color-primary-soft)' : 'var(--surface-card)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, fmt(p), "\u20AB")))), /*#__PURE__*/React.createElement(DnInput, {
    label: "Ho\u1EB7c nh\u1EADp s\u1ED1 kh\xE1c",
    prefix: "\u20AB",
    suffix: "VN\u0110",
    placeholder: "500.000",
    value: custom,
    onChange: e => setCustom(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(DnBtn, {
    variant: "accent",
    full: true,
    size: "lg",
    onClick: () => setStep(2),
    iconRight: /*#__PURE__*/React.createElement(BcIcon, {
      name: "arrowRight",
      size: 18
    }),
    disabled: finalAmount <= 0
  }, "Ti\u1EBFp t\u1EE5c \xB7 ", fmt(finalAmount), "\u20AB"))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, "G\xF3i h\u1ECDc b\u1ED5ng b\u1EA1n mu\u1ED1n trao"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, "Ch\u1ECDn c\xE1ch \u0111\xF3ng g\xF3p c\u1EE7a b\u1EA1n t\u1EA1o t\xE1c \u0111\u1ED9ng."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 24
    }
  }, packages.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => setPkg(p.id),
    style: {
      cursor: 'pointer',
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      textAlign: 'left',
      border: '2px solid',
      borderColor: pkg === p.id ? 'var(--color-primary)' : 'var(--border-subtle)',
      background: pkg === p.id ? 'var(--color-primary-soft)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--cream-200)',
      color: 'var(--cream-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: p.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, p.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, p.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: '2px solid',
      borderColor: pkg === p.id ? 'var(--color-primary)' : 'var(--border-strong)',
      background: pkg === p.id ? 'var(--color-primary)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, pkg === p.id && /*#__PURE__*/React.createElement(BcIcon, {
    name: "check",
    size: 13,
    color: "#fff"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(DnBtn, {
    variant: "secondary",
    onClick: () => setStep(1)
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "arrowLeft",
    size: 16
  })), /*#__PURE__*/React.createElement(DnBtn, {
    variant: "accent",
    full: true,
    size: "lg",
    onClick: () => setStep(3),
    iconRight: /*#__PURE__*/React.createElement(BcIcon, {
      name: "arrowRight",
      size: 18
    })
  }, "Ti\u1EBFp t\u1EE5c"))), step === 3 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, "Th\xF4ng tin c\u1EE7a b\u1EA1n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, "\u0110\u1EC3 B\u01B0\u1EDBc g\u1EEDi l\u1EDDi c\u1EA3m \u01A1n v\xE0 c\u1EADp nh\u1EADt h\xE0nh tr\xECnh."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(DnInput, {
    label: "H\u1ECD v\xE0 t\xEAn",
    placeholder: "Nguy\u1EC5n V\u0103n A",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(DnInput, {
    label: "Email",
    type: "email",
    placeholder: "ban@email.com"
  }), /*#__PURE__*/React.createElement(DnInput, {
    label: "L\u1EDDi nh\u1EAFn g\u1EEDi c\xE1c em (kh\xF4ng b\u1EAFt bu\u1ED9c)",
    placeholder: "Ch\xFAc c\xE1c em m\u1ED9t m\xF9a h\xE8 r\u1EF1c r\u1EE1!",
    value: msg,
    onChange: e => setMsg(e.target.value)
  })), /*#__PURE__*/React.createElement(DnCard, {
    variant: "soft",
    padding: "md",
    style: {
      marginBottom: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "T\u1ED5ng quy\xEAn g\xF3p"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--color-primary)'
    }
  }, fmt(finalAmount), "\u20AB")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(DnBtn, {
    variant: "secondary",
    onClick: () => setStep(2)
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "arrowLeft",
    size: 16
  })), /*#__PURE__*/React.createElement(DnBtn, {
    variant: "accent",
    full: true,
    size: "lg",
    onClick: () => setStep(4),
    iconLeft: /*#__PURE__*/React.createElement(BcIcon, {
      name: "heart",
      size: 18
    })
  }, "Ho\xE0n t\u1EA5t quy\xEAn g\xF3p"))), step === 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      height: 76,
      borderRadius: '50%',
      background: 'var(--success-soft)',
      color: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px'
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "checkCircle",
    size: 40
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, "C\u1EA3m \u01A1n ", name || 'bạn', "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--text-xl)',
      color: 'var(--cream-700)',
      margin: '0 0 14px'
    }
  }, "B\u1EA1n v\u1EEBa c\xF9ng c\xE1c em b\u01B0\u1EDBc th\xEAm m\u1ED9t b\u01B0\u1EDBc"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      margin: '0 0 24px'
    }
  }, "\u0110\xF3ng g\xF3p ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)'
    }
  }, fmt(finalAmount), "\u20AB"), " c\u1EE7a b\u1EA1n \u0111\xE3 \u0111\u01B0\u1EE3c ghi nh\u1EADn. B\u01B0\u1EDBc s\u1EBD g\u1EEDi email c\u1EADp nh\u1EADt h\xE0nh tr\xECnh c\u1EE7a tr\u1EA1i sinh \u0111\u1EBFn b\u1EA1n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(DnBtn, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(BcIcon, {
      name: "share",
      size: 16
    })
  }, "Lan to\u1EA3"), /*#__PURE__*/React.createElement(DnBtn, {
    variant: "primary",
    onClick: onClose
  }, "Ho\xE0n t\u1EA5t"))))));
}
window.DonateScreen = DonateScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DonateScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DonorsScreen.jsx
try { (() => {
const {
  Card: DwCard,
  Badge: DwBadge,
  Avatar: DwAvatar,
  Button: DwBtn,
  ProgressBar: DwProgress,
  Stat: DwStat
} = window.BCDesignSystem_b342dd;
function DonorsScreen({
  onDonate,
  onNavigate
}) {
  const c = window.CAMPAIGN;
  const updates = [{
    date: '12/06/2026',
    title: 'Hoàn tất Phase 1 tại trường THCS Ea Tu',
    text: 'Ba buổi tập huấn tư duy phản biện đã diễn ra với 40 bạn học sinh hào hứng tham gia.',
    tag: 'Phase 1'
  }, {
    date: '02/06/2026',
    title: 'Chốt danh sách 30 trại sinh đầu tiên',
    text: 'Các bạn được nhận học bổng từ 50% đến 100% chi phí trại hè mùa này.',
    tag: 'Học bổng'
  }, {
    date: '20/05/2026',
    title: 'Khởi động chiến dịch gây quỹ',
    text: 'Cảm ơn những nhà hảo tâm đầu tiên đã đặt viên gạch cho hành trình của Bước.',
    tag: 'Cột mốc'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--gradient-night)',
      padding: '56px 28px 40px',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/bg-starry-night.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.45,
      mixBlendMode: 'screen'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-3xl)',
      color: 'var(--cream-100)',
      margin: '0 0 8px'
    }
  }, "B\u1EA3ng vinh danh nh\xE0 h\u1EA3o t\xE2m"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--text-xl)',
      color: 'var(--cream-300)',
      margin: 0
    }
  }, "C\u1EA3m \u01A1n v\xEC \u0111\xE3 b\u01B0\u1EDBc c\xF9ng c\xE1c em"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 28px 72px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "\u0110\xF3ng g\xF3p g\u1EA7n \u0111\xE2y"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, c.donors, " nh\xE0 h\u1EA3o t\xE2m")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, c.recentDonors.map((d, i) => /*#__PURE__*/React.createElement(DwCard, {
    key: i,
    variant: "default",
    padding: "md",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(DwAvatar, {
    name: d.name,
    size: "md",
    ring: d.top
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, d.name), d.top && /*#__PURE__*/React.createElement(DwBadge, {
    variant: "accent",
    size: "sm"
  }, "Nh\xE0 h\u1EA3o t\xE2m v\xE0ng")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      fontStyle: d.msg ? 'italic' : 'normal',
      marginTop: 2
    }
  }, d.msg || 'Chúc các em một mùa hè ý nghĩa!')), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--color-primary)'
    }
  }, new Intl.NumberFormat('vi-VN').format(d.amount), "\u20AB"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)'
    }
  }, d.when))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(DwBtn, {
    variant: "ghost"
  }, "Xem th\xEAm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      position: 'sticky',
      top: 90
    }
  }, /*#__PURE__*/React.createElement(DwCard, {
    variant: "default",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(DwProgress, {
    raised: c.raised,
    goal: c.goal,
    showLabel: true,
    tone: "gold"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(DwStat, {
    value: c.donors,
    label: "Nh\xE0 h\u1EA3o t\xE2m"
  }), /*#__PURE__*/React.createElement(DwStat, {
    value: c.daysLeft,
    label: "Ng\xE0y c\xF2n l\u1EA1i"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(DwBtn, {
    variant: "accent",
    full: true,
    onClick: onDonate,
    iconLeft: /*#__PURE__*/React.createElement(BcIcon, {
      name: "heart",
      size: 16
    })
  }, "C\xF9ng g\xF3p m\u1ED9t b\u01B0\u1EDBc"))), /*#__PURE__*/React.createElement(DwCard, {
    variant: "soft",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)',
      margin: '0 0 16px'
    }
  }, "C\u1EADp nh\u1EADt d\u1EF1 \xE1n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, updates.map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--cream-600)',
      marginTop: 5
    }
  }), i < updates.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      flex: 1,
      background: 'var(--purple-200)',
      marginTop: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)',
      marginBottom: 3
    }
  }, u.date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 'var(--text-sm)',
      marginBottom: 4
    }
  }, u.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, u.text)))))))), /*#__PURE__*/React.createElement(Footer, {
    onDonate: onDonate
  }));
}
window.DonorsScreen = DonorsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DonorsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer({
  onDonate
}) {
  const {
    Button: FBtn
  } = window.BCDesignSystem_b342dd;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--gradient-night)',
      color: 'var(--text-on-dark)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/bg-starry-night.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.35,
      mixBlendMode: 'screen',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 28px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 48,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-buoc-cream.png",
    alt: "B\u01B0\u1EDBc",
    style: {
      height: 52,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--text-lg)',
      color: 'var(--cream-300)',
      margin: '0 0 8px'
    }
  }, "H\xE0nh tr\xECnh v\u1EA1n d\u1EB7m b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t b\u01B0\u1EDBc ch\xE2n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.7,
      margin: 0
    }
  }, "D\u1EF1 \xE1n x\xE3 h\u1ED9i trao c\u01A1 h\u1ED9i ti\u1EBFp c\u1EADn ho\u1EA1t \u0111\u1ED9ng ngo\u1EA1i kho\xE1 & k\u1EF9 n\u0103ng s\u1ED1ng cho h\u1ECDc sinh c\u1EA5p 2 v\xF9ng T\xE2y Nguy\xEAn.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      flexWrap: 'wrap'
    }
  }, [{
    h: 'Dự án',
    items: ['Về Bước', 'Hai giai đoạn', 'Học bổng trại hè', 'Câu chuyện']
  }, {
    h: 'Tham gia',
    items: ['Quyên góp', 'Trở thành mentor', 'Đối tác đồng hành', 'Lan toả']
  }, {
    h: 'Liên hệ',
    items: ['hello@buoc.vn', 'Đắk Lắk, Tây Nguyên', 'Facebook', 'Instagram']
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--cream-300)',
      fontWeight: 700,
      marginBottom: 14
    }
  }, col.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none',
      fontSize: 'var(--text-sm)'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 22,
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-on-dark-muted)'
    }
  }, "\xA9 2026 D\u1EF1 \xE1n B\u01B0\u1EDBc \xB7 Phi l\u1EE3i nhu\u1EADn v\xEC c\u1ED9ng \u0111\u1ED3ng"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "facebook",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "instagram",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "mail",
    size: 18
  }))))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Button: HdrButton,
  IconButton: HdrIconButton
} = window.BCDesignSystem_b342dd;
function Header({
  onNavigate,
  onDonate,
  transparent = false,
  active = 'home'
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('kit-scroll');
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 40);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const onDark = transparent && !scrolled;
  const links = [{
    id: 'home',
    label: 'Trang chủ'
  }, {
    id: 'campaign',
    label: 'Dự án'
  }, {
    id: 'story',
    label: 'Hành trình'
  }, {
    id: 'donors',
    label: 'Nhà hảo tâm'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: onDark ? 'transparent' : 'rgba(255,253,248,0.86)',
      backdropFilter: onDark ? 'none' : 'saturate(140%) blur(12px)',
      borderBottom: onDark ? '1px solid transparent' : '1px solid var(--border-subtle)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: onDark ? '../../assets/logo-buoc-cream.png' : '../../assets/logo-buoc.png',
    alt: "B\u01B0\u1EDBc",
    onClick: () => onNavigate('home'),
    style: {
      height: 38,
      width: 'auto',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: active === l.id ? 'var(--weight-bold)' : 'var(--weight-medium)',
      color: onDark ? 'var(--cream-100)' : active === l.id ? 'var(--color-primary)' : 'var(--text-body)',
      padding: '8px 12px',
      borderRadius: 'var(--radius-pill)',
      opacity: onDark && active !== l.id ? 0.85 : 1
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(HdrIconButton, {
    variant: onDark ? 'onDark' : 'soft',
    label: "Chia s\u1EBB"
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "share",
    size: 18
  })), /*#__PURE__*/React.createElement(HdrButton, {
    variant: "accent",
    size: "md",
    onClick: onDonate,
    iconLeft: /*#__PURE__*/React.createElement(BcIcon, {
      name: "heart",
      size: 16
    })
  }, "Quy\xEAn g\xF3p"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button: HBtn,
  Badge: HBadge,
  Card: HCard,
  ProgressBar: HProgress,
  Stat: HStat,
  Avatar: HAvatar,
  Tag: HTag
} = window.BCDesignSystem_b342dd;
function fmtVnd(n) {
  return new Intl.NumberFormat('vi-VN').format(n);
}
function HomeHero({
  c,
  onDonate,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      color: 'var(--text-on-dark)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/bg-starry-night.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(42,15,61,0.45) 0%, rgba(61,26,82,0.25) 50%, rgba(96,48,120,0.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 28px 150px',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    variant: "onDark",
    dot: true
  }, "\u0110ang g\xE2y qu\u1EF9"), /*#__PURE__*/React.createElement(HBadge, {
    variant: "onDark"
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "mapPin",
    size: 12,
    style: {
      marginRight: 5,
      verticalAlign: '-2px'
    }
  }), "T\xE2y Nguy\xEAn")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-4xl)',
      lineHeight: 1.05,
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 16px',
      color: 'var(--cream-100)'
    }
  }, "M\u1ED7i b\u01B0\u1EDBc ch\xE2n h\xF4m nay,", /*#__PURE__*/React.createElement("br", null), "m\u1ED9t t\u01B0\u01A1ng lai r\u1ED9ng m\u1EDF"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--cream-300)',
      margin: '0 0 18px',
      lineHeight: 1.1
    }
  }, "H\xE0nh tr\xECnh v\u1EA1n d\u1EB7m b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t b\u01B0\u1EDBc ch\xE2n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.7,
      maxWidth: 480,
      margin: '0 0 28px'
    }
  }, "G\xE2y qu\u1EF9 tr\u1EA1i h\xE8 k\u1EF9 n\u0103ng s\u1ED1ng cho h\u1ECDc sinh c\u1EA5p 2 v\xF9ng T\xE2y Nguy\xEAn \u2014 n\u01A1i c\xE1c em \u0111\u01B0\u1EE3c ti\u1EBFp c\u1EADn t\u01B0 duy ph\u1EA3n bi\u1EC7n, AI v\xE0 nh\u1EEFng ho\u1EA1t \u0111\u1ED9ng ngo\u1EA1i kho\xE1 \u0111\u1EA7u \u0111\u1EDDi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "accent",
    size: "lg",
    onClick: onDonate,
    iconLeft: /*#__PURE__*/React.createElement(BcIcon, {
      name: "heart",
      size: 18
    })
  }, "Quy\xEAn g\xF3p ngay"), /*#__PURE__*/React.createElement(HBtn, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('story'),
    style: {
      color: 'var(--cream-100)',
      borderColor: 'rgba(255,240,168,0.5)'
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "play",
    size: 15,
    style: {
      marginRight: 8
    }
  }), "Xem h\xE0nh tr\xECnh")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 28,
      bottom: 0,
      transform: 'translateY(50%)',
      width: 380,
      maxWidth: 'calc(100% - 56px)'
    }
  }, /*#__PURE__*/React.createElement(HCard, {
    variant: "default",
    padding: "lg",
    style: {
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      fontWeight: 600,
      marginBottom: 4
    }
  }, "Tr\u1EA1i h\xE8 B\u01B0\u1EDBc \xB7 M\xF9a 2026"), /*#__PURE__*/React.createElement(HProgress, {
    raised: c.raised,
    goal: c.goal,
    showLabel: true,
    tone: "gold",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(HStat, {
    value: c.donors,
    label: "Nh\xE0 h\u1EA3o t\xE2m"
  }), /*#__PURE__*/React.createElement(HStat, {
    value: c.scholarships,
    label: "Su\u1EA5t h\u1ECDc b\u1ED5ng"
  }), /*#__PURE__*/React.createElement(HStat, {
    value: c.daysLeft,
    label: "Ng\xE0y c\xF2n l\u1EA1i"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "primary",
    full: true,
    onClick: onDonate
  }, "\u0110\u1ED3ng h\xE0nh c\xF9ng c\xE1c em"))))));
}
function Mission() {
  const items = [{
    icon: 'users',
    title: 'Học sinh cấp 2',
    text: 'Các bạn 13–18 tuổi ở vùng Tây Nguyên, nơi ít cơ hội tiếp cận hoạt động ngoại khoá.'
  }, {
    icon: 'lightbulb',
    title: 'Kỹ năng cho tương lai',
    text: 'Tư duy phản biện, cách học hiệu quả và làm quen với AI — hành trang bước vào đời.'
  }, {
    icon: 'handHeart',
    title: 'Học bổng 50–100%',
    text: 'Chi phí trại hè được tài trợ qua các gói học bổng, để không em nào bị bỏ lại.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '170px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--cream-700)',
      fontWeight: 700,
      marginBottom: 12
    }
  }, "V\xEC sao c\xF3 B\u01B0\u1EDBc?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-3xl)',
      color: 'var(--text-strong)',
      margin: '0 0 14px',
      lineHeight: 1.1
    }
  }, "Trao cho c\xE1c em m\u1ED9t m\xF9a h\xE8 bi\u1EBFt \u01B0\u1EDBc m\u01A1"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      lineHeight: 1.7,
      margin: 0
    }
  }, "B\u01B0\u1EDBc ho\u1EA1t \u0111\u1ED9ng d\u01B0\u1EDBi d\u1EA1ng m\u1ED9t d\u1EF1 \xE1n tr\u1EA1i h\xE8, \u0111\u01B0a nh\u1EEFng ho\u1EA1t \u0111\u1ED9ng ngo\u1EA1i kho\xE1 v\xE0 k\u1EF9 n\u0103ng s\u1ED1ng \u0111\u1EBFn g\u1EA7n h\u01A1n v\u1EDBi h\u1ECDc sinh v\xF9ng cao.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(HCard, {
    key: it.title,
    variant: "default",
    padding: "lg",
    hoverable: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--purple-100)',
      color: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: it.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      margin: 0
    }
  }, it.text))))));
}
function Phases({
  onNavigate
}) {
  const phases = [{
    tag: 'Phase 1',
    icon: 'bookOpen',
    title: 'Tập huấn kỹ năng',
    dur: 'Trước trại hè',
    text: 'Các buổi training về tư duy phản biện, phương pháp học tập và làm quen với AI.',
    points: ['Tư duy phản biện', 'Cách học hiệu quả', 'Nhập môn AI']
  }, {
    tag: 'Phase 2',
    icon: 'tent',
    title: 'Trại hè 4 ngày 3 đêm',
    dur: '4 ngày · 3 đêm',
    text: 'Các bạn cùng học tập, thực hành và trải nghiệm trong một môi trường trại hè đúng nghĩa.',
    points: ['Hoạt động nhóm', 'Thực hành dự án', 'Kết nối &amp; sẻ chia']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: '80px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--cream-700)',
      fontWeight: 700,
      marginBottom: 12
    }
  }, "Ti\u1EBFn tr\xECnh d\u1EF1 \xE1n"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-3xl)',
      color: 'var(--text-strong)',
      margin: 0,
      lineHeight: 1.1
    }
  }, "Hai giai \u0111o\u1EA1n, m\u1ED9t h\xE0nh tr\xECnh")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, phases.map((p, i) => /*#__PURE__*/React.createElement(HCard, {
    key: p.tag,
    variant: i === 1 ? 'dark' : 'soft',
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: i === 1 ? 'rgba(255,240,168,0.16)' : 'var(--purple-100)',
      color: i === 1 ? 'var(--cream-300)' : 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: p.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HBadge, {
    variant: i === 1 ? 'onDark' : 'accent'
  }, p.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: i === 1 ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      marginTop: 4
    }
  }, p.dur))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      color: i === 1 ? 'var(--cream-100)' : 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: i === 1 ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
      lineHeight: 1.7,
      margin: '0 0 18px'
    },
    dangerouslySetInnerHTML: {
      __html: p.text
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, p.points.map(pt => /*#__PURE__*/React.createElement("div", {
    key: pt,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 'var(--text-sm)',
      color: i === 1 ? 'var(--cream-100)' : 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "checkCircle",
    size: 18,
    color: i === 1 ? 'var(--cream-300)' : 'var(--success)'
  }), /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: pt
    }
  })))))))));
}
function FundUse({
  c,
  onDonate
}) {
  const rows = [{
    label: 'Hoạt động & dụng cụ học tập',
    pct: 45,
    color: 'var(--purple-600)'
  }, {
    label: 'Ăn uống cho trại sinh',
    pct: 35,
    color: 'var(--purple-400)'
  }, {
    label: 'Hậu cần & di chuyển',
    pct: 20,
    color: 'var(--cream-500)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '80px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--cream-700)',
      fontWeight: 700,
      marginBottom: 12
    }
  }, "Qu\u1EF9 k\xEAu g\u1ECDi"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-3xl)',
      color: 'var(--text-strong)',
      margin: '0 0 14px',
      lineHeight: 1.1
    }
  }, "5.000.000\u20AB \u0111\u01B0\u1EE3c d\xF9ng minh b\u1EA1ch"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      lineHeight: 1.7,
      margin: '0 0 28px'
    }
  }, "To\xE0n b\u1ED9 s\u1ED1 ti\u1EC1n k\xEAu g\u1ECDi \u0111i th\u1EB3ng \u0111\u1EBFn tr\u1EA3i nghi\u1EC7m c\u1EE7a c\xE1c em \u2014 t\u1EEB d\u1EE5ng c\u1EE5 h\u1ECDc t\u1EADp, b\u1EEFa \u0103n \u0111\u1EBFn h\u1EADu c\u1EA7n tr\u1EA1i h\xE8."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-sm)',
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 600
    },
    dangerouslySetInnerHTML: {
      __html: r.label
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 700
    }
  }, r.pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: 'var(--purple-100)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: r.pct + '%',
      height: '100%',
      background: r.color,
      borderRadius: 'var(--radius-pill)'
    }
  })))))), /*#__PURE__*/React.createElement(HCard, {
    variant: "accent",
    padding: "lg",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--gradient-gold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px',
      color: 'var(--purple-800)'
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "gift",
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "200.000\u20AB"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      margin: '8px 0 20px',
      lineHeight: 1.6
    }
  }, "\u0111\u1EE7 \u0111\u1EC3 m\u1ED9t em c\xF3 su\u1EA5t \u0103n & d\u1EE5ng c\u1EE5 trong su\u1ED1t 4 ng\xE0y tr\u1EA1i h\xE8."), /*#__PURE__*/React.createElement(HBtn, {
    variant: "primary",
    full: true,
    onClick: onDonate
  }, "T\u1EB7ng m\u1ED9t su\u1EA5t"))));
}
function DonorStrip({
  c,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: '72px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, c.donors, " t\u1EA5m l\xF2ng \u0111\xE3 c\xF9ng B\u01B0\u1EDBc"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      margin: '0 0 28px'
    }
  }, "M\u1ED7i c\xE1i t\xEAn l\xE0 m\u1ED9t l\u1EDDi ch\xFAc g\u1EEDi \u0111\u1EBFn c\xE1c em."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 24
    }
  }, c.recentDonors.slice(0, 7).map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginLeft: i ? -12 : 0
    }
  }, /*#__PURE__*/React.createElement(HAvatar, {
    name: d.name,
    size: "lg",
    ring: true,
    style: {
      boxShadow: '0 0 0 3px var(--surface-card)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: -12,
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'var(--purple-700)',
      color: 'var(--cream-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      boxShadow: '0 0 0 3px var(--surface-card)'
    }
  }, "+", c.donors - 7)), /*#__PURE__*/React.createElement(HBtn, {
    variant: "secondary",
    onClick: () => onNavigate('donors'),
    iconRight: /*#__PURE__*/React.createElement(BcIcon, {
      name: "arrowRight",
      size: 16
    })
  }, "Xem b\u1EA3ng vinh danh")));
}
function FinalCta({
  onDonate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--gradient-night)',
      padding: '88px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/bg-starry-night.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.5,
      mixBlendMode: 'screen'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(BcIcon, {
    name: "sparkles",
    size: 32,
    color: "var(--cream-300)",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-3xl)',
      color: 'var(--cream-100)',
      margin: '0 0 14px',
      lineHeight: 1.1
    }
  }, "M\u1ED9t b\u01B0\u1EDBc c\u1EE7a b\u1EA1n, v\u1EA1n d\u1EB7m c\u1EE7a c\xE1c em"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.7,
      margin: '0 0 28px'
    }
  }, "C\xF9ng B\u01B0\u1EDBc trao cho h\u1ECDc sinh T\xE2y Nguy\xEAn m\u1ED9t m\xF9a h\xE8 \u0111\u01B0\u1EE3c h\u1ECDc, \u0111\u01B0\u1EE3c ch\u01A1i, v\xE0 \u0111\u01B0\u1EE3c m\u01A1 \u01B0\u1EDBc."), /*#__PURE__*/React.createElement(HBtn, {
    variant: "accent",
    size: "lg",
    onClick: onDonate,
    iconLeft: /*#__PURE__*/React.createElement(BcIcon, {
      name: "heart",
      size: 18
    })
  }, "Quy\xEAn g\xF3p ngay")));
}
function HomeScreen({
  onDonate,
  onNavigate
}) {
  const c = window.CAMPAIGN;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HomeHero, {
    c: c,
    onDonate: onDonate,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Mission, null), /*#__PURE__*/React.createElement(Phases, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(FundUse, {
    c: c,
    onDonate: onDonate
  }), /*#__PURE__*/React.createElement(DonorStrip, {
    c: c,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(FinalCta, {
    onDonate: onDonate
  }), /*#__PURE__*/React.createElement(Footer, {
    onDonate: onDonate
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide-style icon set (2px round stroke) for the Bước UI kit.
   Matches Lucide's geometry & stroke conventions. Exported to window. */
const BcIcon = ({
  name,
  size = 20,
  stroke = 2,
  color = 'currentColor',
  style = {},
  ...rest
}) => {
  const P = {
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z"
    }),
    arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m12 5 7 7-7 7"
    })),
    arrowLeft: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M19 12H5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m12 19-7-7 7-7"
    })),
    chevronDown: /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }),
    chevronRight: /*#__PURE__*/React.createElement("path", {
      d: "m9 18 6-6-6-6"
    }),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 2v4M8 2v4M3 10h18"
    })),
    mapPin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    })),
    sparkles: /*#__PURE__*/React.createElement("path", {
      d: "M9.94 14.66 12 22l2.06-7.34L22 12l-7.94-2.66L12 2l-2.06 7.34L2 12z"
    }),
    star: /*#__PURE__*/React.createElement("path", {
      d: "M11.5 2.5 14 8l6 .8-4.4 4.1 1.2 6L11.5 16 6.2 18.9l1.2-6L3 8.8 9 8z"
    }),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    }),
    checkCircle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    })),
    share: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "5",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "19",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"
    })),
    menu: /*#__PURE__*/React.createElement("path", {
      d: "M4 6h16M4 12h16M4 18h16"
    }),
    x: /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18M6 6l12 12"
    }),
    gift: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "8",
      width: "18",
      height: "4",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"
    })),
    bookOpen: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 7v14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
    })),
    lightbulb: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7.5a6 6 0 0 0-12 0c0 1.5.3 2.7 1.5 4 .8.8 1.3 1.5 1.5 2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 18h6M10 22h4"
    })),
    tent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3.5 21 14 3M20.5 21 10 3M15.5 21 12 15l-3.5 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 21h20"
    })),
    mountain: /*#__PURE__*/React.createElement("path", {
      d: "m8 3 4 8 5-5 5 15H2L8 3z"
    }),
    handHeart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M11 14h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2H9.5a3 3 0 0 0-2.1.9L4 14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m2 16 4 4 8-1 6-5a2 2 0 0 0-2.75-2.91L13 14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 5.5a2 2 0 0 0-3.4-1.4l-.6.6-.6-.6A2 2 0 0 0 10 5.5c0 2 3.5 4 3.5 4s3.5-2 3.5-4Z"
    })),
    quote: /*#__PURE__*/React.createElement("path", {
      d: "M10 11H6a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v7c0 2-1 3-3 4M21 11h-4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v7c0 2-1 3-3 4"
    }),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 6v6l4 2"
    })),
    shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    })),
    instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.5",
      cy: "6.5",
      r: "1",
      fill: "currentColor",
      stroke: "none"
    })),
    facebook: /*#__PURE__*/React.createElement("path", {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    }),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      width: "20",
      height: "16",
      x: "2",
      y: "4",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
    })),
    play: /*#__PURE__*/React.createElement("path", {
      d: "m6 3 14 9-14 9V3z"
    })
  };
  const filled = name === 'play';
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? color : 'none',
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      ...style
    }
  }, rest), P[name] || null);
};
window.BcIcon = BcIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

})();
