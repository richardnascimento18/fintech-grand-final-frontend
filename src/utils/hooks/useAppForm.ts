import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNotification } from "@/utils";

export function useAppForm<T extends Record<string, unknown>>(schema: any) {
  const { notify } = useNotification();

  const form = useForm<T>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const handleSubmitWithNotify = (onSubmit: SubmitHandler<T>) =>
    form.handleSubmit(async (data) => {
      try {
        await onSubmit(data);
      } catch (error) {
        notify(
          error instanceof Error ? error.message : "Erro ao enviar o formulário.",
          "error"
        );
      }
    });

  return { ...form, handleSubmitWithNotify, notify };
}
