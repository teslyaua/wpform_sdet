import { Page } from "@playwright/test";
import { Login } from "./login.page";
import { NewPost } from "./new-post.page";
import { SdetMain } from "./sdet-main.page";
import { WpDashboard } from "./wp-dashboard.page";

export const App = (page: Page) => ({
  loginPage: Login(page),
  newPostPage: NewPost(page),
  SdetMainPage: SdetMain(page),
  wpDashboardPage: WpDashboard(page)
});
