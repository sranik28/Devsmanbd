import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({project}) => {
    const {_id,name, description,image ,server_github_link, live_link, client_github_link} = project
    return (
    <article data-aos="fade-up" className="p-5 shadow-inner shadow-main rounded-xl">
       <div className="content">
            <figure className="h-[150px] w-full rounded-xl screen">
                 <Image fill={true} src={image} alt="" />
             </figure>
       </div>
    <div className="py-4 text-black">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="my-2">{description}</p>
      
        <div className="flex justify-between">
            <a href={live_link}><p className="flex flex-col items-center hover:text-main"><AiOutlineLink/> <span>Live Link</span></p></a>
            <a href={client_github_link}><p className="flex flex-col items-center hover:text-main"><AiFillGithub/> <span>Github Client</span></p></a>
            <a href={server_github_link}><p className="flex flex-col items-center hover:text-main"><AiFillGithub/> <span>Github Server</span></p></a>
        </div>
        <hr className="my-3"/>
        
        <div className="flex items-center justify-between mt-3">
            <Link className="flex items-center justify-between" href={`/our-projects/${_id}`}><BsArrowRightCircleFill className="ml-auto text-2xl "/></Link>
        </div>
    </div>
    </article> 
    );
};

export default ProjectCard;