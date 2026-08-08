const LAST_SIGN_IN_EMAIL_KEY = "bdt-booking:last-sign-in-email";

export function getLastSignInEmail() {
  if (typeof window === "undefined") {
    return "";
  }

  return window.localStorage.getItem(LAST_SIGN_IN_EMAIL_KEY) ?? "";
}

export function rememberSignInEmail(email: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(LAST_SIGN_IN_EMAIL_KEY, email.trim().toLowerCase());
}
