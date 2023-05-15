import { test } from "@playwright/test";

test("Open PMTool and fill user and psw", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("test");
  await page.locator("#password").fill("test");
});
