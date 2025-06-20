import Image from "next/image";
import PageStructure from "./_components/PageStructure";

export default function Home() {
  const agents = [
    {
      image: "/otavio.jpeg",
      name: "Otávio Lupi",
    },
    {
      image: "/otavio.jpeg",
      name: "Giovana Lupi",
    },
  ];

  return (
    <PageStructure>
      <div>
        <div className="min-h-[350px] md:min-h-[640px] relative border-b-[#17171B] border-b-[46px]">
          <div className="absolute z-2 w-full h-full">
            <div className="md:w-[700px] 2xl:w-[1400px] h-full mx-auto my-0 flex flex-col gap-3 justify-end px-[24px] py-[72px]">
              <span className="text-white tag-highlight">Arquivo L</span>
              <span className="text-white text-4xl font-extrabold">
                Projeto de lançamento de foguete para lua
              </span>
            </div>
          </div>
          <div className="banner-gradient z-1 absolute w-full h-full"></div>
          <Image
            src="/ceb-1407.jpg"
            alt="Banner Nasa"
            width="1536"
            height="1024"
            className="absolute w-full h-full img-fit"
          />
        </div>
        <div className="w-[420px] flex-col md:w-[700px] lg:flex-row 2xl:w-[1400px] mx-auto my-0 flex gap-2 py-6">
          <div className="w-[100%] lg:w-[30%] xl:w-[21%]">
            <span className="text-black tag-highlight">Agentes na missão</span>
            <div className="flex flex-col gap-4 py-4">
              {agents.map((agent, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      width="40"
                      height="40"
                      className="rounded-full"
                    />
                    <span className="text-xl font-medium">{agent.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 h-full mx-auto my-0 flex flex-col gap-4">
            <p>
              Better understanding the lunar lighting environment will help NASA
              prepare astronauts for the harsh environment Artemis III
              Moonwalkers will experience on their mission. NASA’s Artemis III
              mission will build on earlier test flights and add new
              capabilities with the human landing system and advanced spacesuits
              to send the first astronauts to explore the lunar South Pole and
              prepare humanity to go to Mars. Using high-intensity lighting and
              low-fidelity mock-ups of a lunar lander, lunar surface, and lunar
              rocks, NASA engineers are simulating the Moon’s environment at the
              Flat Floor Facility to study and experience the extreme lighting
              condition. The facility is located at NASA’s Marshall Space Flight
              Center in Huntsville, Alabama.
            </p>
            <Image
              src="/ceb-1407.jpg"
              alt="Banner Nasa"
              width="1536"
              height="1024"
              className="w-full h-full img-fit"
            />
            <span className="text-[#58585b] text-xs">
              NASA engineers inside the Flat Floor Facility at Marshall Space
              Flight Center in Huntsville, Alabama, mimic lander inspection and
              assessment tasks future Artemis astronauts may do during Artemis
              III. Lights are positioned at a low angle to replicate the strong
              shadows that are cast across the lunar South Pole.
            </span>
            <p>
              “The goal is really to understand how shadows will affect lander
              visual inspection and assessment efforts throughout a future
              crewed mission,” said Emma Jaynes, test engineer at the facility.
              “Because the Flat Floor Facility is similar to an inverted air
              hockey table, NASA and our industry partners can rearrange large,
              heavy structures with ease – and inspect the shadows’ effects from
              multiple angles, helping to ensure mission success and astronaut
              safety for Artemis III.” Data and analysis from testing at NASA
              are improving models Artemis astronauts will use in preparation
              for lander and surface operations on the Moon during Artemis III.
              The testing also is helping cross-agency teams evaluate various
              tools astronauts may use. The 86-foot-long by 44-foot-wide
              facility at NASA is one of the largest, flattest, and most stable
              air-bearing floors in the world, allowing objects to move across
              the floor without friction on a cushion of air. Test teams use
              large, 12-kilowatt and 6-kilowatt lights to replicate the
              low-angle, high contrast conditions of the lunar South Pole. Large
              swaths of fabric are placed on top of the epoxy floor to imitate
              the reflective properties of lunar regolith. All the mock-ups are
              placed on air bearings, allowing engineers to easily move and
              situate structures on the floor.
            </p>
          </div>
        </div>
      </div>
    </PageStructure>
  );
}
