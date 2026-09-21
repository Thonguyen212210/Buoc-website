Donation-goal progress bar — the signature crowdfunding element.

```jsx
<ProgressBar raised={3200000} goal={5000000} showLabel />
<ProgressBar value={64} tone="purple" size="sm" />
```

Give it `raised` + `goal` (VNĐ) to auto-compute percent and show a formatted "3.200.000₫ / 5.000.000₫" label, or pass `value` (0–100) directly. `tone`: `gold` (default) or `purple`.
