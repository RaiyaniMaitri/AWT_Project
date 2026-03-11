import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardList, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FormInput } from "@/components/FormInput";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static - no actual login logic
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <ClipboardList className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="font-bold text-2xl text-foreground">SRMS</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FormInput
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="relative">
              <FormInput
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">Remember me</span>
              </label>
              <Link to="/auth/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn-primary w-full">
              Sign in
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>

          {/* Demo credentials */}
          <div className="mt-8 p-4 bg-muted/50 rounded-xl">
            <p className="text-sm font-medium text-foreground mb-2">Demo Credentials:</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Email: admin@company.com</p>
              <p>Password: password123</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-primary items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-32 h-32 bg-primary-foreground/10 rounded-full mx-auto mb-8 flex items-center justify-center">
            <ClipboardList className="w-16 h-16 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Manage Service Requests Efficiently
          </h2>
          <p className="text-primary-foreground/80">
            Track, assign, and resolve service requests across your organization with our comprehensive management system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
