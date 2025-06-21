
import { Target, Users, Award, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const features = [
    {
      icon: Target,
      title_en: "Strategic Approach",
      title_vi: "Chiến lược phù hợp",
      description_en: "We understand both Vietnamese and global markets, ensuring your message resonates with international audiences.",
      description_vi: "Chúng tôi am hiểu cả thị trường Việt Nam và quốc tế, đảm bảo thông điệp của bạn phù hợp và tạo dấu ấn với khách hàng toàn cầu.",
    },
    {
      icon: Users,
      title_en: "Expert Team",
      title_vi: "Đội ngũ chuyên gia",
      description_en: "Native Vietnamese and English speakers with deep expertise in digital marketing and web development.",
      description_vi: "Những chuyên gia bản ngữ tiếng Việt và tiếng Anh với kinh nghiệm sâu rộng trong lĩnh vực marketing số và phát triển web."
    },
    {
      icon: Award,
      title_en: "Driven by Commitment",
      title_vi: "Cam kết tạo giá trị thực",
      description_en: "As a new digital partner, we focus on delivering real, measurable value — helping Vietnamese businesses take their first steps to global success.",
      description_vi: "Là một đối tác số hóa mới, chúng tôi tập trung mang lại giá trị thực tế và hiệu quả rõ ràng – đồng hành cùng doanh nghiệp Việt trên hành trình vươn ra thị trường toàn cầu."
    },
    {
      icon: Zap,
      title_en: "Fast Delivery",
      title_vi: "Triển khai nhanh chóng",
      descriptio_en: "Quick turnaround times without compromising on quality, getting your business online faster.",
      description_vi: "Thời gian triển khai nhanh nhưng vẫn đảm bảo chất lượng, giúp doanh nghiệp của bạn nhanh chóng hiện diện trực tuyến.",
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('why-choose-goglobal-web')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('why-choose-goglobal-web-desc')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature[`title_${currentLanguage}`]}</h3>
              <p className="text-gray-600 leading-relaxed">{feature[`description_${currentLanguage}`]}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('our-missions')}</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('our-missions-desc')}
          </p>
        </div>
      </div>
    </section>
  );
};
