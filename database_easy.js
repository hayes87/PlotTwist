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
            'É uma das maiores bilheteiras da história do cinema'
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
            'É um dos filmes de maior bilheteira de todos os tempos'
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
    },
    {
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
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Poderoso Chefão',
        clues: [
            'Filme americano de 1972 dirigido por Francis Ford Coppola',
            'Baseado no romance de Mario Puzo',
            'Acompanha a família mafiosa Corleone',
            'Vito Corleone é o patriarca da família',
            'Michael Corleone, interpretado por Al Pacino, é o filho mais novo',
            'O filme explora temas de poder, lealdade e vingança',
            'Apresenta a icônica cena do cavalo na cama',
            'Ganhou 3 Oscars, incluindo Melhor Filme',
            'É considerado um dos maiores filmes da história do cinema',
            'A trilogia também inclui "O Poderoso Chefão II" e "O Poderoso Chefão III"'
        ],
        alternatives: ['O Poderoso Chefão', 'The Godfather Part II']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Forrest Gump',
        clues: [
            'Filme americano de 1994 dirigido por Robert Zemeckis',
            'Estrelado por Tom Hanks no papel principal',
            'Conta a história da vida de um homem com QI abaixo da média',
            '"A vida é como uma caixa de chocolates, você nunca sabe o que vai encontrar."',
            'Ganha a Medalha de Honra do Congresso por bravura no Vietnã',
            'Inspira um fenômeno de corrida cross-country',
            'Conhece vários presidentes dos EUA',
            'Seu melhor amigo se chama Bubba e sonha em ser capitão de um barco de camarão',
            'Jenny é seu grande amor de infância',
            'Ganhador de 6 Oscars, incluindo Melhor Filme'
        ],
        alternatives: ['Forrest Gump O Contador de Histórias']
    },
    {
        type: 'SÉRIE',
        icon: 'fas fa-tv',
        answer: 'Friends',
        clues: [
            'Sitcom americana popular exibida de 1994 a 2004',
            'Criada por David Crane e Marta Kauffman',
            'Acompanha a vida de seis amigos em Nova York',
            'O café Central Perk é um ponto de encontro frequente',
            'Personagens principais: Rachel, Monica, Phoebe, Joey, Chandler e Ross',
            '"How you doin\'?" é um bordão famoso de um dos personagens',
            'Ross é paleontólogo e tem um macaco de estimação chamado Marcel',
            'Phoebe canta músicas excêntricas como "Smelly Cat"',
            'Monica é uma chef de cozinha competitiva e organizada',
            'O apartamento de Monica tem uma moldura amarela no olho mágico da porta'
        ],
        alternatives: ['Friends TV Show']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'O Rei Leão',
        clues: [
            'Filme de animação da Disney de 1994',
            'A história se passa na Savana Africana',
            'Simba é o jovem príncipe leão destinado a ser rei',
            'Seu tio Scar trama para tomar o trono',
            'Mufasa, pai de Simba, é o rei no início do filme',
            '"Hakuna Matata" é uma canção famosa do filme',
            'Timão e Pumba são um suricato e um javali, amigos de Simba',
            'Rafiki é um mandril sábio e conselheiro real',
            'As hienas Shenzi, Banzai e Ed são aliadas de Scar',
            'Inspirado em Hamlet de Shakespeare'
        ],
        alternatives: ['The Lion King']
    },
    {
        type: 'PESSOA',
        icon: 'fas fa-user',
        answer: 'Steven Spielberg',
        clues: [
            'Diretor e produtor de cinema americano nascido em 1946',
            'Considerado um dos pioneiros da Nova Hollywood',
            'Dirigiu filmes icônicos como "Tubarão", "E.T. - O Extraterrestre" e "Jurassic Park"',
            'Co-fundador da DreamWorks Studios',
            'Ganhou o Oscar de Melhor Diretor por "A Lista de Schindler" e "O Resgate do Soldado Ryan"',
            'Seus filmes frequentemente exploram temas de infância, aventura e encontros com o extraordinário',
            'Conhecido por seu apelo comercial e aclamação da crítica',
            'Produziu franquias de sucesso como "Indiana Jones" e "De Volta para o Futuro"',
            'Seu primeiro grande sucesso foi "Tubarão" em 1975',
            'Frequentemente colabora com o compositor John Williams'
        ],
        alternatives: ['Spielberg']
    },
    {
        type: 'FILME',
        icon: 'fas fa-film',
        answer: 'Matrix',
        clues: [
            'Filme de ficção científica de 1999 dirigido pelas Wachowskis',
            'Estrelado por Keanu Reeves como Neo',
            'Popularizou o efeito visual "bullet time"',
            'Humanos estão presos em uma realidade simulada',
            'Morpheus é o capitão da nave Nabucodonosor',
            'Trinity é uma hacker habilidosa e interesse amoroso de Neo',
            'Agente Smith é o principal antagonista do programa',
            'A escolha entre a pílula azul e a pílula vermelha é um momento crucial',
            '"Existe uma diferença entre conhecer o caminho e percorrer o caminho."',
            'Combina elementos de cyberpunk, artes marciais e filosofia'
        ],
        alternatives: ['The Matrix']
    }
];
