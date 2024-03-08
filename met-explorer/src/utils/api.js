class Api {
  constructor() {
    this.baseURL = "https://collectionapi.metmuseum.org/public/collection/v1";
  }

  _fetchData(url, options) {
    console.log("_fetchData", this.baseURL);
    return fetch(`${this.baseURL}/${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`{Error: ${res.status}`);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  getDepartments() {
    return this._fetchData("/departments", {
      method: "GET",
    });
  }

  getDepartmentObjects(departmentId) {
    return this._fetchData(
      `search?departmentId=${departmentId}&isOnView=true&hasImages=true&q=*`,
      {
        method: "GET",
      }
    );
  }

  getDepartmentObjectById(randomId) {
    return this._fetchData(`objects/${randomId}`, {
      method: "GET",
    });
  }
}

export default Api;
