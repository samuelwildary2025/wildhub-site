# ---- Build ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Se o build gera "dist" (Vite). Se for CRA, mude para: npm run build && mv build dist
RUN npm run build

# ---- Runtime ----
FROM nginx:alpine
# Remove conf padrão e aplica a nossa (SPA fallback)
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copia build para o nginx
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
