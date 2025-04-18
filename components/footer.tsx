import { Grab as Crab, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "next-i18next";

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer id="contact" className="bg-crabbio-primary pt-16 pb-8">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crab className="text-crabbio-cream h-8 w-8" />
              <span className="text-crabbio-cream font-poppins font-bold text-2xl">
                Crabbio
              </span>
            </div>
            <p className="text-crabbio-light mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-crabbio-blue flex items-center justify-center text-crabbio-cream hover:bg-crabbio-accent hover:text-crabbio-blue transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-crabbio-blue flex items-center justify-center text-crabbio-cream hover:bg-crabbio-accent hover:text-crabbio-blue transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-crabbio-blue flex items-center justify-center text-crabbio-cream hover:bg-crabbio-accent hover:text-crabbio-blue transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-crabbio-cream font-semibold text-lg mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-crabbio-light hover:text-crabbio-cream transition-colors"
                >
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-crabbio-light hover:text-crabbio-cream transition-colors"
                >
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-crabbio-light hover:text-crabbio-cream transition-colors"
                >
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-crabbio-light hover:text-crabbio-cream transition-colors"
                >
                  {t("footer.careers")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-crabbio-light hover:text-crabbio-cream transition-colors"
                >
                  {t("footer.blog")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-crabbio-cream font-semibold text-lg mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-crabbio-accent h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span className="text-crabbio-light">
                  16 rue du Jeune Anacharsis, 13001, Marseille
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-crabbio-accent h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-crabbio-light">
                  +33 (0) 6 85 34 29 81
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="text-crabbio-accent h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-crabbio-light">hello@crabbio.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="mt-16 pt-8 border-t border-crabbio-light/20">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-crabbio-cream font-semibold text-xl mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-crabbio-light mb-6">Stay updated with the latest privacy-focused AI news and Crabbio updates.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-full bg-crabbio-blue border border-crabbio-light/30 text-crabbio-cream focus:outline-none focus:border-crabbio-accent"
              />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="mt-16 text-center">
          <p className="text-crabbio-light text-sm">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
