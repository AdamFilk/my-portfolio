function Education() {
  const education = [
    {
        title:'BSc(H)Computing',
        location:'University of Greenwich',
        year:'2020-2021'
    },
    {
        title:'Level 5 Diploma in Computing',
        location:'NCC',
        year:'2018-2019'
    },
    {
        title:'Level 5 Diploma in Computing',
        location:'NCC',
        year:'2017-2018'
    },
    {
        title:'Englih Literature',
        location:'Dagon University of Distance Education',
        year:'2017-2020 (Dropped out)'
    }
  ]
  
  return (
    <div className="container mx-auto md:min-h-screen mb-8" id="edu">
        <h3 className="text-4xl md:text-6xl md:mb-12 text-green-400 text-center">Education</h3>
        <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col md:flex-row justify-center items-start border-l-green-500 border-l-4 m-8 md:border-b-4 border-b-green-500 md:border-l-0" >
            {
                education.map((edu,i) => 
                <div className="flex flex-col my-4 md:my-8 pl-4" key={i}>
                    <span className="md:text-4xl text-xl font-semibold">{edu.location}</span>
                    <span className="md:text-lg text-gray-500">{edu.title}</span>
                    <span className="md:text-lg text-gray-500">{edu.year}</span>
                </div>
                )
            }
                
            </div>
        </div>
    </div>
  );
}

export default Education;
