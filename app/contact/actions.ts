"use server";

import {
  INVALID_FORM_MESSAGE,
  SUBMISSION_UNAVAILABLE_MESSAGE,
  checkLength,
  isValidEmail,
  readText,
  type ContactField,
  type ContactFormState,
} from "@/lib/forms";

export async function submitContactMessage(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values = {
    name: readText(formData, "name"),
    email: readText(formData, "email"),
    message: readText(formData, "message"),
  };

  const errors: Partial<Record<ContactField, string>> = {
    name: checkLength(values.name, { min: 2, max: 120, label: "Ad soyad" }),
    email: isValidEmail(values.email)
      ? undefined
      : "Geçerli bir e-posta adresi girin.",
    message: checkLength(values.message, { min: 10, max: 4000, label: "Mesaj" }),
  };

  if (Object.values(errors).some(Boolean)) {
    return { status: "invalid", message: INVALID_FORM_MESSAGE, errors, values };
  }

  // No delivery integration is configured yet. Return "success" only after
  // a real integration confirms delivery.
  return { status: "error", message: SUBMISSION_UNAVAILABLE_MESSAGE, errors: {}, values };
}
