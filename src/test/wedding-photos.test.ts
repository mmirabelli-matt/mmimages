import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { galleryPhotos, heroPhotos } from "@/lib/wedding-photos";

const photoExists = (path: string) => existsSync(resolve(process.cwd(), "public", path));

describe("Wedding photography", () => {
  it("includes all nine opening photographs", () => {
    expect(heroPhotos).toHaveLength(9);
    expect(heroPhotos.every(photoExists)).toBe(true);
  });

  it("includes all 107 gallery photographs", () => {
    expect(galleryPhotos).toHaveLength(107);
    expect(galleryPhotos.every(photoExists)).toBe(true);
  });
});
