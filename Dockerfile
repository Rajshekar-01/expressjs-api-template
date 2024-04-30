FROM node:14 
WORKDIR /app
COPY package*.son/ /app
RUN npm install
COPY . .
EXPOSE 3005
CMD ["npm", "start"]
