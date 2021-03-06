#!/usr/bin/env bash

set -e

if [[ $# -lt 1 ]]; then
  echo "usage: $0 <github repo>"
  exit 1
fi

set -x

GITHUB_REPO=$1
PLUGIN_SLUG=${GITHUB_REPO##*/}

if [[ ! -d ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG}/.git ]]; then
  rm -rdf ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG}
  git clone --recursive --depth=1 https://github.com/${GITHUB_REPO}.git ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG}
fi

git -C ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG} fetch -p
git -C ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG} reset --hard origin/HEAD
git -C ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG} pull

if [[ -f ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG}/composer.json ]]; then
  composer install -n --working-dir=${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG} --no-dev
fi

if [[ -f ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG}/package.json ]]; then
  if [[ -n "${CI}" ]] && [[ -z "${GITHUB_ACTION}" ]]; then
    yarn --cwd ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG} cache clean
  fi
  yarn --cwd ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG} install
  yarn --cwd ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG} build
fi
if [[ -f ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG}/assets/js/package.json ]]; then
  if [[ -n "${CI}" ]] && [[ -z "${GITHUB_ACTION}" ]]; then
    yarn --cwd ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG}/assets/js cache clean
  fi
  yarn --cwd ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG}/assets/js install
  yarn --cwd ${TRAVIS_BUILD_DIR}/.plugin/${PLUGIN_SLUG}/assets/js build
fi
