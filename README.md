# Wijmo5 Demo App

A Wijmo5, Angular 1.x, and Materialize demo app.

### Running the project

Please add the Wijmo5 folder manually into `app/assets/wijmo5`.

You can use [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to run the project:

<pre>
docker-compose build
docker-compose run --rm wijmo5app <b>npm install</b>
docker-compose run --rm wijmo5app <b>bower install</b>
docker-compose run --rm --service-ports wijmo5app <b>grunt serve</b>
</pre>

Or you can run the statements marked as bold without *docker-compose* if you have [NPM](https://nodejs.org/), [Bower](http://bower.io/), and [Grunt](http://gruntjs.com/) installed on your development environment.

After setting the project up, you can navigate to `http://localhost:9000`.


### Credits

Books image: https://flic.kr/p/aMPX7i
