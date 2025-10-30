# 💸 Projeto Fintech - Plataforma de Gestão Financeira

Este repositório contém o **frontend** do projeto desenvolvido para o curso de **Análise e Desenvolvimento de Sistemas na FIAP**.  
O objetivo da aplicação é oferecer uma **plataforma moderna e intuitiva para gerenciamento financeiro pessoal**, permitindo que usuários controlem receitas, despesas e metas de forma simples e segura.

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando **Next.js** como base do frontend, junto a um ecossistema moderno de ferramentas web:

- **Next.js** – Framework React com suporte a SSR e rotas otimizadas  
- **TypeScript** – Tipagem estática para maior confiabilidade do código  
- **Tailwind CSS** – Estilização rápida e responsiva  
- **Axios** – Comunicação com o backend  
- **React Hook Form + Zod** – Validação e gerenciamento de formulários  

---

## 🧠 Sobre o Projeto

A proposta é criar uma **plataforma de controle financeiro pessoal**, onde o usuário pode:

- Cadastrar e visualizar **transações** (entradas e saídas)  
- Gerenciar **entradas e saídas**  
- Obter uma visão clara de sua **saúde financeira**  

O foco é proporcionar uma **experiência fluida e responsiva**, aliando design minimalista e performance.

---

## 📂 Estrutura do Repositório

```
/src
 ├── app/              # Páginas e rotas da aplicação (Next.js)
 ├── components/       # Componentes reutilizáveis de UI
 ├── hooks/            # Hooks customizados
 ├── lib/              # Configurações e utilitários globais
 ├── services/         # Comunicação com o backend
 └── styles/           # Estilos globais
```

---

## ⚙️ Como Executar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/fintech-frontend.git
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. Acesse no navegador: [http://localhost:3000](http://localhost:3000)

---

## 🧩 Integração com o Backend

O frontend se comunica com o backend em Java + Spring da aplicação (API RESTful), responsável por autenticação, persistência de dados e regras de negócio.  
As URLs e variáveis de ambiente estão definidas em `.env.local`.

---

## 👥 Autores

Projeto desenvolvido para o curso de **Análise e Desenvolvimento de Sistemas – FIAP**, com foco em **arquitetura de software** e boas práticas de desenvolvimento web moderno.

---

## 📄 Licença

Este projeto é de uso acadêmico e pode ser utilizado como referência para estudos e aprimoramento técnico.

---
**FIAP | Análise e Desenvolvimento de Sistemas**  
Desenvolvido com ❤️ e clean code.
