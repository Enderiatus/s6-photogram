/* Post componentından buraya neleri props olarak gönderdin? Onları burada kullan. */
export default function PostComment({ comment }) {
  /* yorum sahibinin adı ve yorumu props'tan kullanılmalı */

  return (
    <p className="post-comment">
      <span>{comment.username}</span>
      <span className="sep">&middot;</span>
      {comment.text}
    </p>
  );
}
