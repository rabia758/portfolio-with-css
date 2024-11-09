import Image from "next/image"
import { userinfo } from "@/constant/constant"
import about from "../../image/about.png"
import Link from "next/link"


export default function About() {
    return (
        <section id="About" className="about">

            <div className="left">
                <h1 className="h1-about">About <span>Me!</span></h1>
                <h2 className="h2-about">Frontened <span>Developer!</span></h2>
                <p className="p-about">
                    I’m <span>{userinfo.name}</span>, a frontend developer with a deep passion
                     for creating dynamic
                    and intuitive web experiences. <br /> With a robust skill set in HTML, CSS, TypeScript,
                    and Node.js, I specialize in turning complex ideas into seamless,<br /> user-friendly
                    applications. <br />
                    From the early days of dabbling in simple HTML and CSS to now working on
                    sophisticated web applications ,<br /> my journey in web development has been driven by
                    a fascination with how technology and design intersect to solve real-world problems. <br />
                    I’ve continuously honed my skills to stay <br /> ahead of industry trends and deliver
                    high-quality, impactful solutions.

                </p>
                <Link href={"/assests/mycv.pdf"}>
                    <button className="btn">Download CV</button>
                </Link>

            </div>
            <div>
                <Image
                    src={about}
                    alt="pic"
                    height={650}
                    width={650}
                    className="img"
                >
                </Image>

            </div>




        </section>

    )
}