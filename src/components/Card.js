import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Card = ({title, description, github, link, languages}) => {

    return ( 
        <div class=" max-w-sm rounded overflow-hidden shadow-lg bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-200  duration-300 ...">
            <div class="px-6 py-4">
                <div class="flex justify-center font-sans font-bold text-xl mb-2 text-blue-500 ">{title}</div>
                <p class="flex justify-center text-slate-500 hover:text-black text-sm ">
                {description}
                </p>
            </div>

            <div class="flex justify-center gap-4">
                <a href={github}><GitHubIcon /></a>
                {
                    link === "#" ? <div></div> : <a href={link}><LaunchIcon /></a>
                }
                
                
            </div>

            <div class="px-6 pt-4 pb-2">
                {
                    languages.map(language =>(
                        <span class="inline-block px-3 py-1 text-sm font-mono font-semibold text-slate-600 mr-2 mb-2">{language}</span>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Card;
