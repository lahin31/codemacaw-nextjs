import Link from "next/link";
import PostStyle from "../styles/Home/Post.module.css";

export default function Post({ post }) {
  return (
    <div className={PostStyle.card}>
      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3 className={PostStyle.postTitle}>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
}
