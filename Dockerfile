FROM node:10.14.1

RUN mkdir -p /usr/src/vegetable-store

COPY build /usr/src/vegetable-store/build

COPY authMiddleware.js /usr/src/vegetable-store/
COPY productionData.json /usr/src/vegetable-store/
COPY server.js /usr/src/vegetable-store/
COPY deploy-package.json /usr/src/vegetable-store/package.json

COPY serverQueriesSchema.graphql /usr/src/vegetable-store/
COPY serverQueriesResolver.js /usr/src/vegetable-store/
COPY serverMutationsSchema.graphql /usr/src/vegetable-store/
COPY serverMutationsResolver.js /usr/src/vegetable-store/

WORKDIR /usr/src/vegetable-store

RUN echo 'package-lock=false' >> .npmrc

RUN npm install

EXPOSE 80

CMD ["node", "server.js", "./productionData.json", "80"]