import fs from "fs";
import path from "path";

function pages(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return pages(p);
    return e.name === "page.tsx" ? [p] : [];
  });
}

describe("page titles", () => {
  it("never let the layout template append the brand twice", () => {
    const offenders: string[] = [];
    for (const file of pages(path.join(process.cwd(), "app"))) {
      const src = fs.readFileSync(file, "utf8");
      const re = /^\s*title:\s*["']([^"']+)["'],/gm;
      let m: RegExpExecArray | null;
      while ((m = re.exec(src))) {
        const t = m[1];
        if (t.includes("Turbo Bytes Consulting") || t.endsWith("| TBC")) {
          offenders.push(`${path.relative(process.cwd(), file)}: ${t}`);
        }
      }
    }
    expect(offenders).toEqual([]);
  });
});
