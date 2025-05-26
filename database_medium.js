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
    }
];
