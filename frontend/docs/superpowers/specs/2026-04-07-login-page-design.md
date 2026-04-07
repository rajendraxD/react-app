---
name: login-page-design
description: Design specification for a minimal centered quick‑sign‑in login page (email + password).
type: reference
---

# Login Page Design – Minimal Centered Card (Option A)

**Goal**: Provide the fastest possible sign‑in experience with a clean, centered form that focuses on email + password only.

## Layout & Visual Style
- Single‑column card centered vertically and horizontally in the viewport.
- Light background (`#ffffff`) with a subtle box‑shadow (`0 2px 8px rgba(0,0,0,0.1)`).
- Responsive: on narrow screens the card takes 90% width, on wider screens max‑width = 400 px.
- Font family: same as rest of app (e.g., `Inter`).
- Primary button: solid primary color, full width, with slight hover transition.

## Component Structure (React)
```
LoginPage
 └─ CenteredCard
     ├─ EmailInput
     ├─ PasswordInput
     └─ SubmitButton
```
- `LoginPage` holds local state for `email`, `password`, and `isSubmitting`.
- `CenteredCard` is a presentational wrapper with CSS flex centering.
- Input components expose `value`, `onChange`, and `error` props.

## State & Behaviour
- Initialise `email` and `password` as empty strings.
- On mount, automatically focus the email input.
- On form submit:
  1. Set `isSubmitting` = true.
  2. Call the authentication API (POST `/api/auth/login`).
  3. Handle success → redirect to dashboard.
  4. Handle error → display inline error message under the relevant field.
  5. Reset `isSubmitting` = false.
- Inline validation runs on blur:
  - Email must match `/^\S+@\S+\.\S+$/`.
  - Password must be at least 6 characters.

## Styling (CSS – `login-styles.css`)
```css
.lp-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f5f5f5;
}
.lp-card {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}
.lp-input {
  width: 100%;
  padding: .5rem;
  margin-top: .25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.lp-input.error { border-color: #e00; }
.lp-error-msg { color: #e00; font-size: .85rem; margin-top: .25rem; }
.lp-submit {
  margin-top: 1rem;
  width: 100%;
  padding: .75rem;
  background: #0066ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.lp-submit:disabled { opacity: .6; cursor: not-allowed; }
```

## Accessibility
- Labels associated with inputs via `htmlFor` / `id`.
- Keyboard navigation: Tab order email → password → submit.
- ARIA live region for error messages.
- Color contrast meets WCAG AA.

## Testing Notes
- Unit tests for validation functions.
- Integration test ensures successful API call redirects.
- Visual regression snapshot of centered card on desktop and mobile.

---

*Spec written and ready for review.*

**Implementation Note**: This design replaces the current two‑panel layout in `src/pages/LoginPage.jsx` with a single centered card. Existing CSS classes (`lp-grid`, `lp-left`, `lp-right`) will be removed or repurposed, and new classes (`lp-center`, `lp-card`) defined above will be used.
