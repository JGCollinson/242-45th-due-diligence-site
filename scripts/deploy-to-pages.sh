#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-242-45th-due-diligence-site}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: brew install gh"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Log in to GitHub (browser opens):"
  gh auth login -h github.com -p https -w
fi

if git remote get-url origin >/dev/null 2>&1; then
  echo "Remote origin already set; pushing main..."
  git push -u origin main
else
  echo "Creating public repo ${REPO_NAME} and pushing main..."
  gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
fi

OWNER_REPO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"
echo "Enabling GitHub Pages (GitHub Actions source)..."
gh api "repos/${OWNER_REPO}/pages" -X POST -f build_type=workflow 2>/dev/null \
  || gh api "repos/${OWNER_REPO}/pages" -X PUT -f build_type=workflow

echo ""
echo "Deploy workflow started. Watch progress:"
echo "  gh run watch --repo ${OWNER_REPO}"
echo ""
echo "Site URL (after workflow succeeds):"
echo "  https://${OWNER_REPO%%/*}.github.io/${REPO_NAME}/"
