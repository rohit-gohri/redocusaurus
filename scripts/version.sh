#!/bin/bash

set -e

echo "$npm_package_version" > app_version.tmp

yarn npm info redocusaurus --fields version --json > current.tmp

cat current.tmp | cut -d ',' -f2,3 | cut -d '}' -f1,1 | cut -d ':' -f2,2 | cut -d '"' -f2,2 > current_version.tmp

echo "package_version=$npm_package_version"

if cmp -s "current_version.tmp" "app_version.tmp"; then
  echo "publish=no" >> $GITHUB_ENV
else
    echo "publish=yes" >> $GITHUB_ENV
fi