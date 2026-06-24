import { HandsClappingIcon } from "@phosphor-icons/react";
import PostComment from "./PostComment.jsx";
/* İlgili dosyadan PostComment'i import et */

export default function Post({ item, onClap }) {
  return (
    <div className="post">
      <img src={item.imageUrl} alt={item.username} />
      <div className="post-header">
        <span className="post-owner">{item.username}</span>
        <span>&middot;</span>
        <span className="post-date">{item.timestamp}</span>
        <button className="post-clap" onClick={() => onClap(item.id)}>
          <HandsClappingIcon />
          <span>{item.claps}</span>
        </button>
      </div>
      <div className="post-comments">
        {item.comments.map((post) => (
          <PostComment key={post.id} comment={post} />
        ))}
      </div>
    </div>
  );
}
