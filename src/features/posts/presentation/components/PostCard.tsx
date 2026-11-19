interface Props {
    id: number,
    title: string;
    body: string
}

export const PostCard = ({id,title, body} :Props) => {
    return (
      <a href={`/posts/${id}`}>
          <p><b>title:</b> {title}</p>
          <p><b>message:</b> {body}</p>
      </a>
    );
}