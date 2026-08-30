# SchemaForge API Specifications

## Authentication Endpoints
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - Authenticate and obtain JWT
- `GET /api/auth/me` - Fetch profile metadata

## Project & Schema Management
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/schemas/:projectId` - Fetch schemas within project
- `POST /api/schemas` - Create schema with field definitions
