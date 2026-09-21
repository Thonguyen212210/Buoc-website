Labeled text field with focus ring, helper/error text, and optional adornments.

```jsx
<Input label="Số tiền quyên góp" prefix="₫" suffix="VNĐ" placeholder="200.000" />
<Input label="Email" type="email" error="Email không hợp lệ" />
```

Use `prefix`/`suffix` for currency and units. `error` turns the field red and replaces `hint`.
