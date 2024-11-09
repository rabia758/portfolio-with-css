import Image from "next/image"
import hero from "../../image/hero.jpeg"
import { userinfo } from "@/constant/constant"

export default function Hero(){
    return(
        <section  className="hero">
            <div>
                <Image
                  src={hero}
                  alt="pic"
                  height={450}
                  width={450}
                  className="img"
                >
                </Image>  

            </div>
            <div className="right">
              <h1 className="h1">Frontened Developer</h1>
              <h1 className="h2"> Hi I'm <span>{userinfo.name}</span></h1>
              <p className="p">I am Learning Artificial Intelligence ,
                Metaverse And web3.0 In Governour House Karachi.
                .I have completed Command In nextjs, HTML, CSS, TypeScript, And  JavaScript.. </p>
                <button type="submit" className="btn">Hire Me</button>

            </div>

        </section>

    )
}