export class UserInfo {
  constructor(selectors) {
    this.nameElement = document.querySelector(selectors.nameSelector);
    this.jobElement = document.querySelector(selectors.jobSelector);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      job: this.jobElement.textContent,
    };
  }

  setUserInfo({ name, job }) {
    this.nameElement.textContent = name;
    this.jobElement.textContent = job;
  }
}
