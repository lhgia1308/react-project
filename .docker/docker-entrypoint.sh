#!/bin/sh
set -e

npm install -g serve

npm run build

serve -s build -l 3000

exec "$@"
