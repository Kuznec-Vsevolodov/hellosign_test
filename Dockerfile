FROM node:18-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install 
ADD . .
CMD ["node", "server.js"]
