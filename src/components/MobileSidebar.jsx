
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function MobileSidebar(props) {
  return (
    <div className="fixed w-full h-full z-50 top-0 flex justify-end" style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
        <div className="bg-white w-3/4 flex flex-col items-end p-4 gap-4">
            <div>
              <FontAwesomeIcon icon={faTimes} className="text-4xl" onClick={()=> props.handleClick()}></FontAwesomeIcon>
            </div>
            <a href="#bio" className="hover:text-green-600 text-2xl underline underline-offset-8" onClick={()=> props.handleClick()}>Bio</a>
            <a href="#edu" className="hover:text-green-600 text-2xl underline underline-offset-8" onClick={()=> props.handleClick()}>Education</a>
            <a href="#skills" className="hover:text-green-600 text-2xl underline underline-offset-8" onClick={()=> props.handleClick()}>Skills</a>
            <a href="#exp" className="hover:text-green-600 text-2xl underline underline-offset-8" onClick={()=> props.handleClick()}>Experiences</a>
            <a href="#projects" className="hover:text-green-600 text-2xl underline underline-offset-8" onClick={()=> props.handleClick()}>Projects</a>
        </div>
    </div>
  );
}

export default MobileSidebar;
