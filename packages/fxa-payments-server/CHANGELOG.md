# Change history

## 1.147.4

No changes.

## 1.147.3

No changes.

## 1.147.2

No changes.

## 1.147.1

No changes.

## 1.147.0

### New features

- support form: use a modal for successful submission message (037617a2e)

### Bug fixes

- build: npm audit fix (4839fcc5e)
- content/payment: update helmet (a6adbc815)
- payments: fix storybook rendering since adding matchMedia to app context (f5446b404)
- payments-server: trap exceptions in App component to display an error dialog rather than just failing to render (a0949bce6)

### Other changes

- legal: update payments server footer links (69e13ae50)

## 1.146.4

No changes.

## 1.146.3

### Bug fixes

- deps: Update handle deps to fix advisories (081895ad8)
- content/payment: update helmet (24fe65c44)

## 1.146.2

### Bug fixes

- content/payment: update helmet (052caaa0e)

## 1.146.1

No changes.

## 1.146.0

### Bug fixes

- payments: Dockerfile-test can just use the base Dockerfile to test (2feb51102)
- payments: respond to /**version** (6e2bc606b)
- payments: update payment views for mobile (4ed4d39e3)
- layout: fix ToS and Privacy Notice links on payments server (19127d30d)

### Other changes

- deps: fxa-payments-server npm audit changes (71575a8a2)

## 1.145.5

### Bug fixes

- content/payment: update helmet (24fe65c44)

## 1.145.4

No changes.

## 1.145.3

No changes.

## 1.145.2

No changes.

## 1.145.1

No changes.

## 1.145.0

### New features

- fortress: add "fortress" relying party (2ffe1334d)

### Bug fixes

- style: make billing info heading bold (73f127fd9)
- payments: better validation for Stripe elements (fffd3e9db)

### Refactorings

- db: rename productName to productId (5d709f96d)

### Other changes

- payments: upgrade eslint and react-scripts (955ecc02e)
- payments: 100% test coverage for subscription management route (a5cef8cf6)

## 1.144.4

No changes.

## 1.144.3

No changes.

## 1.144.2

No changes.

## 1.144.1

No changes.

## 1.144.0

### New features

- payments: Allow 'npm test' to test files under 'server/' directory (a0fcc420c)

### Bug fixes

- payments server: stop embedding inline js in prod build (492773b59)
- css: fix #2125 - Remove horizontal scrollbars (810b540a9)
- payments: Fix payments compilation (57d1b660a)
- payments: ensure storybook gets a properly mocked-out app config (2fb2f24f6)
- payments: quick fix for BrowserslistError: Unknown browser query `android all` (5cc7134df)
- payments: use redux-devtools-extension package in redux store (5560b79ba)

### Other changes

- payments: 100% test coverage on product payment route (8b18001e4)
- fxa-payments-server: fixes #1923 - add CSP to the payments server (7988167c3)
- docs: add changelogs for subscription packages (5876ced17)
- hooks: turn on prettier hook for typescript (7e69761f0)
- payments: upgrade or remove many dependencies (574780f7d)
- payments: general fixes and better separation for testing configs (34754c46f)
- payments: improve test coverage of Redux store utils (e83453bdb)
- payments: improve component test coverage (ad39e9e85)
- deps: update dependency @testing-library/react to v9 (8876bac70)
- payments: improve DialogMessage test coverage (f2092253f)
- payments: tweak jest projects to fix coverage reports (c9a8d396a)
- payments: get PaymentForm up to 100% test coverage (46612c42d)
- payments: improve test coverage of PlanDetails component (2dd6ceda2)
- payments: improve test coverage for AppContext and validator (920f99650)
- payments: add tests for hooks and screen-info (881eb7d12)
- payments: add more component tests (de357d13a)
- payments: increase test coverage to 40-50% (49197da36)
- payments: enable test coverage reports (bd510d7cc)
- payments: reformat payments-server with prettier (9ba026998)
- payments: Add prettier config files to payments-server (64b831565)

## 1.143.4

Prehistoric.
