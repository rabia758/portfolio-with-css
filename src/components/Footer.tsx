import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="footer">
          <div >
            <a className="heading">
              <span>Rabia Rizwan</span>
            </a>
            <p className="p">
              © 2023 Rabia Rizwan —
              <a
                href="http://localhost:3000/"
                className="text-black ml-1"
  
                rel="noopener noreferrer"
                target="_blank"
              >
                @Portfolio
              </a>
            </p>
            </div>
            <div className='footeritem'>
            <span className="  md:flex md:justify-center sm:ml-auto sm:mt-0 mt-4 sm:justify-start">
              <Link className=" ml-3 text-gray-700  transition ease-in-out delay-200 hover:translate-y-1 hover:scale-110 duration-300 rounded-full"
                href='https://www.facebook.com/rabia.rizwan123'>
  
                <FaFacebook className='h-8 w-8' />
              </Link>
  
              <Link className="ml-3 text-gray-700  transition ease-in-out delay-200 hover:translate-y-1 hover:scale-110 duration-300 rounded-full"
                href='https://www.linkedin.com/in/rabia-rizwan-5bb82a301/'>
                <FaLinkedin className='h-8 w-8' />
              </Link>
  
              <Link className="ml-3 text-gray-700  transition ease-in-out delay-200 hover:translate-y-1 hover:scale-110 duration-300 rounded-full"
                href='https://github.com/rabia758'>
                <FaGithub className='h-8 w-8 ' />
              </Link>
  
            </span>
            </div>
      
        </footer>
    )
}