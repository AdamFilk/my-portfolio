import profile from  "../images/profile.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faGithub,faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faUser,faPhone,faEnvelope,faLocationDot} from "@fortawesome/free-solid-svg-icons";
 
function Bio() {

  
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center mb-8" id="bio">
        <h3 className="text-4xl md:text-6xl md:mb-12 text-green-400 text-center">Basic Information</h3>
        <div className="flex justify-center items-start h-full md:gap-4 flex-wrap md:flex-nowrap">
            <div className="w-full flex flex-col justify-start items-end p-8 md:p-0">
                <img src={profile} alt="profile" className="md:w-3/4 h-auto max-w-full rounded-2xl"/>
                <div className="flex justify-start items-center gap-4 mt-4">
                    <a href="https://www.facebook.com/aungchanoo9800/"><FontAwesomeIcon icon={faFacebook} className="text-5xl text-indigo-600"></FontAwesomeIcon></a>
                    <a href="https://github.com/AdamFilk"><FontAwesomeIcon icon={faGithub} className="text-5xl text-black"></FontAwesomeIcon></a>
                    <a href="https://www.linkedin.com/in/aung-chan-o-868983152/"><FontAwesomeIcon icon={faLinkedinIn} className="text-4xl bg-blue-400 p-3 text-white"></FontAwesomeIcon></a>
                </div>
            </div>
        
            <div className="flex flex-col gap-8 md:justify-start justify-center w-full p-4 md:text-3xl text-xl">
                <div className="flex gap-3">
                    <p className="text-green-400">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </p>
                    <p>Aung Chan Oo</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-green-400">
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </p>
                    <p>+95 9765333508</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-green-400">
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </p>
                    <p>aungchanoo.dev@gmail.com</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-green-400">
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    </p>
                    <p>Myanmar, Yangon, Dagaon,<br /> U Wisara Housing, Building 9</p>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Bio;
