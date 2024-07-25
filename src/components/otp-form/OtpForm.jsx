import React, { useRef, useState } from "react";
import Button from "./Button";
import { validOtp } from "../../util/otp";
import Input from "./Input";
import { useLocation } from "react-router-dom";
import Heading from "./Heading";

function OtpForm() {
  const inputRef = useRef([]);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  console.log(otp);
  const [fillingState, setFillingState] = useState({
    otp: "",
    success: false,
    wrong: false,
  });
  const handleChanges = (e, index) => {
    const value = e.target.value;
    const testOtp = /^\d$/.test(value);
    if (testOtp) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      console.log("index", index);
      if (index < inputRef.current.length - 1) {
        inputRef.current[index + 1].focus();
      }
      if (index === validOtp.otp.length - 1) {
        const otpString = newOtp.join("");
        if (otpString === validOtp.otp) {
          setFillingState({
            otp: otpString,
            success: true,
            wrong: false,
          });
        } else {
          setFillingState({
            otp: otpString,
            success: false,
            wrong: true,
          });
        }
      }
    } else {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index >= 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };

  return (
    <div
      className="bg-[#F9F7F7] h-[514px] max-w-[756px] rounded-[18px] mx-auto mt-[100px]"
      style={{ boxShadow: "2px 2px 3px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex flex-col items-center">
        <Heading />
        <div className="sameWidth flex flex-col gap-[24px]">
          <form>
            <div className="inputs flex items-center justify-center gap-[19px]">
              {otp.map((digit, index) => (
                <Input
                  ref={(el) => (inputRef.current[index] = el)}
                  key={index}
                  value={digit}
                  onChange={(e) => handleChanges(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength={"1"}
                  index={index}
                  className={`${
                    fillingState.success && "border border-[#23CF9B]"
                  }
                ${fillingState.wrong && "border border-[#EB2D5B]"}
                `}
                />
              ))}
            </div>
          </form>
          <div className="btn">
            <Button
              content={`${
                fillingState.success
                  ? "Verified"
                  : fillingState.wrong
                  ? "Verification Failed"
                  : "Verify Account"
              }`}
              className={`${fillingState.success && "bg-[#23CF9B]"}
            ${fillingState.wrong && "bg-[#EB2D5B]"}
            `}
            />
          </div>
        </div>
        <div className="other mt-[24px]">
          <p className="text-[#BFBFBF] text-[25px] font-normal">
            Didn't receive code?{" "}
            <span className="text-[#112D4E] cursor-pointer">Resend</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OtpForm;
