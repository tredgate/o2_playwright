import { expect, test } from "@playwright/test";

test("toHaveText test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("o2_skoleni");
  await page.locator("#password").fill("PlaywrightJede1");
  await page.locator("button[type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );
});

test("toBeVisible test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(
    page.locator("img[title='TEG Project Management']")
  ).toBeVisible();
});

test("Soft assert test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect.soft(page.locator(".form-title")).toHaveText("Login PMTOOL");
  await page.locator("#username").fill("o2_skoleni");
  await page.locator("#password").fill("PlaywrightJede1");
  await page.locator("button[type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );
});

test("Negative test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(page.locator(".alert.alert-danger")).not.toBeVisible();
});
