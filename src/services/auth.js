import api from "../configs/api";

const sendOtp = async (mobail) => {
  try {
    const response = await api.post("/auth/send-otp", { mobail });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { sendOtp };
