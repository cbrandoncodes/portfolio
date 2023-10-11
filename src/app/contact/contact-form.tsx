"use client";

import contactStyles from "./contact.module.scss";

import { apiFetch } from "@/utils/api";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { Toaster, toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter a valid email"),
  message: yup.string().required("Please enter your message"),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const button = document.querySelector("button[type='submit']");

    const handleButtonHover = () => {
      document.querySelector(".cursor")?.classList.add("hover");
    };
    const handleButtonLeave = () => {
      document.querySelector(".cursor")?.classList.remove("hover");
    };

    if (loading) {
      document.querySelector(".cursor")?.classList.remove("hover");
      button?.removeEventListener("mouseenter", handleButtonHover);
      button?.removeEventListener("mouseleave", handleButtonLeave);
    } else {
      button?.addEventListener("mouseenter", handleButtonHover);
      button?.addEventListener("mouseleave", handleButtonLeave);
    }

    return () => {
      button?.removeEventListener("mouseenter", handleButtonHover);
      button?.removeEventListener("mouseleave", handleButtonLeave);
    };
  }, [loading]);

  async function handleSend(data: any) {
    try {
      setLoading(true);

      const res = await apiFetch<any>("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res?.success) {
        reset();
        toast.success(res?.message ?? "Message sent successfully");
      } else {
        throw new Error(res?.message ?? "An error occurred");
      }

      setLoading(false);
    } catch (err: any) {
      const error = err?.message ?? "An error occurred";
      toast.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleFormError(errors: any) {
    const firstKey = Object.keys(errors)?.[0];
    toast.error(
      errors?.[firstKey]?.message ?? "Fix all errors before submitting"
    );
    (
      document.querySelector(`input[name="${firstKey}"]`) as HTMLInputElement
    )?.focus();
  }

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "text-gray-500",
        }}
      />
      <div className={contactStyles["form-container"]}>
        <form
          onSubmit={handleSubmit(handleSend, handleFormError)}
          className={contactStyles.form}
        >
          <div className={contactStyles.group}>
            <Controller
              defaultValue=""
              control={control}
              name="firstName"
              render={({
                field: { value, name, onChange },
                fieldState: { error },
              }) => (
                <Input
                  name={name}
                  placeholder="First Name*"
                  value={value}
                  className="text-sm"
                  error={!!error}
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <Controller
              defaultValue=""
              control={control}
              name="lastName"
              render={({
                field: { value, name, onChange },
                fieldState: { error },
              }) => (
                <Input
                  name={name}
                  placeholder="Last Name*"
                  value={value}
                  className="text-sm"
                  error={!!error}
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
          </div>
          <Controller
            defaultValue=""
            control={control}
            name="email"
            render={({
              field: { value, name, onChange },
              fieldState: { error },
            }) => (
              <Input
                name={name}
                placeholder="Email Address*"
                value={value}
                className="text-sm"
                error={!!error}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />
          <Controller
            defaultValue=""
            control={control}
            name="message"
            render={({
              field: { value, name, onChange },
              fieldState: { error },
            }) => (
              <Textarea
                name={name}
                placeholder="Message*"
                value={value}
                className="text-sm"
                error={!!error}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />
          <Button
            theme="base"
            type="submit"
            className={contactStyles["form-submit"]}
            disabled={loading}
          >
            <span className="text-sm">{loading ? "Sending..." : "Submit"}</span>{" "}
            <SendHorizonal size={16} strokeWidth={2} />
          </Button>
        </form>
      </div>
    </>
  );
}
