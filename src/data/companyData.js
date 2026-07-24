import { faFacebookF, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export const data = [
    {
        string: "123 Fashion Street, Style City, SC 12345",
        icon: faLocationDot
    },
    {
        string: "+1 (555) 123-4567",
        icon: faPhone
    },
    {
        string: "hello@bloomshop.com",
        icon: faEnvelope
    }
]

export const socialMedia = [
    {
        name: "Facebook",
        link: "#",
        icon: faFacebookF,
        color: "#1877F2"
    },
    {
        name: "X",
        link: "https://x.com/gabzee_jnr",
        icon: faTwitter,
        color: "#1DA1F2"
    },
    {
        name: "Instagram",
        link: "#",
        icon: faInstagram,
        color: `linear-gradient(
        45deg, #405DE6, #833AB4, #E1306C, #F77737, #FCAF45)`
    },
    {
        name: "Github",
        link: "https://www.github.com/gabzeejnr",
        icon: faGithub,
        color: "#181717"
    }
]