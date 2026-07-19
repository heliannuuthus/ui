# `ui.heliannuuthus.com`

The showcase is deployed by GitHub Actions from `apps/ui-showcase/dist`.

The Heliannuuthus UI showcase uses `ui.heliannuuthus.com` as its dedicated project domain.

To attach the Cloudflare-managed subdomain:

1. In `heliannuuthus/pallas`, open **Settings → Pages** and set `ui.heliannuuthus.com` under **Custom domain**.
2. In Cloudflare DNS, create `CNAME ui → heliannuuthus.github.io`.
3. Start with Cloudflare Proxy status set to **DNS only** until GitHub finishes issuing the TLS certificate.
4. Return to the Pallas repository Pages settings and enable **Enforce HTTPS**.
5. After HTTPS is active, Cloudflare proxying can be enabled if required. Use SSL/TLS mode **Full (strict)**.

The existing `heliannuuthus.github.io` user site is not replaced: setting a custom domain on the Pallas repository overrides the user-site domain for this project only.

The custom domain maps this Pages site to the domain root. The repository prefix is removed:

- Default project URL: `https://heliannuuthus.github.io/pallas/`
- Custom project URL: `https://ui.heliannuuthus.com/`
- Component documentation can use paths such as `https://ui.heliannuuthus.com/components/button`.

Because this site is published with a custom GitHub Actions workflow, a `CNAME` file in the artifact is ignored and is not required. Do not include the repository path (`/pallas`) or a URL scheme in the Cloudflare DNS target.
