#!/bin/bash
# sh scripts/surveys/destroy.sh

API="http://localhost:4741"
URL_PATH="/surveys"

TOKEN="dUim9y/Jlt3mDMwPo+qs1yzy+5eJJlFNNiq/kM8ZMt0=--RFecLpZ+BWQvM6kBH0UecTypOadd2ZOfYrm0iBQGsxc="
ID="591ca0d6ea0091c8a3783eb5"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
