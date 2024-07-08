import { Page } from "@playwright/test";

export const SdetMain = (page: Page) => ({
  async open() {
    await page.goto("/");
  },

  async openPostByTitle(title: string) {
    await page.getByRole("link", { name: title }).click();
  }
});
