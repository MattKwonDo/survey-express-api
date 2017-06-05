[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Surveys Express API - Project 3

## Description

Our team project was to build a survey appliction.  Ours app is very basic one
where each survey has only 1 question.  A user must be signed in before they can
create/view/modify their surveys.  Once the survey has been created, a generated
url is created that can be used by anyone to take the survey.  All responses for
a survey can be viewed by the survey owner.

## Links

#### Front-End
Front-End Deployed: https://kqngo.github.io/survey-client/
Front-End Repo: https://github.com/kqngo/survey-client

#### Back-End
Back-end Deployed: https://survey-team-project.herokuapp.com/
Back-End Repo: https://github.com/kqngo/survey-express-api

## API

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| DELETE | `/sign-out/:id`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl http://localhost:4741/sign-up \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'
```

#### POST /sign-in

Request:

```sh
curl http://localhost:4741/sign-in \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'
```

#### PATCH /change-password/:id

Request:

```sh
curl --include --request PATCH "http://localhost:4741/change-password/$ID" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'
```

#### DELETE /sign-out/:id

Request:

```sh
curl http://localhost:4741/sign-out/$ID \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"
```

### Surveys

| Verb   |  URI Pattern    |  Controller#Action  |
|--------|-----------------|---------------------|
| GET    | `/surveys/:id`  | `surveys#show`     |
| GET    | `/surveys`      | `surveys#index`     |
| POST   | `/surveys`      | `surveys#create`    |
| PATCH  | `/surveys/:id`  | `surveys#update`    |
| DELETE | `/surveys/:id`  | `surveys#destroy`   |

#### GET /surveys

Request:

```sh
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"
```

```sh
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"
```

#### POST /surveys

Request:

```sh
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "title": "'"${TITLE}"'",
      "question": "'"${QUESTION}"'"
    }
  }'
```

#### PATCH /surveys/:id

Request:

```sh
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "title": "'"${TITLE}"'",
      "question": "'"${QUESTION}"'"
    }
  }'
```

#### DELETE /surveys/:id

Request:

```sh
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"
```

### Responses


| Verb   |   URI Pattern     |   Controller#Action   |
|--------|-------------------|-----------------------|
| GET    | `/responses`      | `responses#index`     |
| POST   | `/responses`      | `responses#create`    |
| DELETE | `/responses/:id`  | `responses#destroy`   |

#### GET /responses

Request:

```sh
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
      "survey_id": "'"${SURVEYID}"'"
  }'
```

#### POST /responses

Request:

```sh
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "response": {
      "text": "'"${TEXT}"'",
      "survey_id": "'"${SURVEYID}"'"
    }
  }'
```

#### DELETE /responses/:id

Request:

```sh
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
      "survey_id": "'"${SURVEYID}"'"
    }'
```

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
