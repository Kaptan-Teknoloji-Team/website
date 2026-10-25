"use client";

import { useActionState } from "react";
import { submitApplication } from "@/app/join/actions";
import { GRADE_LEVELS, INTEREST_AREAS } from "@/data/team-data";
import { initialJoinFormState } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormField,
  FormStatusMessage,
  controlProps,
  nativeSelectClassName,
} from "@/components/forms/FormField";

export function JoinForm() {
  const [state, formAction, pending] = useActionState(
    submitApplication,
    initialJoinFormState
  );

  if (state.status === "success") {
    return <FormStatusMessage status={state.status} message={state.message} />;
  }

  const { values, errors } = state;

  return (
    <form action={formAction} noValidate className="space-y-6">
      <FormStatusMessage status={state.status} message={state.message} />

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="fullName" label="Ad soyad" required error={errors.fullName}>
          <Input
            {...controlProps("fullName", errors.fullName)}
            autoComplete="name"
            required
            maxLength={120}
            defaultValue={values.fullName}
          />
        </FormField>

        <FormField id="email" label="E-posta adresi" required error={errors.email}>
          <Input
            {...controlProps("email", errors.email)}
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            defaultValue={values.email}
          />
        </FormField>

        <FormField id="school" label="Okul" required error={errors.school}>
          <Input
            {...controlProps("school", errors.school)}
            autoComplete="organization"
            required
            maxLength={160}
            defaultValue={values.school}
          />
        </FormField>

        <FormField id="grade" label="Sınıf seviyesi" required error={errors.grade}>
          <select
            {...controlProps("grade", errors.grade)}
            required
            defaultValue={values.grade ?? ""}
            className={nativeSelectClassName}
          >
            <option value="" disabled>
              Seçiniz
            </option>
            {GRADE_LEVELS.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <fieldset
        aria-describedby={errors.interests ? "interests-error" : undefined}
        className="space-y-3"
      >
        <legend className="text-sm font-medium text-foreground">
          İlgi alanları
          <span className="text-muted-foreground" aria-hidden="true"> *</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {INTEREST_AREAS.map((area) => (
            <label key={area} className="flex items-center gap-3 text-sm text-foreground">
              <input
                type="checkbox"
                name="interests"
                value={area}
                defaultChecked={state.interests.includes(area)}
                className="h-4 w-4 accent-primary"
              />
              {area}
            </label>
          ))}
        </div>
        {errors.interests && (
          <p id="interests-error" className="text-sm text-destructive">
            {errors.interests}
          </p>
        )}
      </fieldset>

      <FormField
        id="skills"
        label="Teknik beceriler"
        required
        hint="Örneğin kullandığınız programlama dilleri, araçlar veya donanım deneyimi."
        error={errors.skills}
      >
        <Textarea
          {...controlProps("skills", errors.skills, true)}
          required
          rows={3}
          maxLength={1000}
          defaultValue={values.skills}
        />
      </FormField>

      <FormField id="introduction" label="Kendinizi kısaca tanıtın" required error={errors.introduction}>
        <Textarea
          {...controlProps("introduction", errors.introduction)}
          required
          rows={4}
          maxLength={2000}
          defaultValue={values.introduction}
        />
      </FormField>

      <FormField id="motivation" label="Takıma neden katılmak istiyorsunuz?" required error={errors.motivation}>
        <Textarea
          {...controlProps("motivation", errors.motivation)}
          required
          rows={4}
          maxLength={2000}
          defaultValue={values.motivation}
        />
      </FormField>

      <FormField
        id="portfolio"
        label="GitHub veya portfolyo bağlantısı"
        hint="https:// ile başlayan tam bağlantıyı yazın."
        error={errors.portfolio}
      >
        <Input
          {...controlProps("portfolio", errors.portfolio, true)}
          type="url"
          inputMode="url"
          autoComplete="url"
          placeholder="https://github.com/kullanici-adi"
          defaultValue={values.portfolio}
        />
      </FormField>

      <div className="space-y-2 border-t border-border pt-6">
        <label className="flex items-start gap-3 text-sm text-foreground">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            defaultChecked={state.consent}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
          />
          <span>
            Paylaştığım kişisel verilerin başvurumun değerlendirilmesi ve benimle
            iletişime geçilmesi amacıyla işlenmesine onay veriyorum.
            <span className="text-muted-foreground" aria-hidden="true"> *</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="text-sm text-destructive">
            {errors.consent}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Gönderiliyor…" : "Başvuruyu Gönder"}
      </Button>
    </form>
  );
}
