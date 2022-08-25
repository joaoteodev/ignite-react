// https://api.github.com/users/joaoteodev/repos
import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/joaoteodev/repos`)
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        {repositories.map(repo => (
          <RepositoryItem repository={repo} key={repo.id} />
        ))}
      </ul>
    </section>
  );
}
