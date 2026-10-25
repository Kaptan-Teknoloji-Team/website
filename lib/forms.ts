/**
 * Shared form types and validation helpers for the join and contact forms.
 */

export type FormStatus = "idle" | "invalid" | "error" | "success";

export type JoinTextField =
  | "fullName"
  | "email"
  | "school"
  | "grade"
  | "skills"
  | "introduction"
  | "motivation"
  | "portfolio";

export type JoinField = JoinTextField | "interests" | "consent";

export interface JoinFormState {
  status: FormStatus;
  message: string;
  errors: Partial<Record<JoinField, string>>;
  values: Partial<Record<JoinTextField, string>>;
  interests: string[];
  consent: boolean;
}

export const initialJoinFormState: JoinFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: {},
  interests: [],
  consent: false,
};

export type ContactField = "name" | "email" | "message";

export interface ContactFormState {
  status: FormStatus;
  message: string;
  errors: Partial<Record<ContactField, string>>;
  values: Partial<Record<ContactField, string>>;
}

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: {},
};

/**
 * Shown after successful validation while no delivery integration
 * (email service, database, etc.) is configured. Never report a false success.
 */
export const SUBMISSION_UNAVAILABLE_MESSAGE =
  "Form gönderimi henüz aktif değil; bilgileriniz kaydedilmedi veya iletilmedi. Lütfen daha sonra tekrar deneyin.";

export const INVALID_FORM_MESSAGE = "Lütfen işaretli alanları kontrol edin.";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readText(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function isValidEmail(value: string): boolean {
  return value.length <= 254 && EMAIL_PATTERN.test(value);
}

export function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/** Returns an error message when the value is outside the allowed length. */
export function checkLength(
  value: string,
  { min, max, label }: { min: number; max: number; label: string }
): string | undefined {
  if (value.length < min) {
    return min <= 1
      ? `Lütfen ${label} alanını doldurun.`
      : `${label} en az ${min} karakter olmalıdır.`;
  }
  if (value.length > max) {
    return `${label} en fazla ${max} karakter olabilir.`;
  }
  return undefined;
}
