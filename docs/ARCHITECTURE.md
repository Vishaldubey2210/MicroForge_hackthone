# SchemaForge System Architecture

## Overview
SchemaForge is an AI-powered visual schema design and multi-target code generation engine.

```
[ Visual React Canvas / Schema Builder UI ]
                   │
                   ▼ (REST / JSON Payload)
   [ Express Backend Microservice ]
                   │
  ┌────────────────┼────────────────┐
  ▼                ▼                ▼
[Prisma Gen]   [SQL DDL Gen]   [TypeScript DTO]
[Mongoose Gen] [GraphQL Gen]   [Zod Schema Gen]
[Rust Structs] [Go Structs]    [Pydantic Gen]
```
