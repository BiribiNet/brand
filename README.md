# Biribi Brand & Media Kit

Standalone static site for `brand.biribi.net`. GitHub Pages serves the `public/` directory. The project needs no install, build, or environment variables.

## Local preview

From this directory, run `python3 -m http.server 4173 --bind 127.0.0.1 --directory public` and open [the local preview](http://127.0.0.1:4173).

## Sources

- Official blue chip files come from the [contracts listing assets](https://github.com/BiribiNet/contracts/tree/d2fb7981f6aeafea22c9683d8871badc3fa04c6e/docs/listing-assets). The white SVG adapts the same geometry to the frontend dark theme foreground.
- Product screenshots, wheel artwork, fonts and color tokens come from the Biribi frontend. The hero wheel is a static render of the homepage wheel in its idle state. The screenshots are dated October 21, 2026.
- The contract table and JSON contain the eight addresses shared by the [public deployment manifest](https://biribi.net/.well-known/dapp-manifest.json) and the contracts checkout. Update the page and JSON together when addresses change, then refresh the bundled JSON in `public/assets/biribi-media-kit.zip`. The full deployment references are linked from the site.
- The current [game rules](https://biribi.net/biribi-rules), [whitepaper](https://biribi.net/whitepaper), and [onchain evidence](https://biribi.net/infrastructure) are maintained on Biribi.net.

## GitHub Pages

1. Publish this repository as `BiribiNet/brand` and select **GitHub Actions** under **Settings → Pages → Source**. Push to `main` or run **Publish brand site** to deploy the static files.
2. In the BiribiNet account's **Settings → Pages**, verify `brand.biribi.net` using the TXT name and value GitHub displays. Add the TXT record in the authoritative Microsoft-hosted `biribi.net` DNS zone.
3. In the repository's **Settings → Pages**, save `brand.biribi.net` as the custom domain. Then add a CNAME named `brand` pointing to `biribinet.github.io` in the same DNS zone.
4. Enable **Enforce HTTPS** once available, then check `dig +short CNAME brand.biribi.net` and verify the site and media-kit download over HTTPS.

See [GitHub’s custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
