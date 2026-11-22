# Maintaining the Biribi brand site

Standalone static site for `brand.biribi.net`. GitHub Pages serves the `public/` directory. The project needs no install, build, or environment variables.

## Local preview

From the repository root, run `python3 -m http.server 4173 --bind 127.0.0.1 --directory public` and open [the local preview](http://127.0.0.1:4173).

## Sources

- Official blue chip files come from the [contracts listing assets](https://github.com/BiribiNet/contracts/tree/d2fb7981f6aeafea22c9683d8871badc3fa04c6e/docs/listing-assets). The white SVG adapts the same geometry to the frontend dark theme foreground.
- Product screenshots, wheel artwork, fonts and color tokens come from the Biribi frontend. The hero wheel is a static render of the homepage wheel in its idle state. The screenshots are dated October 21, 2026.
- The contract table and JSON contain the eight addresses shared by the [public deployment manifest](https://biribi.net/.well-known/dapp-manifest.json) and the contracts checkout. Update the page and JSON together when addresses change, then refresh the bundled JSON in `public/assets/biribi-media-kit.zip`. The full deployment references are linked from the site.
- The current [game rules](https://biribi.net/biribi-rules), [whitepaper](https://biribi.net/whitepaper), and [onchain evidence](https://biribi.net/infrastructure) are maintained on Biribi.net.

## GitHub Pages

1. Publish this repository as `BiribiNet/brand` and select **GitHub Actions** under **Settings → Pages → Source**. Push to `main` or run **Publish brand site** to deploy the static files.
2. In the BiribiNet account's **Settings → Pages**, verify `brand.biribi.net` using the TXT name and value GitHub displays. Add the TXT record in the authoritative Microsoft-hosted `biribi.net` DNS zone.
3. In the repository's **Settings → Pages**, save `brand.biribi.net` under **Custom domain**. The Microsoft-hosted DNS zone needs a CNAME named `brand` pointing to `biribinet.github.io`.
4. Wait for the DNS check and certificate provisioning to finish, then enable **Enforce HTTPS**. Verify the homepage and media kit both return HTTP 200 over HTTPS.

### Troubleshooting HTTPS

If the browser reports a certificate name mismatch or shows a certificate for `*.github.io`, check both the DNS record and the repository's Pages configuration:

```sh
dig +short CNAME brand.biribi.net
gh api repos/BiribiNet/brand/pages --jq '{cname, https_enforced, https_certificate}'
```

The expected CNAME target is `biribinet.github.io.`. If the Pages API reports `"cname": null`, a repository admin needs to save `brand.biribi.net` under **Custom domain**. GitHub provisions a certificate for the hostname after its DNS check passes. [GitHub’s HTTPS provisioning guide](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

```sh
curl -fsSI https://brand.biribi.net/
curl -fsSI https://brand.biribi.net/assets/biribi-media-kit.zip
```

If TLS succeeds but the homepage returns HTTP 404, try `https://brand.biribi.net/index.html`. If that works and the `/` response shows a cache hit, recheck `/` after the cached response clears.
