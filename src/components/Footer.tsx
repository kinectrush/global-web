
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="images/logo-goglobal.png" className="h-[120px] w-auto object-cover" alt="goglobal-logo-footer" />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('footer-desc')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61577229373369" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@goglobalweb.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('bilingual-websites')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('e-commerce-solutions')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('translation-services')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Content Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('SEO-optimization')}</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {currentYear} GoGlobal Web. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};
