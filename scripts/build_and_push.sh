#!/usr/bin/env bash
set -euo pipefail

# Use the Git commit hash passed from Jenkins
GIT_COMMIT=$1

# Define image name
IMAGE="nageshdocker25/devops-nodejs-app:$GIT_COMMIT"

echo "[INFO] Building Docker image: $IMAGE"
docker build -t $IMAGE .

echo "[INFO] Pushing image to DockerHub: $IMAGE"
docker push $IMAGE

echo "[SUCCESS] Image pushed: $IMAGE"
