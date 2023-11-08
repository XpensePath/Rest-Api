#!/bin/sh

mkdir -p ./docs/openApi/

for d in ./app/*/ ; do
    echo "Generating openapi doc for $(basename $d)"
    cp ./base_openapi.yaml $d/base.yaml
    openapi-comment-parser $d ./docs/openApi/$(basename $d).json
    rm -f $d/base.yaml
done


#openapi-comment-parser . openapi.json