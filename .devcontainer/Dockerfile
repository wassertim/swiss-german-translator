# [Choice] Debian OS version: bullseye, buster
ARG VARIANT=bullseye
FROM --platform=arm64 mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

ENV DENO_INSTALL=/deno
ENV DPRINT_INSTALL=/home/vscode/.dprint
RUN mkdir -p /deno \
    && curl -s https://gist.githubusercontent.com/LukeChannings/09d53f5c364391042186518c8598b85e/raw/ac8cd8c675b985edd4b3e16df63ffef14d1f0e24/deno_install.sh | sh \
    && chown -R vscode /deno

RUN curl -fsSL https://dprint.dev/install.sh | sh

ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache/deno

ENV PATH=${DPRINT_INSTALL}/bin:${PATH}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#    && apt-get -y install --no-install-recommends <your-package-list-here>
