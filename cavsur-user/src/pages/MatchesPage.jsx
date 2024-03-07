import { useEffect } from "react";
import { useMatches } from "../context/MatchesContext";
import { Link } from "react-router-dom";
import MatchCard from "../components/MatchCard";

export default function MatchesPage() {
    const { getMatches, matches } = useMatches();

    useEffect(() => {
        getMatches();
    }, []);

    if (matches.length === 0)
        return (
            <button className="bg-blue-500 text-white px-4 py-2 m-3  rounded focus:outline-none focus:shadow-outline">
                <Link to="/add-match">Añadir Partido</Link>
            </button>
            // <h1>No Matches</h1>
        );

    return (
        <div>
            <button className="bg-blue-500 text-white px-4 py-2 m-3 rounded focus:outline-none focus:shadow-outline">
                <Link to="/add-match">Añadir Partido</Link>
            </button>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                {matches.map((match) => (
                    <MatchCard match={match} key={match._id}/>
                ))}
            </div>
        </div>
    );
}
