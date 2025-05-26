const databaseCult = [
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Sétimo Selo',
        clues: [
            'Filme sueco em preto e branco de 1957',
            'Dirigido por Ingmar Bergman',
            'Ambientado durante a Peste Negra na Europa medieval',
            'O protagonista é um cavaleiro que retorna das Cruzadas',
            'Contém uma famosa cena de xadrez com uma figura encapuzada',
            'Explora temas existenciais como a morte, a fé e o significado da vida',
            'Max von Sydow interpreta o cavaleiro Antonius Block',
            'A Morte é personificada como um homem pálido vestido de preto',
            'O título se refere a uma passagem do Apocalipse na Bíblia',
            'Termina com uma "dança da morte" em silhueta no horizonte'
        ],
        alternatives: ['Det sjunde inseglet', 'The Seventh Seal']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Stalker',
        clues: [
            'Filme soviético de ficção científica lançado em 1979',
            'Dirigido por Andrei Tarkovsky',
            'Baseado no romance "Piquenique na Estrada" dos irmãos Strugatsky',
            'A trama envolve uma jornada para um local misterioso chamado "Zona"',
            'O protagonista serve como guia para dois homens: um escritor e um cientista',
            'No centro da Zona existe um quarto que supostamente realiza desejos',
            'Filmado com longas tomadas contemplativas',
            'As cenas da Zona são filmadas em cores, enquanto o mundo exterior é sépia',
            'O título se refere à profissão do protagonista: alguém que guia pessoas pela Zona',
            'Considerado um dos grandes filmes filosóficos da história do cinema'
        ],
        alternatives: ['Stalker']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Utopia',
        clues: [
            'Série britânica de conspiração e thriller lançada em 2013',
            'Gira em torno de um misterioso manuscrito gráfico chamado "The Utopia Experiments"',
            'Um grupo de pessoas descobre que o manuscrito prediz desastres globais',
            'Uma organização secreta chamada "A Rede" persegue os protagonistas',
            'O antagonista é conhecido como "Sr. Coelho" (Mr. Rabbit)',
            'Apresenta uma estética visual distinta com cores saturadas',
            'Jessica Hyde é uma personagem chave procurada por todos',
            'Aborda temas como controle populacional e conspirações governamentais',
            'Cancelada após duas temporadas, ganhou um remake americano',
            'O vírus fictício Janus é central para a trama'
        ],
        alternatives: ['Utopia UK', 'Utopia (UK)']
    },
    {
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'David Lynch',
        clues: [
            'Diretor, roteirista e produtor americano nascido em 1946',
            'Conhecido por seu estilo surrealista e imagens oníricas',
            'Começou sua carreira com o filme experimental "Eraserhead"',
            'Dirigiu "O Homem Elefante" e "Veludo Azul"',
            'Criou a série de TV "Twin Peaks" com Mark Frost',
            'Seu filme "Mulholland Drive" é frequentemente citado como um dos melhores do século XXI',
            'Também é pintor, músico e fotógrafo',
            'Praticante de meditação transcendental há décadas',
            'Trabalhou frequentemente com o compositor Angelo Badalamenti',
            'Conhecido por criar narrativas não-lineares e cenas perturbadoras'
        ],
        alternatives: ['David Keith Lynch']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Hannibal',
        clues: [
            'Série de terror psicológico baseada em personagens criados por Thomas Harris',
            'Exibida de 2013 a 2015 pela NBC',
            'Desenvolvida por Bryan Fuller',
            'O protagonista é um psiquiatra e assassino em série',
            'A relação entre o protagonista e um agente do FBI é central na trama',
            'Mads Mikkelsen e Hugh Dancy são os protagonistas',
            'Conhecida por sua estética visual elaborada e cenas de violência estilizada',
            'Will Graham é o profiler do FBI com empatia excessiva',
            'As cenas de culinária são meticulosamente elaboradas e muitas vezes envolvem canibalismo',
            'Considerada uma das melhores adaptações dos livros de Thomas Harris'
        ],
        alternatives: ['Hannibal (série)']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Solaris',
        clues: [
            'Filme soviético de ficção científica lançado em 1972',
            'Dirigido por Andrei Tarkovsky',
            'Baseado no romance do autor polonês Stanisław Lem',
            'Um psicólogo é enviado a uma estação espacial que orbita um planeta oceânico',
            'Os tripulantes da estação sofrem de alucinações misteriosas',
            'O planeta parece capaz de materializar memórias e culpas das pessoas',
            'O protagonista encontra uma réplica de sua esposa falecida',
            'Explora temas filosóficos como memória, consciência e a natureza da realidade',
            'Contém longas sequências contemplativas, incluindo uma cena de direção em uma autoestrada',
            'Ganhou um remake americano em 2002 dirigido por Steven Soderbergh'
        ],
        alternatives: ['Solyaris', 'Solaris']
    },
    {
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Lars von Trier',
        clues: [
            'Diretor de cinema dinamarquês nascido em 1956',
            'Co-fundador do movimento cinematográfico Dogma 95',
            'Conhecido por filmes provocativos e controversos',
            'Dirigiu a "Trilogia da Depressão" que inclui "Anticristo" e "Melancolia"',
            'Sua série "The Kingdom" (Riget) se passa em um hospital assombrado',
            'Frequentemente divide seus filmes em capítulos',
            'Dirigiu "Dançando no Escuro" com Björk como protagonista',
            'Seu filme "Ninfomaníaca" foi lançado em duas partes',
            'Ganhou a Palma de Ouro em Cannes com "Dançando no Escuro"',
            'Conhecido por seu estilo visual distinto e temas provocativos'
        ],
        alternatives: ['Lars von Trier']
    },
    {
        type: 'OBJETO',
        icon: 'fas fa-cube',
        answer: 'Caixa de Lemarchand',
        clues: [
            'Objeto fictício que aparece em uma série de filmes de terror',
            'É uma caixa-puzzle que pode ser reconfigurada',
            'Quando resolvida, abre um portal para outra dimensão',
            'Também conhecida como "Configuração do Lamento"',
            'Foi criada por Philip Lemarchand na ficção',
            'Invoca entidades conhecidas como Cenobitas',
            'Tem forma de cubo com entalhes ornamentados',
            'O líder dos Cenobitas é conhecido como Pinhead',
            'Aparece nos filmes da franquia "Hellraiser"',
            'Baseada nos trabalhos do escritor Clive Barker'
        ],
        alternatives: ['Configuração do Lamento', 'Cubo de Lemarchand', 'Puzzle Box', 'Lament Configuration']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Suspiria',
        clues: [
            'Filme de terror italiano de 1977',
            'Dirigido por Dario Argento',
            'Se passa em uma academia de balé na Alemanha',
            'Conhecido por seu uso distintivo de cores vibrantes, principalmente vermelho',
            'A protagonista descobre que a academia é na verdade um covil de bruxas',
            'A trilha sonora foi composta pela banda italiana Goblin',
            'Jessica Harper interpreta a protagonista americana Suzy Bannion',
            'Faz parte da "Trilogia das Três Mães" do diretor',
            'Ganhou um remake em 2018 dirigido por Luca Guadagnino',
            'Considerado um dos filmes de terror mais influentes esteticamente'
        ],
        alternatives: ['Suspiria']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'The Prisoner',
        clues: [
            'Série britânica de espionagem e ficção científica dos anos 1960',
            'Protagonizada e co-criada por Patrick McGoohan',
            'O protagonista é um ex-agente secreto mantido prisioneiro em uma vila idílica',
            'Os habitantes da vila são identificados por números, não por nomes',
            'O protagonista é conhecido apenas como "Número Seis"',
            'A vila é administrada por "Número Dois", uma posição que muda frequentemente',
            'Contém elementos surreais e alegóricos',
            'Uma grande bola branca chamada "Rover" impede as fugas',
            'A frase "Eu não sou um número, sou um homem livre!" é icônica da série',
            'O final enigmático continua a ser debatido por fãs'
        ],
        alternatives: ['O Prisioneiro', 'The Prisoner']
    }
];
