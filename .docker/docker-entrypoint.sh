#!/bin/sh
set -e

npm run build

serve -s build -l 3000

exec "$@"
