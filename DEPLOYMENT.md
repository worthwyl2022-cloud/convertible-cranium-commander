# Convertible Cranium Justice OS deployment

This repository deploys the **Convertible Cranium Justice OS Chromium Edition** browser interface through the GitHub Pages workflow. The workflow is currently named `Deploy Cranium OS` for historical continuity; the name can be updated separately without changing the repository slug.

The historical GitHub Pages URL may still contain the `cranium-operator-os` repository slug until an owner-approved manual GitHub repository rename is completed. Do not infer that the slug rename has occurred.

The Metacognitive Tracker is a first-class module within the same application. After deployment, open it directly with the hash route:

```text
https://worthwyl2022-cloud.github.io/cranium-operator-os/#metacognition
```

The default application entry point is:

```text
https://worthwyl2022-cloud.github.io/cranium-operator-os/
```

The deployment is a browser demonstration and operator surface. The tracker uses browser local storage; this does not establish a production database or distributed storage service. The application includes an acquisition demo, metacognitive tracker, creator studio, resonance lab, and diligence room.

## Deployment requirements

The repository must have GitHub Pages enabled with the GitHub Actions source. The workflow requires `pages: write` and `id-token: write` permissions. The build runs locked dependency installation, TypeScript checking, and the Vite production build before deployment.

## Scope and non-claims

This deployment is a demonstration and operator surface. It is not the private canonical authority plane and does not independently grant authority, provide security certification, or replace the controlled acquisition diligence package. A successful frontend build does not prove that a complete bootable ChromiumOS image, production deployment, quantum backend, HSM/KMS custody, verified boot, or independent security audit exists.
