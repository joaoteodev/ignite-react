export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Repository name"}</strong>
      <p>{props.repository.description ?? "Repository description"}</p>
      <a href={props.repository.html_url}>Go to repository</a>
    </li>
  );
}
