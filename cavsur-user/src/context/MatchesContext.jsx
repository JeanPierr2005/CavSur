import { createContext, useContext, useState } from "react";
import {
    createMatchRequest,
    getMatchesRequest,
    deleteMatchRequest,
    getMatchRequest,
    updateMatchRequest
} from "../api/matches";

const MatchContext = createContext();

export const useMatches = () => {
    const context = useContext(MatchContext);

    if (!context)
        throw new Error("useMatches must be used within a MatchProvider");
    return context;
};

export function MatchProvider({ children }) {
    const [matches, setMatches] = useState([]);

    const getMatches = async () => {
        try {
            const res = await getMatchesRequest();
            setMatches(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createMatch = async (match) => {
        try {
            const res = await createMatchRequest(match);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteMatch = async (id) => {
        try {
            const res = await deleteMatchRequest(id);
            if (res.status === 204)
                setMatches(matches.filter((match) => match._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getMatch = async (id) => {
        try {
            const res = await getMatchRequest(id);
            return res.data
        } catch (error) {
            console.log(error);
        }
    };

    const updateMatch = async (id, match) => {
        try {
            await updateMatchRequest(id,match)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MatchContext.Provider
            value={{
                matches,
                createMatch,
                getMatches,
                deleteMatch,
                getMatch,
                updateMatch,
            }}
        >
            {children}
        </MatchContext.Provider>
    );
}
