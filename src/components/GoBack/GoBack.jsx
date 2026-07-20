import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function GoBack() {

    // NAVIGATE =========================
    const navigate = useNavigate();

    // =================================
    // FUNCTIONS =======================
    // =================================

    // GO BACK =========================
    function goBack() {
        navigate(-1)
    }

    // =================================
    // STYLING =========================
    // =================================

    // BUTTON ==========================
    const buttonStyle = {
        background: "transparent",
        border: "none",
        padding: "2em",
        cursor: "pointer"
    }

    return (
        <>
            <button style={buttonStyle} onClick={goBack}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                Go back</button>
        </>
    )
}