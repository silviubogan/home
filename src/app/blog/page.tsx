/* eslint-disable @next/next/no-img-element */
"use client";

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
        <Link href={linkUrl}>{title}</Link>
      </h3>
      <section>
        <Link href={linkUrl}>{summary}</Link>
        <p>
          <Link href={linkUrl}>
            <small>{postedOn}</small>
          </Link>
        </p>
      </section>
      <Link href={linkUrl} className="thumbnail">
        <img
          src={thumbnailUrl}
          alt={title}
          // width={(150 * 4) / 3}
          // height={(150 * 3) / 3}
          style={{ height: "10rem", width: "auto", maxWidth: "10rem" }}
        />
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
