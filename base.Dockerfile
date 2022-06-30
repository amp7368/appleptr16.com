ARG NODE_VERSION
ARG SCRATCH_VERSION
FROM ${NODE_VERSION} as buildstage
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
# RUN npm prune --production

FROM ${SCRATCH_VERSION} as servestage
COPY --from=buildstage /base/dist /base/dist
COPY --from=buildstage /base/node_modules /base/node_modules

ENTRYPOINT ["tail", "-f", "/dev/null"]
