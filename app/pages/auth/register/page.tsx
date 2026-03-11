import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardList, Eye, EyeOff } from "lucide-react";
import { FormInput } from "@/components/FormInput";
import { FormSelect } from "@/components/FormSelect";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const departments = [
    { value: "finance", label: "Finance" },
    { value: "marketing", label: "Marketing" },
    { value: "hr", label: "Human Resources" },
    { value: "operations", label: "Operations" },
    { value: "engineering", label: "Engineering" },
    { value: "sales", label: "Sales" },
    { value: "legal", label: "Legal" },
    { value: "accounting", label: "Accounting" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static - no actual registration logic
    window.location.href = "/auth/login";
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-primary items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-32 h-32 bg-primary-foreground/10 rounded-full mx-auto mb-8 flex items-center justify-center">
            <ClipboardList className="w-16 h-16 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Join SRMS Today
          </h2>
          <p className="text-primary-foreground/80">
            Create an account to start submitting and tracking service requests for your department.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <ClipboardList className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="font-bold text-2xl text-foreground">SRMS</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground mb-2">Create an account</h1>
            <p className="text-muted-foreground">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <FormInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <FormInput
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />

            <FormSelect
              label="Department"
              options={departments}
              placeholder="Select your department"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              required
            />

            <div className="relative">
              <FormInput
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
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

            <FormInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />

            <button type="submit" className="btn-primary w-full mt-6">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
