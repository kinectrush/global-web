
import { ArrowRight, Flag, Globe, Languages, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 md:pt-36 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <div dangerouslySetInnerHTML={{ __html: t('hero-title') }} className="uppercase"></div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('hero-subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                >
                  {t('btn-contact')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  {t('explore-services')}
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('global-reach')}</h3>
                <p className="text-gray-600">{t('global-reach-desc')}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Languages className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('expert-translation')}</h3>
                <p className="text-gray-600">{t('expert-translation-desc')}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('marketing-growth')}</h3>
                <p className="text-gray-600">{t('marketing-growth-desc')}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                <Flag className="h-12 w-12 text-white mb-4" />
                <h3 className="text-lg font-semibold text-white-900 mb-2">{t('marketing-growth')}</h3>
                <p className="text-white-600">{t('solutions-from-vietnam-desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
