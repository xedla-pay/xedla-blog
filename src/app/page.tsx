import PostPagination from "@/components/partials/PostPagination";
import FeaturedPostCard from "@/components/partials/cards/FeaturedPostCard";
import Postcard from "@/components/partials/cards/Postcard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 py-10">
        <FeaturedPostCard />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
      </div>
      <PostPagination />
    </div>
  );
}
