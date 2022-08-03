export const saveAuthLocalStorage = (token) => {
  const access_token = {
    token,
  };

  localStorage.setItem("auth", JSON.stringify(access_token));
};

export const getAuthStorage = () => {
  return localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : [];
};
