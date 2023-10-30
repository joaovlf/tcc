FROM node:18

WORKDIR /app

COPY tsconfig.json ./

COPY src ./src

COPY package*.json ./

COPY prisma ./

RUN npm install

EXPOSE 3000

CMD [ "npx", "ts-node-dev", "src/index.ts" ]