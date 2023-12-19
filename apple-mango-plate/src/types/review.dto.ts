export interface Review {
  id: number;
  content: string;
  rating: number;
  user_id: number;
  user_profile_image: string;
  user_name: string;
  store_id: number;
  review_images: string[];
}
