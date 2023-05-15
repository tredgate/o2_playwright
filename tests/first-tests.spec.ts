import { test } from "@playwright/test";

test("First test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  //notes
  await page.locator("#username").fill("test");
});
