# Use the latest docker-puppeteer image with Chromium and Pa11y-CI
FROM registry.gitlab.com/gitlab-ci-utils/docker-puppeteer:node-20

# Image uses a lesser privileged account, but need root to
# install Puppeteer with npm dependencies
USER root

WORKDIR /app

# Copy application files
# The COPY command should have a source and a destination. Assuming you want to copy everything from the current directory:
COPY . /app

# Set permissions to make scripts executable
RUN chmod +x /app/*.sh

# Install npm dependencies
RUN npm ci --only=production

# Update PATH so executable can be run from anywhere
ENV PATH="/app/node_modules/.bin:${PATH}"

# Switch back to the non-root user
USER pptruser

# Set metadata labels
LABEL org.opencontainers.image.licenses="LGPL-3.0-only" \
      org.opencontainers.image.source="https://gitlab.com/gitlab-ci-utils/gitlab-pa11y-ci" \
      org.opencontainers.image.title="GitLab Pa11y CI" \
      org.opencontainers.image.url="https://gitlab.com/gitlab-ci-utils/gitlab-pa11y-ci"

# Expose port (80 is typical for web applications)
EXPOSE 80

# Define the command to run your application.
# Note: Only the last CMD instruction is effective. If you want to start `pa11y-ci`, you should integrate it into your npm start script or use an entrypoint script.
CMD ["npm", "start"]
