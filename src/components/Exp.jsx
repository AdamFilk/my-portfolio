import Card from '../components/Shared/Card';
import mccImg from '../images/mcci.png';
import fmImg from '../images/FreshMoe.png';
import lewreImg from '../images/Lewre-logo.jpg';
import baganImg from '../images/bagan.png';

function Exp(){
    const exps =[
        {
            title:'MCC.i',
            subTitle:'Internship (2018-2019)',
            text:'For this internship we were sent to Nay Pyi Taw to help out and observe IT systems and how things work.',
            img: mccImg
        },
        {
            title:'Fresh Moe',
            subTitle:'Web Developer (2021 Jan - 2022 July)',
            text:'I worked as a full time Web Developer at this company. It was a start up environment from the perspective of IT and software development so I get to learn a lot coding, problem solving skills and communication with other developers + how to applications are built and architech-ed in the real-world.',
            img: fmImg
        },
        {
            title:'Lewre` Bespoke (Freelance)',
            subTitle:'Front-end UI (2021 Dec - 2022 July)',
            text:'Lewre` is a very well established brand in Malaysia. Me, and two other developers have joined to develop this freelance project. I was assigned to develop Front-end web application with React MUI along side the others.',
            img: lewreImg
        },
        {
            title:'Bagan Innovation',
            subTitle:'Web Developer (2022 Aug - Current)',
            text:'Unlike the start up and other jobs I\'ve had before this company is a IT company working on brilliant SaaS products with Web Development, App Development, Chatbots, Data Science and etc.',
            img: baganImg
        }
    ]
    return (
        <div className="container mx-auto md:min-h-screen mb-8 px-4 md:px-0" id="exp">
            <h3 className="text-4xl md:text-6xl text-green-400 text-center mb-8">Experiences</h3>
            <div className="flex justify-center items-start gap-3 flex-wrap">
            {
                exps.map((exp,i) => <Card data={exp} key={i}/>)
            }
            </div>
        </div>
    )
}
export default Exp;