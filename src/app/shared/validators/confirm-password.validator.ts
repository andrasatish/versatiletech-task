import { AbstractControl } from "@angular/forms";

export const emailMatcher = (control: AbstractControl): any => {
  const password = control.get("password");
  const confirmPassword = control.get("confirmPassword");
  if (password.value === confirmPassword.value) {
    const errorsLength =
      (typeof confirmPassword.errors == "object" && confirmPassword.errors)
        ? Object.keys(confirmPassword.errors).length
        : 0;
    return confirmPassword.setErrors(
      errorsLength >= 1 ? { ...confirmPassword.errors } : null
    );
  } else {
    return confirmPassword.setErrors({
      ...confirmPassword.errors,
      passwordMismatch: true,
    });
  }
};
