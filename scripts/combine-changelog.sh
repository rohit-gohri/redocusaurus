#!/bin/bash

set -e -x

touch combined-CHANGELOG.md
# Add title
cat CHANGELOG.md | head -n 1 > combined-CHANGELOG.md

yarn workspaces foreach -R --from redocusaurus exec "sh $PWD/scripts/latest-changelog.sh"

echo '' >> combined-CHANGELOG.md

# Add back existing entries
cat CHANGELOG.md | tail -n +3 >> combined-CHANGELOG.md

# Overwrite changelog
cat combined-CHANGELOG.md > CHANGELOG.md

rm combined-CHANGELOG.md