import { Suspense } from 'react';
import Link from "next/link";
import { draftMode } from "next/headers";

import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";
import MoreStories from "./more-stories";
import TextSkeleton from "@/app/components/loading-skeleton/text-skeleton"
import ScrollToTop from "@/app/components/scroll-to-top/scroll-to-top"
import ToggleDarkMode from './components/toggle-dark-mode/toggle-dark-mode';

import { getAllPosts } from "@/lib/api";


function Intro() {
  return (
    <section className="flex flex-col items-center md:justify-center my-6 sm:my-10 md:my-16 2xl:my-20">
      <h1 className="hidden">
        Blog.
      </h1>
      <img 
        src="/images/pocket-change.svg"
        alt="Blog logo,'Pocket change, a blog by ibotta'"
      />
    </section>
  );
}

function HeroPost({
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
    <section className="mb-[3.25rem] sm:mb-[3.5rem]">
      <div className="mb-6 md:mb-8">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="flex flex-col">
      {/* <TextSkeleton width="100%"/> */}
        <Suspense fallback={<TextSkeleton width="100%"/>}>
          <div>
            <h3 className="font-bold mb-3 text-[1.75rem] leading-tight">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="mb-4 md:mb-4 text-[1.15rem] sm:text-[1.25rem]">
              <Date dateString={date} />
            </div>
          </div>
          <div>
            <p className="text-[1.15rem] sm:text-[1.25rem] leading-normal mb-4 sm:mb-8">{excerpt}</p>
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
          </Suspense>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="container mx-auto px-5">
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} />
      <ScrollToTop text="Back to top" />
      <ToggleDarkMode />
    </div>
  );
}
