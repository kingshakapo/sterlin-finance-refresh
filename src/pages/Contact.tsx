import { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "78dceba4-d534-430b-8e69-f5a4a89f8304");
    formData.append("subject", "New enquiry from sterlinfin.com");
    formData.append("from_name", "Sterling Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        form.reset();
        toast({
          title: "Message sent",
          description: "Thank you. A member of our team will be in touch shortly.",
        });
      } else {
        toast({
          title: "Submission failed",
          description: data.message || "Please try again or email info@sterlinfin.com.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please try again or email info@sterlinfin.com.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Speak with our team."
        subtitle="We welcome enquiries from institutions, corporates and private clients."
      />

      <section className="bg-ivory py-24 md:py-32">
        <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Office details */}
          <div>
            <SectionEyebrow>Cape Town</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-navy md:text-5xl">Our office.</h2>
            <ul className="mt-12 space-y-6 text-navy">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-serif text-lg">Address</div>
                  <p className="text-slate">The Sterling Building, Foreshore<br />Cape Town 8001, South Africa</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-serif text-lg">Telephone</div>
                  <a href="tel:+27640806800" className="text-slate hover:text-gold transition-colors">+27 64 080 6800</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-serif text-lg">Email</div>
                  <a href="mailto:info@sterlinfin.com" className="text-slate hover:text-gold transition-colors">info@sterlinfin.com</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-serif text-lg">Hours</div>
                  <p className="text-slate">Monday — Friday · 08:00–18:00 SAST</p>
                </div>
              </li>
            </ul>

            <div className="mt-12 aspect-[4/3] w-full bg-navy/10 grid place-items-center text-slate text-sm">
              <span>Cape Town · Foreshore</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 shadow-card md:p-12">
            <SectionEyebrow>Enquiry</SectionEyebrow>
            <h3 className="mt-6 font-serif text-3xl text-navy">Send us a message.</h3>
            <form onSubmit={onSubmit} className="mt-8 grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-slate">Name</Label>
                  <Input id="name" name="name" required className="mt-2 rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold" />
                </div>
                <div>
                  <Label htmlFor="company" className="text-xs uppercase tracking-[0.18em] text-slate">Company</Label>
                  <Input id="company" name="company" className="mt-2 rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold" />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-slate">Email</Label>
                  <Input id="email" name="email" type="email" required className="mt-2 rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs uppercase tracking-[0.18em] text-slate">Phone</Label>
                  <Input id="phone" name="phone" className="mt-2 rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold" />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-slate">Message</Label>
                <Textarea id="message" name="message" required rows={5} className="mt-2 rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold" />
              </div>
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              <Button type="submit" disabled={submitting} className="mt-4 self-start rounded-none bg-navy px-8 text-ivory hover:bg-navy-deep">
                {submitting ? "Sending…" : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
