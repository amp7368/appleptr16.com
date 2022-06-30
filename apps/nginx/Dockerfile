ARG COMPOSE_NAME
ARG BASE_IMAGE
ARG NGINX_VERSION

FROM ${COMPOSE_NAME}/${BASE_IMAGE} as base
FROM ${NGINX_VERSION} as servestage
ARG WORKINGDIR
ENV PROJECTDIR ./apps/nginx
WORKDIR ${WORKINGDIR}

COPY --from=base /base/dist/apps/website ./dist/apps/website
COPY --from=base /base/dist/libs ./dist/libs
COPY --from=base /base/node_modules ./node_modules

RUN rm /etc/nginx/conf.d/default.conf
COPY ${PROJECTDIR}/templates  /etc/nginx/templates
COPY ${PROJECTDIR}/ssl  /etc/nginx/ssl
