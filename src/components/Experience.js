const Experience = ({experienceRef}) => {

    return ( 
    <div class="px-4 md:px-16 pt-5" ref={experienceRef}>
        <h2 class="flex md:justify-center text-black text-2xl md:text-4xl font-sans font-semibold pt-1 md:pt-1 ">Work Experience</h2>
        <div class="md:flex hidden md:visible justify-center p-10">
            <table class="p-5 mx-16">
                <tr class="p-5 border-b-4 border-double hover:bg-slate-200">
                    <td class="p-5 text-xl font-mono">Hackerone</td>
                    <td class="p-5">
                        <h1 class="text-xl text-black font-sans">Web Application Pentester (Bug Bounty)</h1>
                        <h2 class="text-lg font-mono">Jun 2021 - Present</h2>
                        <ul class="list-disc text-black font-sans pt-4">
                            <li>Finding and reporting vulnerabilities in websites and applications.</li>
                            
                        </ul>

                    </td>
                </tr>

                <tr class="p-5 hover:bg-slate-200 rounded">
                    <td class="p-5 text-xl font-mono">Attain Enterprises Ltd </td>
                    <td class="p-5">
                        <h1 class="text-xl text-black font-sans">Industrial Attaché - Programmer</h1>
                        <h2 class="text-lg font-mono">Jan 2021 - April 2021</h2>
                        <ul class="list-disc text-black font-sans pt-4">
                            <li>Working on a variety of software tasks and projects.</li>
                            <li>Troubleshoot system and network problems, diagnosing and solving technical faults.</li>
                            <li>Working to improve the performance and functionality of current systems and products
</li>
                        </ul>

                    </td>
                </tr>

            </table>
        </div>

        <div class="md:hidden">

            <div>
            <h1 class="p-4 pb-0 ml-1 font-sans text-black text-xl">Hackerone</h1>
                    <div class="p-5 pt-0">
                        <h1 class="text-xl text-black font-serif">Web Application Pentester</h1>
                        <h2 class="text-lg font-mono">Jun 2021 - Present</h2>
                        <ul class="list-disc font-sans ml-5 pt-2">
                            <li>Finding and reporting vulnerabilities in websites and applications.</li>
                            
                        </ul>

                    </div>
            </div>

            <hr />

            <div>
                <h1 class="p-4 pb-0 ml-1 font-sans text-black text-xl">Attain Enterprises Ltd</h1>
                <div class="p-5 pt-0">
                    <h1 class="text-xl text-black font-serif">Industrial Attaché - Programmer</h1>
                    <h2 class="text-lg font-mono">Apr 2019 - Aug 2019</h2>
                    <ul class="list-disc font-sans ml-5 pt-4">
                            <li>Working on a variety of software tasks and projects.</li>
                            <li>Troubleshoot system and network problems, diagnosing and solving technical faults.</li>
                            <li>Working to improve the performance and functionality of current systems and products</li>
                    </ul>
                </div>
            </div>

        </div>
    </div> 
);
}
 
export default Experience;
