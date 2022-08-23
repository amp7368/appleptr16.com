ARG NODE_VERSION
ARG NGINX_VERSION

FROM ${NODE_VERSION} as base
WORKDIR /base

COPY ./package*.json ./
RUN npm install 

COPY ./nx.json ./
COPY ./workspace.json ./
COPY ./apps ./apps
COPY ./libs ./libs
COPY ./tsconfig* ./
COPY ./babel* ./

RUN npx nx run-many --target=build --configuration=remote --all=true
RUN npm prune --production 

FROM ${NGINX_VERSION} as servestage
COPY --from=base /base/dist/apps/website /dist/apps/website
RUN rm /etc/nginx/conf.d/default.conf
COPY ./apps/website/*.template  /etc/nginx/templates/
