import { existsSync } from "node:fs"
import { spawn } from "node:child_process"
import { join } from "node:path"

process.env.NODE_ENV ||= "production"

const serverPath = join(process.cwd(), ".next", "standalone", "server.js")

if (!existsSync(serverPath)) {
  console.error("No se encontró .next/standalone/server.js. Ejecuta primero: npm run build")
  process.exit(1)
}

const child = spawn(process.execPath, [serverPath], { stdio: "inherit", env: process.env })
child.on("exit", (code) => process.exit(code ?? 1))