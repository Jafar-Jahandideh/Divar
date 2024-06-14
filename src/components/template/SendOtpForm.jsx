import React from "react";
import { sendOtp } from "../../services/auth";

const SendOtpForm = ({ setStep, mobail, setMobail }) => {
  const submitHandler = async (e) => {
    e.preventDefault();

    if (mobail.length !== 11) return;
    const result = await sendOtp(mobail);
    console.log(result);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار، لطفاً شمارۀ موبایل خود را وارد کد تایید
        به این شماره پیامک خواهد شد
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobail}
        onChange={(e) => setMobail(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
};

export default SendOtpForm;
