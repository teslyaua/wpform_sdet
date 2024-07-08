import { Page } from "@playwright/test";

export const WpDashboard = (page: Page) => ({
  async openPostsMenu() {
    await page.getByRole("link", { name: "Posts", exact: true }).click();
  },
  async deletePostByTitle(title: string) {
    await page.getByRole("cell", { name: title }).hover();
    await page.getByLabel(`Move “${title}” to the Trash`).click();
  }
});
