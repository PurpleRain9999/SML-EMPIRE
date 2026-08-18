💲SML-EMPIRE💲 — Version 1 foundation
This is the first frontend foundation for the SML-Empire business platform. It is intentionally a clean, modular starting point rather than a fake production payment/authentication system.
Run locally
Install Node.js 18+.
In this folder run npm install.
Run npm run dev.
Open the local URL shown by Next.js.
Production modules to connect next
PostgreSQL + Prisma (members, memberships, rewards, audit logs)
Secure authentication + email/SMS OTP provider
PayPal/card payment provider and signed webhooks
Affiliate network APIs/links
AI service with server-side key
WebSocket/realtime member presence and chat
WAF/CDN/rate limiting and monitoring
Admin RBAC and 2FA/passkeys
Privacy/terms/consent workflows
Country/currency configuration
Never put API secrets or payment credentials in browser code. Use server-side environment variables and verify payment webhooks server-side.
