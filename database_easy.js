const databaseEasy = [
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Titanic',
        clues: [
            'Foi lançado em 1997 e dirigido por James Cameron',
            'É baseado em um desastre real ocorrido em 1912',
            'O filme ganhou 11 Oscars, incluindo Melhor Filme',
            'Uma das cenas mais famosas mostra os protagonistas na proa de um navio',
            'A trilha sonora inclui a música "My Heart Will Go On" por Celine Dion',
            'Leonardo DiCaprio e Kate Winslet são os protagonistas',
            'A trama envolve um romance entre pessoas de classes sociais diferentes',
            'O filme mostra o naufrágio de um grande navio de passageiros',
            'Os personagens principais são Jack Dawson e Rose DeWitt Bukater',
            'É uma das maiores bilheterias da história do cinema'
        ],
        alternatives: ['O Titanic', 'Titânico']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Vingadores',
        clues: [
            'É uma produção da Marvel Studios',
            'Reúne super-heróis de diferentes filmes em uma equipe',
            'O vilão principal quer coletar as Joias do Infinito',
            'Entre os personagens estão Homem de Ferro, Capitão América e Thor',
            'O filme é dirigido pelos irmãos Russo',
            'Thanos é o principal antagonista',
            'Termina com metade da população do universo desaparecendo',
            'Foi dividido em duas partes: "Guerra Infinita" e "Ultimato"',
            'O Homem de Ferro faz um sacrifício final para salvar o universo',
            'É um dos filmes de maior bilheteria de todos os tempos'
        ],
        alternatives: ['Os Vingadores', 'Vingadores: Ultimato', 'Vingadores: Guerra Infinita', 'The Avengers']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Stranger Things',
        clues: [
            'É uma série original da Netflix',
            'Se passa nos anos 80 em uma pequena cidade americana',
            'Envolve experimentos governamentais secretos',
            'Um grupo de crianças enfrenta criaturas de outra dimensão',
            'Uma das personagens principais tem poderes telecinéticos',
            'A cidade onde se passa a série se chama Hawkins',
            'Apresenta referências a jogos de RPG como Dungeons & Dragons',
            'Um dos monstros principais é chamado de Demogorgon',
            'A personagem com poderes se chama Onze (ou Eleven)',
            'O "Mundo Invertido" é uma dimensão alternativa importante na trama'
        ],
        alternatives: ['Stranger Things', 'Coisas Estranhas']
    },
    {
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Tom Hanks',
        clues: [
            'É um ator americano nascido em 1956',
            'Ganhou o Oscar de Melhor Ator duas vezes consecutivas',
            'Interpretou um náufrago que faz amizade com uma bola de vôlei',
            'Estrelou o filme "Forrest Gump"',
            'Trabalhou com o diretor Steven Spielberg em vários filmes',
            'Deu voz ao personagem Woody na franquia "Toy Story"',
            'Em um filme famoso, seu personagem fica preso no aeroporto',
            'Interpretou o Capitão Miller em "O Resgate do Soldado Ryan"',
            'No filme "Apollo 13", interpretou o astronauta Jim Lovell',
            'Conhecido por seus papéis em "Náufrago" e "O Terminal"'
        ],
        alternatives: ['Thomas Jeffrey Hanks', 'Thomas Hanks']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Game of Thrones',
        clues: [
            'Série de fantasia baseada nos livros de George R.R. Martin',
            'A trama envolve disputas por um trono de ferro',
            'Se passa em um mundo fictício com várias famílias nobres',
            'Dragões e mortos-vivos são elementos importantes da trama',
            'Uma das famílias principais é chamada Stark',
            'Tem como slogan "O inverno está chegando"',
            'Apresenta locais como Winterfell, Porto Real e a Muralha',
            'A série foi produzida pela HBO',
            'O personagem anão Tyrion Lannister é interpretado por Peter Dinklage',
            'O último episódio foi ao ar em 2019 após 8 temporadas'
        ],
        alternatives: ['GOT', 'A Guerra dos Tronos', 'As Crônicas de Gelo e Fogo']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Harry Potter',
        clues: [
            'Baseado em uma série de livros escritos por J.K. Rowling',
            'O protagonista é um jovem bruxo com uma cicatriz na testa',
            'A história se passa principalmente em uma escola de magia',
            'Os personagens principais formam um trio de amigos',
            'O vilão principal é conhecido como "Aquele-Que-Não-Deve-Ser-Nomeado"',
            'Envolve objetos mágicos como varinhas, vassouras e uma capa de invisibilidade',
            'A escola onde estudam se chama Hogwarts',
            'Existe um esporte chamado Quadribol jogado em vassouras voadoras',
            'O protagonista pertence à casa Grifinória',
            'Lord Voldemort é o nome do antagonista principal'
        ],
        alternatives: ['Harry Potter e a Pedra Filosofal', 'Harry Potter e as Relíquias da Morte', 'Harry Potter e a Câmara Secreta', 'A Saga Harry Potter']
    },
    {
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Meryl Streep',
        clues: [
            'Atriz americana nascida em 1949',
            'Detentora do recorde de indicações ao Oscar',
            'Venceu o Oscar três vezes',
            'Interpretou Margaret Thatcher em "A Dama de Ferro"',
            'Atuou como a editora de moda Miranda Priestly em "O Diabo Veste Prada"',
            'Protagonizou o musical "Mamma Mia!"',
            'Seu nome verdadeiro é Mary Louise Streep',
            'Participou de "Kramer vs. Kramer" ao lado de Dustin Hoffman',
            'Fez o papel da chef Julia Child no filme "Julie & Julia"',
            'É considerada uma das maiores atrizes de sua geração'
        ],
        alternatives: ['Mary Louise Streep']
    },
    {
        type: 'OBJETO',
        icon: 'fas fa-cube',
        answer: 'Sabre de Luz',
        clues: [
            'É uma arma icônica de uma famosa franquia de ficção científica',
            'Emite uma lâmina de energia colorida',
            'É utilizada principalmente por Jedi e Sith',
            'Pode cortar quase qualquer material',
            'Faz um som característico quando ativada e movimentada',
            'Geralmente tem cores como azul, verde ou vermelho',
            'É construída em torno de um cristal kyber',
            'Usada em duelos nos filmes Star Wars',
            'O vilão Darth Vader utiliza um de cor vermelha',
            'Luke Skywalker recebe um azul que pertencia a seu pai'
        ],
        alternatives: ['Sabre de Luz', 'Lightsaber', 'Espada de Luz', 'Sabre Laser', 'Espada Jedi']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Jurassic Park',
        clues: [
            'Dirigido por Steven Spielberg e lançado em 1993',
            'Baseado em um livro de Michael Crichton',
            'A trama se passa em uma ilha com um parque temático',
            'Utiliza tecnologia de clonagem para recriar criaturas extintas',
            'John Hammond é o criador do parque',
            'Apresenta cenas icônicas com um Tiranossauro Rex',
            'Os Velociraptores são retratados como predadores extremamente inteligentes',
            'Dr. Alan Grant é um dos personagens principais',
            'Uma famosa frase do filme é "A vida encontra um jeito"',
            'Foi um marco nos efeitos especiais, misturando animatrônicos e CGI'
        ],
        alternatives: ['Parque dos Dinossauros', 'Jurassic Park: O Parque dos Dinossauros']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Breaking Bad',
        clues: [
            'Série americana produzida e exibida pela AMC',
            'O protagonista é um professor de química do ensino médio',
            'A trama se passa principalmente em Albuquerque, Novo México',
            'O personagem principal descobre que tem câncer de pulmão',
            'Envolve a produção e distribuição de metanfetamina',
            'Jesse Pinkman é um ex-aluno que se torna parceiro do protagonista',
            'O personagem principal adota o pseudônimo "Heisenberg"',
            'Walter White é o nome do protagonista',
            'Tem como spin-off a série "Better Call Saul"',
            'O slogan "Tread Lightly" (Pise Levemente) é icônico na série'
        ],
        alternatives: ['Breaking Bad']
    }
];
