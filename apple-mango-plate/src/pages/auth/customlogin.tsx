import icons from "@/assets/icons/icon";
import { signupState } from "@/atoms/signup";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";

const Auth = () => {
  const UserPlus = icons.userplusIcons;
  const SubmitArrow = icons.arrowRight;
  const User = icons.userIcons;
  const Lock = icons.lockIcons;
  const Tel = icons.addressBook;
  const [signupData, setSignupData] = useRecoilState(signupState);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "password" || name === "passwordCheck") {
      setPasswordMatch(null);
    }

    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // false일때 회원가입 버튼을 누르면 passwordCheck input으로 돌아오도록 설정하기
    if (name === "passwordCheck") {
      if (value === signupData.password) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
    }
  };

  const passwordCheckCss = () => {
    let input = "bg-primary-orange";
    if (passwordMatch !== null) {
      input = passwordMatch ? "bg-[#6aeb6a]" : "bg-[#eb2626]";
    }
    return input;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordMatch === false && passwordCheckRef.current) {
      passwordCheckRef.current.focus();
    } else {
      console.log("Submitting data:", signupData);
    }
  };

  return (
    <div className="bg-primary-black">
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div>
          <UserPlus size={100} color="#ffffff" />
        </div>
        <div className="mt-10 xl:w-1/2 lg:w-1/2 sm:w-full md:w-full">
          <form className="bg-primary-black py-2 mb-5" onSubmit={handleSubmit}>
            <div className="email">
              <div className="absolute z-30 ml-5 mt-3">
                <User size={34} color="#ffffff" />
              </div>

              <input
                className="text-[black] relative h-16 pl-20 py-[2px] w-full mr-1 bg-primary-orange placeholder-primary-yellow"
                type="text"
                name="email"
                value={signupData.email}
                onChange={handleInputChange}
                placeholder="이메일을 입력해주세요."
              />
            </div>
            <div className="password">
              <div className="absolute z-30 ml-4 mt-3">
                <Lock size={40} color="#ffffff" />
              </div>
              <input
                className="text-[black] relative h-16 pl-20 py-[2px] w-full mr-1 bg-primary-orange placeholder-primary-yellow"
                type="password"
                name="password"
                value={signupData.password}
                onChange={handleInputChange}
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
            <div className="passwordCheck mb-20">
              <div className="absolute z-30 ml-4 mt-3">
                <Lock size={40} color="#ffffff" />
              </div>
              <input
                className={`text-[black] relative h-16 pl-20 py-[2px] w-full mr-1 ${passwordCheckCss()} placeholder-primary-yellow`}
                type="password"
                name="passwordCheck"
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
                <User size={34} color="#FB980D" />
              </div>
              <input
                className="text-[black] relative h-16 pl-20 py-[2px] w-full mr-1 bg-primary-yellow placeholder-primary-orange"
                type="text"
                name="name"
                value={signupData.name}
                onChange={handleInputChange}
                placeholder="이름을 입력해주세요."
              />
            </div>
            <div className="tel">
              <div className="absolute z-30 ml-4 mt-3">
                <Tel size={40} color="#FB980D" />
              </div>
              <input
                className="text-[black] relative h-16 pl-20 py-[2px] w-full mr-1 bg-primary-yellow placeholder-primary-orange"
                type="text"
                name="phone"
                value={signupData.phone}
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
          <SubmitArrow size={80} color="#FB980D" />
        </button>
      </div>
    </div>
  );
};

export default Auth;
