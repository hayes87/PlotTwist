const databaseCult = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
    },
    {
        id: 23,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Eraserhead',
        clues: [
            'Filme de estreia de David Lynch, lançado em 1977.',
            'Filmado em preto e branco, com uma atmosfera surreal e perturbadora.',
            'O protagonista, Henry Spencer, vive em um ambiente industrial desolador.',
            'Henry tem um filho mutante que chora incessantemente.',
            'A "Dama do Radiador" canta sobre encontrar a felicidade no céu.',
            'Explora temas de ansiedade paterna, alienação e medo do corpo.',
            'Considerado um clássico do cinema de horror corporal e experimental.',
            'A produção levou vários anos para ser concluída devido a dificuldades financeiras.',
            'A trilha sonora e o design de som são elementos cruciais para a atmosfera.',
            'Tornou-se um filme cult, exibido em sessões da meia-noite por muitos anos.'
        ],
        alternatives: ['Eraserhead', 'A Cabeça Apagadora']
    },
    {
        id: 24,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Pink Flamingos',
        clues: [
            'Dirigido por John Waters e lançado em 1972.',
            'Estrelado pela drag queen Divine.',
            'Conhecido por suas cenas chocantes e transgressoras.',
            'Divine compete pelo título de "pessoa mais imunda do mundo".',
            'Apresenta a famosa cena em que Divine come fezes de cachorro.',
            'Um marco do cinema trash e da contracultura.',
            'Filmado com um orçamento muito baixo em Baltimore.',
            'Os Marbles são os rivais de Divine na disputa pelo título.',
            'Inclui temas como canibalismo, incesto e voyeurismo.',
            'Foi banido em vários países devido ao seu conteúdo explícito.'
        ],
        alternatives: ['Pink Flamingos']
    },
    {
        id: 25,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'El Topo',
        clues: [
            'Filme de faroeste psicodélico dirigido por Alejandro Jodorowsky em 1970.',
            'O próprio Jodorowsky interpreta o protagonista, um pistoleiro vestido de preto.',
            'O filme é dividido em duas partes alegóricas: "Gênesis" e "Apocalipse".',
            'Busca a iluminação espiritual através de confrontos com mestres do deserto.',
            'Repleto de simbolismo religioso, místico e surreal.',
            'Considerado um dos primeiros "midnight movies".',
            'John Lennon foi um grande fã e ajudou a financiar o próximo filme de Jodorowsky.',
            'A violência gráfica e o conteúdo bizarro o tornaram um clássico cult.',
            'A trilha sonora também foi composta por Jodorowsky.',
            'Aborda temas como redenção, sacrifício e a busca pelo sagrado.'
        ],
        alternatives: ['El Topo', 'A Toupeira']
    },
    {
        id: 26,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Tetsuo: The Iron Man',
        clues: [
            'Filme cyberpunk japonês de 1989, dirigido por Shinya Tsukamoto.',
            'Filmado em preto e branco, com um estilo visual frenético e industrial.',
            'Um homem comum começa a se transformar em uma criatura de metal.',
            'Explora temas de urbanização, tecnologia e a fusão do homem com a máquina.',
            'Conhecido por suas imagens grotescas e sequências de stop-motion.',
            'A trilha sonora industrial contribui para a atmosfera opressora.',
            'Considerado um precursor do subgênero "body horror" japonês.',
            'Teve duas sequências: "Body Hammer" e "The Bullet Man".',
            'A transformação do protagonista é dolorosa e caótica.',
            'Um clássico do cinema underground e experimental japonês.'
        ],
        alternatives: ['Tetsuo', 'Tetsuo: O Homem de Ferro']
    },
    {
        id: 27,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Santa Sangre',
        clues: [
            'Filme de horror surreal de 1989, dirigido por Alejandro Jodorowsky.',
            'Conta a história de Fenix, um jovem traumatizado que escapa de um hospício.',
            'A mãe de Fenix, Concha, é líder de um culto religioso bizarro.',
            'Fenix "empresta" seus braços para sua mãe, que os perdeu em um ataque.',
            'Explora temas de trauma psicológico, culpa e possessão.',
            'Apresenta uma estética visual rica e colorida, inspirada no circo e na arte popular mexicana.',
            'A relação simbiótica e doentia entre Fenix e sua mãe é central na trama.',
            'Inclui elementos de Grand Guignol e melodrama.',
            'Filmado no México, com um elenco internacional.',
            'Considerado uma das obras-primas de Jodorowsky.'
        ],
        alternatives: ['Santa Sangre', 'Sangue Sagrado']
    },
    {
        id: 28,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Videodrome',
        clues: [
            'Filme de horror corporal e ficção científica de 1983, dirigido por David Cronenberg.',
            'James Woods interpreta Max Renn, presidente de uma pequena emissora de TV a cabo.',
            'Max descobre um sinal de transmissão clandestino que exibe tortura e assassinato.',
            'O sinal causa alucinações e transformações físicas em quem o assiste.',
            'Explora a relação entre mídia, tecnologia, violência e a percepção da realidade.',
            'A frase "Long live the new flesh!" ("Vida longa à nova carne!") é icônica.',
            'Debbie Harry, vocalista do Blondie, interpreta Nicki Brand.',
            'Apresenta efeitos especiais práticos perturbadores e inovadores.',
            'Questiona a natureza da televisão e seu impacto na mente humana.',
            'Um clássico cult que se tornou ainda mais relevante na era da internet.'
        ],
        alternatives: ['Videodrome: A Síndrome do Vídeo']
    },
    {
        id: 29,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Repo Man',
        clues: [
            'Comédia de ficção científica cult de 1984, dirigida por Alex Cox.',
            'Emilio Estevez interpreta Otto Maddox, um jovem punk que se torna um "homem do reboque".',
            'Harry Dean Stanton co-estrela como Bud, um veterano cínico do ramo.',
            'A trama envolve um Chevrolet Malibu 1964 com alienígenas mortos no porta-malas.',
            'O carro emite uma radiação misteriosa e é procurado por agentes do governo e cientistas.',
            'A trilha sonora punk rock é um elemento marcante do filme.',
            'Critica o consumismo, a cultura americana e a paranoia da Guerra Fria.',
            'Apresenta diálogos excêntricos e situações bizarras.',
            'Tornou-se um clássico cult por sua originalidade e humor negro.',
            'A frase "The life of a repo man is always intense" é famosa.'
        ],
        alternatives: ['Repo Man: A Onda Punk']
    },
    {
        id: 30,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Liquid Sky',
        clues: [
            'Filme independente de ficção científica de 1982, dirigido por Slava Tsukerman.',
            'Ambientado na cena new wave e underground de Nova York.',
            'Alienígenas microscópicos chegam à Terra em busca de heroína e orgasmos.',
            'Os alienígenas se instalam no apartamento de uma modelo andrógina chamada Margaret.',
            'Pessoas que têm relações sexuais com Margaret morrem de forma misteriosa.',
            'Anne Carlisle interpreta os papéis de Margaret e do modelo masculino Jimmy.',
            'Visualmente estilizado, com figurinos extravagantes e maquiagem neon.',
            'A trilha sonora eletrônica contribui para a atmosfera única do filme.',
            'Critica a superficialidade da moda, o hedonismo e o vício em drogas.',
            'Um clássico cult conhecido por sua estética bizarra e temas provocadores.'
        ],
        alternatives: ['Liquid Sky']
    },
    {
        id: 31,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Forbidden Zone',
        clues: [
            'Comédia musical surreal de 1980, dirigida por Richard Elfman.',
            'Baseado nas performances teatrais da banda The Mystic Knights of the Oingo Boingo.',
            'A família Hercules descobre um portal para a Sexta Dimensão em seu porão.',
            'A Sexta Dimensão é governada pelo Rei Fausto e pela Rainha Doris.',
            'Danny Elfman, irmão do diretor e futuro compositor de trilhas sonoras, interpreta Satanás.',
            'Filmado em preto e branco, com sequências animadas e cenários bizarros.',
            'Apresenta números musicais excêntricos e referências a desenhos animados antigos.',
            'O humor é anárquico, absurdo e muitas vezes politicamente incorreto.',
            'Susan Tyrrell interpreta a Rainha Doris de forma memorável.',
            'Um filme cult que celebra o kitsch e o grotesco.'
        ],
        alternatives: ['Zona Proibida']
    },
    {
        id: 32,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Hausu (House)',
        clues: [
            'Filme de horror cômico japonês de 1977, dirigido por Nobuhiko Obayashi.',
            'Uma estudante chamada Gorgeous convida seis amigas para passar as férias na casa de sua tia.',
            'A casa se revela mal-assombrada e começa a devorar as garotas de maneiras surreais.',
            'Conhecido por seus efeitos especiais psicodélicos e artesanais.',
            'Mistura elementos de horror, comédia, fantasia e melodrama.',
            'A estética visual é vibrante, colorida e lembra um comercial de TV ou um videoclipe.',
            'As personagens têm nomes descritivas como Prof, Melody, Kung Fu e Mac.',
            'O filme foi concebido a partir de ideias da filha pequena do diretor.',
            'Um clássico cult que desafia as convenções do gênero de horror.',
            'A trilha sonora pop e os momentos musicais contribuem para a atmosfera bizarra.'
        ],
        alternatives: ['House', 'Hausu']
    },
    {
        id: 33,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'The Holy Mountain',
        clues: [
            'Filme surreal e alegórico de 1973, dirigido por Alejandro Jodorowsky.',
            'Produzido por Allen Klein, empresário dos Beatles, com financiamento de John Lennon e Yoko Ono.',
            'Um ladrão que se assemelha a Jesus Cristo é guiado por um Alquimista em busca da imortalidade.',
            'O Alquimista reúne um grupo de indivíduos poderosos, cada um representando um planeta.',
            'Juntos, eles embarcam em uma jornada para a Montanha Sagrada, que concede a vida eterna.',
            'Repleto de imagens chocantes, simbolismo esotérico e crítica social.',
            'Jodorowsky, sua equipe e elenco passaram por um treinamento espiritual antes das filmagens.',
            'A produção foi marcada por conflitos entre Jodorowsky e Klein.',
            'Um clássico cult conhecido por sua ambição visual e filosófica.',
            'O final do filme quebra a quarta parede de forma memorável.'
        ],
        alternatives: ['A Montanha Sagrada', 'La Montaña Sagrada']
    },
    {
        id: 34,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Faster, Pussycat! Kill! Kill!',
        clues: [
            'Filme de exploração de 1965, dirigido por Russ Meyer.',
            'Três go-go dancers sedutoras e violentas aterrorizam o deserto da Califórnia.',
            'Varla, a líder do grupo, é interpretada por Tura Satana.',
            'Elas sequestram uma jovem e matam seu namorado em uma corrida de carros.',
            'Buscam refúgio em um rancho isolado, onde planejam roubar um velho aleijado e seus filhos.',
            'Conhecido por seus diálogos afiados, violência estilizada e personagens femininas fortes.',
            'Um clássico do cinema exploitation e um ícone da cultura pop.',
            'Filmado em preto e branco com um orçamento baixo.',
            'Celebra a sexualidade feminina agressiva e a rebeldia.',
            'Influenciou diretores como Quentin Tarantino e John Waters.'
        ],
        alternatives: ['Faster, Pussycat! Kill! Kill!']
    },
    {
        id: 35,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Gummo',
        clues: [
            'Filme dramático experimental de 1997, dirigido por Harmony Korine.',
            'Retrata a vida de jovens pobres e desajustados em Xenia, Ohio, após um tornado.',
            'A narrativa é fragmentada, composta por vinhetas e cenas desconexas.',
            'Apresenta personagens excêntricos envolvidos em comportamentos bizarros e autodestrutivos.',
            'Explora temas de pobreza, tédio, violência e alienação na América suburbana.',
            'Filmado com uma estética crua e realista, misturando atores profissionais e não profissionais.',
            'A trilha sonora inclui black metal, death metal e música country.',
            'Causou controvérsia por seu conteúdo perturbador e representação da juventude.',
            'Solomon e Tummler são dois dos personagens principais.',
            'Um filme cult que divide opiniões, amado por uns e odiado por outros.'
        ],
        alternatives: ['Gummo: Vida Sem Destino']
    },
    {
        id: 36,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Multiple Maniacs',
        clues: [
            'Segundo longa-metragem de John Waters, lançado em 1970.',
            'Estrelado por Divine como Lady Divine, dona de um show de horrores itinerante.',
            'O show, chamado "Cavalcade of Perversion", apresenta atos bizarros e depravados.',
            'Lady Divine enlouquece e embarca em uma onda de assassinatos.',
            'O filme inclui a infame cena da "Rosary Job" e um ataque de uma lagosta gigante.',
            'Filmado em preto e branco com um orçamento minúsculo em Baltimore.',
            'Um exemplo clássico do cinema trash e da estética camp de Waters.',
            'Apresenta muitos dos atores recorrentes da trupe Dreamlanders.',
            'Transgressor e chocante, mesmo para os padrões do cinema underground da época.',
            'Consolidou a reputação de Waters como o "Papa do Trash".'
        ],
        alternatives: ['Multiple Maniacs']
    },
    {
        id: 37,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Begotten',
        clues: [
            'Filme de horror experimental de 1989, dirigido por E. Elias Merhige.',
            'Filmado em preto e branco, com um processo de pós-produção que removeu a maioria dos tons de cinza.',
            'A narrativa alegórica retrata a morte de Deus e o nascimento da Mãe Terra e do Filho da Carne.',
            'Não contém diálogos, utilizando apenas imagens e som para contar a história.',
            'Visualmente perturbador, com cenas de violência gráfica e automutilação.',
            'A produção levou mais de três anos para ser concluída.',
            'Considerado uma obra de arte visionária por alguns e incompreensível por outros.',
            'A estética granulada e de alto contraste contribui para a atmosfera onírica e infernal.',
            'Explora temas de criação, destruição, sofrimento e renascimento.',
            'Um filme cult extremo, admirado por sua originalidade e poder visual.'
        ],
        alternatives: ['Begotten']
    },
    {
        id: 38,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Schramm',
        clues: [
            'Filme de horror alemão de 1993, dirigido por Jörg Buttgereit.',
            'Conta a história de Lothar Schramm, um serial killer conhecido como o "Assassino do Batom".',
            'O filme explora a psique perturbada do assassino através de flashbacks e sequências surreais.',
            'A narrativa não é linear, alternando entre os crimes de Lothar e seus momentos de solidão.',
            'Conhecido por sua violência gráfica e representação explícita de necrofilia.',
            'Filmado com um orçamento baixo e uma estética crua e realista.',
            'Jörg Buttgereit é famoso por seus filmes controversos e transgressores.',
            'A solidão e a incapacidade de Lothar de se conectar com outras pessoas são temas centrais.',
            'O filme investiga a banalidade do mal e a mente de um predador.',
            'Um clássico do cinema de horror underground alemão.'
        ],
        alternatives: ['Schramm: O Assassino do Batom']
    },
    {
        id: 39,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Nekromantik',
        clues: [
            'Filme de horror alemão de 1987, dirigido por Jörg Buttgereit.',
            'Conta a história de Rob, um funcionário de uma empresa de limpeza de cenas de crime.',
            'Rob rouba um cadáver em decomposição e o leva para casa para si e sua namorada Betty.',
            'O filme explora o tema da necrofilia de forma gráfica e perturbadora.',
            'Causou grande controvérsia e foi banido em vários países.',
            'Filmado em Super 8 com um orçamento muito baixo.',
            'Apesar de seu conteúdo chocante, o filme também contém elementos de humor negro e crítica social.',
            'A trilha sonora melancólica e romântica contrasta com as imagens grotescas.',
            'Teve uma sequência, "Nekromantik 2", lançada em 1991.',
            'Um marco do cinema de horror extremo e um clássico cult para fãs do gênero.'
        ],
        alternatives: ['Nekromantik']
    },
    {
        id: 40,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Cannibal Holocaust',
        clues: [
            'Filme de terror italiano de 1980, dirigido por Ruggero Deodato.',
            'Apresentado como um "found footage" de uma equipe de documentaristas desaparecida na Amazônia.',
            'A equipe investigava tribos canibais e acabou sendo morta por elas.',
            'Conhecido por sua violência gráfica extrema, incluindo mortes reais de animais.',
            'Causou enorme controvérsia e foi banido em diversos países.',
            'O diretor foi preso sob acusação de ter matado os atores durante as filmagens.',
            'Considerado um dos filmes mais infames e perturbadores já feitos.',
            'Pioneiro do gênero "found footage" e influenciou filmes como "A Bruxa de Blair".',
            'Critica a exploração sensacionalista da mídia e a hipocrisia da civilização ocidental.',
            'A trilha sonora de Riz Ortolani é surpreendentemente bela e melancólica.'
        ],
        alternatives: ['Holocausto Canibal']
    },
    {
        id: 41,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Salo, or the 120 Days of Sodom',
        clues: [
            'Filme ítalo-francês de 1975, dirigido por Pier Paolo Pasolini.',
            'Baseado no livro "Os 120 Dias de Sodoma" do Marquês de Sade.',
            'Ambientado na República de Salò, um estado fantoche nazista na Itália durante a Segunda Guerra Mundial.',
            'Quatro libertinos fascistas sequestram um grupo de jovens e os submetem a tortura, humilhação e abuso sexual.',
            'Extremamente controverso por seu conteúdo gráfico e perturbador.',
            'Pasolini foi assassinado pouco antes do lançamento do filme.',
            'Considerado uma crítica feroz ao fascismo, ao poder e à corrupção da natureza humana.',
            'Dividido em quatro segmentos, inspirados nos círculos do Inferno de Dante.',
            'Banido em muitos países e ainda hoje é difícil de assistir para muitos espectadores.',
            'Uma obra de arte radical e intransigente, que testa os limites do cinema.'
        ],
        alternatives: ['Salò ou os 120 Dias de Sodoma', 'Salò']
    },
    {
        id: 42,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'I Spit on Your Grave',
        clues: [
            'Filme de estupro e vingança de 1978, dirigido por Meir Zarchi.',
            'Uma escritora se retira para uma casa isolada para trabalhar em seu romance.',
            'Ela é brutalmente estuprada por um grupo de homens locais.',
            'Após se recuperar, ela caça e mata seus agressores de formas violentas.',
            'Extremamente controverso por sua representação gráfica de violência sexual.',
            'Considerado por alguns como um filme de exploração misógino e por outros como um conto feminista de empoderamento.',
            'Banido em vários países e frequentemente incluído em listas de filmes mais chocantes.',
            'O título original era "Day of the Woman".',
            'Teve um remake em 2010 e várias sequências.',
            'Um clássico cult do subgênero "rape and revenge".'
        ],
        alternatives: ['A Vingança de Jennifer', 'Doce Vingança', 'Day of the Woman']
    },
    {
        id: 43,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'The Texas Chain Saw Massacre (1974)',
        clues: [
            'Filme de terror independente de 1974, dirigido por Tobe Hooper.',
            'Um grupo de amigos viaja pelo Texas e se depara com uma família de canibais.',
            'Leatherface, um assassino mascarado que usa uma motosserra, é o principal antagonista.',
            'Baseado vagamente nos crimes do serial killer Ed Gein.',
            'Conhecido por sua atmosfera crua, realista e implacavelmente aterrorizante.',
            'Apesar de sua reputação, o filme contém pouca violência gráfica explícita.',
            'Filmado com um orçamento baixo e em condições difíceis no verão texano.',
            'Considerado um dos filmes de terror mais influentes e importantes já feitos.',
            'Gerou várias sequências, remakes e prequels.',
            'A cena do jantar com a família Sawyer é particularmente icônica e perturbadora.'
        ],
        alternatives: ['O Massacre da Serra Elétrica', 'The Texas Chainsaw Massacre']
    },
    {
        id: 44,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'A Clockwork Orange',
        clues: [
            'Filme distópico de 1971, dirigido por Stanley Kubrick.',
            'Baseado no romance de Anthony Burgess.',
            'Alex DeLarge é o líder de uma gangue de jovens delinquentes em uma Londres futurista.',
            'Eles se envolvem em atos de "ultraviolência" por diversão.',
            'Alex é preso e submetido a um tratamento experimental de aversão chamado Técnica Ludovico.',
            'Explora temas de livre arbítrio, violência, controle estatal e a natureza do mal.',
            'Malcolm McDowell interpreta Alex de forma icônica.',
            'A trilha sonora, que inclui música clássica e sintetizadores Moog, é marcante.',
            'Causou grande controvérsia por seu conteúdo violento e sexual.',
            'Kubrick retirou o filme de circulação no Reino Unido devido a ameaças e imitações dos crimes retratados.'
        ],
        alternatives: ['Laranja Mecânica']
    },
    {
        id: 45,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Freaks (1932)',
        clues: [
            'Filme de terror pré-Código de 1932, dirigido por Tod Browning.',
            'Ambientado em um circo, o filme utiliza artistas de circo reais com deformidades físicas.',
            'A trapezista Cleópatra se casa com o anão Hans para roubar sua herança.',
            'Os "freaks" do circo se unem para se vingar de Cleópatra e seu amante Hércules.',
            'A frase "Gooble-gobble, we accept her, one of us!" é icônica.',
            'Chocou o público na época de seu lançamento e foi um fracasso de bilheteira.',
            'Banido no Reino Unido por 30 anos e severamente cortado nos Estados Unidos.',
            'Hoje é considerado um clássico cult e uma obra-prima compassiva e perturbadora.',
            'Explora temas de alteridade, comunidade e a monstruosidade interior versus exterior.',
            'A carreira de Tod Browning foi prejudicada pelo fracasso e controvérsia do filme.'
        ],
        alternatives: ['Monstros', 'O Circo dos Horrores']
    },
    {
        id: 46,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Un Chien Andalou',
        clues: [
            'Curta-metragem surrealista de 1929, dirigido por Luis Buñuel e Salvador Dalí.',
            'Considerado um marco do cinema surrealista.',
            'Não possui uma narrativa linear, consistindo em uma série de cenas oníricas e chocantes.',
            'A cena de abertura, em que um olho é cortado com uma navalha, é uma das mais famosas da história do cinema.',
            'Explora temas do subconsciente, desejo, repressão e o irracional.',
            'O título significa "Um Cão Andaluz" em francês.',
            'Buñuel e Dalí escreveram o roteiro baseando-se em seus próprios sonhos.',
            'O filme foi financiado pela mãe de Buñuel.',
            'A intenção era chocar e provocar a burguesia.',
            'Apesar de sua curta duração (cerca de 16 minutos), sua influência no cinema é imensa.'
        ],
        alternatives: ['Um Cão Andaluz', 'Un Perro Andaluz']
    },
    {
        id: 47,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Man Bites Dog',
        clues: [
            'Falso documentário belga de 1992, dirigido por Rémy Belvaux, André Bonzel e Benoît Poelvoorde.',
            'Filmado em preto e branco, acompanha uma equipe de filmagem que documenta a vida de um serial killer.',
            'Benoît Poelvoorde interpreta Ben, o carismático e loquaz assassino.',
            'A equipe de filmagem se torna cada vez mais cúmplice dos crimes de Ben.',
            'Uma sátira sombria e perturbadora sobre a violência na mídia e a natureza do voyeurismo.',
            'O título original em francês é "C\'est arrivé près de chez vous" ("Aconteceu Perto da Sua Casa").',
            'Ganhador do Prêmio da Crítica Internacional no Festival de Cannes.',
            'Conhecido por seu humor negro e cenas de violência chocantes.',
            'Questiona a responsabilidade ética dos documentaristas e do público.',
            'Um clássico cult do cinema independente europeu.'
        ],
        alternatives: ['C\'est arrivé près de chez vous', 'Aconteceu Perto da Sua Casa']
    },
    {
        id: 48,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Visitor Q',
        clues: [
            'Filme japonês de 2001, dirigido por Takashi Miike.',
            'Parte da série "Love Cinema", que consistia em seis filmes de baixo orçamento filmados digitalmente.',
            'Um estranho misterioso chega à casa de uma família disfuncional e começa a interferir em suas vidas.',
            'A família inclui um pai jornalista obcecado em filmar sua própria família, uma mãe prostituta e viciada em drogas, um filho vítima de bullying e uma filha que se prostitui.',
            'O filme é extremamente transgressor, com cenas de violência, incesto, necrofilia e lactação masculina.',
            'Uma comédia de horror grotesca e satírica sobre a desintegração da família japonesa moderna.',
            'Takashi Miike é conhecido por sua prolífica produção e filmes controversos.',
            'Filmado em vídeo digital com uma estética crua e documental.',
            'Apesar de seu conteúdo chocante, o filme também possui momentos de humor absurdo.',
            'Um dos filmes mais infames e divisivos de Miike.'
        ],
        alternatives: ['Bizita Q']
    },
    {
        id: 49,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Funny Games (1997)',
        clues: [
            'Filme de suspense psicológico austríaco de 1997, dirigido por Michael Haneke.',
            'Dois jovens educados e sádicos invadem a casa de veraneio de uma família.',
            'Eles submetem a família a jogos cruéis e tortura psicológica e física.',
            'O filme é uma crítica à violência na mídia e à cumplicidade do espectador.',
            'Os agressores frequentemente quebram a quarta parede, falando diretamente com o público.',
            'Conhecido por sua atmosfera tensa e perturbadora, e pela ausência de violência gráfica explícita.',
            'Haneke se recusou a fazer um filme de gênero tradicional, subvertendo as expectativas do público.',
            'O filme é intencionalmente frustrante e desconfortável de assistir.',
            'Teve um remake americano em 2007, também dirigido por Haneke, filmado plano a plano.',
            'Uma obra controversa que questiona a natureza do entretenimento violento.'
        ],
        alternatives: ['Violência Gratuita', 'Funny Games U.S.']
    },
    {
        id: 50,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Angst (1983)',
        clues: [
            'Filme de terror psicológico austríaco de 1983, dirigido por Gerald Kargl.',
            'Baseado na história real do serial killer Werner Kniesek.',
            'Um psicopata é libertado da prisão e imediatamente comete uma série de assassinatos brutais.',
            'O filme é narrado em primeira pessoa pelo assassino, revelando seus pensamentos e motivações.',
            'Conhecido por seu estilo visual inovador, com uso extensivo de câmera subjetiva e movimentos de câmera incomuns.',
            'A cinematografia de Zbigniew Rybczyński é um dos destaques do filme.',
            'Extremamente violento e perturbador, foi banido em vários países europeus.',
            'Explora a mente de um assassino de forma visceral e desconfortável.',
            'A trilha sonora eletrônica de Klaus Schulze contribui para a atmosfera opressora.',
            'Um clássico cult do cinema de horror extremo, redescoberto e reavaliado nos últimos anos.'
        ],
        alternatives: ['Angústia', 'Medo']
    },
    {
        id: 51,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Combat Shock',
        clues: [
            'Filme de guerra e horror de 1986, dirigido por Buddy Giovinazzo.',
            'Frankie, um veterano do Vietnã desempregado e viciado em drogas, luta para sustentar sua família em Staten Island.',
            'Assombrado por flashbacks da guerra e pela pobreza extrema, Frankie se desespera.',
            'O filme retrata de forma crua e pessimista os efeitos do transtorno de estresse pós-traumático.',
            'Apresenta um bebê deformado devido à exposição de Frankie ao Agente Laranja.',
            'Filmado com um orçamento muito baixo, possui uma estética granulada e sombria.',
            'Considerado um dos filmes mais deprimentes e perturbadores já feitos.',
            'A trilha sonora industrial e dissonante aumenta a sensação de angústia.',
            'Um clássico cult do cinema de exploração e do "cinema da transgressão".',
            'O final é notoriamente chocante e niilista.'
        ],
        alternatives: ['Combat Shock: O Pesadelo Americano']
    },
    {
        id: 52,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'The Greasy Strangler',
        clues: [
            'Comédia de horror de 2016, dirigida por Jim Hosking.',
            'Big Ronnie e seu filho Big Brayden administram um "Disco Tour" fraudulento em Los Angeles.',
            'Big Ronnie é secretamente um assassino em série coberto de graxa que estrangula suas vítimas.',
            'O filme é conhecido por seu humor absurdo, nojento e repetitivo.',
            'Apresenta personagens bizarros, diálogos excêntricos e situações grotescas.',
            'A estética visual é colorida e estilizada, com figurinos e cenários deliberadamente feios.',
            'Frequentemente comparado ao trabalho de John Waters e Tim & Eric.',
            'Dividiu opiniões da crítica e do público, sendo amado ou odiado.',
            'A frase "Hootie Tootie Disco Cutie" é um bordão recorrente.',
            'Um filme cult moderno que celebra o mau gosto e o bizarro.'
        ],
        alternatives: ['O Estrangulador Seboso']
    }
];
