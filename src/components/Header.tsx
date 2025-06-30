import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleMenuClick = (sectionId: string) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#01316c] backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            {/* Mobile menu button */}
            {/* <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div> */}
            <Link to="/">
              <img src="images/logo-goglobal.png" className="h-[50px] w-auto object-cover cursor-pointer" alt="goglobal-logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleMenuClick('home')} className="text-white hover:text-blue-600 font-medium transition-colors">
              {t('introduce')}
            </button>
            <button onClick={() => handleMenuClick('services')} className="text-white hover:text-blue-600 font-medium transition-colors">
              {t('services')}
            </button>
            <button onClick={() => handleMenuClick('about')} className="text-white hover:text-blue-600 font-medium transition-colors">
              {t('about')}
            </button>
            <button onClick={() => handleMenuClick('contact')} className="text-white hover:text-blue-600 font-medium transition-colors">
              {t('contact')}
            </button>
          </nav>

          <div className="size-[50px] flex items-center justify-center">
            {
              currentLanguage.includes('vi') ?
                <img src="images/icon-vi.png" alt="icon-lang-vi" className="size-[30px] cursor-pointer" onClick={() => changeLanguage('en')} />
                :
                <img src="images/icon-en.png" alt="icon-lang-en" className="size-[30px] cursor-pointer" onClick={() => changeLanguage('vi')} />
            }
          </div>

        </div>
      </div>
    </header>
  );
};
