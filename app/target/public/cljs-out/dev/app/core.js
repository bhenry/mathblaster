// Compiled by ClojureScript 1.10.773 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('app.elements');
cljs.core.enable_console_print_BANG_.call(null);
app.core.number1 = app.elements.numberDiv.call(null,(10));
(document.getElementById("app").innerHTML = app.core.number1);

//# sourceMappingURL=core.js.map
