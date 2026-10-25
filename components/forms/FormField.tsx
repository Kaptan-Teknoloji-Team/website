import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { FormStatus } from "@/lib/forms";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export function FormField({ id, label, required, hint, error, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required ? (
          <span className="text-muted-foreground" aria-hidden="true"> *</span>
        ) : (
          <span className="font-normal text-muted-foreground"> (isteğe bağlı)</span>
        )}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

/** Accessibility props that connect a control with its hint and error text. */
export function controlProps(id: string, error?: string, hasHint = false) {
  const describedBy = [hasHint ? `${id}-hint` : "", error ? `${id}-error` : ""]
    .filter(Boolean)
    .join(" ");

  return {
    id,
    name: id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy || undefined,
  };
}

export function FormStatusMessage({ status, message }: { status: FormStatus; message: string }) {
  if (status === "idle" || !message) return null;

  const isSuccess = status === "success";
  return (
    <div
      role={isSuccess ? "status" : "alert"}
      className={cn(
        "rounded-md border px-4 py-3 text-sm",
        isSuccess
          ? "border-primary/40 text-foreground"
          : "border-destructive/50 text-destructive"
      )}
    >
      {message}
    </div>
  );
}

export const nativeSelectClassName =
  "flex h-11 w-full rounded-md border border-input bg-background px-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 md:text-sm";
