FROM digitallyseamless/nodejs-bower-grunt
RUN adduser --disabled-password --gecos "" dock && \
  echo "dock ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
ENV HOME /home/dock
USER dock
RUN mkdir /home/dock/app -p
VOLUME ["/home/dock/app"]
WORKDIR /home/dock/app
EXPOSE 9000
EXPOSE 35729
