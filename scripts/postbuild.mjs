import { copyFileSync, mkdirSync, readdirSync, statSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { fileURLToPath } from "node:url"

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const standalone = join(root, ".next", "standalone")

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true })
  for (const entry of readdirSync(src)) {
    const from = join(src, entry)
    const to = join(dest, entry)
    if (statSync(from).isDirectory()) {
      copyDir(from, to)
    } else {
      copyFileSync(from, to)
    }
  }
}

copyDir(join(root, ".next", "static"), join(standalone, ".next", "static"))
copyDir(join(root, "public"), join(standalone, "public"))

console.log("✓ Copiados .next/static y public hacia .next/standalone")