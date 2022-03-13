#!/bin/bash

set -e -x

cat $INIT_CWD/CHANGELOG.md | grep -Pzo "## $npm_package_version\s+((.|\n)+?)(?=\n##\s)" | head -n -1 | tail -n +3 > $INIT_CWD/latest_CHANGELOG.md

# Add project changelogs
if cat $PROJECT_CWD/CHANGELOG.md | grep -Eq "$npm_package_name@$npm_package_version"; then
  echo "No new release. Skipping $npm_package_name".
else
  echo '' >> $PROJECT_CWD/combined-CHANGELOG.md
  echo "## $npm_package_name@$npm_package_version" >> $PROJECT_CWD/combined-CHANGELOG.md
  echo '' >> $PROJECT_CWD/combined-CHANGELOG.md
  cat $INIT_CWD/latest_CHANGELOG.md >> $PROJECT_CWD/combined-CHANGELOG.md
fi

rm $INIT_CWD/latest_CHANGELOG.md
