# Project: Extend an existing official image from Docker Hub to run a webserver

# Step 1: Use the 'nginx' official image, with the latest version for alpine
#   Pinning a version makes development so much easier because it is predictable
FROM nginx:alpine

# Step 2: Change our working directory to the root of nginx webhost
WORKDIR /usr/share/nginx/html

# Step 3: Copy in the file or files or folder!
COPY index.html .

# BONUS: add in a healthcheck!
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "echo", '"Container is running ok!"' ]

# No need to specify EXPOSE or CMD because they're include in the base (FROM)