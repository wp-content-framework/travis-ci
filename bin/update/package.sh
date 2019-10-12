#!/usr/bin/env bash

set -e

current=$(cd $(dirname $0);
pwd)
source ${current}/../variables.sh

if [[ -n "${1}" ]]; then
    working_dir=${1}
else
    if [[ -f ${TRAVIS_BUILD_DIR}/assets/js/package.json ]]; then
        working_dir=${TRAVIS_BUILD_DIR}/assets/js
    else
        working_dir=${TRAVIS_BUILD_DIR}
    fi
fi

if [[ ! -f ${working_dir}/package.json ]]; then
    echo ""
    echo "${working_dir}/package.json is not exist"
    exit 1
fi

if [[ -z $(command -v ncu) ]]; then
    npm install -g npm-check-updates
fi
ncu -u --packageFile ${working_dir}/package.json
yarn --cwd ${working_dir} cache clean
yarn --cwd ${working_dir} install
yarn --cwd ${working_dir} upgrade
