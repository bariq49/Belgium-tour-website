import React from "react";
import { Logo } from "@/layout/header/logo";
import Link from "next/link";
import {
  Send,
  Mail,
} from "lucide-react";
import {
  COMPANY_PHONE,
  COMPANY_EMAIL,
} from "@/constants/app-default";
import { FooterColumn, FooterLink } from "./footer-column";
import FooterBottomBar from "./footer-bottom-bar";
import {
  FacebookIcon,
  TikTokIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon
} from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { useForm, FormProvider } from "react-hook-form";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },

];

const TOURS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

const SUPPORT_LINKS = [
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

export const Footer = () => {
  const methods = useForm({
    defaultValues: {
      email: ""
    }
  });

  return (
    <footer className="bg-secondary text-white border-t border-white/5 font-roboto">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <Logo variant="white" className="w-48" />
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-tight">
                Tailored private journeys across Belgium
                with certified expert guides and luxury
                transportation.
              </p>
              <div className="space-y-1 text-sm text-white/70">
                <p>
                  <span className="font-semibold text-white">Phone:</span> {COMPANY_PHONE}
                </p>
                <p>
                  <span className="font-semibold text-white">Email:</span> {COMPANY_EMAIL}
                </p>
              </div>
            </div>

            {/* Social Icons - Imported from components/icons */}
            <div className="flex items-center gap-3">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <FacebookIcon className="w-8 h-8" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <TikTokIcon className="w-8 h-8" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <LinkedInIcon className="w-8 h-8" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <InstagramIcon className="w-8 h-8" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <YouTubeIcon className="w-8 h-8" />
              </Link>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="lg:col-span-2">
            <FooterColumn title="Quick Links">
              {QUICK_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </FooterColumn>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <FooterColumn title="Tours">
              {TOURS.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </FooterColumn>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2">
            <FooterColumn title="Support">
              {SUPPORT_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </FooterColumn>
          </div>

          {/* Column 5: Newsletter */}
          <div className="lg:col-span-3">
            <div className="flex flex-col space-y-4 relative">
              <h4 className="text-2xl font-bold text-white font-inria">Sign Up For Newsletter</h4>
              <p className="text-sm text-white/60">
                Get the latest updates on new products and upcoming sales
              </p>
              <div className="flex items-start mt-4">
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit((data) => console.log(data))} className="flex items-start w-full">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      icon={<Mail className="h-4 w-4" />}
                      className="flex-grow"
                      inputClassName="bg-black text-white rounded-l-sm rounded-r-none h-[40px]"
                    />
                    <Button
                      type="submit"
                      className="bg-white text-black rounded-r-sm rounded-l-none h-[40px]"
                    >
                      Subscribe
                    </Button>
                  </form>
                </FormProvider>
              </div>

              {/* Decorative Paper Plane Background */}
              <div className="absolute -bottom-12 -right-4 opacity-[0.04] pointer-events-none transform rotate-12 transition-transform hover:rotate-6 duration-700">
                <Send className="h-40 w-40 text-white" />
              </div>
            </div>
          </div>

        </div>

        <FooterBottomBar />
      </div>
    </footer>
  );
};
