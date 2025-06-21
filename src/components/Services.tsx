
import { Code, Languages, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const services = [
    {
      category_en: "Bilingual Website Design",
      category_vi: "Thiết kế Website Song ngữ",
      icon: Code,
      description_en: "Professional Vietnamese-English websites that speak to both local and global audiences",
      description_vi: "Website chuyên nghiệp Anh – Việt, kết nối khách hàng trong nước và quốc tế",
      items: [
        {
          vi: 'Website giới thiệu doanh nghiệp',
          en: 'Company Introduction Websites'
        },
        {
          vi: 'Trang sản phẩm / dịch vụ',
          en: 'Product/Service Landing Pages'
        },
        {
          vi: 'Website thương mại điện tử',
          en: 'E-commerce Websites'
        },
        {
          vi: 'Website cá nhân hoặc hồ sơ chuyên nghiệp',
          en: 'Personal or Professional Portfolio Websites'
        },
      ]
    },
    {
      category_en: "Translation & Content Writing",
      category_vi: "Dịch thuật & Viết Content",
      icon: Languages,
      description_en: "Expert English-Vietnamese translation and content creation services",
      description_vi: "Dịch vụ dịch thuật Anh - Việt và sáng tạo nội dung chuyên nghiệp",
      items: [
        {
          en: '"About Us" page content',
          vi: 'Nội dung trang “Giới thiệu”'
        },
        {
          en: '"Services" page and product descriptions',
          vi: 'Trang “Dịch vụ” và mô tả sản phẩm'
        },
        {
          en: 'In-depth blog posts (SEO optimized)',
          vi: 'Bài blog chuyên sâu (chuẩn SEO)'
        },
        {
          en: 'Company profiles and product catalogues',
          vi: 'Hồ sơ doanh nghiệp và catalogue sản phẩm'
        },
      ]
    },
    {
      category_en: "Multichannel Content Marketing",
      category_vi: "Marketing Nội dung Đa Kênh",
      icon: Megaphone,
      description_en: "Comprehensive marketing content across social media, email, and PR channels",
      description_vi: "Chiến lược nội dung toàn diện trên mạng xã hội, email và các kênh PR",
      items: [
        {
          en: 'Social media copywriting',
          vi: 'Viết nội dung cho mạng xã hội'
        },
        {
          en: 'Email marketing content',
          vi: 'Nội dung email marketing'
        },
        {
          en: 'PR articles and online news articles',
          vi: 'Bài PR, bài báo điện tử'
        },
        {
          en: 'Brand storytelling and engagement',
          vi: 'Xây dựng câu chuyện thương hiệu & tương tác khách hàng'
        },
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('comprehensive-digitalization-services')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('comprehensive-digitalization-services-description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service[`category_${currentLanguage}`]}</CardTitle>
                <CardDescription className="text-gray-600">{service[`description_${currentLanguage}`]}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item[currentLanguage]}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">{t('ready-to-go-global-title')}</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {t('ready-to-go-global-desc')}
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors capitalize"
          >
            {t('free-consultation')}
          </button>
        </div>
      </div>
    </section>
  );
};
