import icons from "@/assets/icons/icon";
import { signupState } from "@/atoms/signup";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  emailCheckMessageState,
  isEmailAvailableState,
} from "@/atoms/emailCheck";
import { useRouter } from "next/router";
import { axiosAWSInstance } from "@/apis/axiosInstance";

const IconComponents = {
  UserPlus: icons.userplusIcons,
  SubmitArrow: icons.arrowRight,
  User: icons.userIcons,
  Lock: icons.lockIcons,
  Tel: icons.addressBook,
};

const Auth = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useRecoilState(signupState);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isEmailAvailable, setIsEmailAvailable] = useRecoilState(
    isEmailAvailableState
  );
  const [emailCheckMessage, setEmailCheckMessage] = useRecoilState(
    emailCheckMessageState
  );
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPasswordMatch(
      name === "password" || name === "passwordCheck" ? null : passwordMatch
    );
    setSignupData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "passwordCheck") {
      setPasswordMatch(value === signupData.password);
    }
  };
  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value.includes("@")) {
      setEmailError("@을 포함해야합니다.");
    } else {
      setEmailError(null);
    }
  };

  const passwordCheckCss = () => {
    let input = "bg-primary-orange";
    if (passwordMatch !== null) {
      input = passwordMatch ? "bg-[#6aeb6a]" : "bg-[#eb2626]";
    }
    return input;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordMatch === false && passwordCheckRef.current) {
      passwordCheckRef.current.focus();
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!isEmailAvailable) {
      alert("이메일 중복 체크를 완료해주세요.");
      return;
    }

    const formData = new FormData();
    Object.keys(signupData).forEach((key) => {
      formData.append(key, (signupData as any)[key]);
    });
    console.log(formData);
    try {
      const res = await axiosAWSInstance.post(`/jwt-login/join`, formData);
      console.log("Response =>", res.data);
      router.push("/auth");
    } catch (error) {
      console.error(error);
      alert("회원가입에 실패하였습니다.");
    }
  };

  // console.log(`http://3.39.118.171:8080/server`);  이건 cors에러 안남;; ㄷㄷ
  const handleEmailCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axiosAWSInstance.get(
        `/jwt-login/join/${signupData.email}`
      );
      console.log();
      if (res.data) {
        setIsEmailAvailable(true);
        setEmailCheckMessage("사용 가능");
      } else {
        setIsEmailAvailable(false);
        setEmailCheckMessage("이메일 중복입니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsEmailAvailable(null);
    setEmailCheckMessage("");
  }, [signupData.email]);

  return (
    <div className="bg-primary-black">
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div>{/* <IconComponents.UserPlus size={32} color="#ffffff" /> */}</div>
        <div className="mt-10 xl:w-1/2 lg:w-1/2 sm:w-full md:w-full">
          <form className="bg-primary-black py-2 mb-5" onSubmit={handleSubmit}>
            <div className="email relative">
              <div className="absolute z-30 ml-5 mt-3">
                <IconComponents.User size={34} color="#ffffff" />
              </div>

              <input
                className="text-[black] relative h-16 pl-20 py-[2px] w-full mr-1 bg-primary-orange placeholder-primary-yellow placeholder:text-sm"
                type="text"
                name="email"
                required
                value={signupData.email}
                onChange={handleInputChange}
                onBlur={handleEmailBlur}
                placeholder="이메일을 입력해주세요."
              />
              <div className="relative">
                {emailError && (
                  <div className="speech-bubble absolute -top-[90px] left-2 transition ease-in-out duration-500">
                    <p className="text-red-500">{emailError}</p>
                  </div>
                )}
              </div>

              <button
                className={`absolute right-4 top-3 p-2 rounded-2xl ${
                  isEmailAvailable === true
                    ? "text-blue-500"
                    : isEmailAvailable === false
                    ? "text-red-500"
                    : ""
                }`}
                onClick={handleEmailCheck}
              >
                {isEmailAvailable === true
                  ? "사용 가능"
                  : isEmailAvailable === false
                  ? "재입력"
                  : "중복확인"}
              </button>
            </div>
            <div className="password">
              <div className="absolute z-30 ml-4 mt-3">
                <IconComponents.Lock size={40} color="#ffffff" />
              </div>
              <input
                className="text-[black] relative h-16 pl-20 py-[2px] w-full mr-1 bg-primary-orange placeholder-primary-yellow placeholder:text-sm"
                type="password"
                name="password"
                required
                value={signupData.password}
                onChange={handleInputChange}
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
            <div className="passwordCheck mb-20">
              <div className="absolute z-30 ml-4 mt-3">
                <IconComponents.Lock size={40} color="#ffffff" />
              </div>
              <input
                className={`text-black  relative h-16 pl-20 py-[2px] w-full mr-1 ${passwordCheckCss()} placeholder-primary-yellow placeholder:text-sm`}
                type="password"
                name="passwordCheck"
                required
                ref={passwordCheckRef}
                value={signupData.passwordCheck}
                onChange={handleInputChange}
                placeholder="비밀번호를 다시 입력해주세요."
              />
              {passwordMatch !== null && (
                <span
                  className={`ml-2 ${
                    passwordMatch ? "text-[#6aeb6a]" : "text-[#eb2626]"
                  }`}
                >
                  {passwordMatch
                    ? "비밀번호와 일치합니다"
                    : "비밀번호와 일치하지 않습니다"}
                </span>
              )}
            </div>
            <div className="name">
              <div className="absolute z-30 ml-5 mt-3">
                <IconComponents.User size={34} color="#FB980D" />
              </div>
              <input
                className="text-[black] relative h-16 pl-20 py-[2px] w-full mr-1 bg-primary-yellow placeholder-primary-orange placeholder:text-sm"
                type="text"
                name="nickName"
                required
                value={signupData.nickName}
                onChange={handleInputChange}
                placeholder="이름을 입력해주세요."
              />
            </div>
            <div className="tel">
              <div className="absolute z-30 ml-4 mt-3">
                <IconComponents.Tel size={40} color="#FB980D" />
              </div>
              <input
                className="text-[black] relative h-16 pl-20 py-[2px] w-full mr-1 bg-primary-yellow placeholder-primary-orange placeholder:text-sm"
                type="text"
                name="phoneNumber"
                required
                value={signupData.phoneNumber}
                onChange={handleInputChange}
                placeholder="번호를 입력해주세요."
              />
            </div>
          </form>
        </div>
        <button
          className="mt-32 flex justify-center"
          onClick={handleSubmit}
          type="submit"
        >
          <IconComponents.SubmitArrow size={80} color="#FB980D" />
        </button>
      </div>
    </div>
  );
};

export default Auth;
