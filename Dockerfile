# Usa una imagen base de Node.js
FROM node:18-alpine

# Define el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "dist/main"]