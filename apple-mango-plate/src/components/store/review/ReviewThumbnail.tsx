import { Review } from "@/types/review.dto";
import ReactStars from "react-rating-stars-component";
import ReviewImage from "./ReviewImage";
import Image from "next/image";

interface Props {
  review: Review;
}
export default function ReviewThumbnail({ review }: Props) {
  return (
    <div className="flex w-[600px] h-[300px] mb-10 pt-2 border-signature_orange border-b">
      <section className="w-[160px] h-full flex flex-col items-center">
        <div className="w-[80px] h-[80px] relative">
          <Image
            src={review.user_profile_image}
            alt={"profile_user"}
            fill={true}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <span className="text-sm mt-2">{review.user_name}</span>
      </section>
      <section className=" h-full w-full flex flex-col pl-4">
        <div className="flex w-full h-1/2">
          <div className="w-full whitespace-break-spaces text-sm pr-5">
            {review.content}
          </div>
          <div className="w-[100px] h-full pt-10">
            <ReactStars
              count={5}
              size={16}
              activeColor="#FB9B0D"
              edit={false}
              value={review.rating}
              isHalf={true}
            />
          </div>
        </div>
        <div className="w-full h-1/2 flex flex-row">
          {review.review_images.map((image, idx) => (
            <ReviewImage key={idx} image={image} />
          ))}
        </div>
      </section>
    </div>
  );
}
