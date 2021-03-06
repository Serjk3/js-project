class ApiService {
  constructor(baseURL) {
    this.url = baseURL;
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + "/posts.json", {
        method: "post",
        body: JSON.stringify(post),
      });
      return useRequest(request);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPost() {
    try {
      const request = new Request(this.url + "/posts.json", {
        method: "get",
      });
      return useRequest(request);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPostById(id) {
    try {
      const request = new Request(`${this.url}/posts/${id}.json`, {
        method: "GET",
      });
      return useRequest(request);
    } catch (error) {
      console.log(error);
    }
  }
}

async function useRequest(request) {
  const response = await fetch(request);
  return await response.json();
}

export const API_SERVICE = new ApiService(
  "https://ryzhko-fe-17-onl-default-rtdb.firebaseio.com/"
);
