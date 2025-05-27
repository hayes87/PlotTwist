const databaseMedium = [
    {
        id: 1,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Pulp Fiction',
        clues: [
            'Foi dirigido por Quentin Tarantino',
            'Lançado em 1994, tem uma estrutura narrativa não-linear',
            'Ganhou a Palma de Ouro no Festival de Cannes',
            'Uma cena famosa mostra dois personagens dançando o twist',
            'Uma maleta misteriosa é um elemento importante da trama',
            'John Travolta e Samuel L. Jackson interpretam dois criminosos',
            'Uma overdose é tratada com uma injeção de adrenalina diretamente no coração',
            'Contém uma cena icônica de dois personagens discutindo sobre hambúrgueres',
            'O personagem de Bruce Willis é um boxeador que se recusa a perder uma luta',
            'A expressão "Royale with cheese" se tornou icônica'
        ],
        alternatives: ['Pulp Fiction: Tempo de Violência', 'Tempos de Violência']
    },
    {
        id: 2,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Silêncio dos Inocentes',
        clues: [
            'Filme de suspense psicológico lançado em 1991',
            'A protagonista é uma agente do FBI em treinamento',
            'Ganhou os cinco principais prêmios do Oscar',
            'Um assassino em série conhecido como "Buffalo Bill" sequestra mulheres',
            'Para resolver o caso, a protagonista consulta um psiquiatra preso',
            'O psiquiatra é conhecido por canibalismo',
            'Jodie Foster interpreta a agente Clarice Starling',
            'Anthony Hopkins interpreta o Dr. Hannibal Lecter',
            'Contém a famosa frase "Hello, Clarice"',
            'O assassino mantém suas vítimas em um poço e está fabricando um "traje" com pele humana'
        ],
        alternatives: ['The Silence of the Lambs', 'Silêncio dos Inocentes']
    },
    {
        id: 3,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'The Office',
        clues: [
            'Série de comédia no formato de pseudo-documentário',
            'Se passa em uma empresa de papel em Scranton, Pensilvânia',
            'Foi adaptada de uma série britânica homônima',
            'O gerente regional é conhecido por seu senso de humor inapropriado',
            'Dwight Schrute é o assistente do gerente regional (ou assistente para o gerente regional)',
            'Jim e Pam têm um relacionamento romântico que se desenvolve ao longo da série',
            'Michael Scott é o nome do gerente interpretado por Steve Carell',
            'A empresa onde trabalham se chama Dunder Mifflin',
            'Contém entrevistas individuais conhecidas como "talking heads"',
            'Terminou após 9 temporadas, com Steve Carell saindo na 7ª'
        ],
        alternatives: ['The Office US', 'The Office (US)', 'Escritório']
    },
    {
        id: 4,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Christopher Nolan',
        clues: [
            'Diretor e roteirista britânico-americano',
            'Conhecido por filmes com narrativas não-lineares e complexas',
            'Dirigiu uma trilogia de filmes sobre um super-herói',
            'Seu filme "Inception" envolve sonhos dentro de sonhos',
            'Frequentemente trabalha com o ator Michael Caine',
            'Dirigiu "Interestelar", um filme sobre viagem espacial e buracos negros',
            'É conhecido pelo uso de efeitos práticos em vez de CGI quando possível',
            'Dirigiu "Dunkirk", um filme sobre a Segunda Guerra Mundial',
            'Sua trilogia de Batman começou com "Batman Begins"',
            'Dirigiu "Memento", um filme contado em ordem cronológica reversa'
        ],
        alternatives: ['Chris Nolan', 'Christopher Edward Nolan']
    },
    {
        id: 5,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Black Mirror',
        clues: [
            'Série britânica de ficção científica e terror psicológico',
            'Cada episódio tem uma história independente',
            'Explora temas relacionados à tecnologia moderna e suas consequências',
            'Foi criada por Charlie Brooker',
            'Começou no Channel 4 e depois foi adquirida pela Netflix',
            'O título se refere às telas pretas dos dispositivos eletrônicos',
            'Um dos episódios mais conhecidos é "San Junipero", que ganhou dois prêmios Emmy',
            'O episódio "Bandersnatch" é interativo, permitindo que o espectador escolha o rumo da história',
            'O episódio "Nosedive" mostra uma sociedade onde as pessoas são avaliadas por aplicativos',
            'A série geralmente apresenta um futuro distópico e perturbador'
        ],
        alternatives: ['Black Mirror']
    },
    {
        id: 6,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Matrix',
        clues: [
            'Filme de ficção científica lançado em 1999',
            'Dirigido pelas irmãs Wachowski',
            'Protagonizado por Keanu Reeves',
            'A premissa envolve um mundo simulado por computador',
            'O protagonista é oferecido a escolha entre duas pílulas coloridas',
            'Tornou-se famoso pelo efeito visual chamado "bullet time"',
            'Contém referências filosóficas, como a Alegoria da Caverna de Platão',
            'Morpheus é o líder de um grupo de rebeldes',
            'O personagem principal é conhecido como "O Escolhido"',
            'Neo, Trinity e Morpheus lutam contra os Agentes, como o Agente Smith'
        ],
        alternatives: ['The Matrix', 'A Matrix']
    },
    {
        id: 7,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Quentin Tarantino',
        clues: [
            'Diretor, roteirista e ator americano',
            'Conhecido por seus diálogos elaborados e referências à cultura pop',
            'Seus filmes frequentemente apresentam violência estilizada',
            'Ganhou o Oscar de Melhor Roteiro Original duas vezes',
            'Dirigiu "Kill Bill", um filme dividido em dois volumes',
            'Trabalhou como balconista de videolocadora antes de se tornar diretor',
            'Frequentemente inclui planos de pés em seus filmes',
            'Dirigiu "Django Livre" e "Os Oito Odiados"',
            'Conhecido por criar universos conectados entre seus filmes',
            'Seu filme de estreia foi "Cães de Aluguel"'
        ],
        alternatives: ['Quentin Jerome Tarantino']
    },
    {
        id: 8,
        type: 'OBJETO',
        icon: 'fas fa-cube',
        answer: 'Delorean',
        clues: [
            'Aparece em uma famosa trilogia de filmes',
            'É um automóvel usado como máquina do tempo',
            'Foi fabricado pela DMC na vida real',
            'Tem portas que abrem para cima, em estilo "asa de gaivota"',
            'Precisa atingir 88 milhas por hora para viajar no tempo',
            'Utiliza um "capacitor de fluxo" como componente essencial',
            'No filme, é alimentado por plutônio e depois por lixo orgânico',
            'É o veículo usado por Marty McFly e Doc Brown',
            'Aparece nos filmes "De Volta Para o Futuro"',
            'A placa de licença do veículo é "OUTATIME"'
        ],
        alternatives: ['DeLorean DMC-12', 'DMC DeLorean', 'Máquina do Tempo', 'Carro do De Volta Para o Futuro']
    },
    {
        id: 9,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Clube da Luta',
        clues: [
            'Baseado em um romance de Chuck Palahniuk',
            'Dirigido por David Fincher e lançado em 1999',
            'O protagonista sofre de insônia e frequenta grupos de apoio',
            'Envolve uma organização secreta que organiza combates físicos',
            'Edward Norton e Brad Pitt são os protagonistas',
            'Uma das regras centrais é "não falar sobre" a organização titular',
            'O personagem de Brad Pitt se chama Tyler Durden',
            'Contém uma grande reviravolta no final sobre a identidade de um personagem',
            'Critica o consumismo e a masculinidade moderna',
            'A frase "A primeira regra do XXXX é: não se fala sobre o XXXX" tornou-se icônica'
        ],
        alternatives: ['Fight Club', 'O Clube da Luta']
    },
    {
        id: 10,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Lost',
        clues: [
            'Série americana exibida entre 2004 e 2010',
            'Criada por J.J. Abrams, Damon Lindelof e Jeffrey Lieber',
            'Um dos mistérios envolve uma sequência de números que aparece repetidamente',
            'O final da série foi controverso entre os fãs',
            'Tem personagens como Jack Shephard, Kate Austen e John Locke',
            'Apresenta flashbacks e posteriormente flashforwards dos personagens',
            'A premissa começa com um acidente de avião em uma ilha misteriosa',
            'Contém elementos sobrenaturais e científicos, como viagem no tempo',
            'A Dharma Initiative é uma organização de pesquisa importante na trama',
            'Um urso polar aparece misteriosamente na ilha tropical',
        ],
        alternatives: ['Lost - Perdidos', 'Perdidos']
    },
    {
        id: 11,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Donnie Darko',
        clues: [
            'Filme de culto independente de 2001',
            'Mistura drama psicológico com ficção científica',
            'O protagonista é visitado por uma figura em traje de coelho',
            'Aborda temas de viagem no tempo e realidades paralelas',
            'Dirigido por Richard Kelly',
            'Jake Gyllenhaal interpreta o protagonista',
            'A música "Mad World" se tornou famosa por causa do filme',
            'Tem uma sequência menos conhecida chamada "S. Darko"',
            'Se passa em uma cidade suburbana americana nos anos 80',
            'Termina com um evento paradoxal envolvendo um avião'
        ],
        alternatives: ['Donnie Darko']
    },
    {
        id: 12,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Dark',
        clues: [
            'Série alemã de ficção científica da Netflix',
            'A trama envolve viagem no tempo e paradoxos',
            'Se passa na cidade fictícia de Winden',
            'Tem três temporadas interconectadas',
            'A história abrange múltiplas gerações de quatro famílias',
            'Um acidente em uma usina nuclear é central para a trama',
            'Apresenta versões diferentes dos personagens em várias idades',
            'A frase "O início é o fim e o fim é o início" é recorrente',
            'Explora conceitos de determinismo e livre arbítrio',
            'Terminou em 2020 com sua terceira temporada'
        ],
        alternatives: ['Dark']
    },
    {
        id: 13,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Trainspotting',
        clues: [
            'Filme britânico de 1996 dirigido por Danny Boyle',
            'Baseado no romance de Irvine Welsh',
            'Retrata um grupo de viciados em heroína em Edimburgo',
            'Ewan McGregor interpreta o protagonista Mark Renton',
            'Tem um famoso monólogo sobre "escolher a vida"',
            'A música "Born Slippy" do Underworld é tema do filme',
            'Ganhou uma sequência 20 anos depois',
            'O bebê no teto é uma cena memorável',
            'O personagem Begbie é conhecido por sua violência',
            'Sick Boy é obcecado por Sean Connery'
        ],
        alternatives: ['Trainspotting: Sem Limites']
    },
    {
        id: 14,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Mr. Robot',
        clues: [
            'Série sobre um programador/hacker com problemas mentais',
            'O protagonista trabalha em segurança cibernética',
            'Envolve um grupo de hackers chamado fsociety',
            'Rami Malek interpreta o personagem principal',
            'O personagem principal tem transtorno de personalidade',
            'Evil Corp é a principal antagonista corporativa',
            'Usa termos técnicos de computação com precisão',
            'O protagonista se chama Elliot Alderson',
            'Christian Slater interpreta Mr. Robot',
            'Terminou após 4 temporadas'
        ],
        alternatives: ['Mr Robot']
    },
    {
        id: 15,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Charlie Kaufman',
        clues: [
            'Roteirista e diretor americano conhecido por filmes surreais',
            'Escreveu "Quero Ser John Malkovich"',
            'Ganhou o Oscar por "Brilho Eterno de uma Mente sem Lembranças"',
            'Dirigiu "Sinédoque, Nova York"',
            'Seus roteiros frequentemente quebram a quarta parede',
            'Trabalha com temas de identidade e existencialismo',
            'Adaptou "As Orquídeas Selvagens" para o cinema',
            'Dirigiu "Anomalisa" usando animação stop-motion',
            'Seu filme "Estou Pensando em Acabar com Tudo"',
            'Conhecido por narrativas complexas e meta-referências'
        ],
        alternatives: ['Charles Stuart Kaufman']
    },
    {
        id: 16,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Blade Runner',
        clues: [
            'Filme neo-noir de ficção científica de 1982',
            'Dirigido por Ridley Scott',
            'Harrison Ford interpreta um caçador de andróides',
            'Baseado em um livro de Philip K. Dick',
            'Se passa em Los Angeles em 2019',
            'Os andróides são chamados de replicantes',
            'Rutger Hauer interpreta Roy Batty',
            'Famoso por seu visual cyberpunk',
            'O monólogo "Tears in Rain" é icônico',
            'Teve uma sequência em 2017'
        ],
        alternatives: ['Blade Runner - O Caçador de Andróides']
    },
    {
        id: 17,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Fargo',
        clues: [
            'Série inspirada no filme dos irmãos Coen',
            'Cada temporada conta uma história diferente',
            'Se passa principalmente em Minnesota',
            'Mistura crime com humor negro',
            'Mantém o estilo e tom do filme original',
            'Billy Bob Thornton estrelou a primeira temporada',
            'Todas as histórias são supostamente baseadas em fatos reais',
            'O clima frio é parte importante da ambientação',
            'Ganhou vários prêmios Emmy',
            'Produzida pelo FX'
        ],        alternatives: ['Fargo']
    },
    {
        id: 18,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Eternal Sunshine',
        clues: [
            'Filme de 2004 escrito por Charlie Kaufman',
            'Jim Carrey e Kate Winslet são os protagonistas',
            'Um casal apaga as memórias um do outro',
            'Dirigido por Michel Gondry',
            'Mistura romance com ficção científica',
            'A Lacuna Inc. é a empresa que faz o procedimento',
            'A narrativa é não-linear',
            'Ganhou o Oscar de Melhor Roteiro Original',
            'Explora temas de memória e relacionamentos',
            'O título vem de um poema de Alexander Pope'
        ],
        alternatives: ['Brilho Eterno de uma Mente sem Lembranças', 'Eternal Sunshine of the Spotless Mind']
    },
    {
        id: 19,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Mindhunter',
        clues: [
            'Série da Netflix sobre a origem do FBI BSU',
            'Baseada no livro de John Douglas',
            'Se passa nos anos 70',
            'Agentes entrevistam assassinos em série',
            'David Fincher é produtor executivo',
            'Jonathan Groff interpreta Holden Ford',
            'Edmund Kemper é um personagem recorrente',
            'Explora a psicologia de criminosos',
            'Mostra o desenvolvimento do perfil criminal',
            'BTK Killer aparece em cenas misteriosas'
        ],
        alternatives: ['Mindhunter']
    },
    {
        id: 20,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'David Lynch',
        clues: [
            'Diretor americano conhecido por filmes surreais',
            'Criou a série Twin Peaks',
            'Dirigiu "Veludo Azul" e "Mulholland Drive"',
            'Também é pintor e músico',
            'Conhecido por narrativas não-lineares',
            'Praticante de meditação transcendental',
            'Ganhou a Palma de Ouro por "Coração Selvagem"',
            'Trabalhou frequentemente com Angelo Badalamenti',
            'Seu primeiro filme foi "Eraserhead"',
            'Conhecido por misturar sonhos e realidade'
        ],
        alternatives: ['David Keith Lynch']
    },
    {
        id: 21,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'A Viagem de Chihiro',
        clues: [
            'Filme de animação japonês de 2001',
            'Dirigido por Hayao Miyazaki',
            'Produzido pela Studio Ghibli',
            'É considerado um dos maiores filmes de animação de todos os tempos',
            'A história segue uma garota que entra em um mundo espiritual',
            'Ganhou o Oscar de Melhor Filme de Animação',
            'Temas de identidade, crescimento e espiritualidade',
            'Ela deve trabalhar em um banho público para espíritos',
            'A trilha sonora foi composta por Joe Hisaishi',
            'O título em inglês é "Spirited Away"'
        ],
        alternatives: ['A Viagem de Chihiro', 'Spirited Away']
    },
    {
        id: 22,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Oldboy',
        clues: [
            'Filme sul-coreano de 2003 dirigido por Park Chan-wook',
            'Parte da "Trilogia da Vingança"',
            'Um homem é aprisionado por 15 anos sem saber o motivo',
            'Famoso por uma longa cena de luta em um corredor filmada em plano-sequência',
            'O protagonista come um polvo vivo',
            'Baseado em um mangá japonês de mesmo nome',
            'A busca por vingança leva a revelações chocantes',
            'Ganhou o Grande Prêmio do Júri no Festival de Cannes de 2004',
            'Temas de incesto, vingança e o sofrimento humano são centrais',
            'Choi Min-sik interpreta o protagonista Oh Dae-su'
        ],
        alternatives: ['Oldeuboi']
    },
    {
        id: 23,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Cowboy Bebop',
        clues: [
            'Anime japonês de 1998 dirigido por Shinichirō Watanabe',
            'Ambientado em 2071, com a humanidade colonizando outros planetas',
            'Considerado um clássico do anime, conhecido por seu estilo e temas maduros',
            'Segue uma equipe de caçadores de recompensa a bordo da nave Bebop',
            'A trilha sonora de Yoko Kanno é aclamada, misturando jazz e blues',
            'Ein é um corgi geneticamente modificado com inteligência elevada',
            'Ed é uma hacker genial e excêntrica',
            'Faye Valentine é uma mulher com amnésia e dívidas',
            'Jet Black é o capitão da Bebop e ex-policial',
            'Spike Spiegel é o protagonista, um ex-membro de um sindicato do crime',
        ],
        alternatives: ['Kaubōi Bibappu']
    },
    {
        id: 24,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Donnie Darko',
        clues: [
            'Filme cult americano de 2001 dirigido por Richard Kelly',
            'Estrelado por Jake Gyllenhaal como um adolescente problemático',
            'Um coelho gigante chamado Frank o assombra e prevê o fim do mundo',
            'A história envolve viagem no tempo e universos tangentes',
            'Ambientado em 1988, durante as eleições presidenciais americanas',
            'A trilha sonora inclui músicas de Tears for Fears e Echo & the Bunnymen',
            'Explora temas de destino, sacrifício e saúde mental',
            '"Cellar Door" é considerada a frase mais bonita da língua inglesa por um personagem',
            'Patrick Swayze interpreta um guru de autoajuda com um segredo sombrio',
            'Inicialmente um fracasso de bilheteira, tornou-se um sucesso cult em DVD'
        ],
        alternatives: ['Donnie Darko O Estranho Mundo de Donnie Darko']
    },
    {
        id: 25,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'David Lynch',
        clues: [
            'Cineasta, pintor e músico americano nascido em 1946',
            'Conhecido por seus filmes surreais e oníricos',
            'Dirigiu "Eraserhead", "Veludo Azul" e "Cidade dos Sonhos"',
            'Co-criador da série de TV "Twin Peaks"',
            'Seus trabalhos frequentemente exploram o lado sombrio de pequenas cidades americanas',
            'Utiliza simbolismo, imagens perturbadoras e narrativas não lineares',
            'Recebeu múltiplos prêmios em Cannes e indicações ao Oscar',
            'Também é conhecido por sua prática de Meditação Transcendental',
            'Seu estilo é tão distinto que originou o termo "Lynchiano"',
            'Frequentemente colabora com o compositor Angelo Badalamenti'
        ],
        alternatives: ['Lynch']
    },
    {
        id: 26,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Donnie Darko',
        clues: [
            'Um adolescente problemático é atormentado por visões de um coelho gigante.',
            'O coelho, chamado Frank, prediz o fim do mundo.',
            'Mistura drama adolescente, ficção científica e suspense psicológico.',
            'Lançado em 2001, tornou-se um filme cult.',
            'Dirigido por Richard Kelly.',
            'Estrelado por Jake Gyllenhaal, Jena Malone e Drew Barrymore.',
            'A trilha sonora inclui músicas de Tears for Fears e Joy Division.',
            'Explora temas de viagem no tempo, destino e universos tangentes.',
            'O livro fictício "A Filosofia da Viagem no Tempo" é importante na trama.',
            'A queda de uma turbina de avião desencadeia os eventos.'
        ],
        alternatives: ['Donnie Darko']
    },
    {
        id: 27,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Cidade de Deus',
        clues: [
            'Retrata o crescimento do crime organizado em uma favela do Rio de Janeiro.',
            'A história é contada ao longo de várias décadas, da década de 1960 à de 1980.',
            'Dirigido por Fernando Meirelles e codirigido por Kátia Lund.',
            'Lançado em 2002.',
            'Baseado no romance de Paulo Lins.',
            'Narrado pelo personagem Buscapé, um aspirante a fotógrafo.',
            'Personagens icônicos incluem Zé Pequeno e Bené.',
            'Conhecido por seu estilo de filmagem visceral e realista.',
            'Indicado a quatro Oscars, incluindo Melhor Diretor.',
            '"Se correr o bicho pega, se ficar o bicho come."'
        ],
        alternatives: ['City of God']
    },
    {
        id: 28,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Oldboy',
        clues: [
            'Um homem é aprisionado em um quarto de hotel por 15 anos sem saber o motivo.',
            'Após ser libertado, ele busca vingança contra seus captores.',
            'Filme sul-coreano de suspense e ação.',
            'Dirigido por Park Chan-wook.',
            'Lançado em 2003.',
            'Parte da "Trilogia da Vingança" do diretor.',
            'Conhecido por sua violência estilizada e reviravoltas chocantes.',
            'A cena de luta no corredor com um martelo é famosa.',
            'O protagonista come um polvo vivo.',
            'Ganhou o Grande Prêmio do Júri no Festival de Cannes.'
        ],
        alternatives: ['Oldeuboi']
    },
    {
        id: 29,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Brilho Eterno de uma Mente sem Lembranças',
        clues: [
            'Um casal decide apagar as memórias um do outro após o término do relacionamento.',
            'O processo de apagamento ocorre enquanto o protagonista revive as memórias.',
            'Dirigido por Michel Gondry, com roteiro de Charlie Kaufman.',
            'Lançado em 2004.',
            'Estrelado por Jim Carrey e Kate Winslet.',
            'Mistura romance, ficção científica e drama psicológico.',
            'Ganhou o Oscar de Melhor Roteiro Original.',
            'A empresa Lacuna Inc. é responsável pelo procedimento de apagar memórias.',
            'A narrativa não linear reflete o processo de perda de memória.',
            'Clementine muda a cor do cabelo frequentemente.'
        ],
        alternatives: ['Eternal Sunshine of the Spotless Mind', 'brilho eterno']
    },
    {
        id: 30,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Sin City: A Cidade do Pecado',
        clues: [
            'Baseado nas histórias em quadrinhos de Frank Miller.',
            'Apresenta múltiplas histórias interligadas em uma cidade corrupta e violenta.',
            'Dirigido por Robert Rodriguez e Frank Miller, com Quentin Tarantino como diretor convidado.',
            'Lançado em 2005.',
            'Filmado predominantemente em preto e branco com cores seletivas.',
            'Elenco estrelado inclui Bruce Willis, Mickey Rourke, Jessica Alba e Clive Owen.',
            'Personagens icônicos como Marv, Hartigan e Nancy Callahan.',
            'Estilo visual neo-noir altamente estilizado.',
            'As prostitutas de Old Town formam uma gangue poderosa.',
            '"Walk down the right back alley in Sin City and you can find anything."'
        ],
        alternatives: ['Sin City']
    },
    {
        id: 31,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Labirinto do Fauno',
        clues: [
            'Durante a Guerra Civil Espanhola, uma menina escapa para um mundo de fantasia sombrio.',
            'Ela encontra um fauno que lhe dá três tarefas para provar que é uma princesa.',
            'Dirigido por Guillermo del Toro.',
            'Lançado em 2006.',
            'Mistura drama histórico com elementos de conto de fadas sombrio.',
            'Estrelado por Ivana Baquero, Sergi López e Maribel Verdú.',
            'Ganhou três Oscars, incluindo Melhor Fotografia e Melhor Direção de Arte.',
            'O Capitão Vidal é um oficial fascista sádico e o principal antagonista.',
            'O Homem Pálido é uma criatura memorável e assustadora.',
            'Explora temas de inocência, crueldade e a natureza da fantasia.'
        ],
        alternatives: ['El Laberinto del Fauno', 'Pan\\\'s Labyrinth']
    },
    {
        id: 32,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Sangue Negro',
        clues: [
            'A história de um prospector de petróleo implacável no início do século XX na Califórnia.',
            'Ele se torna um magnata do petróleo, mas sua busca por riqueza o corrompe.',
            'Dirigido por Paul Thomas Anderson.',
            'Lançado em 2007.',
            'Estrelado por Daniel Day-Lewis, que ganhou o Oscar de Melhor Ator.',
            'Baseado vagamente no romance "Oil!" de Upton Sinclair.',
            'A trilha sonora foi composta por Jonny Greenwood, do Radiohead.',
            'O personagem Eli Sunday, um pregador carismático, é seu principal rival.',
            '"Eu bebo o seu milkshake!"',
            'Explora temas de ambição, ganância, fé e família.'
        ],
        alternatives: ['There Will Be Blood']
    },
    {
        id: 33,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Quem Quer Ser um Milionário?',
        clues: [
            'Um jovem de uma favela de Mumbai participa de um programa de TV de perguntas e respostas.',
            'Ele é acusado de trapacear, e sua história de vida revela como ele sabia as respostas.',
            'Dirigido por Danny Boyle.',
            'Lançado em 2008.',
            'Ganhou oito Oscars, incluindo Melhor Filme e Melhor Diretor.',
            'Baseado no romance "Q & A" de Vikas Swarup.',
            'A trilha sonora de A.R. Rahman, incluindo a música "Jai Ho", foi um grande sucesso.',
            'Filmado em locações na Índia.',
            'A história de amor entre Jamal e Latika é central na trama.',
            'Mostra a dura realidade da vida nas favelas indianas.'
        ],
        alternatives: ['Slumdog Millionaire']
    },
    {
        id: 34,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Bastardos Inglórios',
        clues: [
            'Durante a Segunda Guerra Mundial, um grupo de soldados judeus americanos espalha o terror entre os nazistas.',
            'Uma jovem judia busca vingança pela morte de sua família.',
            'Dirigido por Quentin Tarantino.',
            'Lançado em 2009.',
            'Estrelado por Brad Pitt, Christoph Waltz e Mélanie Laurent.',
            'Christoph Waltz ganhou o Oscar de Melhor Ator Coadjuvante por seu papel como Coronel Hans Landa.',
            'Apresenta uma história alternativa da Segunda Guerra Mundial.',
            '"Você provavelmente já ouviu falar de nós."',
            'O filme é dividido em capítulos.',
            'A cena da taverna é um momento de alta tensão.'
        ],
        alternatives: ['Inglourious Basterds']
    },
    {
        id: 35,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'A Rede Social',
        clues: [
            'Conta a história da fundação do Facebook e os processos judiciais que se seguiram.',
            'Explora a ascensão de Mark Zuckerberg e as complexas relações por trás da criação da rede social.',
            'Dirigido por David Fincher, com roteiro de Aaron Sorkin.',
            'Lançado em 2010.',
            'Estrelado por Jesse Eisenberg, Andrew Garfield e Justin Timberlake.',
            'Ganhou três Oscars, incluindo Melhor Roteiro Adaptado.',
            '"Você não faz 500 milhões de amigos sem fazer alguns inimigos."',
            'A trilha sonora foi composta por Trent Reznor e Atticus Ross.',
            'Baseado no livro "Bilionários Acidentais" de Ben Mezrich.',
            'A narrativa alterna entre diferentes depoimentos e flashbacks.'
        ],
        alternatives: ['The Social Network']
    },
    {
        id: 36,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Sherlock',
        clues: [
            'Uma adaptação moderna das histórias de Sherlock Holmes de Sir Arthur Conan Doyle.',
            'O famoso detetive e seu parceiro Dr. Watson resolvem crimes em Londres do século XXI.',
            'Criada por Steven Moffat e Mark Gatiss.',
            'Estrelada por Benedict Cumberbatch como Sherlock Holmes e Martin Freeman como John Watson.',
            'Exibida pela BBC de 2010 a 2017.',
            'Conhecida por sua inteligência, ritmo acelerado e reviravoltas.',
            'Jim Moriarty é o arqui-inimigo de Sherlock.',
            'Cada episódio tem a duração de um filme.',
            'O "palácio mental" de Sherlock é uma técnica visual recorrente.',
            '"Elementar, meu caro Watson" não é dito exatamente assim na série.'
        ],
        alternatives: ['Sherlock (série)']
    },
    {
        id: 37,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Drive',
        clues: [
            'Um motorista de dublê de Hollywood que também trabalha como motorista de fuga.',
            'Ele se envolve com sua vizinha e seu filho, e acaba em apuros com a máfia.',
            'Dirigido por Nicolas Winding Refn.',
            'Lançado em 2011.',
            'Estrelado por Ryan Gosling, Carey Mulligan e Albert Brooks.',
            'Conhecido por seu estilo neo-noir, violência estilizada e trilha sonora synth-pop.',
            'O protagonista raramente fala e usa uma jaqueta de escorpião icônica.',
            'Ganhou o prêmio de Melhor Diretor no Festival de Cannes.',
            'A música "Nightcall" de Kavinsky é proeminente.',
            'A cena do elevador é particularmente memorável e brutal.'
        ],
        alternatives: ['Drive']
    },
    {
        id: 38,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Django Livre',
        clues: [
            'Lançado em 2012.',
            'Homenageia os filmes de faroeste espaguete, especialmente um filme de Sergio Corbucci.',
            'Um escravo liberto se une a um caçador de recompensas alemão para resgatar sua esposa.',
            'Eles enfrentam um cruel proprietário de plantação no sul dos Estados Unidos antes da Guerra Civil.',
            '"Eu gosto do jeito que você morre, rapaz."',
            'Estrelado por Jamie Foxx, Christoph Waltz e Leonardo DiCaprio.',
            'Christoph Waltz ganhou seu segundo Oscar de Melhor Ator Coadjuvante.',
            'Dirigido por Quentin Tarantino.',
            'Tarantino ganhou o Oscar de Melhor Roteiro Original.',
            'Calvin Candie, interpretado por DiCaprio, é o sádico dono da plantação Candyland.',
        ],
        alternatives: ['Django Unchained', 'Django']
    },
    {
        id: 39,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'House of Cards',
        clues: [
            'Um congressista americano ambicioso e sua esposa igualmente implacável manipulam seu caminho para o poder.',
            'Conhecido por suas quebras da quarta parede, onde o protagonista se dirige diretamente ao público.',
            'Primeira série original de grande sucesso da Netflix.',
            'Lançada em 2013.',
            'Baseada em uma minissérie britânica e em um romance de Michael Dobbs.',
            'Estrelada por Kevin Spacey como Frank Underwood e Robin Wright como Claire Underwood.',
            'Explora os bastidores sombrios da política em Washington D.C.',
            'Frank Underwood começa como o líder da maioria na Câmara dos Representantes.',
            'A série teve 6 temporadas, com a última focando em Claire após a saída de Spacey.',
            '"Democracia é tão superestimada."'
        ],
        alternatives: ['House of Cards']
    },
    {
        id: 40,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Ela',
        clues: [
            'Um escritor solitário desenvolve um relacionamento romântico com um sistema operacional inteligente.',
            'O sistema operacional tem uma voz feminina e uma personalidade cativante.',
            'Dirigido por Spike Jonze.',
            'Lançado em 2013.',
            'Estrelado por Joaquin Phoenix e Scarlett Johansson (como a voz de Samantha).',
            'Explora temas de amor, solidão e a natureza da consciência na era digital.',
            'Ganhou o Oscar de Melhor Roteiro Original.',
            'Ambientado em um futuro próximo com uma estética visual suave e minimalista.',
            'O protagonista está se divorciando de sua esposa, interpretada por Rooney Mara.',
            'A relação entre Theodore e Samantha levanta questões sobre o que constitui um relacionamento real.'
        ],
        alternatives: ['Her']
    },
    {
        id: 41,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Grande Hotel Budapeste',
        clues: [
            'As aventuras de um concierge lendário e seu jovem protegido em um famoso hotel europeu entre as guerras.',
            'Conhecido pelo estilo visual simétrico e colorido característico do diretor.',
            'Dirigido por Wes Anderson.',
            'Lançado em 2014.',
            'Estrelado por Ralph Fiennes, Tony Revolori e um grande elenco de apoio.',
            'A história é contada em flashbacks dentro de flashbacks.',
            'Ganhou quatro Oscars, principalmente em categorias de design.',
            'A fictícia República de Zubrowka é o cenário principal.',
            'M. Gustave H. é o concierge carismático e Zero Moustafa é o lobby boy.',
            'Envolve o roubo de uma pintura renascentista valiosa, "Menino com Maçã".'
        ],
        alternatives: ['The Grand Budapest Hotel']
    },
    {
        id: 42,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Whiplash: Em Busca da Perfeição',
        clues: [
            'Um jovem baterista de jazz ambicioso estuda em um conservatório de música de elite.',
            'Ele é levado ao limite por um instrutor abusivo e implacável.',
            'Dirigido por Damien Chazelle.',
            'Lançado em 2014.',
            'Estrelado por Miles Teller e J.K. Simmons.',
            'J.K. Simmons ganhou o Oscar de Melhor Ator Coadjuvante por seu papel como Terence Fletcher.',
            'Explora temas de ambição, perfeccionismo e o custo da grandeza.',
            'Baseado em um curta-metragem do próprio diretor.',
            'As cenas de ensaio musical são intensas e cheias de tensão.',
            '"Não existem duas palavras na língua inglesa mais prejudiciais do que \'bom trabalho\'"'
        ],
        alternatives: ['Whiplash']
    },
    {
        id: 43,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Narcos',
        clues: [
            'Crônica da ascensão e queda do infame traficante de drogas colombiano Pablo Escobar.',
            'Também aborda os esforços da DEA para capturá-lo.',
            'Produzida pela Netflix.',
            'Lançada em 2015.',
            'Estrelada por Wagner Moura como Pablo Escobar.',
            'As duas primeiras temporadas focam em Escobar, enquanto a terceira foca no Cartel de Cali.',
            'Filmada em locações na Colômbia.',
            'Mistura filmagens de arquivo com dramatização.',
            'Os agentes da DEA Steve Murphy e Javier Peña são personagens centrais.',
            '"Plata o plomo." (Prata ou chumbo)'
        ],
        alternatives: ['Narcos']
    },
    {
        id: 44,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Regresso',
        clues: [
            'Um explorador é brutalmente atacado por um urso e deixado para morrer por seus companheiros.',
            'Ele sobrevive e embarca em uma jornada de vingança em meio à natureza selvagem e implacável.',
            'Dirigido por Alejandro G. Iñárritu.',
            'Lançado em 2015.',
            'Estrelado por Leonardo DiCaprio, que ganhou o Oscar de Melhor Ator por este papel.',
            'Filmado em condições extremas usando apenas luz natural.',
            'Baseado em parte na vida do explorador Hugh Glass.',
            'Ganhou três Oscars, incluindo Melhor Diretor e Melhor Fotografia (Emmanuel Lubezki).',
            'A cena do ataque do urso é notoriamente realista e intensa.',
            'Explora temas de sobrevivência, vingança e a brutalidade da natureza e do homem.'
        ],
        alternatives: ['The Revenant']
    },
    {
        id: 45,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'La La Land: Cantando Estações',
        clues: [
            'Um músico de jazz e uma aspirante a atriz se apaixonam enquanto perseguem seus sonhos em Los Angeles.',
            'Um musical moderno que homenageia os clássicos de Hollywood.',
            'Dirigido por Damien Chazelle.',
            'Lançado em 2016.',
            'Estrelado por Ryan Gosling e Emma Stone.',
            'Ganhou seis Oscars, incluindo Melhor Diretor e Melhor Atriz (Emma Stone).',
            'Conhecido por seus números musicais vibrantes e cinematografia impressionante.',
            'A música "City of Stars" ganhou o Oscar de Melhor Canção Original.',
            'Houve uma famosa confusão no Oscar onde este filme foi anunciado erroneamente como Melhor Filme.',
            'Explora o conflito entre ambição artística e relacionamento amoroso.'
        ],
        alternatives: ['La La Land']
    },
    {
        id: 46,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'The Crown',
        clues: [
            'Uma dramatização histórica da vida da Rainha Elizabeth II do Reino Unido.',
            'A série acompanha seu reinado desde a década de 1940 até os tempos modernos.',
            'Criada por Peter Morgan.',
            'Lançada pela Netflix em 2016.',
            'O elenco é renovado a cada duas temporadas para refletir o envelhecimento dos personagens.',
            'Atrizes que interpretaram a Rainha incluem Claire Foy, Olivia Colman e Imelda Staunton.',
            'Explora os desafios pessoais e políticos enfrentados pela monarca e sua família.',
            'Abrange eventos históricos significativos do século XX e XXI.',
            'Conhecida por sua alta qualidade de produção, figurinos e atuações.',
            'Ganhou inúmeros prêmios, incluindo vários Emmys e Globos de Ouro.'
        ],
        alternatives: ['The Crown']
    },
    {
        id: 47,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Corra!',
        clues: [
            'Um jovem fotógrafo negro visita a família de sua namorada branca pela primeira vez.',
            'A visita se torna cada vez mais sinistra e perturbadora.',
            'Um thriller de terror social que aborda o racismo.',
            'Dirigido por Jordan Peele em sua estreia na direção.',
            'Lançado em 2017.',
            'Estrelado por Daniel Kaluuya e Allison Williams.',
            'Ganhou o Oscar de Melhor Roteiro Original.',
            'O "Lugar Afundado" (Sunken Place) é um conceito central e visualmente marcante.',
            'Mistura horror, comédia e crítica social.',
            'O filme foi um sucesso de crítica e bilheteira, gerando discussões importantes.'
        ],
        alternatives: ['Get Out']
    },
    {
        id: 48,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'A Forma da Água',
        clues: [
            'Durante a Guerra Fria, uma zeladora muda se apaixona por uma criatura anfíbia humanoide.',
            'A criatura está sendo mantida em cativeiro em um laboratório secreto do governo.',
            'Dirigido por Guillermo del Toro.',
            'Lançado em 2017.',
            'Ganhou quatro Oscars, incluindo Melhor Filme e Melhor Diretor.',
            'Estrelado por Sally Hawkins, Michael Shannon e Octavia Spencer.',
            'Um conto de fadas sombrio para adultos.',
            'Explora temas de alteridade, amor e preconceito.',
            'A trilha sonora de Alexandre Desplat ganhou o Oscar.',
            'Homenageia filmes clássicos de monstros, como "O Monstro da Lagoa Negra".'
        ],
        alternatives: ['The Shape of Water']
    },
    {
        id: 49,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'La Casa de Papel',
        clues: [
            'Um grupo de assaltantes planeja e executa roubos ambiciosos à Casa da Moeda da Espanha e ao Banco da Espanha.',
            'Os assaltantes usam nomes de cidades como codinomes e macacões vermelhos com máscaras de Salvador Dalí.',
            'Série espanhola criada por Álex Pina.',
            'Originalmente exibida na Antena 3, ganhou popularidade mundial na Netflix.',
            'Lançada em 2017.',
            'O Professor é o cérebro por trás dos assaltos.',
            'Personagens populares incluem Tóquio, Berlim, Nairóbi e Lisboa (Inspetora Raquel Murillo).',
            'A música "Bella Ciao" se tornou um hino da série.',
            'Conhecida por suas reviravoltas, tensão e drama interpessoal.',
            'Tornou-se uma das séries de língua não inglesa mais assistidas na Netflix.'
        ],
        alternatives: ['Money Heist']
    },
    {
        id: 50,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Roma',
        clues: [
            'Retrata a vida de uma empregada doméstica de uma família de classe média na Cidade do México no início dos anos 70.',
            'Filmado em preto e branco com um estilo visual impressionante.',
            'Dirigido por Alfonso Cuarón.',
            'Lançado em 2018.',
            'Semi-autobiográfico, baseado nas memórias de infância do diretor.',
            'Estrelado por Yalitza Aparicio como Cleo.',
            'Ganhou três Oscars: Melhor Diretor, Melhor Filme Estrangeiro e Melhor Fotografia.',
            'Distribuído principalmente pela Netflix.',
            'Eventos históricos como o Massacre de Corpus Christi são retratados.',
            'Explora temas de classe social, raça, família e memória.'
        ],
        alternatives: ['Roma']
    },
    {
        id: 51,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Parasita',
        clues: [
            'Uma família pobre se infiltra na vida de uma família rica, com consequências trágicas.',
            'Uma comédia de humor negro sul-coreana que se transforma em thriller.',
            'Dirigido por Bong Joon-ho.',
            'Lançado em 2019.',
            'Primeiro filme de língua não inglesa a ganhar o Oscar de Melhor Filme.',
            'Também ganhou os Oscars de Melhor Diretor, Melhor Roteiro Original e Melhor Filme Internacional.',
            'Explora temas de desigualdade social, luta de classes e desespero.',
            'A "pedra do estudioso" (suseok) é um objeto simbólico importante.',
            'A família Kim vive em um porão semi-subterrâneo (banjiha).',
            'A cena do dilúvio é um ponto de virada crucial no filme.'
        ],
        alternatives: ['Gisaengchung', 'Parasite']
    },
    {
        id: 52,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'The Mandalorian',
        clues: [
            'Um caçador de recompensas solitário viaja pelos confins da galáxia após a queda do Império.',
            'Ele protege uma criança misteriosa da mesma espécie de Yoda.',
            'Primeira série live-action do universo Star Wars.',
            'Criada por Jon Favreau.',
            'Lançada no Disney+ em 2019.',
            'Estrelada por Pedro Pascal como o personagem titular (Din Djarin).',
            'A Criança, popularmente conhecida como "Baby Yoda" (Grogu), se tornou um fenômeno cultural.',
            'Estilo de faroeste espacial, com influências de filmes de samurai.',
            'A trilha sonora de Ludwig Göransson é aclamada.',
            '"Este é o Caminho." (This is the Way.)'
        ],
        alternatives: ['The Mandalorian']
    },
    {
        id: 53,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Round 6',
        clues: [
            'Centenas de jogadores endividados aceitam um convite para competir em jogos infantis mortais.',
            'O prêmio é uma quantia em dinheiro que pode mudar suas vidas, mas o fracasso significa a morte.',
            'Série sul-coreana de drama e sobrevivência.',
            'Criada por Hwang Dong-hyuk.',
            'Lançada pela Netflix em 2021.',
            'Tornou-se um fenômeno global e a série mais assistida da Netflix na época.',
            'Jogos como "Batatinha Frita 1, 2, 3" (Red Light, Green Light) são adaptados de forma letal.',
            'Os jogadores usam agasalhos verdes e os guardas usam macacões rosa com máscaras.',
            'Explora temas de desespero, capitalismo e a natureza humana sob pressão.',
            'O protagonista Seong Gi-hun é o jogador número 456.'
        ],
        alternatives: ['Squid Game', 'Ojingeo Geim']
    },
    {
        id: 54,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Duna',
        clues: [
            'A adaptação de um épico de ficção científica sobre uma família nobre que assume o controle de um planeta deserto perigoso.',
            'O planeta é a única fonte de uma especiaria valiosa que prolonga a vida e expande a consciência.',
            'Dirigido por Denis Villeneuve.',
            'Lançado em 2021.',
            'Baseado na primeira metade do romance de Frank Herbert.',
            'Estrelado por Timothée Chalamet, Rebecca Ferguson e Oscar Isaac.',
            'Ganhou seis Oscars, principalmente em categorias técnicas.',
            'O planeta Arrakis é habitado por vermes da areia gigantes.',
            'Os Fremen são os habitantes nativos do deserto.',
            '"O medo é o assassino da mente."'
        ],
        alternatives: ['Dune: Part One']
    },
    {
        id: 55,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Tudo em Todo Lugar ao Mesmo Tempo',
        clues: [
            'Uma imigrante chinesa sobrecarregada descobre que pode acessar as memórias e habilidades de suas versões em universos paralelos.',
            'Ela deve usar esses poderes para lutar contra uma ameaça que pode destruir o multiverso.',
            'Dirigido por Daniel Kwan e Daniel Scheinert (Daniels).',
            'Lançado em 2022.',
            'Mistura ação, comédia, drama familiar e ficção científica.',
            'Estrelado por Michelle Yeoh, Ke Huy Quan e Stephanie Hsu.',
            'Ganhou sete Oscars, incluindo Melhor Filme, Melhor Diretor e Melhor Atriz (Michelle Yeoh).',
            'Ke Huy Quan ganhou o Oscar de Melhor Ator Coadjuvante.',
            'Explora temas de identidade, família, niilismo e amor.',
            'O "bagel de tudo" é um símbolo importante no filme.'
        ],
        alternatives: ['Everything Everywhere All at Once']
    }
];
