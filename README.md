# 📱 Cartão de Perfil - React Native

Um aplicativo mobile elegante e moderno para exibir informações de perfil profissional, desenvolvido com React Native e Expo.

## ✨ Demonstração

![Cartão de Perfil](https://via.placeholder.com/300x600/0b1220/ffffff?text=Cartão+de+Perfil)

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **JavaScript** - Linguagem de programação
- **FontAwesome** - Ícones vetoriais
- **React Native Web** - Suporte para plataforma web

## 📋 Funcionalidades

- 📸 **Avatar de Perfil** - Imagem de avatar circular com borda personalizada
- 👤 **Informações Pessoais** - Nome e cargo/título profissional
- 🌐 **Links Sociais** - Ícones interativos para GitHub, LinkedIn e Email
- 📱 **Design Responsivo** - Adaptável a diferentes tamanhos de tela
- 🎨 **Interface Moderna** - Design clean e profissional com sombras e efeitos visuais

## 🎯 Estrutura do Projeto

```
cartaoPerfil/
├── assets/                 # Recursos estáticos
│   ├── generic-avatar.png # Imagem de avatar padrão
│   ├── favicon.png       # Ícone do aplicativo
│   ├── icon.png          # Ícone principal
│   └── splash-icon.png   # Tela de splash
├── App.js                # Componente principal
├── app.json              # Configurações do Expo
├── package.json          # Dependências do projeto
└── index.js              # Ponto de entrada
```

## 🎨 Design

O aplicativo apresenta um design moderno e minimalista:

- **Esquema de Cores**: Fundo escuro (#0b1220) com cartão branco para contraste
- **Tipografia**: Fonte em negrito para o nome e texto secundário para o cargo
- **Ícones**: FontAwesome com cores específicas para cada plataforma social
- **Efeitos Visuais**: Sombras, bordas arredondadas e separadores elegantes

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente
- Emulador mobile ou dispositivo físico

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/cartao-perfil.git
   cd cartaoPerfil
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**
   ```bash
   npm start
   # ou
   expo start
   ```

### Comandos Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS  
- `npm run web` - Executa na versão web

## 📱 Personalização

### Como personalizar seu cartão:

1. **Alterar foto de perfil**: Substitua `assets/generic-avatar.png`
2. **Mudar nome e cargo**: Edite as linhas no `App.js`:
   ```javascript
   <Text style={styles.name}>Seu Nome</Text>
   <Text style={styles.title}>Seu Cargo</Text>
   ```
3. **Modificar cores**: Ajuste as cores em `styles` no `App.js`
4. **Adicionar mais links sociais**: Adicione novos ícones na seção `icons`

## 🔧 Tecnologias e Bibliotecas

### Dependências Principais
- `expo`: ~54.0.33
- `react-native`: 0.81.5  
- `react`: 19.1.0
- `expo-status-bar`: ~3.0.9
- `@expo/vector-icons`: Para ícones FontAwesome

## 📸 Capturas de Tela

*As capturas de tela serão adicionadas aqui*

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autor

**Dev Junior** - Full Stack Developer

- GitHub: [@devjunior](https://github.com/devjunior)
- LinkedIn: [Dev Junior](https://linkedin.com/in/devjunior)
- Email: dev.junior@email.com

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!

## 📚 Recursos Úteis

- [Documentação React Native](https://reactnative.dev/)
- [Documentação Expo](https://docs.expo.dev/)
- [FontAwesome Icons](https://fontawesome.com/)