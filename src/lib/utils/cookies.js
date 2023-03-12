export const userId = "user_id"
export const accessToken = "access_token"
export const refreshToken = "refresh_token"

export function setCookie(k, v) {
  document.cookie = `${k}=${v}; path=/`;
}

export function getCookie(k) {
  const cookie = document.cookie.split(';').find((c) => c.trim().startsWith(`${k}=`));
  if (cookie) {
    return cookie.split('=')[1];
  }

  return null;
}
