import { Link } from "react-router-dom";


import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contacts = ({contactsRef}) => {
    return ( <div class="p-5 " ref={contactsRef}>
    <div class="flex w-full bg-black p-10">

            <div class="invisible md:w-1/4">

            </div>
            <div class="w-full md:w-1/2">
                <h1 class="text-2xl text-yellow-300 flex place-content-center font-sans font-semibold">Get In Touch</h1>
                <center>
                    <h2 class="flex place-content-center text-zinc-300  pt-5">Ready to hack into some code and tackle those security breaches? Let's connect! Whether you need a code wizard or an ethical hacker, I've got you covered. Drop me a line and let's geek out together!</h2>
                    
                    <br />
            
                    <Link to="" onClick={() => window.location = 'mailto:frankosoro60@gmail.com'} class="border-0  rounded bg-red-600 p-3 hover:bg-red-500 hover:text-black text-white font-mono font-semibold">Say Hello</Link>
                </center>
            </div>
            
            <div class="invisible md:w-1/4">

            </div>

    </div>
    <br />

    <center>
    <div class="w-1/4">
        <hr />
    </div>
    </center>

    <center class="font-mono pt-5 ">
        <div class="w-1/4 flex justify-between ">
            <a  href="https://twitter.com/Frank_makz"><TwitterIcon /></a>
            <a href="https://github.com/Olbrychski" to=""><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/frank-osoro-4a682b15b/" to=""><LinkedInIcon /></a>
        </div>
        <br />
        Design and built by Frank Osoro.
        <br />
        &#169; Copyright 2023
    </center>
</div> );
}
 
export default Contacts;