import React from "react";
import location_logo from "/public/location_logo.png";
import MainThumbnail from "@/components/home/utils/MainThumbnail";
import Image from "next/image";

export default function ReliableRating() {
  return (
    <div className="home-rating-container">
      <section className="home-rating-restaurant-container">
        <MainThumbnail title={"평점이 높은\n인기 식당"} color="white" />
        <MainThumbnail title={"지역별\n인기 맛집"} color="white" />
        <MainThumbnail title={"메뉴별\n인기 맛집"} color="white" />
        <div className="home-rating-icon-container">
          <Image
            src={location_logo}
            alt="main-location_logo-1"
            quality={100}
            className="home-rating-icon-logo"
          />
          <svg
            className="home-rating-icon-title"
            viewBox="0 0 211 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.6 15.62V24.62C6.18 19.28 12.54 15.02 19.92 15.5V18.86C12.06 18.38 6.12 23.36 3.6 29.42V53.54H4.47035e-08V15.62H3.6ZM38.5842 51.2C46.6242 51.2 51.3642 46.88 51.3642 42.14V41.48H54.8442V42.74C54.8442 48.5 48.7242 54.32 38.5842 54.32C27.8442 54.32 21.7242 47.3 21.7242 38.54V30.62C21.7242 21.86 27.8442 14.84 38.5842 14.84C49.3242 14.84 55.4442 21.86 55.4442 30.62V35.78H25.2042V37.94C25.2042 45.68 29.9442 51.2 38.5842 51.2ZM51.9642 32.84V31.22C51.9642 23.48 47.2242 17.96 38.5842 17.96C29.9442 17.96 25.2042 23.48 25.2042 31.22V32.84H51.9642ZM61.4203 48.8V2.78H64.9003V49.04C64.9003 50.54 65.8003 51.2 66.6403 51.2H68.3803V54.32H65.9803C63.1003 54.32 61.4203 52.52 61.4203 48.8ZM74.5331 0.199998C76.1531 0.199998 77.7131 1.46 77.7131 3.44C77.7131 5.48 76.1531 6.74 74.5331 6.74C72.9131 6.74 71.3531 5.48 71.3531 3.44C71.3531 1.46 72.9131 0.199998 74.5331 0.199998ZM76.2731 53.54H72.7931V15.62H76.2731V53.54ZM99.3459 31.64L111.526 30.02V28.58C111.526 21.14 107.686 18.14 99.0459 18.14C91.0059 18.14 87.1659 22.46 87.1659 27.2V28.16H83.6859V26.6C83.6859 20.84 88.9059 15.02 99.0459 15.02C109.786 15.02 115.006 19.52 115.006 27.98V53.6H111.526V47.96C110.326 50.66 104.506 54.32 97.5459 54.32C88.6659 54.32 82.4859 50.9 82.4859 43.94C82.4859 36.74 88.3659 33.08 99.3459 31.64ZM111.526 33.14L99.3459 34.76C91.0659 35.84 85.9659 38 85.9659 43.94C85.9659 48.68 90.1659 51.2 97.5459 51.2C104.146 51.2 111.526 47.54 111.526 41.12V33.14ZM121.289 2.78H124.769V15.62H137.189C148.289 15.62 153.809 23.6 153.809 34.22C153.809 44.9 148.889 53.54 137.189 53.54H121.289V2.78ZM138.089 18.74H124.769V50.42H138.089C146.249 50.42 150.329 42.98 150.329 34.22C150.329 25.7 146.009 18.74 138.089 18.74ZM136.649 41.12C136.409 36.38 134.669 35 130.769 34.82C134.669 34.64 136.409 33.26 136.649 28.52C136.889 33.26 138.569 34.64 142.529 34.82C138.569 35 136.889 36.38 136.649 41.12ZM159.213 48.8V2.78H162.693V49.04C162.693 50.54 163.593 51.2 164.433 51.2H166.173V54.32H163.773C160.893 54.32 159.213 52.52 159.213 48.8ZM186.006 51.2C194.046 51.2 198.786 46.88 198.786 42.14V41.48H202.266V42.74C202.266 48.5 196.146 54.32 186.006 54.32C175.266 54.32 169.146 47.3 169.146 38.54V30.62C169.146 21.86 175.266 14.84 186.006 14.84C196.746 14.84 202.866 21.86 202.866 30.62V35.78H172.626V37.94C172.626 45.68 177.366 51.2 186.006 51.2ZM199.386 32.84V31.22C199.386 23.48 194.646 17.96 186.006 17.96C177.366 17.96 172.626 23.48 172.626 31.22V32.84H199.386ZM3.6 95.62V104.62C6.18 99.28 12.54 95.02 19.92 95.5V98.86C12.06 98.38 6.12 103.36 3.6 109.42V133.54H4.47035e-08V95.62H3.6ZM38.5842 111.64L50.7642 110.02V108.58C50.7642 101.14 46.9242 98.14 38.2842 98.14C30.2442 98.14 26.4042 102.46 26.4042 107.2V108.16H22.9242V106.6C22.9242 100.84 28.1442 95.02 38.2842 95.02C49.0242 95.02 54.2442 99.52 54.2442 107.98V133.6H50.7642V127.96C49.5642 130.66 43.7442 134.32 36.7842 134.32C27.9042 134.32 21.7242 130.9 21.7242 123.94C21.7242 116.74 27.6042 113.08 38.5842 111.64ZM50.7642 113.14L38.5842 114.76C30.3042 115.84 25.2042 118 25.2042 123.94C25.2042 128.68 29.4042 131.2 36.7842 131.2C43.3842 131.2 50.7642 127.54 50.7642 121.12V113.14ZM76.4273 133.54H72.5273C66.8273 133.54 64.3073 129.52 64.3073 123.58V98.74H58.7273V95.62H64.4273V82.78H68.0273V95.62H75.8273V98.74H68.0273V123.82C68.0273 127.84 69.1073 130.42 73.3673 130.42H76.4273V133.54ZM83.205 80.2C84.825 80.2 86.385 81.46 86.385 83.44C86.385 85.48 84.825 86.74 83.205 86.74C81.585 86.74 80.025 85.48 80.025 83.44C80.025 81.46 81.585 80.2 83.205 80.2ZM84.945 133.54H81.465V95.62H84.945V133.54ZM110.958 95.56C117.318 95.56 122.118 98.98 122.118 107.26V133.54H118.638V106.66C118.638 101.32 115.398 98.56 110.958 98.56C105.138 98.56 99.7978 100.72 95.2378 103.18V133.54H91.7578V95.68H95.2378V99.82C99.7978 97.78 105.378 95.56 110.958 95.56ZM128.272 134.74H131.752V135.82C131.752 139.96 135.892 145 143.932 145C152.572 145 156.892 138.76 156.892 131.02V127.78C154.252 130.18 149.572 132.52 143.812 132.52C133.432 132.52 127.252 126.1 127.252 117.34V110.2C127.252 101.44 133.432 95.02 143.812 95.02C154.192 95.02 160.372 101.44 160.372 110.2V131.62C160.372 140.38 154.672 148.12 143.932 148.12C133.792 148.12 128.272 141.58 128.272 135.82V134.74ZM156.892 123.76V110.8C156.892 103.06 152.092 98.14 143.812 98.14C135.532 98.14 130.732 103.06 130.732 110.8V116.74C130.732 124.48 135.532 129.4 143.812 129.4C149.812 129.4 153.712 127.78 156.892 123.76ZM144.112 119.74C143.872 115 142.132 113.62 138.232 113.44C142.132 113.26 143.872 111.88 144.112 107.14C144.352 111.88 146.032 113.26 149.992 113.44C146.032 113.62 144.352 115 144.112 119.74ZM180.882 134.56C170.382 134.56 164.322 129.46 164.322 122.86H167.922C167.922 128.2 174.102 131.44 180.882 131.44C187.062 131.44 193.542 129.22 193.542 124.12C193.542 119.8 190.122 118.18 184.242 116.26L177.582 114.1C169.422 111.52 166.362 108.16 166.362 103.96C166.362 98.44 172.242 94.84 180.642 94.84C189.942 94.84 194.982 99.7 194.982 104.74H191.382C191.382 100.96 186.822 97.96 180.702 97.96C174.522 97.96 169.962 99.88 169.962 103.78C169.962 106.96 172.122 109 178.482 111.04L184.542 113.02C192.102 115.48 197.142 118.18 197.142 124C197.142 130.36 189.522 134.56 180.882 134.56ZM206.18 118.42L205.22 82.18H209.3L208.4 118.42H206.18ZM207.26 127C208.88 127 210.44 128.26 210.44 130.24C210.44 132.28 208.88 133.54 207.26 133.54C205.64 133.54 204.08 132.28 204.08 130.24C204.08 128.26 205.64 127 207.26 127Z"
              fill="#F3B744"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
