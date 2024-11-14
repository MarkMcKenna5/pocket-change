import { Suspense } from 'react';
import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";
import TextSkeleton from "@/app/components/loading-skeleton/text-skeleton"

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <div>
      <div className="mb-5 sm:mb-8">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      {/* <TextSkeleton width={"100%"}/> */}
      <Suspense fallback={<TextSkeleton width={"100%"}/>}>
        <h3 className="font-semibold mb-5 text-[1.75rem] sm:text-[2.25rem] leading-tight sm:leading-10">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="text-xl mb-4">
          <DateComponent dateString={date} />
        </div>
        <p className="text-xl leading-normal sm:leading-relaxed mb-4 sm:mb-8">{excerpt}</p>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </Suspense>
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-16 sm:mb-32 pb-[5rem] sm:pb-[10rem]">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
