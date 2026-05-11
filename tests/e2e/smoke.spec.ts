import { test, expect } from "@playwright/test";

test.describe("smoke", () => {
  test("health endpoint returns ok when app is running", async ({ request }) => {
    const res = await request.get("/api/health").catch(() => null);
    if (!res) {
      test.skip(true, "No server at PLAYWRIGHT_BASE_URL — start app or skip in CI stub phase.");
      return;
    }
    expect(res.ok()).toBeTruthy();
    const json = await res.json().catch(() => ({}));
    expect(json).toMatchObject({ status: "ok" });
  });

  test("developer portal responds when docs app serves", async ({ page }) => {
    const res = await page.goto("/").catch(() => null);
    if (!res) {
      test.skip(true, "Docs/dev server not running.");
      return;
    }
    expect(res.ok()).toBeTruthy();
  });
});
