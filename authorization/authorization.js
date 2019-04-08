import { SecureStore } from "expo";

const auth0ClientId = "ZLDepP0e3CUPK6k1qcsQU86R1Zk9KxEp";
const auth0Domain = "https://zombie-qr.auth0.com";
const audience = "https://www.zombie-qr-api.com";

const auth0ClientSecret =
  "KZNS7QJYyfrPp0tlL__cIjUSh4WKYcQ-qP1UZEKeAxpF1Vchuucce0kAXlP5Ur8r";

const login = async (username, password) => {
  const data = {
    method: "POST",
    body: JSON.stringify({
      grant_type: "password",
      client_id: auth0ClientId,
      username,
      password,
      scope: "offline_access, openid",
      audience
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  let res = await fetch(auth0Domain.concat("/oauth/token"), data);
  res = await res.json();

  if (!res.error) {
    console.log(res.access_token);
    await SecureStore.setItemAsync("userToken", res.access_token);
    // await SecureStore.setItemAsync("refreshToken", res.refresh_token);
  }

  return res;
};

const getUserToken = async () => {
  try {
    // Below function is used to retrieve token from asyncstorage, it returns a promise
    // const value = await AsyncStorage.getItem('userToken');
    const value = await SecureStore.getItemAsync("userToken");
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

const logOut = async () => {
  try {
    await SecureStore.deleteItemAsync("userToken");
    // await SecureStore.deleteItemAsync("refreshToken");
    return true;
  } catch (error) {
    console.log(error);
  }
};

const refreshUserToken = async () => {
  const refreshToken = await SecureStore.getItemAsync("refreshToken");
  const data = {
    method: "POST",
    body: JSON.stringify({
      grant_type: "refresh_token",
      client_id: auth0ClientId,
      client_secret: auth0ClientSecret,
      refresh_token: refreshToken
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  let res = await fetch(auth0Domain.concat("/oauth/token"), data);
  res = await res.json();

  if (!res.error) {
    console.log(res);
    await SecureStore.setItemAsync("userToken", res.access_token);
  }

  return res;
};

export { login, getUserToken, logOut };
