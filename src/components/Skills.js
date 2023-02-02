import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const Skills = () => {
    return ( 
        <div class="pt-5 md:pt-5">
                <h2 class="text-black text-2xl md:text-4xl font-sans font-semibold pt-1 md:pt-1">Technologies</h2>
                <h3 class="text-black font-mono pt-5">Here are a few technologies I've been working with recently:</h3>

                <div class="flex overflow-hidden bg-slate-200 rounded-lg mt-4 w-full">
                    <ul class="p-2 font-mono md:p-6">
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Javascript (ES 6 +)</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> React</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Node.js</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Express.js</li>
                        <li class="visible md:invisible flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Social Engineering</li>
                    </ul>
                    <ul class="p-2 font-mono md:pt-6 md:pl-4">
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Python</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Flask</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> MySQL</li>
                        <li class="visible md:invisible flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> WebApp Testing </li>
                        <li class="visible md:invisible flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Offensive pentesting</li>
                    </ul>
                    <ul class="invisible md:visible p-2 font-mono md:pt-6 md:pr-0">
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> WebApp Testing </li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Offensive pentesting</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Social Engineering</li>
                    </ul>
                </div>
        
        </div>
     );
}
 
export default Skills;