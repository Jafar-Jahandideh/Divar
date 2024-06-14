import { useState } from "react";
import CheckOtpForm from "../components/template/CheckOtpForm";
import SendOtpForm from "../components/template/SendOtpForm";

const AuthPage = () => {
  const [step, setStep] = useState(1);
  const [mobail, setMobail] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOtpForm setStep={setStep} mobail={mobail} setMobail={setMobail} />
      )}

      {step === 2 && <CheckOtpForm />}
    </div>
  );
};

export default AuthPage;
