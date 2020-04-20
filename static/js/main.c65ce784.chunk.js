(this.webpackJsonpcomp580 = this.webpackJsonpcomp580 || []).push([
  [0],
  {
    17: function (e, t, a) {},
    33: function (e, t, a) {
      e.exports = a(44);
    },
    38: function (e, t, a) {},
    44: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(18),
        i = a.n(r);
      a(38),
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      var o = a(8),
        s = a(9),
        u = a(11),
        c = a(10),
        m = a(12),
        h = a(14),
        d = a(13),
        b = a(4),
        g =
          (a(17),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(o.a)(this, t),
                ((a = Object(u.a)(
                  this,
                  Object(c.a)(t).call(this, e)
                )).createTable = function () {
                  for (var e = [], t = 0; t < a.state.rowVal; t++) {
                    for (var n = [], r = 1; r < a.state.colVal + 1; r++)
                      r <= a.state.colVal &&
                        n.push(
                          l.a.createElement(
                            "td",
                            { id: "cell" },
                            a.state.colVal * t + r
                          )
                        );
                    e.push(l.a.createElement("tr", { id: "indRow" }, n));
                  }
                  return e;
                }),
                (a.state = { rowVal: 10, colVal: 10 }),
                (a.handleRowChange = a.handleRowChange.bind(Object(b.a)(a))),
                (a.handleColChange = a.handleColChange.bind(Object(b.a)(a))),
                a
              );
            }
            return (
              Object(m.a)(t, e),
              Object(s.a)(t, [
                {
                  key: "handleRowChange",
                  value: function (e) {
                    this.setState({ rowVal: e.target.value });
                  },
                },
                {
                  key: "handleColChange",
                  value: function (e) {
                    this.setState({ colVal: e.target.value });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return l.a.createElement(
                      "div",
                      { id: "outer-div" },
                      l.a.createElement(
                        "div",
                        { id: "inner-div" },
                        l.a.createElement(
                          "table",
                          null,
                          l.a.createElement(
                            "caption",
                            { id: "title" },
                            "Hundreds Chart"
                          ),
                          this.createTable()
                        ),
                        l.a.createElement(
                          "label",
                          null,
                          "Rows:",
                          " ",
                          l.a.createElement("input", {
                            type: "text",
                            value: this.state.rowVal,
                            onChange: this.handleRowChange,
                          }),
                          " "
                        ),
                        l.a.createElement(
                          "label",
                          null,
                          "Columns:",
                          " ",
                          l.a.createElement("input", {
                            type: "text",
                            value: this.state.colVal,
                            onChange: this.handleColChange,
                          })
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        p = function () {
          return l.a.createElement(
            "div",
            { class: "instructions" },
            l.a.createElement(
              "h1",
              null,
              "Instructions for How to Play the Games"
            ),
            l.a.createElement("h2", null, "Table"),
            l.a.createElement(
              "ul",
              null,
              l.a.createElement(
                "li",
                null,
                "The table is a hundreds chart that defaults to 10 rows and 10 columns."
              ),
              l.a.createElement(
                "li",
                null,
                "There are input boxes at the bottom of the screen if you wish to change the size of the table."
              ),
              l.a.createElement(
                "li",
                null,
                "The purpose of the table is to get used to how to use the chart."
              ),
              l.a.createElement("li", null, "Make sure you set Rotor to rows."),
              l.a.createElement(
                "li",
                null,
                "Listen for the earcon that signifies the end of a row."
              ),
              l.a.createElement(
                "li",
                null,
                "You may then drag your finger over the chart or use swipe gestures."
              )
            ),
            l.a.createElement("h2", null, "Missing Number Game"),
            l.a.createElement(
              "ul",
              null,
              l.a.createElement(
                "li",
                null,
                "This game is a hundreds chart that has a missing number and you must figure out what it is."
              ),
              l.a.createElement("li", null, "Make sure you set Rotor to rows."),
              l.a.createElement(
                "li",
                null,
                "Move around the table until you find the cell that says question mark, which is the missing number."
              ),
              l.a.createElement(
                "li",
                null,
                "The missing number is a button, so click on it to bring up a prompt box to enter your guess."
              ),
              l.a.createElement(
                "li",
                null,
                "Input your guess and click OK to see if you are correct."
              ),
              l.a.createElement(
                "li",
                null,
                "There is a New Game button at the bottom of the page if you wish to play again or start over."
              )
            ),
            l.a.createElement("h2", null, "Complete the Table Game"),
            l.a.createElement(
              "ul",
              null,
              l.a.createElement(
                "li",
                null,
                "This game has 2, 3, or 4 missing numbers and you must figure out what they are."
              ),
              l.a.createElement(
                "li",
                null,
                "The missing numbers appear around a central number."
              ),
              l.a.createElement(
                "li",
                null,
                " If you get stuck, try to add 1, subtract 1, add 10, and subtract 10 from the middle number to get the missing numbers."
              ),
              l.a.createElement(
                "li",
                null,
                "Move your finger around the grid until you find question mark, which is the missing number."
              ),
              l.a.createElement(
                "li",
                null,
                "Double click the button to pull up the prompt box to input your guess."
              ),
              l.a.createElement(
                "li",
                null,
                "Input your guess and click OK to see if you are correct."
              ),
              l.a.createElement(
                "li",
                null,
                'If your guess is correct, the button will become inactive and if you go to it, it will say "dimmed button". This means you have already found this missing number. '
              ),
              l.a.createElement(
                "li",
                null,
                "Keep going until you find all the missing numbers."
              ),
              l.a.createElement(
                "li",
                null,
                "There is a New Game button at the bottom of the page if you wish to play again or start over."
              )
            )
          );
        },
        f = function () {
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "p",
              null,
              "Please navigate to the Home tab to begin!"
            )
          );
        },
        E = a(47),
        v = function () {
          return l.a.createElement(
            E.a,
            { bg: "dark", variant: "dark", id: "navbar" },
            l.a.createElement(h.b, { id: "nav", to: "/" }, "Home"),
            l.a.createElement(h.b, { id: "nav", to: "/table" }, "Table"),
            l.a.createElement(
              h.b,
              { id: "nav", to: "/missingnumbergame" },
              "Missing Number Game"
            ),
            l.a.createElement(
              h.b,
              { id: "nav", to: "/completetablegame" },
              "Complete the Table Game"
            )
          );
        },
        w = (function (e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(c.a)(t).call(this, e)
              )).makeRandom = function () {
                a.rand = Math.floor(
                  Math.random() * (a.state.rowVal * a.state.colVal) + 1
                );
              }),
              (a.createTable = function () {
                for (var e = [], t = 0; t < a.state.rowVal; t++) {
                  for (var n = [], r = 1; r < a.state.colVal + 1; r++)
                    r <= a.state.colVal &&
                      (a.state.colVal * t + r === a.rand
                        ? n.push(
                            l.a.createElement(
                              "td",
                              { id: "cell", class: "missingNumber" },
                              l.a.createElement(
                                "button",
                                {
                                  ref: function (e) {
                                    a.btn = e;
                                  },
                                  onClick: a.promptAnswer,
                                },
                                "?"
                              )
                            )
                          )
                        : n.push(
                            l.a.createElement(
                              "td",
                              { id: "cell" },
                              a.state.colVal * t + r
                            )
                          ));
                  e.push(l.a.createElement("tr", { id: "indRow" }, n));
                }
                return e;
              }),
              (a.promptAnswer = function () {
                var e = prompt("Enter the missing number");
                null == e
                  ? alert("You did not submit a guess.")
                  : e === a.rand.toString()
                  ? (alert("Congrats, " + e + " is the missing number!"),
                    a.btn.setAttribute("disabled", "disabled"))
                  : "" === e
                  ? alert("You did not enter a number.")
                  : alert(
                      "Sorry, " + e + " is not the missing number. Try again."
                    );
              }),
              (a.state = { rowVal: 10, colVal: 10, userGuess: null }),
              (a.handleRowChange = a.handleRowChange.bind(Object(b.a)(a))),
              (a.handleColChange = a.handleColChange.bind(Object(b.a)(a))),
              (a.handleUserGuess = a.handleUserGuess.bind(Object(b.a)(a))),
              (a.promptAnswer = a.promptAnswer.bind(Object(b.a)(a))),
              (a.rand = 0),
              (a.renderBool = !0),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(s.a)(t, [
              {
                key: "handleRowChange",
                value: function (e) {
                  this.setState({ rowVal: e.target.value });
                },
              },
              {
                key: "handleColChange",
                value: function (e) {
                  this.setState({ colVal: e.target.value });
                },
              },
              {
                key: "handleUserGuess",
                value: function (e) {
                  (this.renderBool = !1),
                    this.setState({ userGuess: e.target.value });
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return !1 !== this.renderBool;
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { id: "outer-div" },
                    l.a.createElement(
                      "div",
                      { id: "inner-div" },
                      l.a.createElement(
                        "table",
                        null,
                        l.a.createElement(
                          "caption",
                          { id: "title" },
                          "Find the Missing Number"
                        ),
                        this.makeRandom(),
                        this.createTable()
                      ),
                      l.a.createElement(
                        "div",
                        { class: "newGame" },
                        l.a.createElement(
                          "td",
                          { class: "newGameBtn", "text-align": "center" },
                          l.a.createElement(
                            "a",
                            {
                              href: "\\missingnumbergame",
                              class: "newGameTxt",
                            },
                            "NEW GAME"
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        y = (function (e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(u.a)(
                this,
                Object(c.a)(t).call(this, e)
              )).makeRandom = function () {
                a.rand = Math.floor(
                  Math.random() * (a.state.rowVal * a.state.colVal) + 1
                );
              }),
              (a.makeMissingNumbers = function () {
                var e = parseInt(a.state.colVal, 10),
                  t = e * parseInt(a.state.rowVal, 10);
                (a.above = a.rand - e),
                  (a.below = a.rand + e),
                  (a.left = a.rand - 1),
                  (a.right = a.rand + 1),
                  (null === a.above) | (a.above < 1) | (a.above > t) &&
                    (a.above = 0),
                  (null === a.below) | (a.below < 1) | (a.below > t) &&
                    (a.below = 0),
                  (null === a.left) | (a.left < 1) | (a.left > t) &&
                    (a.left = 0),
                  (null === a.right) | (a.right < 1) | (a.right > t) &&
                    (a.right = 0),
                  a.rand % e === 0 && (a.right = 0),
                  a.left % e === 0 && (a.left = 0);
              }),
              (a.createTable = function () {
                for (
                  var e = [], t = parseInt(a.state.colVal, 10), n = 0;
                  n < a.state.rowVal;
                  n++
                ) {
                  for (var r = [], i = 1; i < a.state.colVal + 1; i++)
                    i <= a.state.colVal &&
                      (t * n + i === a.above
                        ? r.push(
                            l.a.createElement(
                              "td",
                              {
                                id: "cell",
                                caption: "missing number",
                                class: "missingNumber",
                              },
                              l.a.createElement(
                                "button",
                                {
                                  ref: function (e) {
                                    a.btnA = e;
                                  },
                                  id: "above",
                                  onClick: a.promptAnswerAbove,
                                },
                                "?"
                              )
                            )
                          )
                        : t * n + i === a.below
                        ? r.push(
                            l.a.createElement(
                              "td",
                              {
                                id: "cell",
                                caption: "missing number",
                                class: "missingNumber",
                              },
                              l.a.createElement(
                                "button",
                                {
                                  ref: function (e) {
                                    a.btnB = e;
                                  },
                                  class: "below",
                                  onClick: a.promptAnswerBelow,
                                },
                                "?"
                              )
                            )
                          )
                        : t * n + i === a.left
                        ? r.push(
                            l.a.createElement(
                              "td",
                              {
                                id: "cell",
                                caption: "missing number",
                                class: "missingNumber",
                              },
                              l.a.createElement(
                                "button",
                                {
                                  ref: function (e) {
                                    a.btnL = e;
                                  },
                                  class: "left",
                                  onClick: a.promptAnswerLeft,
                                },
                                "?"
                              )
                            )
                          )
                        : t * n + i === a.right
                        ? r.push(
                            l.a.createElement(
                              "td",
                              {
                                id: "cell",
                                caption: "missing number",
                                class: "missingNumber",
                              },
                              l.a.createElement(
                                "button",
                                {
                                  ref: function (e) {
                                    a.btnR = e;
                                  },
                                  class: "right",
                                  onClick: a.promptAnswerRight,
                                },
                                "?"
                              )
                            )
                          )
                        : r.push(
                            l.a.createElement("td", { id: "cell" }, t * n + i)
                          ));
                  e.push(l.a.createElement("tr", { id: "indRow" }, r));
                }
                return e;
              }),
              (a.promptAnswerAbove = function () {
                var e = prompt("Enter the missing number");
                null == e
                  ? alert("You did not submit a guess.")
                  : e === a.above.toString()
                  ? (alert("Congrats, " + e + " is this missing number!"),
                    a.btnA.setAttribute("disabled", "disabled"))
                  : "" === e
                  ? alert("You did not enter a number.")
                  : alert(
                      "Sorry, " + e + " is not this missing number. Try again."
                    );
              }),
              (a.promptAnswerBelow = function () {
                var e = prompt("Enter the missing number");
                null == e
                  ? alert("You did not submit a guess.")
                  : e === a.below.toString()
                  ? (alert("Congrats, " + e + " is this missing number!"),
                    a.btnB.setAttribute("disabled", "disabled"))
                  : "" === e
                  ? alert("You did not enter a number.")
                  : alert(
                      "Sorry, " + e + " is not this missing number. Try again."
                    );
              }),
              (a.promptAnswerLeft = function () {
                var e = prompt("Enter the missing number");
                null == e
                  ? alert("You did not submit a guess.")
                  : e === a.left.toString()
                  ? (alert("Congrats, " + e + " is this missing number!"),
                    a.btnL.setAttribute("disabled", "disabled"))
                  : "" === e
                  ? alert("You did not enter a number.")
                  : alert(
                      "Sorry, " + e + " is not this missing number. Try again."
                    );
              }),
              (a.promptAnswerRight = function () {
                var e = prompt("Enter the missing number");
                null == e
                  ? alert("You did not submit a guess.")
                  : e === a.right.toString()
                  ? (alert("Congrats, " + e + " is this missing number!"),
                    a.btnR.setAttribute("disabled", "disabled"))
                  : "" === e
                  ? alert("You did not enter a number.")
                  : alert(
                      "Sorry, " + e + " is not this missing number. Try again."
                    );
              }),
              (a.state = { rowVal: 10, colVal: 10 }),
              (a.handleRowChange = a.handleRowChange.bind(Object(b.a)(a))),
              (a.handleColChange = a.handleColChange.bind(Object(b.a)(a))),
              (a.rand = 0),
              (a.above = 0),
              (a.below = 0),
              (a.left = 0),
              (a.right = 0),
              (a.renderBool = !0),
              (a.aboveCorrect = !1),
              (a.belowCorrect = !1),
              (a.leftCorrect = !1),
              (a.rightCorrect = !1),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(s.a)(t, [
              {
                key: "handleRowChange",
                value: function (e) {
                  this.setState({ rowVal: e.target.value });
                },
              },
              {
                key: "handleColChange",
                value: function (e) {
                  this.setState({ colVal: e.target.value });
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return !1 !== this.renderBool;
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { id: "outer-div" },
                    l.a.createElement(
                      "div",
                      { id: "inner-div" },
                      l.a.createElement(
                        "table",
                        null,
                        l.a.createElement(
                          "caption",
                          { id: "title" },
                          "Find the Missing Numbers"
                        ),
                        this.makeRandom(),
                        this.makeMissingNumbers(),
                        this.createTable()
                      ),
                      l.a.createElement(
                        "div",
                        { class: "newGame" },
                        l.a.createElement(
                          "td",
                          { class: "newGameBtn", "text-align": "center" },
                          l.a.createElement(
                            "a",
                            {
                              href: "\\completetablegame",
                              class: "newGameTxt",
                            },
                            "NEW GAME"
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        C = (function (e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(u.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(s.a)(t, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    h.a,
                    null,
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(v, null),
                      l.a.createElement(
                        d.c,
                        null,
                        l.a.createElement(d.a, {
                          path: "/",
                          component: p,
                          exact: !0,
                        }),
                        l.a.createElement(d.a, {
                          path: "/table",
                          component: g,
                        }),
                        l.a.createElement(d.a, {
                          path: "/missingnumbergame",
                          component: w,
                        }),
                        l.a.createElement(d.a, {
                          path: "/completetablegame",
                          component: y,
                        }),
                        l.a.createElement(d.a, { component: f })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      i.a.render(l.a.createElement(C, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[33, 1, 2]],
]);
//# sourceMappingURL=main.c65ce784.chunk.js.map