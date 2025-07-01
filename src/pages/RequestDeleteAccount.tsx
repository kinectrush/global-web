import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/components/ui/sonner";

interface User {
  name: string;
  email: string;
}

const RequestDeleteAccount = () => {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // Kiểm tra token và lấy thông tin user khi component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const response = await fetch("https://booksnaps-backend.onrender.com/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          setIsLoggedIn(true);
        } else {
          // Token không hợp lệ, xóa token
          localStorage.removeItem("authToken");
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        setUser(null);
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://booksnaps-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("authToken", data.token);
        await checkAuthStatus();
        toast.success(t("login-success"), {
          position: "top-right",
        });
      } else {
        toast.error(t("login-failed"), {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(t("login-error"), {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;

    setLoading(true);
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch("https://booksnaps-backend.onrender.com/api/user/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
        }),
      });

      if (response.ok) {
        toast.success(t("account-deleted-success"), {
          position: "top-right",
        });
        // Force logout
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        setUser(null);
        setShowDeleteDialog(false);
      } else {
        toast.error(t("delete-account-failed"), {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Delete account error:", error);
      toast.error(t("delete-account-error"), {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-32 pb-16 max-w-md">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              {t("request-delete-account-title")}
            </CardTitle>
            <CardDescription className="text-center">
              {t("request-delete-account-desc")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("password")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    placeholder={t("password-placeholder")}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? t("logging-in") : t("login")}
                </Button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t("user-information")}</h3>
                  <div className="space-y-2">
                    <p><strong>{t("name")}:</strong> {user?.name}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                  </div>
                </div>
                <Button
                  onClick={() => setShowDeleteDialog(true)}
                  className="w-full bg-red-600 hover:bg-red-700"
                  disabled={loading}
                >
                  {t("request-delete-account")}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Delete Confirmation Dialog */}
        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("confirm-delete-account")}</DialogTitle>
              <DialogDescription>
                {t("confirm-delete-account-desc")}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
                {t("cancel")}
              </Button>
              <Button onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700" disabled={loading}>
                {loading ? t("deleting") : t("confirm-delete")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default RequestDeleteAccount; 