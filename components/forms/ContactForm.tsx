"use client";

import { useActionState } from "react";
import { submitContactMessage } from "@/app/contact/actions";
import { initialContactFormState } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField, FormStatusMessage, controlProps } from "@/components/forms/FormField";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactMessage,
    initialContactFormState
  );

  if (state.status === "success") {
    return <FormStatusMessage status={state.status} message={state.message} />;
  }

  const { values, errors } = state;

  return (
    <form action={formAction} noValidate className="space-y-6">
      <FormStatusMessage status={state.status} message={state.message} />

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="name" label="Ad soyad" required error={errors.name}>
          <Input
            {...controlProps("name", errors.name)}
            autoComplete="name"
            required
            maxLength={120}
            defaultValue={values.name}
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
      </div>

      <FormField id="message" label="Mesajınız" required error={errors.message}>
        <Textarea
          {...controlProps("message", errors.message)}
          required
          rows={6}
          maxLength={4000}
          defaultValue={values.message}
        />
      </FormField>

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Gönderiliyor…" : "Mesajı Gönder"}
      </Button>
    </form>
  );
}
