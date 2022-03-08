// Compiled by ClojureScript 1.10.773 {}
goog.provide('app.elements');
goog.require('cljs.core');
goog.require('hiccups.runtime');
app.elements.numberDiv = (function app$elements$numberDiv(n){
return ["<div"," class=\"number\"",">",(function (){var attrs8752 = n;
if(cljs.core.map_QMARK_.call(null,attrs8752)){
return ["<h1",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs8752))),">","</h1>"].join('');
} else {
return ["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs8752)),"</h1>"].join('');
}
})(),"</div>"].join('');
});

//# sourceMappingURL=elements.js.map
