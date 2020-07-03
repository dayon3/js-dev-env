import "whatwg-fetch";
import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

export const getUsers = () => {
  return get("users");
};

export const deleteUser = (id) => {
  return del(`users/${id}`);
};

const get = (url) => {
  return fetch(baseUrl + url).then(onSuccess, onError);
};

const del = (url) => {
  const request = new Request(baseUrl + url, {
    method: "DELETE",
  });

  return fetch(request).then(onSuccess, onError);
};

const onSuccess = (response) => {
  return response.json();
};

const onError = (err) => {
  console.log(err); // eslint-disable-line no-console
};
