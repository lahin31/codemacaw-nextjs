import Image from "next/image";
import AuthorStyles from "../styles/Author.module.css";

const Author = () => {
  return (
    <div className={AuthorStyles.authorWrapper}>
      <div className="info">
        <Image src={"/images/author.jpg"} alt="" width="64" height="64" />
        <h5 className={AuthorStyles.authorTitle}>Muhammad Lahin</h5>
        <span className={AuthorStyles.authorEmail}>
          muhammad.lahin@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Author;
