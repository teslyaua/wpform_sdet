import { test, expect } from "@playwright/test";
import moment from "moment";
import { App } from "../pages/app";
import { sdetAdmin } from "../models/admins";

const extendedTest = test.extend<{ app: ReturnType<typeof App> }>({
  app: async ({ page }, use) => {
    await use(App(page));
  }
});

extendedTest.describe("Create post suite", () => {
  const formatName = "YYYY-MM-DD_h-mm-ss";
  const postTitle = `sdet-test_${moment().format(formatName)}`;

  extendedTest("Create post", async ({ page, app }) => {
    await extendedTest.step(`STEP-1: Login to a WP dashboard as ${sdetAdmin.adminName}`, async () => {
      await app.loginPage.open();
      await app.loginPage.login(sdetAdmin);
    });

    await extendedTest.step(`STEP-2: Publish a post with title: ${postTitle}`, async () => {
      await app.newPostPage.open();
      await app.newPostPage.addPostInfo(postTitle, `${postTitle} description`);
      await app.newPostPage.publishPost();
    });

    await extendedTest.step(`STEP-3: View post and check content`, async () => {
      await app.newPostPage.viewPost();
    });

    await expect.soft(page.locator("h1"), "Title is not correct").toContainText(postTitle);
    await expect.soft(page.locator(".entry-content"), "Description is not correct").toContainText(`${postTitle} description`);
    await expect.soft(page, "URL is not correct").toHaveURL(`${postTitle}/`);

    await extendedTest.step(`STEP-4: Open the sdet main and check it's visible`, async () => {
      await app.SdetMainPage.open();
    });

    await expect.soft(page.locator("li").filter({ hasText: postTitle }), "Post is not visible").toBeVisible();

    await extendedTest.step(`STEP-5: Click to the post title and check URL is correct`, async () => {
      await app.SdetMainPage.openPostByTitle(postTitle);
    });

    await expect.soft(page, "URL is not correct").toHaveURL(`${postTitle}/`);
  });

  extendedTest.afterAll("Delete post after test", async ({ browser }) => {
    let page = await browser.newPage();
    let app = App(page);
    await extendedTest.step(`STEP-1: Login to a WP dashboard as ${sdetAdmin.adminName}`, async () => {
      await app.loginPage.open();
      await app.loginPage.login(sdetAdmin);
    });

    await extendedTest.step(`STEP-2: Move post to a trash and check it's not visible anymore`, async () => {
      await app.wpDashboardPage.openPostsMenu();
      await app.wpDashboardPage.deletePostByTitle(postTitle);
    });

    await expect.soft(page.getByRole("cell", { name: postTitle })).not.toBeVisible();
  });
});
