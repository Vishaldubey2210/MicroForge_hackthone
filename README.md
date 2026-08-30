<div align="center">

  <h1>⚡ MicroForge / SchemaForge</h1>
  <p><strong>Next-Gen AI Visual Schema Designer, ORM Compiler & API Generator</strong></p>

  <p>
    <a href="https://github.com/Vishaldubey2210/MicroForge_hackthone/actions"><img src="https://img.shields.io/badge/CI-Passing-success?style=for-the-badge&logo=githubactions&logoColor=white" alt="CI"></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/Next.js-14.0-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/Express.js-Backend-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express"></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"></a>
    <a href="#-license"><img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License"></a>
  </p>

</div>

---

## 📌 Overview
**SchemaForge** transforms how developers and engineering teams architect databases. Visually forge relational and document schemas, define data types, configure constraints, and instantly export production-grade models in:

- **Prisma ORM** (`schema.prisma`)
- **Mongoose / MongoDB** (`models.js`)
- **PostgreSQL / MySQL / SQLite DDL** (`schema.sql`)
- **TypeScript Interfaces & DTOs** (`types.ts`)
- **GraphQL Schema SDL** (`schema.graphql`)
- **Zod Schemas** (`validation.ts`)
- **Python Pydantic Models** (`models.py`)
- **Synthetic Mock Data** (`mock.json`)

---

## 🏛️ System Architecture

```mermaid
flowchart TD
    subgraph Frontend ["Next.js 14 Web Application (:3000)"]
        UI["Glassmorphism Canvas & Field Editor"]
        Diagram["Visual ERD Node Diagram"]
        Preview["Multi-Language Code Preview"]
    end

    subgraph Backend ["Express.js API Engine (:5000)"]
        Server["Express Router & Middleware"]
        Auth["JWT Auth & Project Manager"]
        Compiler["Multi-Target Code Generator"]
    end

    subgraph Storage ["Storage & Artifacts"]
        Mongo[("MongoDB Database")]
        Zip["Archiver ZIP Exporter"]
    end

    UI --> Server
    Diagram --> Server
    Server --> Auth
    Auth --> Mongo
    Server --> Compiler
    Compiler --> Zip
```

---

## 🚀 Quickstart

```bash
# Clone repository
git clone https://github.com/Vishaldubey2210/MicroForge_hackthone.git
cd MicroForge_hackthone

# Install all dependencies
npm install

# Start both frontend and backend concurrently
npm run dev
```

- **Frontend Application**: `http://localhost:3000`
- **Backend REST API**: `http://localhost:5000/api`

---

## 📜 License
Distributed under the **MIT License**.
