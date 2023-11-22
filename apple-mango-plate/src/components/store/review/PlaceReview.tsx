import React from "react";
import ReactStars from "react-rating-stars-component";
import ReviewThumbnail from "./ReviewThumbnail";

const dummyReview = [
  {
    id: 1,
    content: "맛있어요",
    rating: 4.5,
    user_id: 1,
    user_profile_image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    user_name: "dbwj1",
    store_id: 1,
    review_images: [
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    ],
  },
  {
    id: 2,
    content:
      "역곡에 이런 카페가 있다니 공간이 넓진 않지만 \n평일 낮에 잠깐 노트북 할 정도는 됨 다쿠아즈가 정말 맛있었고 카이막도 괜찮았던것 같은데 같이 나오는 빵은 내스타일 아녔음",
    rating: 3,
    user_id: 1,
    user_profile_image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    user_name: "유저2",
    store_id: 1,
    review_images: [
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    ],
  },
];

export default function PlaceReview() {
  return (
    <div>
      <div className="w-full h-20 flex justify-end items-center">
        <button className="flex bg-background_gray text-white px-5 py-1 rounded-full text-sm">
          리뷰 작성하기
        </button>
      </div>
      <div className="flex flex-col w-[450px] md:w-[650px] border-2 border-black bg-white">
        <div className="flex-col flex w-full items-center mt-10 mb-4">
          <h1 className="text-xl mb-2">review</h1>
          <ReactStars
            count={5}
            size={16}
            activeColor="#FB9B0D"
            edit={false}
            value={4.5}
            isHalf={true}
          />
        </div>
        <section className="flex flex-col w-full items-center">
          {dummyReview.map((review) => (
            <ReviewThumbnail key={review.id} review={review} />
          ))}
        </section>
      </div>
    </div>
  );
}
