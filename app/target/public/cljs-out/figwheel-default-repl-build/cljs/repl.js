// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13151){
var map__13152 = p__13151;
var map__13152__$1 = (((((!((map__13152 == null))))?(((((map__13152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13152):map__13152);
var m = map__13152__$1;
var n = cljs.core.get.call(null,map__13152__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13154_13186 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13155_13187 = null;
var count__13156_13188 = (0);
var i__13157_13189 = (0);
while(true){
if((i__13157_13189 < count__13156_13188)){
var f_13190 = cljs.core._nth.call(null,chunk__13155_13187,i__13157_13189);
cljs.core.println.call(null,"  ",f_13190);


var G__13191 = seq__13154_13186;
var G__13192 = chunk__13155_13187;
var G__13193 = count__13156_13188;
var G__13194 = (i__13157_13189 + (1));
seq__13154_13186 = G__13191;
chunk__13155_13187 = G__13192;
count__13156_13188 = G__13193;
i__13157_13189 = G__13194;
continue;
} else {
var temp__5753__auto___13195 = cljs.core.seq.call(null,seq__13154_13186);
if(temp__5753__auto___13195){
var seq__13154_13196__$1 = temp__5753__auto___13195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13154_13196__$1)){
var c__4556__auto___13197 = cljs.core.chunk_first.call(null,seq__13154_13196__$1);
var G__13198 = cljs.core.chunk_rest.call(null,seq__13154_13196__$1);
var G__13199 = c__4556__auto___13197;
var G__13200 = cljs.core.count.call(null,c__4556__auto___13197);
var G__13201 = (0);
seq__13154_13186 = G__13198;
chunk__13155_13187 = G__13199;
count__13156_13188 = G__13200;
i__13157_13189 = G__13201;
continue;
} else {
var f_13202 = cljs.core.first.call(null,seq__13154_13196__$1);
cljs.core.println.call(null,"  ",f_13202);


var G__13203 = cljs.core.next.call(null,seq__13154_13196__$1);
var G__13204 = null;
var G__13205 = (0);
var G__13206 = (0);
seq__13154_13186 = G__13203;
chunk__13155_13187 = G__13204;
count__13156_13188 = G__13205;
i__13157_13189 = G__13206;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13207 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13207);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13207)))?cljs.core.second.call(null,arglists_13207):arglists_13207));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13158_13208 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13159_13209 = null;
var count__13160_13210 = (0);
var i__13161_13211 = (0);
while(true){
if((i__13161_13211 < count__13160_13210)){
var vec__13172_13212 = cljs.core._nth.call(null,chunk__13159_13209,i__13161_13211);
var name_13213 = cljs.core.nth.call(null,vec__13172_13212,(0),null);
var map__13175_13214 = cljs.core.nth.call(null,vec__13172_13212,(1),null);
var map__13175_13215__$1 = (((((!((map__13175_13214 == null))))?(((((map__13175_13214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13175_13214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13175_13214):map__13175_13214);
var doc_13216 = cljs.core.get.call(null,map__13175_13215__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13217 = cljs.core.get.call(null,map__13175_13215__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13213);

cljs.core.println.call(null," ",arglists_13217);

if(cljs.core.truth_(doc_13216)){
cljs.core.println.call(null," ",doc_13216);
} else {
}


var G__13218 = seq__13158_13208;
var G__13219 = chunk__13159_13209;
var G__13220 = count__13160_13210;
var G__13221 = (i__13161_13211 + (1));
seq__13158_13208 = G__13218;
chunk__13159_13209 = G__13219;
count__13160_13210 = G__13220;
i__13161_13211 = G__13221;
continue;
} else {
var temp__5753__auto___13222 = cljs.core.seq.call(null,seq__13158_13208);
if(temp__5753__auto___13222){
var seq__13158_13223__$1 = temp__5753__auto___13222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13158_13223__$1)){
var c__4556__auto___13224 = cljs.core.chunk_first.call(null,seq__13158_13223__$1);
var G__13225 = cljs.core.chunk_rest.call(null,seq__13158_13223__$1);
var G__13226 = c__4556__auto___13224;
var G__13227 = cljs.core.count.call(null,c__4556__auto___13224);
var G__13228 = (0);
seq__13158_13208 = G__13225;
chunk__13159_13209 = G__13226;
count__13160_13210 = G__13227;
i__13161_13211 = G__13228;
continue;
} else {
var vec__13177_13229 = cljs.core.first.call(null,seq__13158_13223__$1);
var name_13230 = cljs.core.nth.call(null,vec__13177_13229,(0),null);
var map__13180_13231 = cljs.core.nth.call(null,vec__13177_13229,(1),null);
var map__13180_13232__$1 = (((((!((map__13180_13231 == null))))?(((((map__13180_13231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13180_13231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13180_13231):map__13180_13231);
var doc_13233 = cljs.core.get.call(null,map__13180_13232__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13234 = cljs.core.get.call(null,map__13180_13232__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13230);

cljs.core.println.call(null," ",arglists_13234);

if(cljs.core.truth_(doc_13233)){
cljs.core.println.call(null," ",doc_13233);
} else {
}


var G__13235 = cljs.core.next.call(null,seq__13158_13223__$1);
var G__13236 = null;
var G__13237 = (0);
var G__13238 = (0);
seq__13158_13208 = G__13235;
chunk__13159_13209 = G__13236;
count__13160_13210 = G__13237;
i__13161_13211 = G__13238;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__13182 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13183 = null;
var count__13184 = (0);
var i__13185 = (0);
while(true){
if((i__13185 < count__13184)){
var role = cljs.core._nth.call(null,chunk__13183,i__13185);
var temp__5753__auto___13239__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___13239__$1)){
var spec_13240 = temp__5753__auto___13239__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13240));
} else {
}


var G__13241 = seq__13182;
var G__13242 = chunk__13183;
var G__13243 = count__13184;
var G__13244 = (i__13185 + (1));
seq__13182 = G__13241;
chunk__13183 = G__13242;
count__13184 = G__13243;
i__13185 = G__13244;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__13182);
if(temp__5753__auto____$1){
var seq__13182__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13182__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__13182__$1);
var G__13245 = cljs.core.chunk_rest.call(null,seq__13182__$1);
var G__13246 = c__4556__auto__;
var G__13247 = cljs.core.count.call(null,c__4556__auto__);
var G__13248 = (0);
seq__13182 = G__13245;
chunk__13183 = G__13246;
count__13184 = G__13247;
i__13185 = G__13248;
continue;
} else {
var role = cljs.core.first.call(null,seq__13182__$1);
var temp__5753__auto___13249__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___13249__$2)){
var spec_13250 = temp__5753__auto___13249__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13250));
} else {
}


var G__13251 = cljs.core.next.call(null,seq__13182__$1);
var G__13252 = null;
var G__13253 = (0);
var G__13254 = (0);
seq__13182 = G__13251;
chunk__13183 = G__13252;
count__13184 = G__13253;
i__13185 = G__13254;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__13255 = cljs.core.conj.call(null,via,t);
var G__13256 = cljs.core.ex_cause.call(null,t);
via = G__13255;
t = G__13256;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__13259 = datafied_throwable;
var map__13259__$1 = (((((!((map__13259 == null))))?(((((map__13259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13259):map__13259);
var via = cljs.core.get.call(null,map__13259__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__13259__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__13259__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__13260 = cljs.core.last.call(null,via);
var map__13260__$1 = (((((!((map__13260 == null))))?(((((map__13260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13260):map__13260);
var type = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__13261 = data;
var map__13261__$1 = (((((!((map__13261 == null))))?(((((map__13261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13261):map__13261);
var problems = cljs.core.get.call(null,map__13261__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__13261__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__13261__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__13262 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__13262__$1 = (((((!((map__13262 == null))))?(((((map__13262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13262):map__13262);
var top_data = map__13262__$1;
var source = cljs.core.get.call(null,map__13262__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__13267 = phase;
var G__13267__$1 = (((G__13267 instanceof cljs.core.Keyword))?G__13267.fqn:null);
switch (G__13267__$1) {
case "read-source":
var map__13268 = data;
var map__13268__$1 = (((((!((map__13268 == null))))?(((((map__13268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13268):map__13268);
var line = cljs.core.get.call(null,map__13268__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13268__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__13270 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__13270__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13270,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13270);
var G__13270__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13270__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13270__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13270__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13270__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__13271 = top_data;
var G__13271__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13271,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13271);
var G__13271__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13271__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13271__$1);
var G__13271__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13271__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13271__$2);
var G__13271__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13271__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13271__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13271__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13271__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__13272 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13272,(0),null);
var method = cljs.core.nth.call(null,vec__13272,(1),null);
var file = cljs.core.nth.call(null,vec__13272,(2),null);
var line = cljs.core.nth.call(null,vec__13272,(3),null);
var G__13275 = top_data;
var G__13275__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__13275,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__13275);
var G__13275__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__13275__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__13275__$1);
var G__13275__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__13275__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__13275__$2);
var G__13275__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13275__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13275__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13275__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13275__$4;
}

break;
case "execution":
var vec__13276 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13276,(0),null);
var method = cljs.core.nth.call(null,vec__13276,(1),null);
var file = cljs.core.nth.call(null,vec__13276,(2),null);
var line = cljs.core.nth.call(null,vec__13276,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__13258_SHARP_){
var or__4126__auto__ = (p1__13258_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__13258_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__13279 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__13279__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__13279,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__13279);
var G__13279__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13279__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13279__$1);
var G__13279__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__13279__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__13279__$2);
var G__13279__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__13279__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__13279__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13279__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13279__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13267__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__13283){
var map__13284 = p__13283;
var map__13284__$1 = (((((!((map__13284 == null))))?(((((map__13284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13284):map__13284);
var triage_data = map__13284__$1;
var phase = cljs.core.get.call(null,map__13284__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__13284__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__13284__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13284__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__13284__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__13284__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__13284__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__13284__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__13286 = phase;
var G__13286__$1 = (((G__13286 instanceof cljs.core.Keyword))?G__13286.fqn:null);
switch (G__13286__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13287_13296 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13288_13297 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13289_13298 = true;
var _STAR_print_fn_STAR__temp_val__13290_13299 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13289_13298);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13290_13299);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__13281_SHARP_){
return cljs.core.dissoc.call(null,p1__13281_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13288_13297);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13287_13296);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13291_13300 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13292_13301 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13293_13302 = true;
var _STAR_print_fn_STAR__temp_val__13294_13303 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13293_13302);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13294_13303);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__13282_SHARP_){
return cljs.core.dissoc.call(null,p1__13282_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13292_13301);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13291_13300);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13286__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
