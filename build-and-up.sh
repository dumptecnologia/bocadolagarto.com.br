#!/bin/bash

APP_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 || exit ; pwd -P )" && cd "$APP_PATH"/ || exit

docker run -ti --rm \
  -v ./:/app \
  -w /app \
  --dns 8.8.8.8 \
  -p 4000:4000 \
  -p 35729:35729 \
  jekyll/builder:3.8 \
  /bin/bash -c "bundle install && bundle exec jekyll serve --host 0.0.0.0 --livereload"
