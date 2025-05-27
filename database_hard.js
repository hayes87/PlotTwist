const databaseHard = [
    {
        id: 1,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Donnie Darko',
        clues: [
            'Filme de culto independente lançado em 2001',
            'Mistura elementos de ficção científica, terror e drama psicológico',
            'Ambientado no final dos anos 80 em uma cidade suburbana',
            'O protagonista é um adolescente com problemas psicológicos',
            'Um coelho gigante chamado Frank aparece como uma visão',
            'Envolve conceitos de viagem no tempo e universos paralelos',
            'O avião cai na casa do protagonista',
            'Jake Gyllenhaal interpreta o personagem-título',
            'A música "Mad World" de Gary Jules se tornou famosa por causa do filme',
            'Termina com um evento cíclico que envolve um motor de avião'
        ],
        alternatives: ['Donnie Darko']
    },
    {
        id: 2,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Cidade de Deus',
        clues: [
            'Filme brasileiro lançado em 2002',
            'Baseado em um livro de Paulo Lins',
            'Dirigido por Fernando Meirelles e Kátia Lund',
            'Retrata a violência em uma favela do Rio de Janeiro',
            'A narrativa abrange três décadas, dos anos 60 aos 80',
            'O protagonista é um jovem que sonha em ser fotógrafo',
            'Um dos antagonistas é conhecido como "Zé Pequeno"',
            'Apresenta a frase "Para entrar para o crime não tem idade certa"',
            'Foi indicado a quatro categorias do Oscar',
            'Buscapé é o narrador e personagem principal'
        ],
        alternatives: ['City of God']
    },
    {
        id: 3,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Twin Peaks',
        clues: [
            'Série criada por David Lynch e Mark Frost',
            'Originalmente exibida entre 1990 e 1991, com retorno em 2017',
            'Se passa em uma pequena cidade no noroeste dos Estados Unidos',
            'A trama começa com a investigação do assassinato de uma adolescente',
            'O agente do FBI Dale Cooper é encarregado do caso',
            'Mistura drama policial com elementos sobrenaturais',
            'Contém uma dimensão alternativa conhecida como "Black Lodge"',
            'A frase "The owls are not what they seem" é recorrente',
            'A vítima do assassinato se chama Laura Palmer',
            'Conhecida por seu tom surreal e personagens excêntricos'
        ],
        alternatives: ['Twin Peaks']
    },
    {
        id: 4,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Akira Kurosawa',
        clues: [
            'Diretor de cinema japonês considerado um dos mais influentes da história',
            'Sua carreira se estendeu de 1943 a 1993',
            'Conhecido por seus filmes de samurai e adaptações de Shakespeare',
            'Seu filme "Rashomon" introduziu uma técnica narrativa com múltiplas perspectivas',
            '"Os Sete Samurais" é uma de suas obras mais famosas',
            'Influenciou diretores como George Lucas e Sergio Leone',
            '"Trono Manchado de Sangue" é sua adaptação de Macbeth',
            'Frequentemente colaborou com o ator Toshiro Mifune',
            '"Ran" é sua adaptação de Rei Lear ambientada no Japão feudal',
            'Seu filme "Yojimbo" foi a base para "Por um Punhado de Dólares"'
        ],
        alternatives: ['Kurosawa']
    },
    {
        id: 5,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'The Wire',
        clues: [
            'Série dramática da HBO que foi ao ar de 2002 a 2008',
            'Criada por David Simon, ex-repórter policial',
            'Ambientada em Baltimore, Maryland',
            'Cada temporada foca em uma instituição diferente da cidade',
            'Frequentemente citada como uma das melhores séries de todos os tempos',
            'Explora temas como o tráfico de drogas, sindicatos portuários e sistema educacional',
            'O personagem Omar Little se tornou icônico na série',
            'Stringer Bell e Avon Barksdale são importantes traficantes na trama',
            'O detetive Jimmy McNulty é um dos protagonistas',
            'Conhecida por seu realismo e crítica social às instituições americanas'
        ],
        alternatives: ['A Escuta']
    },
    {
        id: 6,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Blade Runner',
        clues: [
            'Filme de ficção científica neo-noir dirigido por Ridley Scott',
            'Lançado em 1982, é baseado em um romance de Philip K. Dick',
            'Se passa em Los Angeles em um futuro distópico',
            'O protagonista é um ex-policial que caça androides renegados',
            'Os androides são conhecidos como "replicantes"',
            'Harrison Ford interpreta o personagem principal',
            'Contém o famoso monólogo "Lágrimas na chuva"',
            'O personagem principal se chama Rick Deckard',
            'A Tyrell Corporation é a empresa que fabrica os replicantes',
            'Ganhou uma sequência chamada "Blade Runner 2049" em 2017'
        ],
        alternatives: ['Blade Runner - O Caçador de Andróides', 'O Caçador de Andróides']
    },
    {
        id: 7,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Ingmar Bergman',
        clues: [
            'Diretor, escritor e produtor sueco',
            'Conhecido por filmes que exploram temas existenciais e psicológicos',
            'Sua carreira abrangeu mais de 60 anos e mais de 60 filmes',
            '"O Sétimo Selo" mostra um cavaleiro jogando xadrez com a Morte',
            'Frequentemente trabalhou com os atores Max von Sydow e Liv Ullmann',
            '"Gritos e Sussurros" foi indicado ao Oscar de Melhor Filme',
            '"Persona" é considerado um de seus trabalhos mais experimentais',
            'Ganhou múltiplos prêmios no Festival de Cannes',
            'Nasceu em Uppsala, Suécia, em 1918',
            '"Cenas de um Casamento" foi adaptado para minissérie e depois para filme'
        ],
        alternatives: ['Ernst Ingmar Bergman']
    },
    {
        id: 8,
        type: 'OBJETO',
        icon: 'fas fa-cube',
        answer: 'Monolito',
        clues: [
            'Objeto misterioso que aparece em um filme de ficção científica',
            'É um grande bloco retangular preto',
            'Aparece em diferentes pontos da história humana no filme',
            'Sua primeira aparição é na pré-história, influenciando primitivos hominídeos',
            'Também é encontrado enterrado na Lua',
            'Está relacionado com o avanço da inteligência e tecnologia humana',
            'É extraterrestre em sua origem',
            'No final do filme, transforma um astronauta em uma entidade cósmica',
            'Aparece no filme "2001: Uma Odisseia no Espaço"',
            'Dirigido por Stanley Kubrick em colaboração com Arthur C. Clarke'
        ],
        alternatives: ['Monólito', 'O Monolito', 'Monolito de 2001']
    },
    {
        id: 9,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Persona',
        clues: [
            'Filme sueco em preto e branco lançado em 1966',
            'Dirigido por Ingmar Bergman',
            'Conta a história de uma atriz que perde a capacidade de falar',
            'Uma enfermeira é designada para cuidar dela em uma casa de praia',
            'Explora temas de identidade, personalidade e dualidade',
            'A fotografia é de Sven Nykvist',
            'Possui uma famosa cena em que os rostos das duas mulheres se fundem',
            'Liv Ullmann e Bibi Andersson são as protagonistas',
            'Contém uma sequência de abertura surreal com imagens fragmentadas',
            'É considerado um dos filmes mais importantes do cinema de arte'
        ],
        alternatives: ['Persona']
    },
    {
        id: 10,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'True Detective',
        clues: [
            'Série antológica da HBO com temporadas independentes',
            'A primeira temporada se passa na Louisiana',
            'Mistura elementos de drama policial e terror cósmico',
            'Na primeira temporada, dois detetives investigam um assassinato ritual',
            'Referências a "O Rei de Amarelo" aparecem na primeira temporada',
            'Matthew McConaughey e Woody Harrelson estrelam a primeira temporada',
            'O criador da série é Nic Pizzolatto',
            'A frase "O tempo é um círculo plano" se tornou icônica',
            'O personagem de McConaughey, Rust Cohle, tem uma visão niilista do mundo',
            'A narrativa ocorre em diferentes linhas temporais que se entrelaçam'
        ],
        alternatives: ['True Detective']
    },
    {
        id: 11,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Rashomon',
        clues: [
            'Filme japonês de 1950 dirigido por Akira Kurosawa',
            'A narrativa apresenta diferentes versões do mesmo crime',
            'Se passa no Japão feudal durante uma época de crise',
            'Toshiro Mifune interpreta um dos personagens principais',
            'O título se refere a um antigo portão de Kyoto',
            'Introduziu o conceito de narrativas múltiplas no cinema',
            'Ganhou o Leão de Ouro no Festival de Veneza',
            'A história é contada através de quatro testemunhos diferentes',
            'Explora temas como verdade, percepção e natureza humana',
            'Influenciou profundamente o cinema mundial'
        ],
        alternatives: ['Rashomon', 'Rashômon']
    },
    {
        id: 12,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Federico Fellini',
        clues: [
            'Diretor de cinema italiano (1920-1993)',
            'Conhecido por seu estilo visual surreal e fantástico',
            'Dirigiu "8½", um filme sobre fazer filmes',
            'Vencedor de quatro Oscar de Melhor Filme Estrangeiro',
            'O termo "felliniano" foi criado para descrever seu estilo',
            'Começou sua carreira durante o Neorrealismo italiano',
            'Casado com a atriz Giulietta Masina',
            'Dirigiu "La Dolce Vida" e "A Estrada da Vida"',
            'Trabalhou frequentemente com o compositor Nino Rota',
            'Conhecido por misturar realidade e fantasia em seus filmes'
        ],
        alternatives: ['Fellini']
    },
    {
        id: 13,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Espelho',
        clues: [
            'Filme soviético de 1975 dirigido por Andrei Tarkovsky',
            'Estrutura narrativa não-linear e autobiográfica',
            'Mistura memórias de infância com eventos históricos',
            'Usa três atrizes diferentes para representar a mesma personagem',
            'Incorpora filmagens documentais da Segunda Guerra Mundial',
            'A mãe do diretor é uma figura central na narrativa',
            'Conhecido por suas longas tomadas contemplativas',
            'Explora temas de memória, sonhos e nostalgia',
            'O título original em russo é "Zerkalo"',
            'Considerado um dos filmes mais pessoais de Tarkovsky'
        ],
        alternatives: ['Zerkalo', 'The Mirror']
    },
    {
        id: 14,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Yasujirō Ozu',
        clues: [
            'Diretor japonês conhecido por seu estilo minimalista',
            'Famoso por filmes sobre família e mudança social',
            '"Era uma Vez em Tóquio" é sua obra mais conhecida',
            'Conhecido por posicionar a câmera baixa e estática',
            'Seus filmes raramente têm movimentos de câmera',
            'Frequentemente trabalhou com os atores Chishū Ryū e Setsuko Hara',
            'Especialista em dramas familiares (shomin-geki)',
            'Ativo principalmente entre 1927 e 1962',
            'Desenvolveu um estilo visual único e reconhecível',
            'Muitos de seus filmes exploram o conceito de "mono no aware"'
        ],
        alternatives: ['Ozu Yasujirō', 'Yasujiro Ozu']
    },
    {
        id: 15,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Dekalog',
        clues: [
            'Série polonesa de 10 episódios dirigida por Krzysztof Kieślowski',
            'Cada episódio é baseado em um dos Dez Mandamentos',
            'Se passa em um conjunto habitacional em Varsóvia',
            'Produzida originalmente para a televisão polonesa',
            'Lançada em 1989',
            'Dois episódios foram expandidos em longas-metragens',
            'Mistura drama psicológico com questões morais',
            'Cada história é independente mas compartilha o mesmo cenário',
            'Stanley Kubrick a considerava uma das melhores obras para TV',
            'Explora dilemas éticos da vida moderna'
        ],
        alternatives: ['Decálogo', 'The Decalogue']
    },
    {
        id: 16,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'A Trilogia das Cores',
        clues: [
            'Três filmes dirigidos por Krzysztof Kieślowski',
            'Cada filme representa uma cor da bandeira francesa',
            'Azul, Branco e Vermelho são os títulos',
            'Representam Liberdade, Igualdade e Fraternidade',
            'Juliette Binoche estrela o primeiro filme',
            'Julie Delpy aparece no terceiro filme',
            'Produção franco-polonesa dos anos 90',
            'Cada filme explora temas filosóficos diferentes',
            'Ganhou vários prêmios em festivais internacionais',
            'O compositor Zbigniew Preisner fez as trilhas sonoras'
        ],
        alternatives: ['Three Colors Trilogy', 'Trois Couleurs']
    },
    {
        id: 17,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Werner Herzog',
        clues: [
            'Diretor alemão do Novo Cinema Alemão',
            'Conhecido por documentários e filmes de ficção',
            'Trabalhou frequentemente com Klaus Kinski',
            'Dirigiu "Aguirre, a Cólera dos Deuses"',
            'Seu documentário "Grizzly Man" é muito aclamado',
            'Famoso por filmar em locações extremas',
            'Dirigiu "Fitzcarraldo" na Amazônia',
            'Conhecido por seu estilo único de narração',
            'Explora temas de obsessão e natureza',
            'Pioneiro do cinema alemão contemporâneo'
        ],
        alternatives: ['Werner Herzog Stipetić']
    },
    {
        id: 18,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Hiroshima Mon Amour',
        clues: [
            'Filme francês de 1959 dirigido por Alain Resnais',
            'Roteiro de Marguerite Duras',
            'Um romance entre uma francesa e um japonês',
            'Se passa em Hiroshima após a bomba atômica',
            'Mistura documentário com ficção',
            'Conhecido por sua estrutura narrativa inovadora',
            'Emmanuelle Riva é a protagonista',
            'Explora temas de memória e trauma',
            'Um marco do cinema da Nouvelle Vague',
            'Usa flashbacks de forma revolucionária'
        ],
        alternatives: ['Hiroshima, Meu Amor']
    },
    {
        id: 19,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Encouraçado Potemkin',
        clues: [
            'Filme mudo soviético de 1925.',
            'Dirigido por Sergei Eisenstein.',
            'Retrata a rebelião de marinheiros contra oficiais czaristas.',
            'Famoso pela cena da escadaria de Odessa.',
            'Considerado um marco na história do cinema e na técnica de montagem.',
            'Originalmente concebido como parte de uma série de filmes comemorativos.',
            'A trilha sonora original foi de Edmund Meisel, mas outras foram compostas.',
            'Proibido em vários países por seu conteúdo revolucionário.',
            'Usa a montagem para criar impacto emocional e intelectual.',
            'O filme é dividido em cinco atos.'
        ],
        alternatives: ['Bronenosets Potemkin', 'Battleship Potemkin', 'Potemkin']
    },
    {
        id: 20,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Metropolis',
        clues: [
            'Filme expressionista alemão de 1927.',
            'Dirigido por Fritz Lang.',
            'Ambientado em uma cidade futurista distópica.',
            'Retrata a divisão entre a classe trabalhadora e os planejadores da cidade.',
            'A personagem robô Maria é icônica.',
            'Um dos primeiros longas-metragens de ficção científica.',
            'Conhecido por seus efeitos visuais inovadores para a época.',
            'A história envolve um mediador que tenta unir as classes.',
            'Teve várias versões e restaurações ao longo dos anos.',
            '"O mediador entre a cabeça e as mãos deve ser o coração."'
        ],
        alternatives: ['Metropolis']
    },
    {
        id: 21,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Anjo Azul',
        clues: [
            'Filme alemão de 1930.',
            'Dirigido por Josef von Sternberg.',
            'Lançou Marlene Dietrich ao estrelato internacional.',
            'Um professor respeitável se apaixona por uma cantora de cabaré.',
            'A obsessão do professor o leva à ruína.',
            'Baseado no romance "Professor Unrat" de Heinrich Mann.',
            'Marlene Dietrich canta a famosa canção "Falling in Love Again".',
            'Considerado um clássico do cinema alemão e do período de Weimar.',
            'Filmado simultaneamente em versões alemã e inglesa.',
            'Explora temas de desejo, poder e humilhação.'
        ],
        alternatives: ['Der Blaue Engel', 'The Blue Angel']
    },
    {
        id: 22,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'A Regra do Jogo',
        clues: [
            'Filme francês de 1939.',
            'Dirigido por Jean Renoir.',
            'Uma sátira social da burguesia francesa às vésperas da Segunda Guerra Mundial.',
            'A história se passa durante uma caçada de fim de semana em uma propriedade rural.',
            'Explora as complexas relações amorosas e sociais entre os personagens.',
            'Inicialmente mal recebido, hoje é considerado uma obra-prima.',
            'Renoir também atua no filme como o personagem Octave.',
            'Conhecido pelo uso de profundidade de campo e longas tomadas.',
            'O filme foi censurado e cortado após seu lançamento.',
            '"Há uma coisa terrível, é que todo mundo tem suas razões."'
        ],
        alternatives: ['La Règle du Jeu', 'The Rules of the Game']
    },
    {
        id: 23,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Cidadão Kane',
        clues: [
            'Filme americano de 1941.',
            'Dirigido, co-escrito, produzido e estrelado por Orson Welles.',
            'Considerado por muitos críticos como um dos maiores filmes de todos os tempos.',
            'A história da ascensão e queda de um magnata da imprensa.',
            'A narrativa é construída em torno da busca pelo significado da última palavra de Kane, "Rosebud".',
            'Inovador em sua cinematografia, narrativa não linear e uso de profundidade de campo.',
            'Baseado em parte na vida do magnata William Randolph Hearst.',
            'Ganhou o Oscar de Melhor Roteiro Original.',
            'A mansão de Kane, Xanadu, é um símbolo de seu isolamento.',
            'O filme marcou a estreia de Welles no cinema aos 25 anos.'
        ],
        alternatives: ['Citizen Kane']
    },
    {
        id: 24,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Casablanca',
        clues: [
            'Filme americano de drama romântico de 1942.',
            'Dirigido por Michael Curtiz.',
            'Ambientado durante a Segunda Guerra Mundial na cidade marroquina controlada pela França de Vichy.',
            'Um expatriado americano dono de um bar reencontra uma antiga paixão.',
            'Estrelado por Humphrey Bogart, Ingrid Bergman e Paul Henreid.',
            'Ganhou o Oscar de Melhor Filme, Melhor Diretor e Melhor Roteiro.',
            'Famoso por suas citações icônicas, como "Toque outra vez, Sam".',
            'A canção "As Time Goes By" é central na trama.',
            'Explora temas de amor, sacrifício e dever em tempos de guerra.',
            'O final no aeroporto é uma das cenas mais famosas da história do cinema.'
        ],
        alternatives: ['Casablanca']
    },
    {
        id: 25,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Ladrões de Bicicleta',
        clues: [
            'Filme neorrealista italiano de 1948.',
            'Dirigido por Vittorio De Sica.',
            'Retrata a luta de um homem pobre para encontrar sua bicicleta roubada, essencial para seu trabalho.',
            'Filmado em locações em Roma com atores não profissionais em sua maioria.',
            'Considerado uma obra-prima do cinema mundial e um pilar do neorrealismo.',
            'Explora temas de pobreza, desespero e a dignidade humana.',
            'O relacionamento entre o pai e seu filho pequeno é central na história.',
            'Recebeu um Oscar honorário por ser o filme estrangeiro mais notável.',
            'A simplicidade da narrativa e a crueza da realidade são características marcantes.',
            'O título original é "Ladri di biciclette".'
        ],
        alternatives: ['Ladri di biciclette', 'Bicycle Thieves', 'The Bicycle Thief']
    },
    {
        id: 26,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Rashomon',
        clues: [
            'Filme japonês de 1950.',
            'Dirigido por Akira Kurosawa.',
            'A história de um crime (um assassinato e um estupro) é contada de múltiplas perspectivas contraditórias.',
            'Introduziu Kurosawa e o cinema japonês ao público ocidental.',
            'Ganhou o Leão de Ouro no Festival de Veneza e um Oscar honorário.',
            'Estrelado por Toshiro Mifune.',
            'O "efeito Rashomon" se tornou um termo para descrever narrativas subjetivas e contraditórias.',
            'Baseado em dois contos de Ryūnosuke Akutagawa.',
            'A ambientação é no Japão feudal, em um portão em ruínas.',
            'Explora a natureza da verdade e da subjetividade humana.'
        ],
        alternatives: ['Rashōmon']
    },
    {
        id: 27,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Os Sete Samurais',
        clues: [
            'Filme épico japonês de 1954.',
            'Dirigido por Akira Kurosawa.',
            'Um grupo de camponeses contrata sete ronin (samurais sem mestre) para protegê-los de bandidos.',
            'Considerado um dos filmes mais influentes e refilmados da história.',
            'Estrelado por Toshiro Mifune e Takashi Shimura.',
            'Com mais de três horas de duração, é um épico de ação e drama.',
            'Inspirou o faroeste americano "Sete Homens e um Destino".',
            'Explora temas de honra, dever, classe social e sacrifício.',
            'A preparação para a batalha e a batalha final são sequências memoráveis.',
            'O filme estabeleceu muitos tropos do gênero de "reunir a equipe".'
        ],
        alternatives: ['Shichinin no Samurai', 'Seven Samurai']
    },
    {
        id: 28,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Um Corpo que Cai',
        clues: [
            'Filme americano de suspense psicológico de 1958.',
            'Dirigido por Alfred Hitchcock.',
            'Um detetive aposentado com acrofobia é contratado para seguir a esposa de um amigo.',
            'Estrelado por James Stewart e Kim Novak.',
            'Conhecido por seu uso inovador da técnica de câmera "dolly zoom" para transmitir vertigem.',
            'Explora temas de obsessão, identidade e manipulação.',
            'Ambientado em São Francisco.',
            'A trilha sonora de Bernard Herrmann é icônica.',
            'Frequentemente listado entre os melhores filmes de todos os tempos, superando "Cidadão Kane" em algumas pesquisas.',
            'O filme tem um final surpreendente e perturbador.'
        ],
        alternatives: ['Vertigo']
    },
    {
        id: 29,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Acossado',
        clues: [
            'Filme francês de 1960, marco da Nouvelle Vague.',
            'Dirigido por Jean-Luc Godard.',
            'Um pequeno criminoso rouba um carro, mata um policial e foge para Paris.',
            'Estrelado por Jean-Paul Belmondo e Jean Seberg.',
            'Conhecido por seu estilo inovador, incluindo jump cuts e diálogos improvisados.',
            'Homenageia o cinema noir americano.',
            'A personagem de Patricia vendendo o New York Herald Tribune na Champs-Élysées é uma imagem icônica.',
            'O roteiro foi baseado em uma ideia de François Truffaut.',
            'Captura a energia e o espírito da juventude parisiense da época.',
            '"Se você não gosta do mar, se você não gosta da montanha, se você não gosta da cidade... vá se foder!"'
        ],
        alternatives: ['À bout de souffle', 'Breathless']
    },
    {
        id: 30,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'A Doce Vida',
        clues: [
            'Filme ítalo-francês de 1960.',
            'Dirigido por Federico Fellini.',
            'Retrata a vida de um jornalista de fofocas em Roma ao longo de sete dias e noites.',
            'Estrelado por Marcello Mastroianni.',
            'Conhecido por suas imagens surreais e episódicas.',
            'A cena da Fontana di Trevi com Anita Ekberg é uma das mais famosas da história do cinema.',
            'O termo "paparazzo" se originou de um personagem deste filme.',
            'Ganhou a Palma de Ouro no Festival de Cannes.',
            'Explora temas de hedonismo, decadência, celebridade e busca por significado.',
            'O filme é uma crítica à alta sociedade romana da época.'
        ],
        alternatives: ['La Dolce Vita']
    },
    {
        id: 31,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Psicose',
        clues: [
            'Filme americano de suspense e terror de 1960.',
            'Dirigido por Alfred Hitchcock.',
            'Uma secretária rouba dinheiro de seu chefe e foge, parando em um motel isolado.',
            'Estrelado por Anthony Perkins, Janet Leigh e Vera Miles.',
            'Famoso pela cena do chuveiro e sua reviravolta chocante.',
            'Considerado um dos filmes mais influentes do gênero de terror.',
            'A trilha sonora de Bernard Herrmann, apenas com cordas, é icônica.',
            'Norman Bates e o Bates Motel se tornaram parte da cultura popular.',
            'Baseado no romance de Robert Bloch.',
            'Filmado em preto e branco com um orçamento relativamente baixo.'
        ],
        alternatives: ['Psycho']
    },
    {
        id: 32,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Lawrence da Arábia',
        clues: [
            'Filme épico britânico de 1962.',
            'Dirigido por David Lean.',
            'Conta a história de T.E. Lawrence, um oficial britânico que uniu tribos árabes contra os turcos durante a Primeira Guerra Mundial.',
            'Estrelado por Peter O\'Toole e Omar Sharif.',
            'Ganhou sete Oscars, incluindo Melhor Filme e Melhor Diretor.',
            'Conhecido por sua cinematografia deslumbrante do deserto, filmada em Super Panavision 70.',
            'A trilha sonora de Maurice Jarre é épica e memorável.',
            'Explora a complexa personalidade de Lawrence e seu papel na Revolta Árabe.',
            'O filme tem quase quatro horas de duração e um intervalo.',
            '"Nada está escrito."'
        ],
        alternatives: ['Lawrence of Arabia']
    },
    {
        id: 33,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: '8½',
        clues: [
            'Filme ítalo-francês de 1963.',
            'Dirigido por Federico Fellini.',
            'Um diretor de cinema famoso luta com um bloqueio criativo enquanto tenta fazer seu próximo filme.',
            'Estrelado por Marcello Mastroianni como Guido Anselmi.',
            'Mistura realidade, sonhos, memórias e fantasias.',
            'Considerado uma obra-prima autobiográfica e um dos melhores filmes sobre cinema.',
            'Ganhou o Oscar de Melhor Filme Estrangeiro.',
            'O título se refere ao número de filmes que Fellini havia dirigido até então (contando colaborações como frações).',
            'A trilha sonora de Nino Rota é icônica.',
            'A cena de abertura com o engarrafamento e o sonho de voar é famosa.'
        ],
        alternatives: ['Otto e mezzo', 'Fellini 8½']
    },
    {
        id: 34,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Dr. Fantástico',
        clues: [
            'Comédia de humor negro britânico-americana de 1964.',
            'Dirigido por Stanley Kubrick.',
            'Satiriza a Guerra Fria e a ameaça de aniquilação nuclear.',
            'Um general americano ordena um ataque nuclear à União Soviética.',
            'Peter Sellers interpreta três papéis diferentes, incluindo o personagem-título.',
            'Baseado no romance "Red Alert" de Peter George.',
            'Famoso por suas citações e cenas icônicas, como o Major Kong cavalgando a bomba.',
            '"Senhores, não podem brigar aqui! Esta é a Sala de Guerra!"',
            'O personagem Dr. Strangelove é um ex-cientista nazista.',
            'O filme termina com uma montagem de explosões nucleares ao som de "We\'ll Meet Again".'
        ],
        alternatives: ['Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb']
    },
    {
        id: 35,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: '2001: Uma Odisseia no Espaço',
        clues: [
            'Filme épico de ficção científica de 1968.',
            'Dirigido por Stanley Kubrick.',
            'Abrange a evolução humana desde os primatas até a exploração espacial e além.',
            'Baseado em um conto de Arthur C. Clarke, que co-escreveu o roteiro.',
            'Conhecido por seus efeitos visuais revolucionários, realismo científico e narrativa enigmática.',
            'O computador HAL 9000 é um dos antagonistas mais memoráveis do cinema.',
            'Uso proeminente de música clássica, como "Assim Falou Zaratustra" e "Danúbio Azul".',
            'O monólito negro é um elemento misterioso e recorrente.',
            'Explora temas de inteligência artificial, evolução, tecnologia e o lugar da humanidade no universo.',
            'O final com o "Star Child" é aberto a múltiplas interpretações.'
        ],
        alternatives: ['2001: A Space Odyssey']
    },
    {
        id: 36,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Era uma Vez no Oeste',
        clues: [
            'Faroeste espaguete épico de 1968.',
            'Dirigido por Sergio Leone.',
            'A história envolve uma disputa por terras férteis e a chegada da ferrovia.',
            'Estrelado por Henry Fonda (em um papel de vilão atípico), Charles Bronson, Claudia Cardinale e Jason Robards.',
            'A trilha sonora de Ennio Morricone é uma das mais famosas da história do cinema.',
            'Conhecido por seus longos closes, ritmo lento e violência estilizada.',
            'O personagem de Bronson, "Harmonica", busca vingança.',
            'Considerado por muitos como o melhor faroeste espaguete de Leone.',
            'A cena de abertura com os três pistoleiros na estação de trem é icônica.',
            'O filme é uma meditação sobre o fim do Velho Oeste.'
        ],
        alternatives: ['C\'era una volta il West', 'Once Upon a Time in the West']
    },
    {
        id: 37,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Poderoso Chefão',
        clues: [
            'Filme americano de drama criminal de 1972.',
            'Dirigido por Francis Ford Coppola.',
            'Retrata a família mafiosa Corleone e a ascensão de Michael Corleone ao poder.',
            'Baseado no romance de Mario Puzo.',
            'Estrelado por Marlon Brando, Al Pacino, James Caan e Robert Duvall.',
            'Ganhou o Oscar de Melhor Filme, Melhor Ator (Brando) e Melhor Roteiro Adaptado.',
            'Considerado um dos maiores e mais influentes filmes de todos os tempos.',
            '"Vou fazer uma oferta que ele não poderá recusar."',
            'A trilha sonora de Nino Rota é icônica.',
            'Explora temas de família, poder, lealdade e o sonho americano corrompido.'
        ],
        alternatives: ['The Godfather']
    },
    {
        id: 38,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Aguirre, a Cólera dos Deuses',
        clues: [
            'Filme alemão de drama histórico de 1972.',
            'Dirigido por Werner Herzog.',
            'Conta a história de uma expedição espanhola em busca de El Dorado na Amazônia no século XVI.',
            'Estrelado por Klaus Kinski como o conquistador megalomaníaco Don Lope de Aguirre.',
            'Filmado em condições extremamente difíceis na selva peruana.',
            'Conhecido pela atuação intensa de Kinski e pela atmosfera onírica e opressora.',
            'A relação tumultuada entre Herzog e Kinski durante as filmagens é lendária.',
            'A trilha sonora hipnótica foi composta por Popol Vuh.',
            'Explora temas de loucura, obsessão e a futilidade da conquista.',
            'A cena final com Aguirre em uma jangada cercado por macacos é icônica.'
        ],
        alternatives: ['Aguirre, der Zorn Gottes', 'Aguirre, the Wrath of God']
    },
    {
        id: 39,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Chinatown',
        clues: [
            'Filme americano neo-noir de mistério de 1974.',
            'Dirigido por Roman Polanski.',
            'Um detetive particular em Los Angeles dos anos 1930 investiga um caso de adultério que se transforma em uma conspiração maior.',
            'Estrelado por Jack Nicholson e Faye Dunaway.',
            'O roteiro de Robert Towne ganhou o Oscar de Melhor Roteiro Original.',
            'Considerado um dos melhores exemplos do gênero neo-noir.',
            'Explora temas de corrupção, incesto e a fragilidade da justiça.',
            'A frase "Esqueça, Jake. É Chinatown" é uma das mais famosas do cinema.',
            'John Huston interpreta o vilão Noah Cross.',
            'A ambientação histórica e a atmosfera sombria são marcantes.'
        ],
        alternatives: ['Chinatown']
    },
    {
        id: 40,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Um Estranho no Ninho',
        clues: [
            'Filme americano de drama de 1975.',
            'Dirigido por Miloš Forman.',
            'Um criminoso se finge de louco para escapar da prisão e é enviado para uma instituição psiquiátrica.',
            'Estrelado por Jack Nicholson e Louise Fletcher.',
            'Ganhou os cinco principais Oscars: Melhor Filme, Melhor Diretor, Melhor Ator, Melhor Atriz e Melhor Roteiro Adaptado.',
            'Baseado no romance de Ken Kesey.',
            'O personagem de Nicholson, Randle McMurphy, desafia a autoridade da enfermeira Ratched.',
            'Explora temas de individualidade, conformidade e a natureza da sanidade.',
            'O Chefe Bromden, um paciente nativo americano, é o narrador silencioso.',
            'A cena da pescaria é um momento de libertação para os pacientes.'
        ],
        alternatives: ['One Flew Over the Cuckoo\'s Nest']
    },
    {
        id: 41,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Taxi Driver',
        clues: [
            'Filme americano neo-noir de drama psicológico de 1976.',
            'Dirigido por Martin Scorsese.',
            'Um veterano do Vietnã mentalmente instável trabalha como motorista de táxi noturno em Nova York.',
            'Estrelado por Robert De Niro.',
            'Conhecido por sua representação sombria e violenta da alienação urbana.',
            'A frase "Você está falando comigo?" (You talkin\' to me?) é icônica.',
            'Jodie Foster interpreta uma prostituta adolescente que o protagonista tenta salvar.',
            'O roteiro foi escrito por Paul Schrader.',
            'Ganhou a Palma de Ouro no Festival de Cannes.',
            'A trilha sonora de Bernard Herrmann foi sua última obra.'
        ],
        alternatives: ['Taxi Driver']
    },
    {
        id: 42,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Apocalypse Now',
        clues: [
            'Filme épico de guerra americano de 1979.',
            'Dirigido por Francis Ford Coppola.',
            'Durante a Guerra do Vietnã, um capitão do exército é enviado em uma missão secreta para assassinar um coronel renegado.',
            'Baseado vagamente no romance "Coração das Trevas" de Joseph Conrad.',
            'Estrelado por Martin Sheen, Marlon Brando e Robert Duvall.',
            'A produção do filme foi notoriamente longa e problemática.',
            'Conhecido por suas imagens surreais e perturbadoras da guerra.',
            'A cena do ataque de helicópteros ao som de "A Cavalgada das Valquírias" é icônica.',
            '"Eu amo o cheiro de napalm pela manhã."',
            'Explora temas de loucura, moralidade e os horrores da guerra.'
        ],
        alternatives: ['Apocalypse Now']
    },
    {
        id: 43,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Blade Runner: O Caçador de Androides',
        clues: [
            'Filme americano de ficção científica neo-noir de 1982.',
            'Dirigido por Ridley Scott.',
            'Em um futuro distópico, um caçador de androides aposentado é forçado a caçar um grupo de replicantes fugitivos.',
            'Baseado no romance "Androides Sonham com Ovelhas Elétricas?" de Philip K. Dick.',
            'Estrelado por Harrison Ford.',
            'Conhecido por seu visual cyberpunk influente e atmosfera sombria.',
            'Explora temas de identidade, humanidade e inteligência artificial.',
            'O monólogo final de Roy Batty, "Lágrimas na Chuva", é famoso.',
            'Existem múltiplas versões do filme, incluindo o Director\'s Cut e o Final Cut.',
            'A trilha sonora de Vangelis é icônica.'
        ],
        alternatives: ['Blade Runner']
    },
    {
        id: 44,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Paris, Texas',
        clues: [
            'Filme de drama de estrada de 1984.',
            'Dirigido por Wim Wenders.',
            'Um homem emerge do deserto após quatro anos desaparecido e tenta se reconectar com sua família.',
            'Estrelado por Harry Dean Stanton, Nastassja Kinski e Dean Stockwell.',
            'O roteiro foi escrito por Sam Shepard.',
            'Ganhou a Palma de Ouro no Festival de Cannes.',
            'Conhecido por sua cinematografia deslumbrante das paisagens americanas e sua trilha sonora de Ry Cooder.',
            'Explora temas de alienação, memória e a busca por redenção.',
            'A cena do peep show com o espelho de mão única é central.',
            'O título se refere a uma cidade no Texas que o protagonista acredita ser o local de seu nascimento.'
        ],
        alternatives: ['Paris, Texas']
    },
    {
        id: 45,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Brazil: O Filme',
        clues: [
            'Comédia de humor negro distópica britânica de 1985.',
            'Dirigido por Terry Gilliam.',
            'Em uma sociedade burocrática e totalitária, um funcionário público sonhador se envolve com uma mulher considerada terrorista.',
            'Estrelado por Jonathan Pryce, Robert De Niro e Kim Greist.',
            'Conhecido por seu visual retrofuturista e crítica à burocracia e ao totalitarismo.',
            'O título se refere à canção "Aquarela do Brasil".',
            'A luta de Gilliam com o estúdio pela versão final do filme é famosa.',
            'Explora temas de escapismo, amor e a opressão do indivíduo pelo sistema.',
            'O personagem de De Niro, Archibald Tuttle, é um encanador clandestino.',
            'O filme tem um final sombrio e ambíguo.'
        ],
        alternatives: ['Brazil']
    },
    {
        id: 46,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Veludo Azul',
        clues: [
            'Filme americano neo-noir de mistério de 1986.',
            'Dirigido por David Lynch.',
            'Um jovem encontra uma orelha humana cortada em um campo e se envolve em um submundo sombrio de sua cidade aparentemente pacata.',
            'Estrelado por Kyle MacLachlan, Isabella Rossellini, Dennis Hopper e Laura Dern.',
            'Conhecido por seu estilo surrealista, imagens perturbadoras e exploração do lado sombrio da América suburbana.',
            'O personagem de Dennis Hopper, Frank Booth, é um dos vilões mais memoráveis do cinema.',
            'A música "Blue Velvet" de Bobby Vinton é usada de forma proeminente.',
            'O filme foi controverso em seu lançamento, mas desde então se tornou um clássico cult.',
            'Explora temas de inocência perdida, voyeurismo e a dualidade da natureza humana.',
            'A relação entre Jeffrey e Dorothy é central e perturbadora.'
        ],
        alternatives: ['Blue Velvet']
    },
    {
        id: 47,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Pulp Fiction: Tempo de Violência',
        clues: [
            'Filme americano neo-noir de crime de 1994.',
            'Dirigido por Quentin Tarantino.',
            'Apresenta múltiplas histórias interligadas de criminosos em Los Angeles.',
            'Conhecido por sua narrativa não linear, diálogos afiados e referências à cultura pop.',
            'Estrelado por John Travolta, Samuel L. Jackson, Uma Thurman e Bruce Willis.',
            'Ganhou a Palma de Ouro no Festival de Cannes e o Oscar de Melhor Roteiro Original.',
            'Revitalizou a carreira de John Travolta.',
            'Cenas icônicas incluem a dança no Jack Rabbit Slim\'s e a overdose de Mia Wallace.',
            '"Ezequiel 25:17" é um versículo bíblico frequentemente citado (de forma incorreta) por Jules.',
            'Considerado um dos filmes mais influentes da década de 1990.'
        ],
        alternatives: ['Pulp Fiction']
    },
    {
        id: 48,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Fogo Contra Fogo',
        clues: [
            'Filme americano de drama criminal de 1995.',
            'Dirigido por Michael Mann.',
            'Retrata o confronto entre um detetive de homicídios obcecado e um ladrão de bancos profissional.',
            'Primeiro filme a apresentar Al Pacino e Robert De Niro atuando juntos em cena.',
            'Conhecido por suas sequências de assalto realistas e intensas, especialmente o tiroteio no centro da cidade.',
            'Explora a vida pessoal e profissional dos dois protagonistas e como seus mundos se colidem.',
            'A cena do café entre Pacino e De Niro é um momento chave do filme.',
            'Baseado em um episódio da série de TV "L.A. Takedown", também dirigida por Mann.',
            'Val Kilmer, Tom Sizemore e Ashley Judd também estão no elenco.',
            'Um épico criminal com mais de duas horas e meia de duração.'
        ],
        alternatives: ['Heat']
    }
];
