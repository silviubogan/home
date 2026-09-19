"use client";
/* eslint-disable @next/next/no-img-element */

// import Image from "next/image";
import Link from "next/link";
import { posts } from "./posts.json";

interface BlogPostProps {
  title: string;
  summary: string;
  thumbnailUrl: string;
  postedOn: string;
  linkUrl: string;
}

const BlogPost = ({
  title,
  summary,
  thumbnailUrl,
  postedOn,
  linkUrl,
}: BlogPostProps) => {
  return (
    <article>
      <h3>
        <Link href={linkUrl} prefetch={false}>
          {title}
        </Link>
      </h3>
      <section>
        <Link href={linkUrl} prefetch={false}>
          {summary}
        </Link>
        <p>
          <Link href={linkUrl} prefetch={false}>
            <small>{postedOn}</small>
          </Link>
        </p>
      </section>
      <Link href={linkUrl} className="thumbnail" prefetch={false}>
        {typeof thumbnailUrl === "string" && thumbnailUrl.length > 0 ? (
          <img
            src={thumbnailUrl}
            alt={title}
            // width={(150 * 4) / 3}
            // height={(150 * 3) / 3}
            style={{ height: "10rem", width: "auto", maxWidth: "10rem" }}
          />
        ) : null}
      </Link>
    </article>
  );
};

export default function Home() {
  return (
    <div className="blog-posts-container">
      {posts.map((post) => (
        <BlogPost
          title={post.title}
          summary={post.summary}
          thumbnailUrl={post.thumbnailUrl}
          postedOn={post.postedOn}
          linkUrl={post.linkUrl}
          key={post.linkUrl}
        />
      ))}
    </div>
  );
}
