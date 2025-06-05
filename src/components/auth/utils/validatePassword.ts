export function validatePassword(password: string) {
  return [
    {
      message: "One letter",
      isChecked: /[a-zA-Z]/.test(password),
    },
    {
      message: "One number",
      isChecked: /[0-9]/.test(password),
    },
    {
      message: "One special character",
      isChecked: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
    {
      message: "6 or more characters",
      isChecked: password.length >= 6,
    },
  ];
}
