#!/bin/sh
echo "copying"

cd src

yarn copyfiles --verbose -e "./**/*.js" -e "./**/*.jsx" -e "./**/*.ts" -e "./**/*.tsx" "./**/*.*" ../dist/
yarn copyfiles --verbose -e "./**/*.js" -e "./**/*.jsx" -e "./**/*.ts" -e "./**/*.tsx" "./**/*.*" ../dist-jsx/

echo "copied"