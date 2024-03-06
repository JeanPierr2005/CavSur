import { createContext, useContext, useState } from "react";
import { createMatchRequest } from "../api/matches";

const MatchContext = createContext();

export const useMatches = () => {
    const context = useContext(MatchContext);

    if (!context)
        throw new Error("useMatches must be used within a MatchProvider");
    return context;
};

export function MatchProvider({ children }) {
    const [matches, setMatches] = useState([]);

    const createMatch = async (match) => {
        try {
            const res = await createMatchRequest(match);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MatchContext.Provider
            value={{
                matches,
                createMatch,
            }}
        >
            {children}
        </MatchContext.Provider>
    );
}
