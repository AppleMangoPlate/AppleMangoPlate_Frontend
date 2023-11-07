import MainBanner from "@/components/home/MainBanner";
import HonestReview from "@/components/home/honestReview/HonestReview";
import ReliableRating from "@/components/home/reliableRating/ReliableRating";

export default function Home() {
  return (
    <main className="flex-row justify-center items-center">
      <MainBanner />
      <HonestReview />
      <ReliableRating />
    </main>
  );
}
