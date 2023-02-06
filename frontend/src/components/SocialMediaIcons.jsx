import githubLogo from "../assets/github.svg";
import instagramLogo from "../assets/instagram.png";
import linkedinLogo from "../assets/linkedin.png";

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a 
                className="hover:opacity-50 transition duration-500" 
                href="https://linkedin.com/in/onggabriel" 
                target="_blank" 
                rel="noreferrer">
                    <img alt="linkedin-link" src={linkedinLogo} />
            </a>

            <a 
                className="hover:opacity-50 transition duration-500" 
                href="https://www.instagram.com/the_little_aik/" 
                target="_blank" 
                rel="noreferrer">
                    <img alt="instagram-link" src={instagramLogo} />
            </a>

            <a 
                className="hover:opacity-50 transition duration-500" 
                href="https://github.com/gabrielojh" 
                target="_blank" 
                rel="noreferrer">
                    <img alt="github-link" src={githubLogo} className="w-[42px] my-[-6px]"/> {/*TO FIX*/}
            </a>
        </div>
    )
}

export default SocialMediaIcons;