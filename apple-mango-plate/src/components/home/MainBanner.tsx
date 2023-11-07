import React from "react";
import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="relative w-full h-[40vh] min-h-[200px]">
      <div className="home-main-banner-container">
        <span className="home-main-banner-title">[ 10월 머먹오 ] </span>
        <span className="home-main-banner-title">{`먹바타가 대신 가본 <불끈>`}</span>
        <div className="home-main-banner-bottom-contianer">
          <span className="home-main-banner-bottom-text">
            보양식도 핫플이 될 수 있다구?
          </span>
        </div>
      </div>
      <Image src="/main_image.png" alt="main-image" fill />
    </div>
  );
}
