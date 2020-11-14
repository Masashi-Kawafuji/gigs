FROM ruby:2.7.2

RUN apt-get update -qq

WORKDIR /usr/src/app

COPY Gemfile .
COPY Gemfile.lock .

RUN bundle install

COPY . .

COPY entrypoint.sh /usr/bin
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT [ "entrypoint.sh" ]

EXPOSE 3000
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]