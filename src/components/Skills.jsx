import Card from "./Shared/Card";
import frontendImg from '../images/frontend.png';
import backendImg from '../images/backend.jpg';
import fullstack from '../images/fullstack.jpeg';
import lempImg from '../images/lemp.png';
import mernImg from '../images/mern-stack.png';
import vueImg from '../images/vue.png';

function Skills() {
    const skills = [
        {
            title:'Front-End Development',
            text:'I develop Front-end Web Applications with Vue.js, React.js.',
            img:frontendImg
        },
        {
            title:'Back-End Development',
            text:'I develop Backend-end Web Applications with PHP, Laravel, Node.js, MongoDB, MySQL, Nginx.',
            img:backendImg
        },
        {
            title:'Fullstack  Development',
            text:'I develop Fullstack Web Applications with PHP, Laravel, Vue.js, Node.js , React.js, Nuxt.js, Next.js',
            img:fullstack
        }
    ]
    
    return (
      <div className="container mx-auto md:min-h-screen mb-8 px-4 md:px-0" id="skills">
          <h3 className="text-4xl md:text-6xl text-green-400 text-center mb-8">Skills</h3>
          <h3 className="md:text-2xl text-lg md:mb-12 text-center">
                I use PHP, Laravel, Vue.js, React.js and Node.js to develop scalable Web Applications.
          </h3>
          <div className="hidden md:flex justify-center items-center my-8">
            <img src={lempImg} alt="" className="max-w-full h-auto"/>
            <img src={mernImg} alt="" className="max-w-full h-auto"/>
            <img src={vueImg} alt="" className="max-w-full h-auto"/>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-start gap-3 ">
            {
                skills.map(s => <Card data={s} key={s.title} hFixed/>)
            }
          </div>
      </div>
    );
  }
  
  export default Skills;
  