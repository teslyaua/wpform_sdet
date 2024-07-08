import { Page } from "@playwright/test";
import { Admin } from "../models/admins";

export const Login = (page: Page) => ({
  usernameInput: page.locator("#user_login"),
  passwordInput: page.locator("#user_pass"),
  loginBtn: page.getByRole("button", { name: "Log In" }),

  async open() {
    await page.goto("/wp-login.php", { waitUntil: "domcontentloaded" });
  },

  async login(admin: Admin) {
    await this.usernameInput.fill(admin.adminName);
    await this.passwordInput.fill(admin.adminPassword);
    await this.loginBtn.click();
    await page.waitForLoadState("networkidle");
  }
});
