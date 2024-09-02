#!/bin/bash -e
echo $GOOGLE_APPLICATION_CREDENTIALS_DATA | base64 -d > /var/run/credentials.json
exec "${@}"
