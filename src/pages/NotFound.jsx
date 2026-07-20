import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

    let navigate = useNavigate();
    
    return (
        <>
            Not found! <br />
            <button onClick={() => navigate(-1)}>Go back?</button>
        </>
    );
}