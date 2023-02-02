import { Link } from 'react-router-dom';

const About = ({aboutRef, projectsRef}) => {

    const handleScroll = (ref) => {

        window.scrollTo({
          top: ref.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      };

    return ( 
    <div>
        <div class="flex flex-col  md:flex-row">
            <div class="flex flex-col basis-1/2 p-5  pt-8 md:pt-16  pl-8 md:pl-24 w-full" ref={aboutRef}>
                
                <div class="flex flex-col space-y-4 "><h4 class="text-blue-500 text-lg font-mono font-medium"> Hi, my name is</h4></div>
                <div class="flex flex-col space-y-4 "><h1 class="text-black text-3xl md:text-7xl font-sans font-bold pt-5">Frank Osoro.</h1></div>
                <div class="flex flex-col space-y-4 "><h2 class="text-slate-400 text-xl md:text-5xl font-sans font-semibold pt-1 md:pt-3">I build, break & protect</h2></div>
                

                <div class="pt-5 md:pt-10 text-sm md:text-lg text-black font-mono">
                I'm a solution-driven programmer and Ethical hacker adroit at creating secure and efficient code. I have proven experience identifying and mitigating potential security threats in networks and systems.
                </div>
            </div> 

            <div class="flex w-full basics-1/2 ">
                <img class=" w-full md:w-full" src={require('../images/work.png')} alt="" />
            </div>
        
        </div>
      
        <button class="ml-20 p-5 border rounded text-black bg-yellow-300  hover:bg-yellow-400 hover:text-black font-semibold">
        <Link to="/#projects" onClick={()=>{handleScroll(projectsRef.current);}}> Check out my projects! </Link>
        </button>
        
    </div>
    );
}
 
export default About;