#!/usr/bin/env bash
set -euo pipefail

# Get Git commit ID (short)
GIT_COMMIT=$(git rev-parse --short HEAD)

# Define image name using your DockerHub username
IMAGE="nageshdocker25/devops-nodejs-app:$GIT_COMMIT"

echo "[INFO] Building Docker image: $IMAGE"
docker build -t $IMAGE .

echo "[INFO] Pushing image to DockerHub: $IMAGE"
docker push $IMAGE

echo "[SUCCESS] Image pushed: $IMAGE"
