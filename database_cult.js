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
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Santa Sangre',
        clues: [
            'Filme surrealista de 1989 dirigido por Alejandro Jodorowsky',
            'Mistura horror psicológico com elementos de circo',
            'O protagonista é um artista de circo traumatizado',
            'Envolve um culto religioso dedicado a uma santa sem braços',
            'A mãe do protagonista é uma acrobata que perde os braços',
            'Apresenta elementos do realismo mágico latino-americano',
            'O filme é parcialmente baseado em um caso real',
            'Contém cenas de ritual religioso e violência surreal',
            'O protagonista age como os "braços" de sua mãe',
            'Considerado um clássico do cinema cult mexicano'
        ],
        alternatives: ['Santa Sangre']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Ergo Proxy',
        clues: [
            'Anime cyberpunk de 2006',
            'Se passa em uma cidade-domo pós-apocalíptica',
            'Envolve androides chamados "AutoReivs"',
            'A protagonista é uma investigadora chamada Re-l Mayer',
            'Explora temas filosóficos complexos',
            'Contém referências a filósofos como Descartes e Lacan',
            'O design dos personagens é feito por Naoyuki Onda',
            'A trama envolve seres misteriosos chamados "proxies"',
            'Mistura elementos de ficção científica e filosofia existencial',
            'Conhecido por sua narrativa densa e atmosfera sombria'
        ],
        alternatives: ['Ergo Proxy']
    },
    {
        type: 'OBJETO',
        icon: 'fas fa-cube',
        answer: 'Necronomicon',
        clues: [
            'Livro fictício criado por H.P. Lovecraft',
            'Supostamente escrito pelo "árabe louco" Abdul Alhazred',
            'Contém conhecimentos sobre entidades cósmicas antigas',
            'Frequentemente referenciado em histórias de horror cósmico',
            'Seu nome significa "imagem da lei dos mortos"',
            'Aparece em vários contos do Ciclo de Cthulhu',
            'Sua leitura pode causar insanidade nos personagens',
            'Inspirou diversos livros e filmes de terror',
            'É um grimório que contém feitiços e rituais proibidos',
            'Mistura elementos de horror cósmico e ocultismo'
        ],
        alternatives: ['Necronomicon', 'Al Azif']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Tetsuo: O Homem de Ferro',
        clues: [
            'Filme japonês cyberpunk de 1989',
            'Dirigido por Shinya Tsukamoto',
            'Filmado em preto e branco',
            'Um salaryman se transforma gradativamente em metal',
            'Fortemente influenciado pelo body horror',
            'Mistura stop-motion com live action',
            'Usa efeitos especiais práticos',
            'Tem uma estética industrial e claustrofóbica',
            'Ganhou vários prêmios em festivais de cinema fantástico',
            'Considerado um dos filmes mais extremos do cinema japonês'
        ],
        alternatives: ['Tetsuo: The Iron Man']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Serial Experiments Lain',
        clues: [
            'Anime cyberpunk de 1998',
            'Explora temas de realidade virtual e identidade',
            'A protagonista é uma estudante chamada Lain',
            'Aborda a relação entre humanos e tecnologia',
            'A Wired é uma versão avançada da internet',
            'Tem um visual experimental e atmosfera perturbadora',
            'Influenciou várias obras de ficção científica',
            'A narrativa é complexa e não-linear',
            'Mistura elementos de horror psicológico',
            'Conhecida por sua abertura com a música "Duvet"'
        ],
        alternatives: ['Lain', 'Serial Experiments Lain']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'El Topo',
        clues: [
            'Filme de western surrealista de 1970',
            'Dirigido por Alejandro Jodorowsky',
            'Considerado o primeiro filme "midnight movie"',
            'Mistura western com simbolismo religioso',
            'O diretor é também o protagonista',
            'John Lennon ajudou a financiar o filme',
            'Influenciou o movimento cinema de meia-noite',
            'Repleto de simbolismo esotérico',
            'O título significa "A Toupeira" em espanhol',
            'Combina violência com misticismo'
        ],
        alternatives: ['The Mole']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Texhnolyze',
        clues: [
            'Anime cyberpunk de 2003',
            'Criado pelo estúdio Madhouse',
            'Se passa em uma cidade subterrânea chamada Lux',
            'Aborda temas de transhumanismo',
            'Conhecido por seu ritmo lento e atmosfera sombria',
            'O primeiro episódio tem quase nenhum diálogo',
            'Envolve membros artificiais chamados texhnolyze',
            'O protagonista perde seus membros em uma luta',
            'Dirigido por Hiroshi Hamasaki',
            'Tem um final notoriamente niilista'
        ],
        alternatives: ['Texhnolyze']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Begotten',
        clues: [
            'Filme experimental de terror de 1989',
            'Dirigido por E. Elias Merhige',
            'Filmado em preto e branco com alto contraste e granulação',
            'Não contém diálogos',
            'Apresenta uma narrativa alegórica sobre criação e destruição',
            'Envolve figuras como "Deus se Matando" e "Mãe Terra"',
            'Conhecido por suas imagens perturbadoras e surreais',
            'O processo de pós-produção para alcançar o visual levou meses',
            'Considerado um filme de arte extremo',
            'Influenciou artistas como Marilyn Manson'
        ],
        alternatives: ['Begotten']
    },
    {
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Kenneth Anger',
        clues: [
            'Cineasta experimental americano nascido em 1927',
            'Conhecido por seus curtas-metragens surreais e homoeróticos',
            'Autor do livro "Hollywood Babylon"',
            'Seus filmes frequentemente exploram temas de ocultismo e paganismo',
            'Trabalhou com música de artistas como Mick Jagger e Jimmy Page',
            'Filmes notáveis incluem "Scorpio Rising" e "Lucifer Rising"',
            'Considerado uma figura pioneira do cinema underground',
            'Seu trabalho influenciou diretores como David Lynch e Martin Scorsese',
            'Utiliza simbolismo e imagens ritualísticas',
            'Muitos de seus filmes não têm diálogo tradicional'
        ],
        alternatives: ['Kenneth Anglemyer']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Fando y Lis',
        clues: [
            'Filme mexicano de 1968 dirigido por Alejandro Jodorowsky',
            'Baseado em uma peça de Fernando Arrabal',
            'Causou um escândalo em sua estreia no Festival de Acapulco',
            'A trama segue um casal em busca da cidade mítica de Tar',
            'Filmado em preto e branco com um estilo surreal e chocante',
            'Aborda temas de sadomasoquismo, amor e busca espiritual',
            'Foi banido no México por um período',
            'Considerado um precursor dos "midnight movies"',
            'A personagem Lis é paraplégica',
            'O filme tem uma atmosfera onírica e perturbadora'
        ],
        alternatives: ['Fando and Lis']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Jamón Jamón',
        clues: [
            'Filme espanhol de 1992 dirigido por Bigas Luna',
            'Lançou as carreiras de Penélope Cruz e Javier Bardem',
            'Uma comédia dramática com elementos surreais e eróticos',
            'A história envolve um triângulo amoroso e uma fábrica de cuecas',
            'O presunto (jamón) é um símbolo recorrente no filme',
            'Explora temas de paixão, masculinidade e cultura espanhola',
            'Penélope Cruz interpreta Silvia, uma jovem grávida',
            'Javier Bardem interpreta Raúl, um aspirante a toureiro e modelo de cuecas',
            'A mãe do namorado de Silvia contrata Raúl para seduzi-la',
            'Conhecido por suas cenas visualmente marcantes e sensuais'
        ],
        alternatives: ['Jamón, Jamón']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'A Página Escarlate',
        clues: [
            'Filme de anime de 1986 dirigido por Mamoru Oshii',
            'Título original "Tenshi no Tamago" (O Ovo do Anjo)',
            'Colaboração com o artista Yoshitaka Amano',
            'Conhecido por sua atmosfera sombria, simbolismo e narrativa enigmática',
            'A história se passa em um mundo gótico e desolado',
            'Uma jovem garota protege um grande ovo',
            'Um soldado questiona o propósito da caça a sombras de peixes gigantes',
            'Explora temas de fé, perda e a natureza da realidade',
            'Visualmente deslumbrante, com pouquíssimo diálogo',
            'Considerado uma obra de arte da animação, mas de difícil interpretação'
        ],
        alternatives: ['Tenshi no Tamago', "Angel's Egg"]
    }
];
