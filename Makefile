.PHONY: install dev dev-backend dev-frontend build test docker-up docker-down clean

install:
	npm install
	cd schemaforge/backend && npm install
	cd schemaforge/frontend && npm install

dev:
	npm run dev

dev-backend:
	npm run dev:backend

dev-frontend:
	npm run dev:frontend

build:
	npm run build

docker-up:
	docker compose up -d --build

docker-down:
	docker compose down

clean:
	rm -rf node_modules schemaforge/backend/node_modules schemaforge/frontend/node_modules
	rm -rf schemaforge/frontend/.next
