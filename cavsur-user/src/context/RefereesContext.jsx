import { createContext, useContext, useState } from "react";
import { createRefereeRequest, getRefereesRequest } from "../api/referees";

const RefereeContext = createContext();

export const useReferees = () => {
    const context = useContext(RefereeContext);

    if (!context)
        throw new Error("useReferees must be used within a refereeProvider");
    return context;
};

export function RefereeProvider({ children }) {
    const [referees, setReferees] = useState([]);

    const getReferees = async () => {
        try {
            const res = await getRefereesRequest();
            setReferees(res.data)
        } catch (error) {
            console.log(error)
        }
    };

    const createReferee = async (referee) => {
        try {
            const res = await createRefereeRequest(referee);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <RefereeContext.Provider
            value={{
                referees,
                createReferee,
                getReferees,
            }}
        >
            {children}
        </RefereeContext.Provider>
    );
}
