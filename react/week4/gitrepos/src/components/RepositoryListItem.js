export default function RepositoryListItem({repo}){
    const { id, login, url } = repo;
    return (<li>{login}</li>)
}