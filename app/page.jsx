"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../sass/auth.scss";
import { User, Mail, Phone, Lock } from "lucide-react";
import OTPInputModal from "../components/OTPInputModal";

export default function Home() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [phone, setPhone] = useState("");
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setIsOTPModalOpen(true);
  };

  return (
    <div className="container">
      <div className="items-start justify-start mx-4 form-container">
        <div className="flex-row form-logo">
          <Image src="/assets/icons/new.jpg" alt="HealthMaster logo" width={100} height={100} />
          <h2 className="items-center text-xl font-bold">Health master</h2>
        </div>
        <div className="form-title">
          <h1 className="flex items-start">Hello there👋</h1>
          <p>
            Welcome to HealthMaster, the all-in-one platform to help you stay healthy.
          </p>
        </div>
        <form className="flex-col" onSubmit={handleSubmit}>
          <div className={`form-group ${focusedInput === 'name' ? 'focused' : ''}`}>
            <label htmlFor="name">Full Name</label>
            <div className="input-wrapper">
              <User className="input-icon" />
              <Input
                type="text"
                placeholder="John Doe"
                id="name"
                required
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
          <div className={`form-group ${focusedInput === 'email' ? 'focused' : ''}`}>
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <Input
                type="email"
                id="email"
                required
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                placeholder="johndoe@gmail.com"
              />
            </div>
          </div>
          <div className={`form-group ${focusedInput === 'phone' ? 'focused' : ''}`}>
            <label htmlFor="phone">Phone Number</label>
            <div className="phone-input-wrapper">
              <PhoneInput
                country="us"
                value={phone}
                required
                onChange={(value) => setPhone(value)}
                inputStyle={{
                  width: "100%",
                  padding: "25px",
                  marginLeft: "30px",
                  borderRadius: "0.25rem",
                  border: "1px solid #444",
                  backgroundColor: "#333",
                  color: "white",
                  fontFamily: "Jost, sans-serif",
                }}
                buttonStyle={{
                  backgroundColor: "#333",
                  border: "1px solid #444",
                }}
                containerStyle={{
                  width: "100%",
                }}
                inputClass="phone-input"
              />
            </div>
          </div>
          <div className={`form-group ${focusedInput === 'password' ? 'focused' : ''}`}>
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <Input
                type="password"
                id="password"
                required
                placeholder="create your password"
              />
            </div>
          </div>
          <div className="flex-row form-group">
          <input type="checkbox" name='terms' id='terms' required />
            <p>
              By signing up, you agree to our <a href="/terms">Terms and Conditions</a> and{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
          <div className="form-group">
            <Button type="submit" className="btn btn-primary">
              Get Started
            </Button>
          </div>
        </form>
        <div className="form-group">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
        <div className="form-group">
          <p className="text-[#24AE7C] copyright">
            © 2024 HealthMaster. All rights reserved.
          </p>
        </div>
      </div>
      <div className="otp">
          <OTPInputModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        phoneNumber={phone}
      />
      </div>
      <div className="container-image blur-sm">
        <Image src="/assets/images/background-1.webp" width={1000} height={1000} alt="Background" />
      </div>
    </div>
  );
}