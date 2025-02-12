export const loginUser = async (username, passward) => {
  try {
    const appConfig = window.APP_CONFIG;
    console.log(appConfig);
    const response = await fetch(appConfig.ApiUrl+"/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, passward }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data; // This should return token/user info
  } catch (error) {
    throw new Error(error.message);
  }
};

export const isAuthenticated= () => {
    return !!localStorage.getItem("token");
}
