FROM node:16.13.1-alpine3.13
WORKDIR /tourism-frontend
ENV PATH = "./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]