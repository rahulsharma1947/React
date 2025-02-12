export const getuserList = async () => {
    try {
      var appConfig = window.APP_CONFIG;
      let token = localStorage.getItem("token");
     // console.log(appConfig);
      const response = await fetch(appConfig.ApiUrl+"/user/getUserList", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer '+token+''
        }
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      return data; // This should return token/user info
    } catch (error) {
      if(error.message == 'Login failed'){
        window.location.assign(appConfig.root+"logout");
      }
      throw new Error(error.message);
    }
};

export const getPlantationCount = async () => {
    try {
      var appConfig = window.APP_CONFIG;
      console.log(appConfig);
      let token = localStorage.getItem("token");
      const response = await fetch(appConfig.ApiUrl+"/plantation/getcount", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer '+token+''
        }
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      return data; // This should return token/user info
    } catch (error) {
      if(error.message == 'Login failed'){
       
        window.location.assign(appConfig.root+"logout");
      }
      throw new Error(error.message);
    }
};
