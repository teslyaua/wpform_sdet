import { Page } from "@playwright/test";
import { Admin } from "../models/admins";

export const Login = (page: Page) => ({
  usernameInput: page.getByLabel("Username or Email Address"),
  passwordInput: page.getByLabel("Password", { exact: true }),
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
