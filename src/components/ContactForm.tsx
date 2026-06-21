"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, type ContactFormData } from "@/server/actions/contactAction";

type FieldErrors = Record<string, string[]>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const [form, setForm] = useState<ContactFormData>({
    name: "", email: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setFieldErrors({});

    startTransition(async () => {
      const result = await submitContactForm(form);

      if (result.success) {
        setStatus("success");
        setServerMessage(result.message);
        setForm({ name: "", email: "", message: "" });
      } else {
        if (typeof result.errors === "string") {
          setStatus("error");
          setServerMessage(result.errors);
        } else {
          setFieldErrors(result.errors as FieldErrors);
          setStatus("error");
          setServerMessage("Please fix the errors below.");
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
          Full Name <span className="text-brand-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          required
          maxLength={100}
          placeholder="Jane Smith"
          className={`w-full px-4 py-3 rounded-xl bg-surface-700/60 backdrop-blur-sm
                      border text-slate-100 placeholder-slate-600 text-sm
                      focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all
                      ${fieldErrors.name ? "border-red-500/60" : "border-surface-500 hover:border-surface-400"}`}
        />
        {fieldErrors.name && (
          <p className="mt-1 text-xs text-red-400">{fieldErrors.name[0]}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
          Email Address <span className="text-brand-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
          maxLength={254}
          placeholder="jane@example.com"
          className={`w-full px-4 py-3 rounded-xl bg-surface-700/60 backdrop-blur-sm
                      border text-slate-100 placeholder-slate-600 text-sm
                      focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all
                      ${fieldErrors.email ? "border-red-500/60" : "border-surface-500 hover:border-surface-400"}`}
        />
        {fieldErrors.email && (
          <p className="mt-1 text-xs text-red-400">{fieldErrors.email[0]}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
          Message <span className="text-brand-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          placeholder="Tell me about your project or opportunity..."
          className={`w-full px-4 py-3 rounded-xl bg-surface-700/60 backdrop-blur-sm
                      border text-slate-100 placeholder-slate-600 text-sm resize-none
                      focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all
                      ${fieldErrors.message ? "border-red-500/60" : "border-surface-500 hover:border-surface-400"}`}
        />
        <div className="flex justify-between mt-1">
          {fieldErrors.message ? (
            <p className="text-xs text-red-400">{fieldErrors.message[0]}</p>
          ) : <span />}
          <p className="text-xs text-slate-600">{form.message.length}/3000</p>
        </div>
      </div>

      {/* Status banner */}
      <AnimatePresence>
        {(status === "success" || (status === "error" && serverMessage)) && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`flex items-start gap-3 p-4 rounded-xl text-sm
              ${status === "success"
                ? "bg-green-500/10 border border-green-500/30 text-green-300"
                : "bg-red-500/10 border border-red-500/30 text-red-300"}`}
          >
            {status === "success"
              ? <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              : <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />}
            {serverMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending || status === "success"}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending…
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle className="w-4 h-4" /> Message Sent
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
