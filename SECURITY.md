# Security Policy

The **Kaptan Teknoloji Takımı** (Yahya Kaptan Anadolu Lisesi) team takes the security and integrity of our open-source software and digital assets seriously. We appreciate the responsible disclosure of any vulnerabilities found in our codebase and services.

---

## Supported Versions

Security updates and patches are actively applied to the default `main` branch.

| Version / Branch | Supported          | Status             |
| :--------------- | :----------------: | :----------------- |
| `main`           | :white_check_mark: | Actively supported |
| < `0.1.0`        | :x:                | Unsupported        |

---

## Reporting a Vulnerability

> [!IMPORTANT]
> **Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests.**

If you discover a potential security vulnerability in this repository, please report it through one of the following confidential channels:

### 1. GitHub Private Vulnerability Reporting (Recommended)
You can report security issues privately directly through GitHub:
1. Navigate to the [Security Advisories](https://github.com/Kaptan-Teknoloji-Team/website/security/advisories) page of this repository.
2. Click **"Report a vulnerability"** to open a confidential draft advisory.
3. Provide full details and submit the report.

### 2. Confidential Security Email
If you are unable to use GitHub Private Vulnerability Reporting, you can report the issue directly via email:
* **Email:** [kaptanteknolojiteam@gmail.com](mailto:kaptanteknolojiteam@gmail.com)
* **Subject Line:** `[SECURITY] Vulnerability Report - <Brief Summary>`

---

## What to Include in Your Report

To help us triage and resolve the issue quickly, please provide as much context as possible:
* **Type of Issue:** (e.g., Cross-Site Scripting (XSS), Sensitive Information Disclosure, Dependency CVE, Header Misconfiguration, SSRF).
* **Location:** The specific URL, component, API route, or file path affected.
* **Reproduction Steps:** Step-by-step instructions or a minimal Proof of Concept (PoC) demonstrating how to reproduce the vulnerability.
* **Potential Impact:** An explanation of what an attacker could achieve by exploiting this vulnerability.
* **Remediation Suggestions:** Any proposed patches, fixes, or mitigation strategies (optional but welcome).

---

## Response Timeline & Coordinated Disclosure

When a vulnerability report is submitted, our team commits to the following timeline:
* **Initial Acknowledgment:** Within **48 hours** of receiving your report.
* **Triage & Assessment:** Within **5 business days**, validating the issue and determining its severity.
* **Remediation & Fix:** We will work on a patch and coordinate testing.
* **Public Disclosure:** Once a fix has been verified and deployed, a public security advisory will be published, giving full credit to the reporter (unless you request anonymity).

---

## Continuous Security Practices

We employ automated and proactive measures to maintain a secure codebase:
* **Automated Static Code Analysis:** [GitHub CodeQL](.github/workflows/codeql.yml) scans JavaScript and TypeScript code on every push, pull request, and scheduled weekly intervals.
* **Automated Dependency Auditing:** [Dependabot](.github/dependabot.yml) monitors npm dependencies and GitHub Actions weekly for known vulnerabilities (CVEs) and issues automated update PRs.
* **Cryptographically Signed Commits:** Team commits are signed using verified SSH/GPG keys to ensure author authenticity and tamper resistance.
* **Type Safety & Strict Linting:** TypeScript strict mode and ESLint rules are enforced across all components and configurations.
