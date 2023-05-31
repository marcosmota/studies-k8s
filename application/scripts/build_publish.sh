#!/usr/bin/env bash

docker login --username marcosmota287 --password dckr_pat_cbMq3w_HaAri7Qtbu9Hbl0kAK40
docker build -t helloword .
docker tag helloword marcosmota287/helloword
docker push marcosmota287/helloword
