#!/usr/bin/bash

set -e

NODE_MODULES="node_modules"

if test -d "$NODE_MODULES"; then
  rm -rf "$NODE_MODULES"
  printf "Old '%s' directory removed! \n" "$NODE_MODULES"
fi

NPM_SHRINKWRAP="npm-shrinkwrap.json"

if test -f "$NPM_SHRINKWRAP"; then
  rm "$NPM_SHRINKWRAP"
  printf "Old '%s' file removed! \n" "$NPM_SHRINKWRAP"
fi

npm i

npm shrinkwrap
