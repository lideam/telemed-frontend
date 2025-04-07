import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorAuth = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    // Simple validation example
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    // Here, handle the actual login logic (e.g., API call)
    console.log("Doctor Auth Form Submitted:", formData);
    navigate("/doctor-dashboard"); // Redirect to doctor dashboard after login
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="flex flex-1 w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="text-center mb-6">
            <img
              src="https://media.istockphoto.com/id/1169345592/vector/telemedicine-gradient-flat-icon-stethoscope-with-speech-bubble-on-screen-of-smartphone.jpg?s=612x612&w=0&k=20&c=SK_VTdYtB5bOsERbFZJe6eDuHlK1pnnpMmGQo_UxWRw=" // Replace with your logo
              alt="Logo"
              className="mx-auto h-12"
            />
          </div>
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
            Doctor Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {/* Error message */}
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>

          {/* Forgot password link */}
          <p className="text-center mt-2">
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </p>

          {/* Social media login */}
          <div className="mt-4 text-center">
            <p>Or log in with</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="bg-red-600 text-white p-2 rounded-lg">
                Google
              </button>
            </div>
          </div>

          {/* Privacy and Terms links */}
          <div className="mt-6 text-center text-sm">
            <p>
              By signing in, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-500 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/terms-of-service"
                className="text-blue-500 hover:underline"
              >
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>

        {/* Right Side - Online Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.pexels.com/photos/4031820/pexels-photo-4031820.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Doctor Login"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-4">
        <div className="text-center">
          <p>&copy; 2025 HealthCare Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DoctorAuth;
