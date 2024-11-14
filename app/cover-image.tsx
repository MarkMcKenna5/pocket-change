import { Suspense } from 'react';
import ContentfulImage from "../lib/contentful-image";
import Link from "next/link";
import ImageSkeleton from "@/app/components/loading-skeleton/image-skeleton"

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoverImage({
  title,
  url,
  slug,
}: {
  title: string;
  url: string;
  slug?: string;
}) {
  const image = (
    <ContentfulImage
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={url}
    />
  );

  const imageSkeleton = <ImageSkeleton 
    width={"100%"}

  />

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          <Suspense fallback={imageSkeleton}>
            {image}
          </Suspense>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
