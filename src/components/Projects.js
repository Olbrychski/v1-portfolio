import Card from './Card';

const Projects = ({projectsRef}) => {
    return ( 
    <div class="" ref={projectsRef}>
    <h1 class="flex md:justify-center text-black text-2xl md:text-4xl font-sans font-semibold p-4 pt-7 md:pt-4 ">Some Things I've Built</h1>

    <div class="flex flex-wrap gap-10 justify-center p-8 pt-5">

        <Card 
            image="ecomm.png"
            title="Vulnerable Web Application" 
            description="SQL Injection Vulnerable Web App project simulates a web app with poor input validation, making it vulnerable to SQL injection attacks. Its purpose is to educate on the dangers of SQL injection and the importance of secure coding practices. Can be used for education or demonstration purposes."
            github="https://github.com/Olbrychski/sqli_resume"
            link="#"
            languages={["React","Node.js","Express","SQL"]}
        />

        <Card 
            image="rms.png"
            title="TCP Server" 
            description="A TCP server that manages client connections, assigns ranks based on first-come-first-serve, and allows clients to execute commands based on their rank. High rank clients cannot execute commands of lower rank clients. Disconnected clients prompt server to adjust ranks."
            github="https://github.com/Olbrychski/TCP-Server"
            link="#"
            languages={["Python","Sockets","TCP"]}
        />

        <Card 
            image="utulivu.png"
            title="API Fuzzer" 
            description="An API fuzzer project in Python that tests API for vulnerabilities by sending malformed and unexpected inputs. The goal is to identify security flaws and improve API security."
            github="https://github.com/Olbrychski/ApiFuzzer"
            link="#"
            languages={["Python","API","Pentesting","Fuzzing"]}
        />

        <Card 
            image="hms.png"
            title="School Pick-App" 
            description="A School Pickup mobile app project in Java for parents to track and manage school transportation. Allows real-time updates on driver location, estimated time of arrival and sends notifications for pick up and drop off. Improves communication and safety for school transportation."
            github="https://github.com/Olbrychski/school_pickup"
            link="#"
            languages={["Java","XML","MySQL","Android"]}
        />

        

    </div>

    </div> 
);
}
 
export default Projects;