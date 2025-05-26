# Perfil - Jogo de Séries & Filmes

Um jogo interativo baseado no formato de TV "Perfil", focado em filmes, séries, pessoas e objetos relacionados ao cinema e televisão.

## 🎮 Como Jogar

1. **Configuração Inicial**: Digite os nomes das duas equipes e escolha entre as dificuldades (Fácil, Médio, Difícil, Cult, Random, Escolha Livre)
   - **Modo Random**: Sorteia uma distribuição de questões: 20% fáceis, 50% médias, 25% difíceis e 5% cult. Garante que cada time receba quantidade de questões justas.
   - **Modo Escolha Livre**: ✅ IMPLEMENTADO! Cada equipe escolhe a dificuldade da sua pergunta no início de cada rodada:
     - Fácil: 1 ponto por pista (máximo 10 pontos)
     - Médio: 2 pontos por pista (máximo 20 pontos) 
     - Difícil: 3 pontos por pista (máximo 30 pontos)
     - Cult: 4 pontos por pista (máximo 40 pontos)
3. **Final**: O jogo dura 10 rodadas, ganha quem tiver mais pontos

## ✨ Funcionalidades

### 🎯 Core Game Features
- **Sistema de Verificação Automática**: Respostas são verificadas automaticamente
- **Matching Inteligente**: Aceita variações de resposta, acentos e sinônimos
- **Pontuação Dinâmica**: 10-1 pontos baseado no número de pistas reveladas
- **Animações e Feedback Visual**: Confetes, animações de acerto/erro
- **Base de Dados Extensa**: Cartas organizadas por dificuldade (fácil/médio/difícil)

### 🌙 Theme & UI
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais modernos
- **Interface Intuitiva**: Controles simples e visuais

### 💾 Save System
- **Save Local**: Salve o progresso do jogo automaticamente no localStorage
- **Load Game**: Continue de onde parou carregando jogos salvos
- **Avoid Repeated Topics**: Nao exiba o mesmo filme, serie, pessoa ou objeto duas vezes. Precisa apertar um botao para resetar essa protecao.
- **Auto-Save**: O estado é preservado durante a navegação
- **Historic**: Mostra o resultado das ultimas partidas


### 🎪 Visual Effects
- **Feedback de Acerto**: Animações de pontos e confetes
- **Animações de Carta**: Efeitos de flip e transição
- **Destacar Equipe Ativa**: A equipe da vez fica em destaque
- **Notificações**: Sistema de toast para ações (salvar/carregar)

### 🧠 Smart Answer System
- **Normalização de Texto**: Remove acentos e pontuação para comparação
- **Respostas Alternativas**: Cada carta tem múltiplas respostas aceitas
- **Fuzzy Matching**: Usa algoritmo Levenshtein para matching aproximado
- **Matching por Palavras-chave**: Aceita respostas parciais quando relevantes

### 🎯 Sistema de Dicas Aprimorado
- **Ordem Inteligente**: Todas as dicas foram reordenadas da mais genérica para a mais específica
- **Progressão Natural**: As dicas seguem uma progressão lógica de dificuldade
- **Balanceamento**: Primeira dica genérica, última dica quase revela a resposta
- **Contexto Gradual**: Cada dica adiciona mais contexto específico

## 📁 Estrutura de Arquivos

```
perfil/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS com variáveis para temas
├── script.js           # Lógica principal do jogo
├── database_easy.js    # Base de dados das cartas
├── database_medium.js    # Base de dados das cartas
├── database_hard.js    # Base de dados das cartas
├── database_cult.js    # Base de dados das cartas
└── README.md          # Este arquivo
```

## 🎲 Base de Dados

### Categorias
- **FILME**: Filmes clássicos e modernos
- **SÉRIE**: Séries de TV populares e cult
- **PESSOA**: Atores, diretores e personalidades do cinema/TV
- **OBJETO**: Objetos icônicos de filmes e séries

### Dificuldades
- **Fácil (★☆☆)**: Filmes blockbuster, séries populares, atores famosos
- **Médio (★★☆)**: Conteúdo mais específico, filmes cult, séries de nicho
- **Difícil (★★★)**: Cinema de arte, diretores clássicos, conteúdo muito específico

## 🛠️ Melhorias Implementadas

### ✅ Concluído
- ✅ Base de dados externa e extensa
- ✅ Sistema de save/load local
- ✅ Dark mode funcional
- ✅ Gráficos e animações melhorados
- ✅ Correção do bug "Ver Resposta" travando
- ✅ Sistema de verificação automática refinado
- ✅ Interface responsiva aprimorada
- ✅ Sistema de notificações
- ✅ Prevenção de cartas repetidas
- ✅ **Modo Escolha Livre**: Sistema completo com multiplicadores de pontuação
- ✅ **Proteção Anti-Exploit**: Previne pontuação infinita por cliques rápidos

### 🔒 Melhorias de Segurança
- **Proteção contra Cliques Rápidos**: Flags `isProcessingAnswer` e `isRevealingClue` previnem múltiplas submissões
- **Debounce no Revelar Pistas**: Delay de 500ms entre revelações de pistas
- **Reset Automático de Flags**: Flags são resetadas automaticamente ao avançar de rodada
- **Validação de Estado**: Verificações adicionais antes de processar ações

### 🔄 Funcionalidades Técnicas
- **LocalStorage**: Para salvar estado do jogo e preferências
- **CSS Variables**: Para sistema de temas
- **Event Listeners**: Para todas as interações
- **Class-based Architecture**: GameState e ThemeManager
- **Responsive Design**: Media queries para diferentes telas
- **Animation System**: CSS keyframes para efeitos visuais

## 🎨 Personalização

### Temas
O jogo suporta temas claro e escuro usando CSS variables:
- Gradientes de fundo adaptativos
- Cores de texto e elementos ajustáveis
- Transparências e efeitos de blur

### Cartas
Para adicionar novas cartas, edite `database.js`:
```javascript
{
    type: 'FILME',
    icon: 'fas fa-film',
    answer: 'Nome do Filme',
    clues: [
        'Primeira pista',
        'Segunda pista',
        // ...
    ],
    alternatives: ['Nome Alternativo', 'Outro Nome']
}
```

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Grid, Flexbox, Variables, Animations
- **JavaScript ES6+**: Classes, Arrow Functions, Destructuring
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Inter)
- **localStorage API**: Persistência de dados

## 📱 Compatibilidade

- ✅ Chrome/Edge/Safari (Desktop)
- ✅ Chrome/Safari (Mobile)
- ✅ Tablets e dispositivos touch
- ✅ Resoluções de 320px até 4K

## 🎯 Próximas Melhorias Sugeridas

- [ ] Modo multiplayer online
- [ ] Sistema de conquistas
- [ ] Editor de cartas personalizado
- [ ] Estatísticas detalhadas
- [ ] Sons e efeitos sonoros
- [ ] Categorias temáticas (por década, gênero, etc.)
- [ ] Modo torneio
- [ ] Integração com APIs de filmes (TMDB)

---

**Desenvolvido para jogar em família, entre amigos ou como um quiz interativo sobre cinema e televisão!** 🎬📺

## 📱 Sistema de Notificações Aprimorado

O jogo agora possui um sistema de notificações visualmente aprimorado com diferentes tipos de feedback:

### 🎨 Notificações de Card (Durante o Jogo)
- **Animação de Entrada Dramática**: Nova animação `flashyPopIn` com rotação e escala
- **Bordas e Sombras Proeminentes**: Bordas mais espessas e sombras múltiplas para destaque
- **Fundos com Gradiente**: Cada tipo de notificação tem sua própria cor de fundo
- **Ícones Animados**: 
  - ✅ Sucesso: Ícone com bounce contínuo
  - ❌ Erro: Ícone com shake effect
  - ℹ️ Info: Ícone com rotação contínua
- **Efeitos de Pulso**: Notificações de sucesso e info têm animação de pulso na borda

### 🎊 Confetti Aprimorado
- **Posicionamento Tela Cheia**: Confetti agora ocupa toda a viewport
- **Animação Suave**: Partículas começam fora da tela e caem naturalmente
- **Formas Variadas**: Círculos, quadrados e triângulos coloridos
- **Performance Otimizada**: Remoção automática das partículas após animação

### 🧪 Arquivo de Teste
- **`test-notifications.html`**: Página dedicada para testar todas as melhorias visuais
- Permite alternar entre temas claro/escuro
- Botões para testar cada tipo de notificação
- Demonstração do confetti em tela cheia
