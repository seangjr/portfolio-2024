import messenger from "../../../../public/assets/messenger-app.webp";
import nft from "../../../../public/assets/nft.webp";
import spotify from "../../../../public/assets/spotify.webp";
import thoth from "../../../../public/assets/thoth.webp";
import go from "../../../../public/assets/go.webp";
import Projects from "../projects";

export default function Works({
  forwardedRef,
}: {
  forwardedRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://messenger.seangjr.tech/"
            img={messenger}
            alt="Messenger app website mockup"
            name="messenger clone app"
            type="Full Stack Development"
            year="2023"
            tools="Next.js • Prisma • Pusher"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://nft.seangjr.tech/"
            img={nft}
            alt="NFT drop site mockup"
            name="nft drop app"
            type="Web3"
            year="2022"
            tools="Next.js • Thirdweb • Sanity"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://spotify.seangjr.tech/"
            img={spotify}
            alt="spotify web player project mockup"
            name="spotify web player app"
            type="Frontend Development"
            year="2021"
            tools="Next.js • TailwindCSS • Spotify API"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://github.com/seangjr/thoth"
            img={thoth}
            alt="Thoth mockup"
            name="Thoth Web Forum"
            type="Full Stack Development"
            year="2022"
            tools="React • Express • PlanetScale DB"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://github.com/seangjr/gofiber-server-example"
            img={go}
            alt="golang server mockup"
            name="Golang Backend Server"
            type="Backend Development"
            year="2024"
            tools="Go"
          />
        </div>
      </div>
    </section>
  );
}
