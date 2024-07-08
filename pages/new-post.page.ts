import { Page } from "@playwright/test";

export const NewPost = (page: Page) => ({
  editorIframe: page.frameLocator('iframe[name="editor-canvas"]'),
  editorPublish: page.getByLabel("Editor publish"),

  async open() {
    await page.goto("/wp-admin/post-new.php");
  },

  async addPostInfo(title: string, description: string) {
    await this.editorIframe.getByLabel("Add title").fill(title);
    await this.editorIframe.getByLabel("Add default block").click();
    await this.editorIframe.locator(`[data-title="Paragraph"]`).fill(description);
  },

  async publishPost() {
    await page.getByRole("button", { name: "Publish", exact: true }).click();
    await this.editorPublish.getByRole("button", { name: "Publish", exact: true }).click();
  },
  async viewPost() {
    await this.editorPublish.getByRole("link", { name: "View Post" }).click();
  }
});
