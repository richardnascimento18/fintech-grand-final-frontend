import { FieldError } from "react-hook-form";
import { forwardRef, InputHTMLAttributes } from "react";

interface FormFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "ref" | "onChange" | "onBlur"> {
  label: string;
  error?: FieldError;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, ...props }, ref) => (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={props.id} className="font-poppins text-[1.5rem] font-bold text-primary-50">
        {label}
      </label>
      <input
        {...props}
        ref={ref} // attach RHF ref here
        className={`w-full h-16 bg-primary-50 rounded-sm font-poppins text-[1.125rem] px-[.5rem] font-light outline-none ${
          error ? "border border-red-500" : ""
        } ${props.className ?? ""}`}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  )
);

FormField.displayName = "FormField";
