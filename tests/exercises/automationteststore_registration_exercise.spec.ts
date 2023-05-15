import { test } from "@playwright/test";

test("E2E registration", async ({ page }) => {
  await page.goto("https://automationteststore.com/");
  await page.locator("ul[id='customer_menu_top'] li a").click();
  await page.locator("button[title='Continue']").click();
  await page.locator("#AccountFrm_firstname").fill("Andrej");
  await page.locator("#AccountFrm_lastname").fill("Novy");
  await page.locator("#AccountFrm_email").fill("uretets2334@example.com");
  await page.locator("#AccountFrm_address_1").fill("abcd");
  await page.locator("#AccountFrm_city").fill("Prague");
  await page.locator("#AccountFrm_country_id").selectOption("56");
  await page.locator("#AccountFrm_postcode").fill("10000");
  await page.locator("#AccountFrm_zone_id").selectOption({ label: "Praha" });
  await page.locator("#AccountFrm_loginname").fill("petrpetr1234");
  await page.locator("#AccountFrm_password").fill("bezpecneHeslo1");
  await page.locator("#AccountFrm_confirm").fill("bezpecneHeslo1");
  await page.locator("#AccountFrm_newsletter0").check();
  await page.locator("#AccountFrm_agree").check();
  await page.locator("button[title='Continue']").click();
});
