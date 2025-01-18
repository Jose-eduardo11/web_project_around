export default class UserInfo {
  constructor(userName, userJob, userAvatar) {
    this._nameElement = document.querySelector(userName);
    this._jobElement = document.querySelector(userJob);
    this._avatarElement = document.querySelector(userAvatar);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._obElement.textContent,
    };
  }

  setUserInfo(name, job, avatar) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
    this._avatarElement.src = avatar;
  }
}
