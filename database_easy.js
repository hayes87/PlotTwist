const databaseEasy = [
    {
        id: 1,
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
            'É uma das maiores bilheteiras da história do cinema'
        ],
        alternatives: ['O Titanic', 'Titânico']
    },
    {
        id: 2,
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
            'É um dos filmes de maior bilheteira de todos os tempos'
        ],
        alternatives: ['Os Vingadores', 'Vingadores: Ultimato', 'Vingadores: Guerra Infinita', 'The Avengers']
    },
    {
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
    },
    {
        id: 11,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Star Wars',
        clues: [
            'Uma saga espacial criada por George Lucas',
            'Conta a história dos Jedi contra o Império Galáctico',
            'Darth Vader é um dos vilões mais icônicos',
            'A Força é um poder místico usado pelos personagens',
            'Apresenta robôs famosos como C-3PO e R2-D2',
            'O primeiro filme foi lançado em 1977',
            'A princesa Leia é uma das protagonistas',
            'Luke Skywalker descobre que é um Jedi',
            'Han Solo pilota a nave Millennium Falcon',
            'A frase "Que a Força esteja com você" é icônica'
        ],
        alternatives: ['Guerra nas Estrelas', 'Star Wars: Uma Nova Esperança']
    },
    {
        id: 12,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Friends',
        clues: [
            'Sitcom americana que durou 10 temporadas',
            'Se passa principalmente em Nova York',
            'O grupo principal tem 6 amigos',
            'Uma música tema muito conhecida com palmas',
            'Dois dos personagens são irmãos',
            'Inclui a famosa cafeteria Central Perk',
            'Ross e Rachel têm um relacionamento complicado',
            'Monica e Chandler acabam se casando',
            'Phoebe canta "Smelly Cat"',
            'Joey é um ator que faz comerciais e novelas'
        ],
        alternatives: ['Friends']
    },
    {
        id: 13,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Jurassic World',
        clues: [
            'Continuação moderna de uma famosa franquia de dinossauros',
            'Chris Pratt e Bryce Dallas Howard são os protagonistas',
            'O parque temático está finalmente em funcionamento',
            'O protagonista treina velociraptores',
            'Um novo dinossauro híbrido é a atração principal',
            'O Indominus Rex é criado em laboratório',
            'Lançado em 2015, foi um grande sucesso de bilheteira',
            'Mostra o parque completamente operacional pela primeira vez',
            'Blue é o nome de um dos velociraptores treinados',
            'Termina com uma batalha épica envolvendo o T-Rex original'
        ],
        alternatives: ['Jurassic World: O Mundo dos Dinossauros']
    },
    {
        id: 14,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Morgan Freeman',
        clues: [
            'Ator americano conhecido por sua voz distintiva',
            'Narrou documentários e filmes como "Marcha dos Pinguins"',
            'Ganhou o Oscar por "Million Dollar Baby"',
            'Interpretou Deus em "Todo Poderoso"',
            'Atuou como motorista em "Conduzindo Miss Daisy"',
            'Fez parte do elenco de "Um Sonho de Liberdade"',
            'Participou da trilogia Batman de Christopher Nolan',
            'Conhecido por interpretar figuras de autoridade e sabedoria',
            'Começou sua carreira no programa infantil "The Electric Company"',
            'Frequentemente faz papel de narrador em documentários'
        ],
        alternatives: ['Morgan Porterfield Freeman Jr.']
    },
    {
        id: 15,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'The Big Bang Theory',
        clues: [
            'Sitcom sobre um grupo de cientistas nerds',
            'O personagem principal é um físico teórico',
            'Uma garçonete se muda para o apartamento em frente',
            'Sheldon Cooper é conhecido por suas peculiaridades',
            'Tem uma música tema da banda Barenaked Ladies',
            'Os personagens trabalham na Caltech',
            'Bazinga! é uma frase catchphrase famosa',
            'Howard, Raj e Leonard são personagens principais',
            'Penny é a vizinha que vira amiga do grupo',
            'Durou 12 temporadas na CBS'
        ],
        alternatives: ['Big Bang: A Teoria']    },
    {
        id: 16,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Matrix',
        clues: [
            'Filme de ficção científica de 1999',
            'Protagonizado por Keanu Reeves',
            'A realidade é uma simulação de computador',
            'O protagonista é chamado de Neo',
            'Morpheus oferece duas pílulas: azul e vermelha',
            'Trinity é uma hacker que ajuda o protagonista',
            'Os agentes são programas que caçam os rebeldes',
            'O Agente Smith é o principal antagonista',
            'Famoso por suas cenas de ação em câmera lenta',
            'A frase "Siga o coelho branco" é importante'
        ],
        alternatives: ['The Matrix', 'Matrix: O Filme']
    },
    {
        id: 17,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Leonardo DiCaprio',
        clues: [
            'Ator americano que começou como ator infantil',
            'Ganhou o Oscar por "O Regresso"',
            'Protagonizou "Titanic" ao lado de Kate Winslet',
            'Trabalhou várias vezes com Martin Scorsese',
            'Interpretou um ladrão de sonhos em "A Origem"',
            'Atuou em "O Lobo de Wall Street"',
            'Fez o papel de Jack Dawson',
            'É conhecido por seu ativismo ambiental',
            'Estrelou "Django Livre" de Quentin Tarantino',
            'Interpretou Howard Hughes em "O Aviador"'
        ],
        alternatives: ['Leo DiCaprio', 'Leonardo Wilhelm DiCaprio']
    },
    {
        id: 18,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'The Office',
        clues: [
            'Sitcom americana sobre uma empresa de papel',
            'Adaptada de uma série britânica',
            'Michael Scott é o gerente regional',
            'Se passa em Scranton, Pensilvânia',
            'Filmada em estilo documentário',
            'Dwight Schrute é um vendedor excêntrico',
            'Jim e Pam têm um romance ao longo da série',
            'A empresa se chama Dunder Mifflin',
            'Conhecida por seu humor constrangedor',
            'Steve Carell interpreta o chefe principal'
        ],        alternatives: ['The Office US', 'The Office (US)']
    },
    {
        id: 19,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Senhor dos Anéis',
        clues: [
            'Trilogia baseada nos livros de J.R.R. Tolkien',
            'Dirigida por Peter Jackson',
            'A história se passa na Terra-média',
            'Um hobbit deve destruir um anel poderoso',
            'Gandalf é um mago que guia os heróis',
            'Frodo é o protagonista principal',
            'Uma sociedade de nove membros é formada',
            'Gollum é uma criatura obcecada pelo anel',
            'O último filme ganhou 11 Oscars',
            'A jornada termina em Mordor'
        ],
        alternatives: ['The Lord of the Rings', 'LOTR', 'A Sociedade do Anel']
    },
    {
        id: 20,
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Johnny Depp',
        clues: [
            'Ator americano conhecido por papéis excêntricos',
            'Interpretou Jack Sparrow em "Piratas do Caribe"',
            'Colaborou frequentemente com Tim Burton',
            'Protagonizou "Edward Mãos de Tesoura"',
            'Interpretou Willy Wonka em "A Fantástica Fábrica de Chocolate"',
            'Fez o papel do Chapeleiro Maluco em "Alice no País das Maravilhas"',
            'Atuou como um gangster em "Inimigos Públicos"',
            'Interpretou o barbeiro demoníaco Sweeney Todd',
            'Começou sua carreira na série "21 Jump Street"',
            'Famoso por suas transformações físicas para diferentes papéis'
        ],
        alternatives: ['John Christopher Depp II']
    },
    {
        id: 21,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'The Walking Dead',
        clues: [
            'Série sobre sobreviventes em um apocalipse zumbi',
            'Baseada em uma história em quadrinhos',
            'Rick Grimes é o protagonista inicial',
            'Os mortos-vivos são chamados de "walkers"',
            'Daryl Dixon usa uma besta como arma',
            'A série começa em Atlanta, Geórgia',
            'O grupo busca constantemente um local seguro',
            'Negan é um dos vilões mais memoráveis',
            'Alexandria se torna um local importante',
            'Uma das séries mais longas sobre zumbis'
        ],
        alternatives: ['TWD']
    },
    {
        id: 22,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'A Lagoa Azul',
        clues: [
            'Dois primos sobrevivem a um naufrágio e crescem em uma ilha deserta.',
            'Eles aprendem a sobreviver e se apaixonam.',
            'O filme é conhecido por suas cenas de nudez e romance adolescente.',
            'Lançado em 1980.',
            'Estrelado por Brooke Shields e Christopher Atkins.',
            'Dirigido por Randal Kleiser.',
            'Baseado em um romance de Henry De Vere Stacpoole.',
            'Filmado em Fiji e Jamaica.',
            'A trilha sonora foi composta por Basil Poledouris.',
            'Teve uma sequência em 1991.'
        ],
        alternatives: ['The Blue Lagoon']
    },
    {
        id: 23,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Jurassic Park: O Parque dos Dinossauros',
        clues: [
            'Um parque temático com dinossauros clonados é inaugurado.',
            'Os dinossauros escapam e causam estragos.',
            'Dirigido por Steven Spielberg.',
            'Lançado em 1993.',
            'Baseado em um romance de Michael Crichton.',
            'Estrelado por Sam Neill, Laura Dern e Jeff Goldblum.',
            'Revolucionou o uso de efeitos especiais CGI.',
            'A trilha sonora icônica foi composta por John Williams.',
            'Gerou várias sequências e uma franquia de sucesso.',
            '"A vida encontra um meio."'
        ],
        alternatives: ['Jurassic Park']
    },
    {
        id: 24,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Titanic',
        clues: [
            'Um romance se desenvolve a bordo de um navio transatlântico.',
            'O navio colide com um iceberg e afunda.',
            'Dirigido por James Cameron.',
            'Lançado em 1997.',
            'Estrelado por Leonardo DiCaprio e Kate Winslet.',
            'Ganhou 11 Oscars, incluindo Melhor Filme.',
            'Baseado no naufrágio real do RMS Titanic em 1912.',
            'A música tema "My Heart Will Go On" foi um grande sucesso.',
            'Um dos filmes de maior bilheteira de todos os tempos.',
            '"Eu sou o rei do mundo!"'
        ],
        alternatives: ['Titanic']
    },
    {
        id: 25,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Sexto Sentido',
        clues: [
            'Um menino consegue ver e falar com pessoas mortas.',
            'Um psicólogo infantil tenta ajudá-lo.',
            'Conhecido por seu final surpreendente.',
            'Dirigido por M. Night Shyamalan.',
            'Lançado em 1999.',
            'Estrelado por Bruce Willis e Haley Joel Osment.',
            '"Eu vejo gente morta."',
            'Indicado a seis Oscars, incluindo Melhor Filme.',
            'Um thriller psicológico com elementos sobrenaturais.',
            'O diretor faz uma participação especial como médico.'
        ],
        alternatives: ['The Sixth Sense']
    },
    {
        id: 26,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Gladiador',
        clues: [
            'Um general romano é traído e se torna um escravo.',
            'Ele busca vingança contra o imperador que assassinou sua família.',
            'Luta como gladiador em arenas romanas.',
            'Dirigido por Ridley Scott.',
            'Lançado em 2000.',
            'Estrelado por Russell Crowe e Joaquin Phoenix.',
            'Ganhou cinco Oscars, incluindo Melhor Filme e Melhor Ator.',
            '"O que fazemos na vida ecoa na eternidade."',
            'A trilha sonora foi composta por Hans Zimmer e Lisa Gerrard.',
            'Reviveu o gênero épico histórico.'
        ],
        alternatives: ['Gladiator']
    },
    {
        id: 27,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Harry Potter e a Pedra Filosofal',
        clues: [
            'Um menino órfão descobre que é um bruxo.',
            'Ele frequenta uma escola de magia e feitiçaria.',
            'Baseado no primeiro livro da série de J.K. Rowling.',
            'Lançado em 2001.',
            'Dirigido por Chris Columbus.',
            'Estrelado por Daniel Radcliffe, Rupert Grint e Emma Watson.',
            'Apresenta o mundo mágico de Hogwarts.',
            'O vilão principal é Lord Voldemort.',
            'O esporte bruxo Quadribol é introduzido.',
            '"Você é um bruxo, Harry."'
        ],
        alternatives: ['Harry Potter and the Sorcerer\\\'s Stone', 'Harry Potter and the Philosopher\\\'s Stone']
    },
    {
        id: 28,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Senhor dos Anéis: A Sociedade do Anel',
        clues: [
            'Um hobbit herda um anel mágico e perigoso.',
            'Ele embarca em uma jornada para destruir o anel.',
            'Baseado no primeiro volume da obra de J.R.R. Tolkien.',
            'Dirigido por Peter Jackson.',
            'Lançado em 2001.',
            'Estrelado por Elijah Wood, Ian McKellen e Viggo Mortensen.',
            'Filmado na Nova Zelândia.',
            'Apresenta a Terra-média e seus diversos povos.',
            'O vilão principal é Sauron.',
            '"Um Anel para a todos governar..."'
        ],
        alternatives: ['The Lord of the Rings: The Fellowship of the Ring']
    },
    {
        id: 29,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Homem-Aranha',
        clues: [
            'Um adolescente é picado por uma aranha radioativa e ganha superpoderes.',
            'Ele se torna um super-herói que combate o crime em Nova York.',
            'Dirigido por Sam Raimi.',
            'Lançado em 2002.',
            'Estrelado por Tobey Maguire, Kirsten Dunst e Willem Dafoe.',
            'O vilão é o Duende Verde.',
            '"Com grandes poderes vêm grandes responsabilidades."',
            'Baseado no personagem da Marvel Comics.',
            'Um dos primeiros grandes sucessos de bilheteira de super-heróis do século XXI.',
            'A cena do beijo de cabeça para baixo se tornou icônica.'
        ],
        alternatives: ['Spider-Man']
    },
    {
        id: 30,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Piratas do Caribe: A Maldição do Pérola Negra',
        clues: [
            'Um ferreiro se une a um capitão pirata excêntrico para resgatar sua amada.',
            'Eles enfrentam piratas amaldiçoados que se transformam em esqueletos à luz da lua.',
            'Dirigido por Gore Verbinski.',
            'Lançado em 2003.',
            'Estrelado por Johnny Depp, Orlando Bloom e Keira Knightley.',
            'Baseado na atração dos parques da Disney.',
            'O personagem Capitão Jack Sparrow se tornou icônico.',
            'A trilha sonora foi composta por Klaus Badelt e Hans Zimmer.',
            'Iniciou uma franquia de sucesso.',
            '"Por que o rum sempre acaba?"'
        ],
        alternatives: ['Pirates of the Caribbean: The Curse of the Black Pearl']
    },
    {
        id: 31,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Procurando Nemo',
        clues: [
            'Um peixe-palhaço superprotetor procura por seu filho perdido no oceano.',
            'Ele conta com a ajuda de uma peixinha esquecida.',
            'Animação da Pixar.',
            'Lançado em 2003.',
            'Dirigido por Andrew Stanton e Lee Unkrich.',
            'Vencedor do Oscar de Melhor Animação.',
            'Personagens memoráveis incluem Dory, Marlin e Crush.',
            '"Continue a nadar."',
            'Ambientado na Grande Barreira de Corais da Austrália.',
            'Aborda temas de família, amizade e superação de medos.'
        ],
        alternatives: ['Finding Nemo']
    },
    {
        id: 32,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Lost',
        clues: [
            'Sobreviventes de um acidente de avião lutam para sobreviver em uma ilha misteriosa.',
            'A ilha possui segredos estranhos e perigosos.',
            'Criada por J.J. Abrams, Damon Lindelof e Jeffrey Lieber.',
            'Exibida de 2004 a 2010.',
            'Conhecida por seus flashbacks, flashforwards e mistérios complexos.',
            'Personagens icônicos incluem Jack, Kate, Sawyer e Locke.',
            'A Iniciativa Dharma e "Os Outros" são elementos centrais da trama.',
            'Os números 4, 8, 15, 16, 23, 42 se tornaram famosos.',
            'O final da série gerou muita discussão e controvérsia.',
            '"Nós temos que voltar!"'
        ],
        alternatives: ['Lost']
    },
    {
        id: 33,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Batman Begins',
        clues: [
            'A origem do Cavaleiro das Trevas é recontada de forma mais sombria e realista.',
            'Bruce Wayne treina com a Liga das Sombras.',
            'Dirigido por Christopher Nolan.',
            'Lançado em 2005.',
            'Estrelado por Christian Bale, Michael Caine e Liam Neeson.',
            'O vilão principal é o Espantalho, com Ra\'s al Ghul como mentor.',
            'Iniciou a trilogia do Cavaleiro das Trevas.',
            'Explora os medos de Bruce Wayne e sua transformação em Batman.',
            '"Por que caímos? Para aprendermos a nos levantar."',
            'O Batmóvel, chamado de Tumbler, tem um design militarista.'
        ],
        alternatives: ['Batman Begins']
    },
    {
        id: 34,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: '007 - Cassino Royale',
        clues: [
            'James Bond em sua primeira missão como agente 00.',
            'Ele enfrenta um banqueiro de terroristas em um jogo de pôquer de altas apostas.',
            'Reboot da franquia James Bond com um novo ator no papel principal.',
            'Dirigido por Martin Campbell.',
            'Lançado em 2006.',
            'Estrelado por Daniel Craig como James Bond e Eva Green como Vesper Lynd.',
            'Baseado no primeiro romance de Ian Fleming sobre James Bond.',
            'Apresenta um Bond mais brutal e menos experiente.',
            'O vilão é Le Chiffre, interpretado por Mads Mikkelsen.',
            '"Vodka martini. Batido, não mexido."'
        ],
        alternatives: ['Casino Royale']
    },
    {
        id: 35,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Homem de Ferro',
        clues: [
            'Um bilionário inventor de armas constrói uma armadura tecnológica para escapar do cativeiro.',
            'Ele decide usar sua tecnologia para combater o mal.',
            'Dirigido por Jon Favreau.',
            'Lançado em 2008.',
            'Estrelado por Robert Downey Jr. como Tony Stark.',
            'Iniciou o Universo Cinematográfico Marvel (MCU).',
            'O vilão é Obadiah Stane, o Monge de Ferro.',
            '"Eu sou o Homem de Ferro." (frase final que quebrou convenções)',
            'Pepper Potts e James Rhodes são personagens importantes.',
            'A inteligência artificial J.A.R.V.I.S. auxilia o protagonista.'
        ],
        alternatives: ['Iron Man']
    },
    {
        id: 36,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Batman: O Cavaleiro das Trevas',
        clues: [
            'O Batman enfrenta seu arqui-inimigo, um gênio do crime caótico.',
            'O filme explora temas de ordem versus anarquia.',
            'Dirigido por Christopher Nolan.',
            'Lançado em 2008.',
            'Estrelado por Christian Bale e Heath Ledger como o Coringa.',
            'Heath Ledger ganhou um Oscar póstumo por sua atuação.',
            'Considerado um dos melhores filmes de super-heróis de todos os tempos.',
            '"Por que tão sério?"',
            'Harvey Dent se transforma no vilão Duas-Caras.',
            'Filmado parcialmente com câmeras IMAX.'
        ],
        alternatives: ['The Dark Knight']
    },
    {
        id: 37,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Avatar',
        clues: [
            'Um ex-fuzileiro naval paraplégico é enviado a um planeta alienígena.',
            'Ele controla um corpo híbrido para interagir com os nativos Na\'vi.',
            'Dirigido por James Cameron.',
            'Lançado em 2009.',
            'Revolucionou o uso da tecnologia 3D no cinema.',
            'Um dos filmes de maior bilheteira de todos os tempos.',
            'Ambientado no exuberante mundo de Pandora.',
            'Os Na\'vi são uma raça humanoide azul com forte conexão com a natureza.',
            'O protagonista se apaixona por uma Na\'vi e luta para proteger seu povo.',
            'O mineral unobtanium é o principal interesse dos humanos em Pandora.'
        ],
        alternatives: ['Avatar']
    },
    {
        id: 38,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Breaking Bad',
        clues: [
            'Um professor de química com câncer terminal começa a produzir metanfetamina.',
            'Ele se associa a um ex-aluno para garantir o futuro financeiro de sua família.',
            'Criada por Vince Gilligan.',
            'Exibida de 2008 a 2013.',
            'Estrelada por Bryan Cranston como Walter White e Aaron Paul como Jesse Pinkman.',
            'Considerada uma das melhores séries de televisão de todos os tempos.',
            '"Eu sou aquele que bate." (I am the one who knocks)',
            'O alter ego de Walter White é Heisenberg.',
            'Ambientada em Albuquerque, Novo México.',
            'Ganhou inúmeros prêmios, incluindo vários Emmys.'
        ],
        alternatives: ['Breaking Bad: A Química do Mal']
    },
    {
        id: 39,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'A Origem',
        clues: [
            'Um ladrão especializado em extrair informações invadindo os sonhos das pessoas.',
            'Ele recebe a tarefa de implantar uma ideia na mente de um alvo.',
            'Dirigido por Christopher Nolan.',
            'Lançado em 2010.',
            'Estrelado por Leonardo DiCaprio, Joseph Gordon-Levitt e Elliot Page.',
            'Conhecido por sua trama complexa e visualmente impressionante.',
            'Explora múltiplos níveis de sonhos dentro de sonhos.',
            'O conceito de "totem" é usado para distinguir sonho de realidade.',
            'A cena do corredor giratório é icônica.',
            'O final ambíguo com o pião gerou muitas teorias.'
        ],
        alternatives: ['Inception']
    },
    {
        id: 40,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Game of Thrones',
        clues: [
            'Nove famílias nobres lutam pelo controle do Trono de Ferro em Westeros.',
            'Intrigas políticas, guerra e criaturas míticas são elementos centrais.',
            'Baseada na série de livros "As Crônicas de Gelo e Fogo" de George R.R. Martin.',
            'Produzida pela HBO e exibida de 2011 a 2019.',
            'Conhecida por suas reviravoltas chocantes e mortes de personagens importantes.',
            'Casas proeminentes incluem Stark, Lannister e Targaryen.',
            'Dragões, Caminhantes Brancos e magia são elementos fantásticos.',
            '"O inverno está chegando."',
            'Filmada em diversas locações, incluindo Irlanda do Norte, Croácia e Islândia.',
            'Gerou um fenômeno cultural global.'
        ],
        alternatives: ['A Guerra dos Tronos']
    },
    {
        id: 41,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Os Vingadores',
        clues: [
            'Um grupo de super-heróis se une para impedir que Loki conquiste a Terra.',
            'Primeiro grande crossover do Universo Cinematográfico Marvel.',
            'Dirigido por Joss Whedon.',
            'Lançado em 2012.',
            'Reúne Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra e Gavião Arqueiro.',
            'A Batalha de Nova York é o clímax do filme.',
            'Nick Fury, diretor da S.H.I.E.L.D., forma a equipe.',
            'O Tesseract é o artefato cósmico que Loki busca.',
            '"Se não pudermos proteger a Terra, pode ter certeza que a vingaremos."',
            'Estabeleceu o modelo para futuros filmes de equipe de super-heróis.'
        ],
        alternatives: ['The Avengers', 'Marvel\\\'s The Avengers']
    },
    {
        id: 42,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Frozen: Uma Aventura Congelante',
        clues: [
            'Uma rainha recém-coroada acidentalmente usa seu poder para prender seu reino em um inverno eterno.',
            'Sua irmã parte em uma jornada para encontrá-la e reverter o feitiço.',
            'Animação da Walt Disney Animation Studios.',
            'Lançado em 2013.',
            'Inspirado no conto de fadas "A Rainha da Neve" de Hans Christian Andersen.',
            'A música "Let It Go" ("Livre Estou") se tornou um fenômeno mundial.',
            'Personagens principais incluem Elsa, Anna, Kristoff, Sven e Olaf.',
            'Ganhou dois Oscars, incluindo Melhor Animação e Melhor Canção Original.',
            'Explora temas de amor fraternal e autoaceitação.',
            'Olaf é um boneco de neve que sonha com o verão.'
        ],
        alternatives: ['Frozen']
    },
    {
        id: 43,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Guardiões da Galáxia',
        clues: [
            'Um grupo de desajustados intergalácticos se une para proteger um artefato poderoso.',
            'Conhecido por seu humor irreverente e trilha sonora nostálgica dos anos 70/80.',
            'Dirigido por James Gunn.',
            'Lançado em 2014.',
            'Parte do Universo Cinematográfico Marvel.',
            'Personagens incluem Senhor das Estrelas, Gamora, Drax, Rocket Raccoon e Groot.',
            'A "Awesome Mix Vol. 1" é a fita cassete do protagonista.',
            'O vilão principal é Ronan, o Acusador.',
            '"Eu sou Groot."',
            'Expandiu o lado cósmico do MCU.'
        ],
        alternatives: ['Guardians of the Galaxy']
    },
    {
        id: 44,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Mad Max: Estrada da Fúria',
        clues: [
            'Em um deserto pós-apocalíptico, um andarilho relutantemente ajuda uma guerreira a libertar um grupo de mulheres.',
            'Perseguições de carros intensas e visuais impressionantes são marcas registradas.',
            'Dirigido por George Miller.',
            'Lançado em 2015.',
            'Estrelado por Tom Hardy como Max Rockatansky e Charlize Theron como Furiosa.',
            'Ganhou seis Oscars, principalmente em categorias técnicas.',
            'Considerado um dos melhores filmes de ação de todos os tempos.',
            'O vilão é Immortan Joe.',
            '"Que dia! Que dia adorável!"',
            'Filmado principalmente no deserto da Namíbia.'
        ],
        alternatives: ['Mad Max: Fury Road']
    },
    {
        id: 45,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Star Wars: O Despertar da Força',
        clues: [
            'Uma catadora de sucata e um stormtrooper desertor se unem à Resistência.',
            'Eles buscam o lendário Luke Skywalker para combater a Primeira Ordem.',
            'Sétimo episódio da saga Skywalker.',
            'Dirigido por J.J. Abrams.',
            'Lançado em 2015.',
            'Introduz novos personagens como Rey, Finn e Kylo Ren.',
            'Retorno de personagens clássicos como Han Solo, Leia Organa e Chewbacca.',
            'O vilão Kylo Ren idolatra Darth Vader.',
            'BB-8 é o novo droide carismático.',
            '"Chewie, estamos em casa."'
        ],
        alternatives: ['Star Wars: The Force Awakens']
    },
    {
        id: 46,
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Stranger Things',
        clues: [
            'Em uma pequena cidade nos anos 80, o desaparecimento de um menino desencadeia eventos sobrenaturais.',
            'Uma garota com poderes psicocinéticos ajuda os amigos do menino a procurá-lo.',
            'Criada pelos Irmãos Duffer.',
            'Lançada pela Netflix em 2016.',
            'Homenageia filmes e cultura pop dos anos 80.',
            'O Mundo Invertido é uma dimensão paralela sombria.',
            'Personagens principais incluem Eleven, Mike, Dustin, Lucas e Will.',
            'O Demogorgon é o monstro da primeira temporada.',
            'Winona Ryder interpreta a mãe do menino desaparecido.',
            'A trilha sonora sintetizada é uma marca registrada.'
        ],
        alternatives: ['Stranger Things']
    },
    {
        id: 47,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Mulher-Maravilha',
        clues: [
            'Uma princesa amazona deixa sua ilha paradisíaca para ajudar a acabar com uma guerra mundial.',
            'Ela descobre seus plenos poderes e seu verdadeiro destino.',
            'Dirigido por Patty Jenkins.',
            'Lançado em 2017.',
            'Estrelado por Gal Gadot como Diana Prince.',
            'Parte do Universo Estendido DC (DCEU).',
            'Ambientado durante a Primeira Guerra Mundial.',
            'Steve Trevor é o piloto americano que cai na ilha das Amazonas.',
            'Ares, o deus da guerra, é o principal antagonista.',
            'A Terra de Ninguém é uma cena de batalha icônica.'
        ],
        alternatives: ['Wonder Woman']
    },
    {
        id: 48,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Pantera Negra',
        clues: [
            'Após a morte de seu pai, o príncipe de uma nação africana tecnologicamente avançada assume o trono.',
            'Ele deve proteger seu povo e sua identidade como o herói mascarado.',
            'Dirigido por Ryan Coogler.',
            'Lançado em 2018.',
            'Estrelado por Chadwick Boseman como T\'Challa.',
            'Parte do Universo Cinematográfico Marvel.',
            'Wakanda é a nação fictícia rica em vibranium.',
            'O vilão Killmonger desafia o trono de T\'Challa.',
            'Primeiro filme de super-herói indicado ao Oscar de Melhor Filme.',
            '"Wakanda para sempre!"'
        ],
        alternatives: ['Black Panther']
    },
    {
        id: 49,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Vingadores: Guerra Infinita',
        clues: [
            'Os Vingadores e seus aliados tentam impedir que um titã louco colete todas as Joias do Infinito.',
            'O vilão planeja eliminar metade da vida no universo.',
            'Dirigido pelos Irmãos Russo.',
            'Lançado em 2018.',
            'Reúne a maioria dos heróis do Universo Cinematográfico Marvel.',
            'Thanos é o principal antagonista.',
            'Conhecido por seu final chocante e sombrio.',
            '"Dread it. Run from it. Destiny still arrives."',
            'A Ordem Negra são os generais de Thanos.',
            'Muitos heróis são desintegrados no final.'
        ],
        alternatives: ['Avengers: Infinity War']
    },
    {
        id: 50,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Coringa',
        clues: [
            'Um comediante fracassado com problemas mentais se transforma em um ícone anarquista.',
            'Estudo de personagem sombrio e perturbador do famoso vilão do Batman.',
            'Dirigido por Todd Phillips.',
            'Lançado em 2019.',
            'Estrelado por Joaquin Phoenix, que ganhou o Oscar de Melhor Ator.',
            'Não faz parte do Universo Estendido DC principal.',
            'Ambientado em uma Gotham City decadente no início dos anos 80.',
            'Inspirado em filmes como "Taxi Driver" e "O Rei da Comédia".',
            'A cena da dança na escadaria se tornou icônica.',
            'Explora temas de doença mental, desigualdade social e violência.'
        ],
        alternatives: ['Joker']
    },
    {
        id: 51,
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Vingadores: Ultimato',
        clues: [
            'Os heróis restantes tentam reverter as ações de Thanos e trazer de volta os que foram perdidos.',
            'Conclusão épica da Saga do Infinito do Universo Cinematográfico Marvel.',
            'Dirigido pelos Irmãos Russo.',
            'Lançado em 2019.',
            'Envolve viagem no tempo para recuperar as Joias do Infinito.',
            'Culminou em uma batalha final massiva contra Thanos e seu exército.',
            'Sacrifícios heroicos são feitos.',
            '"Eu sou inevitável." / "E eu... sou o Homem de Ferro."',
            'Tornou-se o filme de maior bilheteira de todos os tempos por um período.',
            'Marca o fim da jornada para alguns dos Vingadores originais.'
        ],
        alternatives: ['Avengers: Endgame']
    }
];
