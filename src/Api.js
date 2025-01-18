export default class Api {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getInitialUser() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards/`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  editProfile(name, job) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  createCard(name, link) {
    return fetch(`${this.baseUrl}/cards/`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  like() {
    fetch(`${this.baseUrl}/cards/`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        isLiked: this.like,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    // ...
  }
  deleteCard(name, link) {
    fetch(`${this.baseUrl}/cards/:cardId`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  deleteLike() {
    fetch(`${this.baseUrl}/cards/:cardId`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  updateProfile() {
    fetch(`${this.baseUrl}/users/me/avatar`, {
      headers: this.headers,
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
}
