export const signUp = (user) => (
  $.ajax({
    url: "/api/users/",
    method: "POST",
    dataType: "json",
    data: {user}})
);

export const login = (user) => (
  $.ajax({
    url: "/api/session/",
    method: "POST",
    dataType: "json",
    data: {user}})
);

export const logout = () => (
  $.ajax({
    url: "/api/session/",
    method: "DELETE"
  })
);
