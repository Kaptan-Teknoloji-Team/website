"use server";

import { GRADE_LEVELS, INTEREST_AREAS } from "@/data/team-data";
import {
  INVALID_FORM_MESSAGE,
  SUBMISSION_UNAVAILABLE_MESSAGE,
  checkLength,
  isHttpUrl,
  isValidEmail,
  readText,
  type JoinField,
  type JoinFormState,
} from "@/lib/forms";

const ALLOWED_INTERESTS: readonly string[] = INTEREST_AREAS;
const ALLOWED_GRADES: readonly string[] = GRADE_LEVELS;

export async function submitApplication(
  _previousState: JoinFormState,
  formData: FormData
): Promise<JoinFormState> {
  const values = {
    fullName: readText(formData, "fullName"),
    email: readText(formData, "email"),
    school: readText(formData, "school"),
    grade: readText(formData, "grade"),
    skills: readText(formData, "skills"),
    introduction: readText(formData, "introduction"),
    motivation: readText(formData, "motivation"),
    portfolio: readText(formData, "portfolio"),
  };
  const interests = formData
    .getAll("interests")
    .filter(
      (value): value is string =>
        typeof value === "string" && ALLOWED_INTERESTS.includes(value)
    );
  const consent = formData.get("consent") === "on";

  const errors: Partial<Record<JoinField, string>> = {
    fullName: checkLength(values.fullName, { min: 2, max: 120, label: "Ad soyad" }),
    email: isValidEmail(values.email)
      ? undefined
      : "Geçerli bir e-posta adresi girin.",
    school: checkLength(values.school, { min: 1, max: 160, label: "Okul" }),
    grade: ALLOWED_GRADES.includes(values.grade)
      ? undefined
      : "Lütfen sınıf seviyenizi seçin.",
    interests: interests.length > 0 ? undefined : "En az bir ilgi alanı seçin.",
    skills: checkLength(values.skills, { min: 1, max: 1000, label: "Teknik beceriler" }),
    introduction: checkLength(values.introduction, {
      min: 20,
      max: 2000,
      label: "Kendinizi tanıtın",
    }),
    motivation: checkLength(values.motivation, {
      min: 20,
      max: 2000,
      label: "Motivasyon",
    }),
    portfolio:
      values.portfolio && !isHttpUrl(values.portfolio)
        ? "Bağlantı http:// veya https:// ile başlamalıdır."
        : undefined,
    consent: consent
      ? undefined
      : "Başvurunuzun değerlendirilebilmesi için onay vermeniz gerekir.",
  };

  const hasErrors = Object.values(errors).some(Boolean);
  if (hasErrors) {
    return { status: "invalid", message: INVALID_FORM_MESSAGE, errors, values, interests, consent };
  }

  // No delivery integration (email service, database, etc.) is configured yet.
  // Connect one here and return status "success" only after it succeeds.
  return {
    status: "error",
    message: SUBMISSION_UNAVAILABLE_MESSAGE,
    errors: {},
    values,
    interests,
    consent,
  };
}
