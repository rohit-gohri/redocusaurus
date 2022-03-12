#!/bin/bash
# This is meant to run in the Github Actions Env only

set -e

export VERSION_TAG="v$npm_package_version"
echo "package_version=$npm_package_version"

# Check if tag already exists
if [ $(git tag -l "$VERSION_TAG") ]; then
    echo "github_release=no"
else
    echo "github_release=yes"
fi

cat $PROJECT_CWD/CHANGELOG.md | grep -Pzo "## redocusaurus@$npm_package_version\s+((.|\n)+?)(?=\n## redocusaurus@)" | head -n -1 > $PROJECT_CWD/latest-CHANGELOG.md
