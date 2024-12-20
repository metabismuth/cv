import Link from "next/link";
import { IconBrandLinkedin, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { formatDateCustom } from "@/utils/formatDateCustom";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Project from "@/components/Project";

const today = new Date();

export default function Home() {
  return (
    <div className="
      flex flex-col
      min-h-screen
    ">
      <header className="bg-yellow-300 py-4 sticky top-0 z-10">
        <div className="base-container flex flex-col gap-4">
          <h1 className="text-xl font-bold">Daniel Conceição</h1>
          <div className="flex gap-4 flex-wrap">
            <div className="flex gap-1"><IconMapPin /> Haarlem, NL</div>
            <div className="flex gap-1"><Link className="contents" href={"mailto:daniel.padez@gmail.com"}><IconMail /> daniel.padez@gmail.com</Link></div>
            <div className="flex gap-1"><Link className="contents" href={"tel:+31627131863/"}><IconPhone /> +31 0627131863</Link></div>
            <div className="flex gap-1"><Link className="contents" href={"https://www.linkedin.com/in/metabismuth/"}><IconBrandLinkedin /> metabismuth</Link></div>
          </div>
        </div>
      </header>
      <div className="base-container flex flex-col gap-4 mt-4">
        <div id="location">
          <h2 className="text-lg font-bold">Location</h2>
          <p>I currently live in the Netherlands.</p>
          <p>I&apos;m able to work in the EU, Canada, and the UK. Relocation is possible.</p>
        </div>
        <div id="work">
          <h2 className="text-lg font-bold">Work Experience</h2>
          <div className="flex flex-col gap-4 mt-4">
            <WorkExperience
              title="Software Developer"
              companyName="Bullhorn"
              companyLink="https://www.linkedin.com/company/bullhorn/"
              companyIcon="bullhorn.jpg"
              date="April 2024 - Present"
              companyTags={["B2B", "Scripting", "Data Mining"]}
              techTags={["Python 2/3", "HTML/CSS", "Javascript", "Bash"]}
              companyDesc="International cloud computing company specializing in staffing software"
              bullets={[
                "I continued the work I was doing at Textkernel after the acquisition by Bullhorn."
              ]}
              className="-mb-2"
            />
            <WorkExperience
              title="Software Developer"
              companyName="Textkernel"
              companyLink="https://www.linkedin.com/company/textkernel/"
              companyIcon="textkernel.jpg"
              bullets={[
                "I wrote, fixed, and maintained hundreds of web-scraping scripts",
                "I also managed the shared database which served as a catalogue for these scripts",
                <>
                  Textkernel was acquired by
                  <a
                    href="https://www.bullhorn.com/blog/bullhorn-acquires-textkernel-to-accelerate-its-ai-strategy/"
                    target="_blank"
                    className="inline-flex gap-1 px-1 align-bottom"
                  >
                    <img
                      src={"./assets/companyIcons/bullhorn.jpg"}
                      alt={"Bullhorn"}
                      className="inline-block print:hidden h-4 my-auto"
                    />
                    Bullhorn
                  </a>
                  June 18th, 2024.
                </>
              ]}
            />
            <WorkExperience
              title="Web Developer"
              companyName="Skrey"
              companyLink="https://www.linkedin.com/company/skrey-software"
              companyIcon="skrey.jpg"
              date="Jan 2023 - Feb 2024"
              companyDesc="eCommerce/general website development company"
              companyTags={["B2B", "eCommerce", "Frontend"]}
              techTags={["Next.js", "Figma", "Tailwind", "Strapi"]}
              bullets={[
                "Translated designs from Figma to full-fledged websites",
                "Worked with Next.js' pages and app routers, as well as with static exports",
                "Acquired hands-on experience with Git, Strapi CMS, SASS, and Tailwind CSS"
              ]}
            />
            <WorkExperience
              title="OutSystems Developer"
              companyName="Bool"
              companyLink="https://www.linkedin.com/company/bool/"
              companyIcon="bool.jpg"
              date="Sep 2021 - Dec 2022"
              companyDesc="OutSystems consultancy based in Portugal"
              companyTags={["B2B", "Enterprise"]}
              techTags={["OutSystems", "HTML/CSS", "Javascript"]}
              bullets={[
                "Worked in OutSystems, a low code development platform",
                "Consulted for several large projects, where I was in charge of both UI/UX and backoffice development",
                <>
                  Earned <span
                    className="underline decoration-dotted cursor-help print:no-underline"
                    title="Associate Reactive Developer, Associate Traditional Web Developer, Mobile Developer Specialist"
                  >three OutSystems certifications</span> during my tenure
                </>
              ]}
            />
          </div>
        </div>
        <div id="education">
          <h2 className="text-lg font-bold">Education</h2>
          <div className="flex flex-col gap-4 mt-4">
            <Education
              title="Academia de Código"
              subtitle="Full-Stack Java & Javascript Programming Bootcamp"
              date="May - Sep 2021"
              tags={["Java", "Design Patterns", "Javascript", "Typescript"]}
            />
            <Education
              title="EDDisrupt"
              subtitle="Full-Stack JavaScript Developer Certification"
              date="Sep 2018 - Apr 2019"
              tags={["Javascript", "React", "Node.js", "HTML/CSS"]}
            />
            <Education
              title="Cambridge English"
              subtitle="Cambridge English C2 Certification (Level 3 in ESOL International)"
              date="Jul 2018"
            />
            <Education
              title="Colégio do Castanheiro"
              subtitle="High School Diploma - Science"
              date="Jul 2017"
            />
          </div>
        </div>
        {/* <div id="projects">
          <h2 className="text-lg font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-4">
            <Project
              title="3D Relationship mapper"
              date="2021"
              description="SPA that allows you to map relationships between people or concepts using a three.js-powered 3d force graph."
            />
            <Project
              title="Xanadu Chat"
              date="2021"
              description="Vanilla netcat (nc) compatible chatroom server written in Java, with basic chat commands"
            />
            <Project
              title="MapEditor"
              date="2021"
              description="2D grid with black/white cells editor with single save slot and a Game of Life simulation step"
            />
            <Project
              title="Streamer website"
              date="2021"
              description="I made a website for a streamer/musician to host links to their music and Twitch channel. It has procedurally placed fake ads and a button that plays a funny sound and tracks how many times you've pressed it using browser storage."
            />
            <Project
              title="Webcomic project"
              date="2020 - 2021"
              description="Project developed with friends. Jekyll with a lot of Liquid filters and custom plugins"
            />
            <Project
              title="Discord bots"
              date="2020 - Present"
              description="I've developed & hosted discord bots for use by me and some friends."
            />
            <Project
              title="newtabtext"
              date="2019"
              description="WebExtensions extension that adds a simple text editor to your new tab page. I still use it on a daily basis."
            />
            <Project
              title="colorgame"
              date="2018"
              description="SPA game where you guess which color corresponds to a given RGB value"
            />
            <Project
              title="Image gallery SPA"
              date="2018"
              description="SPA image gallery with (fake) user signup/login, a subscription system, and a search input that filters users and text"
            />
            <Project
              title="Personal Website"
              date="2015 - Present"
              description="I keep a personal website, which includes a blog. I've changed the visuals and tech stack many times."
            />
            <Project
              title="CanSat 2015"
              date="2015"
              description="Participated in CanSat 2015 in the Azores. I was in charge of programming on Arduino."
            />
          </div>
        </div> */}
        <div id="skills">
          <h2 className="text-lg font-bold">Skills</h2>
          <div className="flex flex-col gap-2 mt-4">
            <div>
              <h3 className="font-semibold">Languages</h3>
              <div>English (C2), Portuguese (native)</div>
            </div>
            <div>
              <h3 className="font-semibold">Soft Skills</h3>
              <div><span className="font-medium">Mediation, Administration, Empathy</span>: I&apos;ve managed a small online community since 2019. I put on weekly events and I ensure everyone gets along.</div>
              <div><span className="font-medium">Time Management, Communication, Teamwork</span>: I worked at a beach bar for 3 summers (2016-19). I served cold drinks and ice cream, managed inventory, stocked shelves, cleaned, and finally welcomed locals and tourists to the beach.</div>
            </div>
            <div>
              <h3 className="font-semibold">Main tech skills</h3>
              <div>Python (2.x, 3.x), Bash</div>
              <div>Typescript, Javascript</div>
              <div>Next.js, React, SASS, Tailwind</div>
            </div>
            <div>
              <h3 className="font-semibold">Proficiency with development tools</h3>
              <div>Git, VS Code, Neovim, Visual Studio, IntelliJ IDEA, Firefox Devtools, Postman</div>
            </div>
            <div>
              <h3 className="font-semibold">Enthusiasm for web technologies</h3>
              <div><span className="font-medium">Foundational</span>: HTML/CSS, Javascript (ES3 - ES2024), Typescript, Node.js</div>
              <div><span className="font-medium">CSS Preprocessors</span>: SASS/SCSS, LESS</div>
              <div><span className="font-medium">Package managers, bundlers</span>: npm, yarn, Webpack, Rollup</div>
              <div><span className="font-medium">Frameworks</span>: Next.js, Vue, Angular, Svelte</div>
              <div><span className="font-medium">Libraries</span>: Lodash, Three.js, Moment.js, GSAP, Framer, Express.js, EJS</div>
              <div><span className="font-medium">Miscellaneous</span>: XHTML, XML/XSLT, Opengraph/SEO, SVG</div>
            </div>
            <div>
              <h3 className="font-semibold">Wide range of experience handling different programming languages, frameworks, systems, software, and internet services</h3>
              <div><span className="font-medium">Languages</span>: Java, Python, Ruby, C, OutSystems 10/11, Visual Basic</div>
              <div><span className="font-medium">Tools</span>: SSH, S/FTP, RegExp, Github Actions, Gitlab CI/CD, Apache2, Caddy, nginx, Github+Gitlab Pages, DNS, systemd, cron</div>
              <div><span className="font-medium">Databases</span>: SQL (MySQL, MariaDB), MongoDB</div>
              <div><span className="font-medium">Writing</span>: MS Office Excel, Word, etc., LibreOffice, Google Docs/Sheets/Slides, etc.</div>
              <div><span className="font-medium">OSes</span>: Windows, Linux (K/L/Ubuntu, Rpi), macOS</div>
              <div><span className="font-medium">A/V</span>: VEGAS Pro, Paint.NET, Adobe Photoshop & Illustrator, Krita, Blender, OBS Studio</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="
        base-container mt-20 mb-20
        flex flex-col gap-1 items-center
        text-sm opacity-50
        print:my-4
      ">
        <div><span className="print:hidden">Last updated </span>{formatDateCustom(today)}</div>
        <div className="print:hidden">
          <a href="mailto:daniel.padez@gmail.com">Hire me!</a>
        </div>
        <div className="hidden print:block text-center">
          An updated version of this document is available at<br />
          <Link href={"https://metabismuth.github.io/cv"}>https://metabismuth.github.io/cv</Link>
        </div>
      </footer>
    </div>
  );
}
