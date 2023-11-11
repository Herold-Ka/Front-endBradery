FROM node:18.14.2-slim 

WORKDIR /app
COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npx", "vite"]