FROM mcr.microsoft.com/devcontainers/ruby:3.2

# Install Node.js (per asset pipeline Jekyll)
RUN su vscode -c ". /usr/local/share/nvm/nvm.sh && nvm install 20 && nvm use 20"

# Install Jekyll e Bundler
RUN gem install bundler jekyll

# Copia Gemfile e Gemfile.lock per installare le dipendenze
COPY Gemfile* /workspaces/thetom88.github.io/
WORKDIR /workspaces/thetom88.github.io
#RUN bundle install

# Default command
CMD ["sleep", "infinity"]
