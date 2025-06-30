import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const contentVi = (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Chính sách về quyền riêng tư</h2>
      <div className="text-gray-700 space-y-4">
        <p><strong>BookSnaps</strong></p>
        <p><strong>Ngày có hiệu lực: 30 tháng 06 năm 2025</strong></p>
        <p>Chào mừng bạn đến với BookSnaps! Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. Chính sách quyền riêng tư này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân của bạn khi bạn sử dụng ứng dụng của chúng tôi.</p>
        <p>Bằng cách sử dụng ứng dụng BookSnaps, bạn đồng ý với các điều khoản của Chính sách quyền riêng tư này.</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Thông tin chúng tôi thu thập</strong>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Thông tin tài khoản:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>Họ và tên: Được sử dụng để hiển thị công khai bên cạnh các bài review sách của bạn và là định danh của bạn trong ứng dụng.</li>
                  <li>Địa chỉ Email: Được sử dụng để đăng nhập, khôi phục mật khẩu và gửi các thông báo quan trọng liên quan đến tài khoản của bạn.</li>
                  <li>Mật khẩu: Được lưu trữ dưới dạng mã hóa để bảo mật tài khoản của bạn. Chúng tôi không thể truy cập mật khẩu gốc của bạn.</li>
                </ul>
              </li>
              <li><strong>Thông tin hoạt động:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>Nội dung review sách: Các bài đánh giá, bình luận mà bạn đăng tải trên ứng dụng.</li>
                  <li>Lịch sử tương tác: Các hoạt động của bạn trên ứng dụng như lượt thích, lượt theo dõi (nếu có), sách đã đánh dấu, v.v.</li>
                </ul>
              </li>
              <li><strong>Dữ liệu kỹ thuật và sử dụng:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>Thông tin về thiết bị bạn sử dụng (loại thiết bị, hệ điều hành).</li>
                  <li>Địa chỉ IP, thời gian truy cập, loại trình duyệt.</li>
                  <li>Dữ liệu về cách bạn tương tác với ứng dụng (các tính năng bạn sử dụng, thời gian sử dụng).</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Cách chúng tôi sử dụng thông tin của bạn</strong>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Cung cấp và duy trì dịch vụ:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>Cho phép bạn tạo và quản lý tài khoản.</li>
                  <li>Xác thực danh tính của bạn khi đăng nhập.</li>
                  <li>Hiển thị Họ và tên của bạn và các bài review của bạn trên ứng dụng.</li>
                  <li>Cung cấp các tính năng và chức năng của ứng dụng.</li>
                </ul>
              </li>
              <li><strong>Cải thiện ứng dụng:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>Phân tích cách người dùng sử dụng ứng dụng để cải thiện trải nghiệm người dùng, phát triển tính năng mới.</li>
                  <li>Khắc phục sự cố kỹ thuật và tối ưu hóa hiệu suất ứng dụng.</li>
                </ul>
              </li>
              <li><strong>Liên lạc với bạn:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>Gửi email xác nhận tài khoản, thông báo thay đổi mật khẩu.</li>
                  <li>Gửi các thông báo quan trọng về ứng dụng hoặc chính sách của chúng tôi.</li>
                </ul>
              </li>
              <li><strong>Bảo mật và tuân thủ pháp luật:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>Bảo vệ tài khoản và dữ liệu của bạn khỏi các hành vi truy cập trái phép hoặc lạm dụng.</li>
                  <li>Ngăn chặn các hoạt động vi phạm Điều khoản dịch vụ của chúng tôi.</li>
                  <li>Tuân thủ các nghĩa vụ pháp lý và yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Chia sẻ và tiết lộ thông tin</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Chúng tôi cam kết không bán, cho thuê hoặc trao đổi thông tin cá nhân của bạn với bất kỳ bên thứ ba nào, trừ các trường hợp sau:</li>
              <li><strong>Với sự đồng ý của bạn:</strong> Chúng tôi sẽ chỉ chia sẻ thông tin của bạn khi có sự đồng ý rõ ràng từ bạn.</li>
              <li><strong>Nhà cung cấp dịch vụ bên thứ ba:</strong> Chúng tôi có thể sử dụng các nhà cung cấp dịch vụ bên thứ ba để hỗ trợ hoạt động của ứng dụng (ví dụ: dịch vụ lưu trữ dữ liệu, phân tích). Các nhà cung cấp này chỉ được phép sử dụng thông tin của bạn theo hướng dẫn của chúng tôi và phải tuân thủ các biện pháp bảo mật tương đương.</li>
              <li><strong>Tuân thủ pháp luật:</strong> Chúng tôi có thể tiết lộ thông tin cá nhân của bạn nếu được yêu cầu bởi pháp luật, lệnh của tòa án hoặc theo yêu cầu hợp lệ từ cơ quan nhà nước có thẩm quyền.</li>
              <li><strong>Chuyển giao kinh doanh:</strong> Trong trường hợp sáp nhập, mua lại, tái cấu trúc hoặc bán toàn bộ/một phần tài sản, thông tin cá nhân của bạn có thể được chuyển giao cho bên mua hoặc tổ chức kế nhiệm, với điều kiện họ cũng cam kết bảo vệ quyền riêng tư của bạn theo Chính sách này.</li>
            </ul>
          </li>
          <li>
            <strong>Bảo mật thông tin của bạn</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Mã hóa mật khẩu người dùng.</li>
              <li>Sử dụng các giao thức bảo mật (ví dụ: SSL/TLS) để bảo vệ dữ liệu trong quá trình truyền tải.</li>
              <li>Hạn chế quyền truy cập vào thông tin cá nhân của nhân viên.</li>
              <li>Thường xuyên kiểm tra và cập nhật các biện pháp bảo mật.</li>
              <li>Tuy nhiên, không có phương pháp truyền tải dữ liệu qua internet hoặc lưu trữ điện tử nào là an toàn tuyệt đối. Do đó, chúng tôi không thể đảm bảo an ninh tuyệt đối cho thông tin của bạn.</li>
            </ul>
          </li>
          <li>
            <strong>Quyền của bạn đối với dữ liệu cá nhân</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Quyền được biết: Được biết về hoạt động xử lý dữ liệu cá nhân của bạn.</li>
              <li>Quyền đồng ý: Được đồng ý hoặc không đồng ý cho phép xử lý dữ liệu cá nhân của bạn.</li>
              <li>Quyền truy cập: Yêu cầu truy cập để xem hoặc yêu cầu cung cấp bản sao dữ liệu cá nhân của bạn.</li>
              <li>Quyền chỉnh sửa: Yêu cầu chỉnh sửa dữ liệu cá nhân không chính xác.</li>
              <li>Quyền xóa: Yêu cầu xóa dữ liệu cá nhân của bạn trong một số trường hợp nhất định (ví dụ: mục đích xử lý đã đạt được, bạn rút lại sự đồng ý).</li>
              <li>Quyền hạn chế xử lý: Yêu cầu hạn chế xử lý dữ liệu cá nhân của bạn.</li>
              <li>Quyền phản đối xử lý dữ liệu: Phản đối việc xử lý dữ liệu cá nhân của bạn.</li>
              <li>Quyền rút lại sự đồng ý: Rút lại sự đồng ý đã cung cấp cho việc xử lý dữ liệu cá nhân.</li>
              <li>Quyền khiếu nại, tố cáo và yêu cầu bồi thường thiệt hại: Trong trường hợp dữ liệu cá nhân bị xâm phạm.</li>
            </ul>
            <p>Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi theo thông tin dưới đây. Chúng tôi sẽ xử lý yêu cầu của bạn theo quy định của pháp luật.</p>
          </li>
          <li>
            <strong>Lưu trữ dữ liệu</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Chúng tôi sẽ lưu trữ thông tin cá nhân của bạn chừng nào tài khoản của bạn còn hoạt động hoặc khi cần thiết để cung cấp dịch vụ cho bạn. Chúng tôi cũng có thể lưu trữ thông tin của bạn trong một khoảng thời gian cần thiết để tuân thủ các nghĩa vụ pháp lý, giải quyết tranh chấp và thực thi các thỏa thuận của chúng tôi.</li>
            </ul>
          </li>
          <li>
            <strong>Thay đổi Chính sách quyền riêng tư này</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Chúng tôi có thể cập nhật Chính sách quyền riêng tư này theo thời gian để phản ánh những thay đổi trong thực tiễn của chúng tôi hoặc các yêu cầu pháp lý. Khi chúng tôi thực hiện các thay đổi đáng kể, chúng tôi sẽ thông báo cho bạn bằng cách đăng phiên bản cập nhật trên ứng dụng hoặc thông qua các phương tiện liên lạc khác. Bạn nên xem lại Chính sách này định kỳ để nắm bắt thông tin mới nhất về thực tiễn quyền riêng tư của chúng tôi.</li>
            </ul>
          </li>
          <li>
            <strong>Liên hệ với chúng tôi</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Nếu bạn có bất kỳ câu hỏi nào về Chính sách quyền riêng tư này hoặc muốn thực hiện các quyền của mình, vui lòng liên hệ với chúng tôi theo địa chỉ email sau:</li>
              <li><strong>apps.goglobal@gmail.com</strong></li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );

  const contentEn = (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
      <div className="text-gray-700 space-y-4">
        <p><strong>BookSnaps</strong></p>
        <p><strong>Effective Date: June 30, 2025</strong></p>
        <p>Welcome to BookSnaps! We're committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you use our application.</p>
        <p>By using the BookSnaps app, you agree to the terms of this Privacy Policy.</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Information We Collect</strong>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Account Information:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>Full Name: Used for displaying publicly next to your book reviews and as your identifier within the app.</li>
                  <li>Email Address: Used for login, password recovery, and sending important notifications related to your account.</li>
                  <li>Password: Stored in an encrypted format to secure your account. We cannot access your original password.</li>
                </ul>
              </li>
              <li><strong>Activity Information:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>Book Review Content: The reviews and comments you post within the app.</li>
                  <li>Interaction History: Your activities within the app such as likes, follows (if applicable), marked books, etc.</li>
                </ul>
              </li>
              <li><strong>Technical and Usage Data:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>Information about the device you use (device type, operating system).</li>
                  <li>IP address, access times, browser type.</li>
                  <li>Data about how you interact with the app (features you use, duration of use).</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>How We Use Your Information</strong>
            <ul className="list-disc list-inside ml-6">
              <li><strong>To Provide and Maintain Our Service:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>To allow you to create and manage your account.</li>
                  <li>To authenticate your identity when you log in.</li>
                  <li>To display your Full Name and your reviews within the app.</li>
                  <li>To provide the features and functions of the app.</li>
                </ul>
              </li>
              <li><strong>To Improve Our App:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>To analyze how users interact with the app to enhance user experience and develop new features.</li>
                  <li>To troubleshoot technical issues and optimize app performance.</li>
                </ul>
              </li>
              <li><strong>To Communicate with You:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>To send account confirmation emails and password change notifications.</li>
                  <li>To send important announcements about our app or policies.</li>
                </ul>
              </li>
              <li><strong>For Security and Legal Compliance:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>To protect your account and data from unauthorized access or misuse.</li>
                  <li>To prevent activities that violate our Terms of Service.</li>
                  <li>To comply with legal obligations and requests from competent authorities.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Sharing and Disclosure of Information</strong>
            <ul className="list-disc list-inside ml-6">
              <li>We are committed to not selling, renting, or trading your personal information with any third party, except in the following cases:</li>
              <li><strong>With Your Consent:</strong> We will only share your information when we have your clear consent.</li>
              <li><strong>Third-Party Service Providers:</strong> We may use third-party service providers to support our app's operations (e.g., data hosting services, analytics). These providers are only permitted to use your information according to our instructions and must adhere to equivalent security measures.</li>
              <li><strong>Legal Compliance:</strong> We may disclose your personal information if required by law, court order, or a valid request from a competent government authority.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, restructuring, or sale of all or a portion of our assets, your personal information may be transferred to the acquiring party or successor entity, provided they also commit to protecting your privacy in accordance with this Policy.</li>
            </ul>
          </li>
          <li>
            <strong>Protecting Your Information</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Encrypting user passwords.</li>
              <li>Using secure protocols (e.g., SSL/TLS) to protect data during transmission.</li>
              <li>Restricting employee access to personal information.</li>
              <li>Regularly reviewing and updating our security measures.</li>
              <li>However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee the absolute security of your information.</li>
            </ul>
          </li>
          <li>
            <strong>Your Rights Regarding Your Personal Data</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Right to Be Informed: To be informed about the processing of your personal data.</li>
              <li>Right to Consent: To consent or not consent to the processing of your personal data.</li>
              <li>Right to Access: To request access to view or obtain a copy of your personal data.</li>
              <li>Right to Rectification: To request correction of inaccurate personal data.</li>
              <li>Right to Erasure: To request the deletion of your personal data in certain circumstances (e.g., the purpose of processing has been achieved, you withdraw your consent).</li>
              <li>Right to Restriction of Processing: To request the restriction of processing of your personal data.</li>
              <li>Right to Object to Processing: To object to the processing of your personal data.</li>
              <li>Right to Withdraw Consent: To withdraw the consent you have provided for the processing of your personal data.</li>
              <li>Right to Lodge a Complaint, Denounce, and Claim Damages: In cases where personal data is infringed upon.</li>
            </ul>
            <p>To exercise these rights, please contact us using the information below. We will process your request in accordance with legal regulations.</p>
          </li>
          <li>
            <strong>Data Retention</strong>
            <ul className="list-disc list-inside ml-6">
              <li>We will retain your personal information for as long as your account is active or as needed to provide you with services. We may also retain your information for a period necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</li>
            </ul>
          </li>
          <li>
            <strong>Changes to This Privacy Policy</strong>
            <ul className="list-disc list-inside ml-6">
              <li>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make significant changes, we will notify you by posting the updated version on the app or through other communication channels. You should review this Policy periodically to stay informed about our privacy practices.</li>
            </ul>
          </li>
          <li>
            <strong>Contact Us</strong>
            <ul className="list-disc list-inside ml-6">
              <li>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at the following email address:</li>
              <li><strong>apps.goglobal@gmail.com</strong></li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        {currentLanguage.includes('vi') ? contentVi : contentEn}
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 