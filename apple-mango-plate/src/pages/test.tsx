"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_URL}/jwt-login/login`,
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );
    const { success } = await res.json();
    if (success) {
      router.push("/");
      router.refresh();
    } else {
      alert("로그인 실패");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
