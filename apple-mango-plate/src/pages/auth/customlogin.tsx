import icons from "@/assets/icons/icon";
import { signupState } from "@/atoms/signup";
import { useRecoilState } from "recoil";

const Auth = () => {
  const UserPlus = icons.userplusIcons;
  const SubmitArrow = icons.arrowRight;
  const User = icons.userIcons;
  const Lock = icons.lockIcons;
  const Tel = icons.addressBook;
  const [signupData, setSignupData] = useRecoilState(signupState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting data:", signupData);
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
                className="text-[black] relative h-16 pl-20 py-[2px] w-full mr-1 bg-primary-orange placeholder-primary-yellow"
                type="password"
                name="passwordCheck"
                value={signupData.passwordCheck}
                onChange={handleInputChange}
                placeholder="비밀번호를 다시 입력해주세요."
              />
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
        <button className="mt-32 flex justify-center" type="submit">
          <SubmitArrow size={80} color="#FB980D" />
        </button>
      </div>
    </div>
  );
};

export default Auth;
