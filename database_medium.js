const databaseMedium = [
    {
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
    }
];
