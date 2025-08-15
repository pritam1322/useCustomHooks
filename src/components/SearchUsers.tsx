import { useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce";

export default function SearchUsers(){

    const [results, setResults] = useState<any[]>([]);
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        if(!debouncedQuery){
            setResults([]);
            return;
        }

        fetch(`https://api.github.com/search/users?q=${debouncedQuery}`)
        .then((res) => {
            return res.json();
        })
        .then((data)=> {
            setResults(data.items || []);
        })

    },[debouncedQuery]);

    return(
        <div style={{ padding: "1rem" }}>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />

      <ul style={{justifyItems: "left", paddingLeft : "100px"}}>
        {results.map((user) => (
          <li key={user.id}>
            <img
              src={user.avatar_url}
              alt={user.login}
              width={30}
              style={{ borderRadius: "50%", marginRight: "8px" }}
            />
            {user.login}
          </li>
        ))}
      </ul>
    </div>
    )
}