# Binary Snake
Binary snake is like the [traditional snake game](https://en.wikipedia.org/wiki/Snake_%28video_game%29) but instead of eating food on your screen you eat bits in order to convert a number from decimal to binary.

![snake](http://g.recordit.co/aA9yqHeTEP.gif)

You can click [here](https://kjs222.github.io/gametime/) to play.

### Initial setup to play game locally

Clone
```
git clone git@github.com:kjs222/gametime.git
```
To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```
npm run build
```

To run tests in Node:

```
npm test
```

### Inspiration
  Inspired to create educational game, both of us, Kerry and Jenny, have a passion towards education. Binary Snake is based on the original Snake but with some twists. We wanted to do something simple enough to complete well in the time provided, but change it in an interesting and educational way. In this case, to convert base ten numbers into base two numbers, or in other words, convert decimal to binary.

### Gameplay
##### Changes from Original Snake:
  * You do not die if you hit yourself
  * Instead of just having one food source, you're given the option of two, one containing a one and the other a zero.
  * Goal is to get the number (given in decimal) and convert it to binary by eating the correct bits.
  * If you eat a bit in the wrong order, you lose segments.
  * If you eat the correct bit you gain a segment.

##### Scoring:
  * You get one point for the number of bits you eat correctly
  * You get your decimal number added to your score when you successfully convert a number.
