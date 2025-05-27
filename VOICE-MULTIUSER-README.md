# 🎤 Sistema de Reconhecimento de Voz Multi-Usuário

## 📋 Visão Geral

O jogo Perfil agora possui um sistema avançado de reconhecimento de voz otimizado para ambientes com múltiplas pessoas. O sistema possui **duas versões**:

### 1. **Sistema Padrão** (`voice-recognition.js`)
- Ideal para **uso individual** ou **grupos pequenos**
- Configurações mais permissivas
- Submissão automática de qualquer fala detectada

### 2. **Sistema Multi-Usuário** (`voice-recognition-multiuser.js`)
- Otimizado para **grupos grandes** e **ambientes ruidosos**
- Filtros inteligentes com 6 níveis de filtragem
- Sistema de palavras de ativação
- Cooldown entre submissões

## 🎯 Como Funciona com Múltiplas Pessoas

### **Filtragem Inteligente (6 Níveis)**

1. **Filtro de Comprimento**
   - Mínimo: 3 caracteres
   - Máximo: 50 caracteres

2. **Cooldown entre Submissões**
   - 3 segundos entre respostas diferentes
   - Evita spam e sobreposição

3. **Filtro de Confiança Adaptativo**
   - Threshold base: 50%
   - Aumenta automaticamente em ambientes ruidosos
   - Máximo: 90%

4. **Palavras de Ativação** (opcional)
   - "resposta", "eu sei", "é o", "é a", "eh o", "eh a"
   - Indica intenção de responder

5. **Filtro Contextual**
   - Evita repetições usando algoritmo Levenshtein
   - Remove ruídos comuns (ah, uhm, hmm, etc.)
   - Filtra conversas paralelas

6. **Filtro de Ruído**
   - Detecta padrões de ruído comum
   - Remove interjeições e palavras curtas

### **Configurações Específicas para Grupos**

```javascript
// Configurações Multi-Usuário
this.submissionCooldown = 3000; // 3 segundos entre submissões
this.confidenceThreshold = 0.5; // 50% confiança mínima
this.maxAnswerLength = 50; // Máximo 50 caracteres
this.useActivationWord = true; // Usar palavras de ativação
this.contextualFiltering = true; // Filtragem contextual ativa
```

## 🚀 Como Usar

### **No Jogo Principal:**

1. **Inicie o jogo normalmente**
2. **Ative o Modo Grupo** usando o toggle no cabeçalho do jogo
3. **Diga uma palavra de ativação** antes da resposta: "resposta Batman"
4. **Aguarde 3 segundos** entre diferentes tentativas

### **Página de Teste:**

Acesse `test-multiuser.html` para:
- Testar o sistema sem jogar
- Ver logs detalhados do funcionamento
- Simular cenários multi-usuário
- Verificar status e configurações

## 🎮 Integração com o Jogo

### **Ativação Automática**
```javascript
// O sistema detecta automaticamente quando ativar/desativar
function startNewRoundWithCard() {
    // ... código do jogo ...
    if (window.voiceRecognition) {
        window.voiceRecognition.startGameListening(); // Inicia reconhecimento
    }
}
```

### **Controles no Jogo**
- **Toggle compacto** no cabeçalho do jogo
- **Status visual** (ON/OFF)
- **Indicador de modo ativo** no canto da tela

## 🔧 Configuração Técnica

### **Arquivos Necessários:**
```html
<!-- CSS -->
<link rel="stylesheet" href="voice-styles.css">
<link rel="stylesheet" href="voice-multiuser-styles.css">

<!-- JavaScript -->
<script src="voice-recognition.js"></script>
<script src="voice-recognition-multiuser.js"></script>
<script src="multiuser-controls-simple.js"></script>
```

### **Funções Principais:**
```javascript
// Ativar modo multi-usuário
enableMultiUserVoice()

// Desativar modo multi-usuário  
disableMultiUserVoice()

// Verificar status
window.voiceRecognition.isCurrentlyListening()
```

## 🎯 Cenários de Uso

### **👥 Grupo Pequeno (2-4 pessoas)**
- Use o **sistema padrão**
- Ative "Modo Grupo" nas configurações
- Threshold mais baixo (40%)

### **👥 Grupo Grande (5+ pessoas)**
- Use o **sistema multi-usuário**
- Ative palavras de ativação
- Threshold mais alto (60-70%)

### **🏠 Ambiente Silencioso**
- Sistema padrão funciona perfeitamente
- Threshold baixo (30-40%)
- Cooldown reduzido (1 segundo)

### **🎉 Ambiente Ruidoso**
- Obrigatório usar sistema multi-usuário
- Ativar todas as filtragens
- Threshold alto (70-80%)
- Cooldown padrão (3 segundos)

## 📊 Exemplo de Log Multi-Usuário

```
[14:30:15] 🎤 Sistema multi-usuário ativado
[14:30:16] 🎤 Resultado detectado: "ah não sei" (0.65)
[14:30:16] 🎤 Filtro: ruído comum
[14:30:18] 🎤 Resultado detectado: "resposta Batman" (0.78)
[14:30:18] 🎤 Passou pelos filtros: "Batman"
[14:30:18] ✅ Resposta submetida: "Batman"
[14:30:20] 🎤 Resultado detectado: "Batman" (0.82)
[14:30:20] 🎤 Filtro: similaridade alta com última resposta
[14:30:23] 🎤 Resultado detectado: "eu sei Robin" (0.71)
[14:30:23] ✅ Resposta submetida: "Robin"
```

## ⚠️ Limitações e Considerações

### **Navegadores Suportados:**
- ✅ Chrome/Chromium (melhor suporte)
- ✅ Edge
- ✅ Safari (limitado)
- ❌ Firefox (Web Speech API limitada)

### **Qualidade do Áudio:**
- **Microfone de qualidade** recomendado
- **Ambiente com pouco eco**
- **Distância adequada** do microfone

### **Limitações Técnicas:**
- **Processamento local** (requer internet para alguns navegadores)
- **Latência** de ~500ms para processamento
- **Múltiplos falantes simultâneos** podem causar confusão

## 🔄 Fallbacks e Recuperação

### **Se o Sistema Falhar:**
1. O jogo continua funcionando normalmente via teclado
2. Sistema tenta reconectar automaticamente
3. Mensagens de erro claras para o usuário
4. Logs detalhados para debug

### **Recuperação Automática:**
- **Reinício automático** após erros técnicos
- **Máximo 3 tentativas** para evitar loops
- **Fallback para modo manual** se necessário

## 🎮 Dicas para Melhor Experiência

### **Para o Moderador:**
1. **Explique as regras** de voz antes de começar
2. **Teste o sistema** com o grupo antes do jogo
3. **Use palavras de ativação** consistentemente
4. **Monitore o log** para ajustar configurações

### **Para os Jogadores:**
1. **Fale claramente** e com volume adequado
2. **Use palavras de ativação** ("resposta X")
3. **Aguarde sua vez** (respeite o cooldown)
4. **Seja conciso** (máximo 50 caracteres)

## 📈 Estatísticas e Monitoramento

O sistema fornece métricas em tempo real:
- **Taxa de reconhecimento**
- **Confidence scores**
- **Filtros aplicados**
- **Tentativas rejeitadas**
- **Tempo de resposta**

Essas informações ajudam a ajustar o sistema para o grupo específico.

---

**💡 Dica:** Para a melhor experiência, comece com o sistema padrão e mude para multi-usuário apenas se necessário!
