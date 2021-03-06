#!/usr/bin/env bash

set -e

current=$(
  cd $(dirname $0)
  pwd
)
source ${current}/../variables.sh

bash ${SCRIPT_DIR}/deploy/prepare_svn.sh

if [[ ! -d ${SVN_DIR} ]]; then
  exit
fi

pushd ${SVN_DIR}

echo ""
echo ">> Run svn st."
svn st

echo ""
echo ">> Run svn commit."
svn commit -m "${SVN_COMMIT_MESSAGE}" --username ${SVN_USER} --password ${SVN_PASS} --non-interactive 2>/dev/null

echo ""
echo ">> Check if tag exist."
if [[ -z $(svn ls ${SVN_URL}/tags | grep "^${WP_TAG}/$") ]]; then
  echo "tags/${WP_TAG} not exists."
  echo ""
  echo ">> Run svn copy."
  svn copy ${SVN_URL}/trunk ${SVN_URL}/tags/${WP_TAG} -m "${SVN_TAG_MESSAGE}" --username ${SVN_USER} --password ${SVN_PASS} --non-interactive 2>/dev/null
else
  echo "tags/${WP_TAG} already exists."
fi

pushd

bash ${current}/clear_work_dir.sh
