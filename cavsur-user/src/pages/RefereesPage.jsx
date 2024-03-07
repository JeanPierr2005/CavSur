import { useEffect } from "react";
import { useReferees } from "../context/RefereesContext";

export default function RefereesPage() {
    const { getReferees, referees } = useReferees();

    useEffect(() => {
        getReferees();
    }, []);

    if (referees.length === 0) return <h1>No Referees</h1>;

    return (
        <div>
            {referees.map((referee) => (
                <div key={referee._id}>
                    <h1>{referee.name}</h1>
                    <p>{referee.num_document}</p>
                    <p>{referee.phone}</p>
                </div>
            ))}
            Referees Page
        </div>
    );
}
