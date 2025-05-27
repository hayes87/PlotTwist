const databaseHard = [
    {
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
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Maya Deren',
        clues: [
            'Pioneira do cinema experimental americano',
            'Seu filme mais famoso é "Meshes of the Afternoon"',
            'Trabalhou com cinema avant-garde nos anos 40',
            'Influenciou o cinema experimental',
            'Estudou e filmou rituais vodu no Haiti',
            'Escreveu sobre teoria do cinema',
            'Conhecida por seus filmes não-narrativos',
            'Usava técnicas de edição inovadoras',
            'Importante figura do cinema independente',
            'Também era dançarina e coreógrafa'
        ],
        alternatives: ['Eleonora Derenkowska']
    }
    // Adicionar mais 280 entradas similares aqui...
];
