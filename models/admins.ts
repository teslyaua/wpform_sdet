export class Admin {
  adminName: string;
  adminPassword: string;

  constructor(
    adminName: string,
    adminPassword: string,
  ) {
    this.adminName = adminName;
    this.adminPassword = adminPassword;
  }
}

export const sdetAdmin = new Admin(`${process.env.TEST_ADMIN_NAME}`, `${process.env.TEST_ADMIN_PSWD}`);
