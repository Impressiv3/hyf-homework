import { useContext } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import RepositoryListItem from "../components/RepositoryListItem";

export default function RepositoryList() {
  const { repositories } = useContext(GlobalStateContext);
  return (
    <ul>
      {repositories.length <= 0 ? (
        <li>There are no results</li>
      ) : (
        repositories.map((repo) => <RepositoryListItem key={repo.id} repo={repo} />)
      )}
    </ul>
  );
}
