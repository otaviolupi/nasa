import PageStructure from "@/app/_components/PageStructure";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const agents = [
    {
      id: "aP7dX9qL",
      agent: "01",
      name: "Otávio Lupi",
      birth: "22/04/2025",
      location: "Brazil",
      title:
        "Especialista em Operações Táticas e Inteligência Científica – Divisão de Exploração Exoplanetária (DEE/NASA)",
      photo: "/otavio.jpeg",
      description:
        "Agente designado para missões de alta complexidade envolvendo detecção e análise de vida inteligente fora da Terra. Com formação avançada em astrobiologia, engenharia orbital e protocolos de contenção, atua na interseção entre ciência de ponta e operações estratégicas. Possui treinamento intensivo em ambientes extremos – incluindo simulações em gravidade zero, zonas de radiação e atmosferas hostis. Responsável por conduzir investigações em campo, interpretar dados de origem desconhecida e coordenar respostas rápidas a eventos classificados como anomalias de origem não terrestre. Atua também como elo entre equipes científicas e unidades táticas, traduzindo informações técnicas em decisões operacionais em tempo real.",
      skills: [
        "Análise espectral e interceptação de sinais interestelares",
        "Contenção e estudo de organismos desconhecidos",
        "Operações táticas em ambientes de gravidade variável",
        "Criptografia avançada e engenharia reversa de artefatos",
        "Navegação e pilotagem de veículos autônomos em missões orbitais",
        "Gestão de crises e protocolos de primeiro contato interplanetário",
      ],
    },
    {
      id: "Z8mK2rTb",
      agent: "02",
      name: "Giovana Borges Cirineo",
      birth: "09/09/2001",
      location: "Brazil",
      title:
        "Especialista em Operações Táticas e Inteligência Científica – Divisão de Exploração Exoplanetária (DEE/NASA)",
      photo: "/otavio.jpeg",
      description:
        "Agente designado para missões de alta complexidade envolvendo detecção e análise de vida inteligente fora da Terra. Com formação avançada em astrobiologia, engenharia orbital e protocolos de contenção, atua na interseção entre ciência de ponta e operações estratégicas. Possui treinamento intensivo em ambientes extremos – incluindo simulações em gravidade zero, zonas de radiação e atmosferas hostis. Responsável por conduzir investigações em campo, interpretar dados de origem desconhecida e coordenar respostas rápidas a eventos classificados como anomalias de origem não terrestre. Atua também como elo entre equipes científicas e unidades táticas, traduzindo informações técnicas em decisões operacionais em tempo real.",
      skills: [
        "Análise espectral e interceptação de sinais interestelares",
        "Contenção e estudo de organismos desconhecidos",
        "Operações táticas em ambientes de gravidade variável",
        "Criptografia avançada e engenharia reversa de artefatos",
        "Navegação e pilotagem de veículos autônomos em missões orbitais",
        "Gestão de crises e protocolos de primeiro contato interplanetário",
      ],
    },
    {
      id: "xY3cNv0W",
      agent: "07",
      name: "Lorenzo Borges Cirineo",
      birth: "05/07/2013",
      location: "Brazil",
      title:
        "Especialista em Operações Táticas e Inteligência Científica – Divisão de Exploração Exoplanetária (DEE/NASA)",
      photo: "/otavio.jpeg",
      description:
        "Agente designado para missões de alta complexidade envolvendo detecção e análise de vida inteligente fora da Terra. Com formação avançada em astrobiologia, engenharia orbital e protocolos de contenção, atua na interseção entre ciência de ponta e operações estratégicas. Possui treinamento intensivo em ambientes extremos – incluindo simulações em gravidade zero, zonas de radiação e atmosferas hostis. Responsável por conduzir investigações em campo, interpretar dados de origem desconhecida e coordenar respostas rápidas a eventos classificados como anomalias de origem não terrestre. Atua também como elo entre equipes científicas e unidades táticas, traduzindo informações técnicas em decisões operacionais em tempo real.",
      skills: [
        "Análise espectral e interceptação de sinais interestelares",
        "Contenção e estudo de organismos desconhecidos",
        "Operações táticas em ambientes de gravidade variável",
        "Criptografia avançada e engenharia reversa de artefatos",
        "Navegação e pilotagem de veículos autônomos em missões orbitais",
        "Gestão de crises e protocolos de primeiro contato interplanetário",
      ],
    },
    {
      id: "Qw7LpV1z",
      agent: "05",
      name: "Renata Borges Cirineo",
      birth: "03/09/1982",
      location: "Brazil",
      title:
        "Especialista em Operações Táticas e Inteligência Científica – Divisão de Exploração Exoplanetária (DEE/NASA)",
      photo: "/otavio.jpeg",
      description:
        "Agente designado para missões de alta complexidade envolvendo detecção e análise de vida inteligente fora da Terra. Com formação avançada em astrobiologia, engenharia orbital e protocolos de contenção, atua na interseção entre ciência de ponta e operações estratégicas. Possui treinamento intensivo em ambientes extremos – incluindo simulações em gravidade zero, zonas de radiação e atmosferas hostis. Responsável por conduzir investigações em campo, interpretar dados de origem desconhecida e coordenar respostas rápidas a eventos classificados como anomalias de origem não terrestre. Atua também como elo entre equipes científicas e unidades táticas, traduzindo informações técnicas em decisões operacionais em tempo real.",
      skills: [
        "Análise espectral e interceptação de sinais interestelares",
        "Contenção e estudo de organismos desconhecidos",
        "Operações táticas em ambientes de gravidade variável",
        "Criptografia avançada e engenharia reversa de artefatos",
        "Navegação e pilotagem de veículos autônomos em missões orbitais",
        "Gestão de crises e protocolos de primeiro contato interplanetário",
      ],
    },
    {
      id: "bD4eHg6M",
      agent: "09",
      name: "Luciano Borges Cirineo",
      birth: "28/11/1980",
      location: "Brazil",
      title:
        "Especialista em Operações Táticas e Inteligência Científica – Divisão de Exploração Exoplanetária (DEE/NASA)",
      photo: "/otavio.jpeg",
      description:
        "Agente designado para missões de alta complexidade envolvendo detecção e análise de vida inteligente fora da Terra. Com formação avançada em astrobiologia, engenharia orbital e protocolos de contenção, atua na interseção entre ciência de ponta e operações estratégicas. Possui treinamento intensivo em ambientes extremos – incluindo simulações em gravidade zero, zonas de radiação e atmosferas hostis. Responsável por conduzir investigações em campo, interpretar dados de origem desconhecida e coordenar respostas rápidas a eventos classificados como anomalias de origem não terrestre. Atua também como elo entre equipes científicas e unidades táticas, traduzindo informações técnicas em decisões operacionais em tempo real.",
      skills: [
        "Análise espectral e interceptação de sinais interestelares",
        "Contenção e estudo de organismos desconhecidos",
        "Operações táticas em ambientes de gravidade variável",
        "Criptografia avançada e engenharia reversa de artefatos",
        "Navegação e pilotagem de veículos autônomos em missões orbitais",
        "Gestão de crises e protocolos de primeiro contato interplanetário",
      ],
    },
  ];
  const { id } = await params;
  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    return (
      <PageStructure>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center p-4">
          <div className="bg-white shadow-md p-6 rounded">
            <h1 className="text-2xl font-bold text-red-600">
              Agente não encontrado
            </h1>
            <p className="mt-2 text-gray-600">Verifique o ID fornecido.</p>
          </div>
        </div>
      </PageStructure>
    );
  }

  return (
    <PageStructure>
      <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
          <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">
            <Image
              src={agent.photo}
              alt={agent.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-gray-500">Agente #{agent.agent}</p>
              <h1 className="text-3xl font-bold">{agent.name}</h1>
              <p>Data de Nascimento: {agent.birth}</p>
              <p>Nacionalidade: {agent.location}</p>
              <p className="mt-2 text-lg text-gray-700 font-medium">
                {agent.title}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Descrição</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              {agent.description}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Habilidades</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              {agent.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-green-500 text-white text-center py-3 rounded">
            <span className="text-lg font-semibold">Autorizado</span>
          </div>
        </div>
      </div>
    </PageStructure>
  );
}
