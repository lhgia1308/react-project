#!/bin/sh
set -e

serve -s build -l 4000

exec "$@"
