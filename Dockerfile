# 1. Imagen base de Node.js
FROM node:18-alpine

# 2. Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar el archivo `package.json` y `package-lock.json` para instalar las dependencias
COPY package*.json ./

# 4. Instalar las dependencias
RUN npm install

# 5. Copiar el resto del código fuente de la aplicación
COPY . .

# 6. Compilar la aplicación (si usas TypeScript)
RUN npm run build

# 7. Exponer el puerto que usa la aplicación (por defecto 3000 en NestJS)
EXPOSE 3000

# 8. Definir el comando que iniciará la aplicación
CMD ["npm", "run", "start:prod"]