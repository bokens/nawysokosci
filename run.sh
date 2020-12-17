#!/bin/sh
#LOC_PATH_TO_REPO=$(pwd) ./run.sh
docker run --rm --name nawysokosci -p 8888:80 -v $LOC_PATH_TO_REPO:/usr/share/nginx/html:ro -d nginx
# http://localhost:8888/