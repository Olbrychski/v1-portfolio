import Skills from "./Skills";

const Education = ({educationRef}) => {
    return ( 
        <div class="md:flex">
            <div class="w-full md:w-1/2 px-4 md:px-16 pt-10" ref={educationRef}>
                <h2 class="text-black text-xl md:text-4xl font-sans font-semibold pt-1 md:pt-1">Education and Certifications</h2>
                <div class="mt-5 ml-1 md:ml-5 pt-5 rounded bg-slate-200  p-5 w-full">
                    <h1 class="text-xl md:text-2xl font-sans text-black">Bsc. Computer Science</h1>
                    <h2 class="text-lg font-mono">Jomo Kenyatta University Of Agriculture And Technology</h2>
                    <h3 class=" font-mono">Sep 2017 - Dec 2021</h3>
                </div>

                <div class="mt-5 ml-1 md:ml-5 pt-5 rounded bg-slate-200 p-5 w-full ">
                    <h1 class="text-xl md:text-2xl font-sans text-black">Google Africa Front End Certification</h1>
                    <h2 class="text-lg font-mono">Andela Learning Community (Powered by google)</h2>
                    <h3 class=" font-mono">May 2018 - Aug 2018</h3>
                </div>
            </div>
            <div class="w-full md:w-1/2 p-5 pr-10">
                <Skills />
            </div>
            
        </div>
     );
}
 
export default Education;