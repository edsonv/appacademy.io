FROM drupal

RUN apt-get update \
&& apt-get install -y git \
&& rm -rf /var/lib/apt/lists/*

WORKDIR /opt/drupal/web/core/themes

RUN git clone --branch 8.x-3.x --single-branch --depth 1 https://git.drupal.org/project/bootstrap.git \
&& chown -R www-data:www-data bootstrap