import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

export const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form!);

    const res = await fetch("https://formspree.io/f/xgvynkdl", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    
    if (res.ok) {
      toast.success(t("message-sent"), {
        description: t("message-sent-desc"),
        position: "top-right",
      });
      (form as HTMLFormElement).reset();
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('ready-to-go-global-title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact-us-content')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">{t('send-us-message')}</CardTitle>
              <CardDescription>{t('send-us-message-desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('full-name')} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="name"
                    id="name"
                    placeholder={t('full-name')}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="email@example.com"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('phone-number')} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="phone"
                    id="phone"
                    placeholder="0909 xxx xxx"
                    className="w-full"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]+"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('content')}
                  </label>
                  <Textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder={t('content-placeholder')}
                    className="w-full"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  {t('send-message')}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('why-work-with-us')}</h4>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li className="flex items-center" key={i}>
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{t(`why-work-with-us-content-${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};