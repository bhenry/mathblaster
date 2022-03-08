// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12714){
var map__12715 = p__12714;
var map__12715__$1 = (((((!((map__12715 == null))))?(((((map__12715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12715):map__12715);
var m = map__12715__$1;
var n = cljs.core.get.call(null,map__12715__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12715__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12717_12749 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12718_12750 = null;
var count__12719_12751 = (0);
var i__12720_12752 = (0);
while(true){
if((i__12720_12752 < count__12719_12751)){
var f_12753 = cljs.core._nth.call(null,chunk__12718_12750,i__12720_12752);
cljs.core.println.call(null,"  ",f_12753);


var G__12754 = seq__12717_12749;
var G__12755 = chunk__12718_12750;
var G__12756 = count__12719_12751;
var G__12757 = (i__12720_12752 + (1));
seq__12717_12749 = G__12754;
chunk__12718_12750 = G__12755;
count__12719_12751 = G__12756;
i__12720_12752 = G__12757;
continue;
} else {
var temp__5753__auto___12758 = cljs.core.seq.call(null,seq__12717_12749);
if(temp__5753__auto___12758){
var seq__12717_12759__$1 = temp__5753__auto___12758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12717_12759__$1)){
var c__4556__auto___12760 = cljs.core.chunk_first.call(null,seq__12717_12759__$1);
var G__12761 = cljs.core.chunk_rest.call(null,seq__12717_12759__$1);
var G__12762 = c__4556__auto___12760;
var G__12763 = cljs.core.count.call(null,c__4556__auto___12760);
var G__12764 = (0);
seq__12717_12749 = G__12761;
chunk__12718_12750 = G__12762;
count__12719_12751 = G__12763;
i__12720_12752 = G__12764;
continue;
} else {
var f_12765 = cljs.core.first.call(null,seq__12717_12759__$1);
cljs.core.println.call(null,"  ",f_12765);


var G__12766 = cljs.core.next.call(null,seq__12717_12759__$1);
var G__12767 = null;
var G__12768 = (0);
var G__12769 = (0);
seq__12717_12749 = G__12766;
chunk__12718_12750 = G__12767;
count__12719_12751 = G__12768;
i__12720_12752 = G__12769;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12770 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12770);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12770)))?cljs.core.second.call(null,arglists_12770):arglists_12770));
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
var seq__12721_12771 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12722_12772 = null;
var count__12723_12773 = (0);
var i__12724_12774 = (0);
while(true){
if((i__12724_12774 < count__12723_12773)){
var vec__12735_12775 = cljs.core._nth.call(null,chunk__12722_12772,i__12724_12774);
var name_12776 = cljs.core.nth.call(null,vec__12735_12775,(0),null);
var map__12738_12777 = cljs.core.nth.call(null,vec__12735_12775,(1),null);
var map__12738_12778__$1 = (((((!((map__12738_12777 == null))))?(((((map__12738_12777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12738_12777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12738_12777):map__12738_12777);
var doc_12779 = cljs.core.get.call(null,map__12738_12778__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12780 = cljs.core.get.call(null,map__12738_12778__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12776);

cljs.core.println.call(null," ",arglists_12780);

if(cljs.core.truth_(doc_12779)){
cljs.core.println.call(null," ",doc_12779);
} else {
}


var G__12781 = seq__12721_12771;
var G__12782 = chunk__12722_12772;
var G__12783 = count__12723_12773;
var G__12784 = (i__12724_12774 + (1));
seq__12721_12771 = G__12781;
chunk__12722_12772 = G__12782;
count__12723_12773 = G__12783;
i__12724_12774 = G__12784;
continue;
} else {
var temp__5753__auto___12785 = cljs.core.seq.call(null,seq__12721_12771);
if(temp__5753__auto___12785){
var seq__12721_12786__$1 = temp__5753__auto___12785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12721_12786__$1)){
var c__4556__auto___12787 = cljs.core.chunk_first.call(null,seq__12721_12786__$1);
var G__12788 = cljs.core.chunk_rest.call(null,seq__12721_12786__$1);
var G__12789 = c__4556__auto___12787;
var G__12790 = cljs.core.count.call(null,c__4556__auto___12787);
var G__12791 = (0);
seq__12721_12771 = G__12788;
chunk__12722_12772 = G__12789;
count__12723_12773 = G__12790;
i__12724_12774 = G__12791;
continue;
} else {
var vec__12740_12792 = cljs.core.first.call(null,seq__12721_12786__$1);
var name_12793 = cljs.core.nth.call(null,vec__12740_12792,(0),null);
var map__12743_12794 = cljs.core.nth.call(null,vec__12740_12792,(1),null);
var map__12743_12795__$1 = (((((!((map__12743_12794 == null))))?(((((map__12743_12794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12743_12794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12743_12794):map__12743_12794);
var doc_12796 = cljs.core.get.call(null,map__12743_12795__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12797 = cljs.core.get.call(null,map__12743_12795__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12793);

cljs.core.println.call(null," ",arglists_12797);

if(cljs.core.truth_(doc_12796)){
cljs.core.println.call(null," ",doc_12796);
} else {
}


var G__12798 = cljs.core.next.call(null,seq__12721_12786__$1);
var G__12799 = null;
var G__12800 = (0);
var G__12801 = (0);
seq__12721_12771 = G__12798;
chunk__12722_12772 = G__12799;
count__12723_12773 = G__12800;
i__12724_12774 = G__12801;
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

var seq__12745 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12746 = null;
var count__12747 = (0);
var i__12748 = (0);
while(true){
if((i__12748 < count__12747)){
var role = cljs.core._nth.call(null,chunk__12746,i__12748);
var temp__5753__auto___12802__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___12802__$1)){
var spec_12803 = temp__5753__auto___12802__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12803));
} else {
}


var G__12804 = seq__12745;
var G__12805 = chunk__12746;
var G__12806 = count__12747;
var G__12807 = (i__12748 + (1));
seq__12745 = G__12804;
chunk__12746 = G__12805;
count__12747 = G__12806;
i__12748 = G__12807;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__12745);
if(temp__5753__auto____$1){
var seq__12745__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12745__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__12745__$1);
var G__12808 = cljs.core.chunk_rest.call(null,seq__12745__$1);
var G__12809 = c__4556__auto__;
var G__12810 = cljs.core.count.call(null,c__4556__auto__);
var G__12811 = (0);
seq__12745 = G__12808;
chunk__12746 = G__12809;
count__12747 = G__12810;
i__12748 = G__12811;
continue;
} else {
var role = cljs.core.first.call(null,seq__12745__$1);
var temp__5753__auto___12812__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___12812__$2)){
var spec_12813 = temp__5753__auto___12812__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12813));
} else {
}


var G__12814 = cljs.core.next.call(null,seq__12745__$1);
var G__12815 = null;
var G__12816 = (0);
var G__12817 = (0);
seq__12745 = G__12814;
chunk__12746 = G__12815;
count__12747 = G__12816;
i__12748 = G__12817;
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
var G__12818 = cljs.core.conj.call(null,via,t);
var G__12819 = cljs.core.ex_cause.call(null,t);
via = G__12818;
t = G__12819;
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
var map__12822 = datafied_throwable;
var map__12822__$1 = (((((!((map__12822 == null))))?(((((map__12822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12822):map__12822);
var via = cljs.core.get.call(null,map__12822__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__12822__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__12822__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__12823 = cljs.core.last.call(null,via);
var map__12823__$1 = (((((!((map__12823 == null))))?(((((map__12823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12823):map__12823);
var type = cljs.core.get.call(null,map__12823__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__12823__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__12823__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__12824 = data;
var map__12824__$1 = (((((!((map__12824 == null))))?(((((map__12824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12824):map__12824);
var problems = cljs.core.get.call(null,map__12824__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__12824__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__12824__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__12825 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__12825__$1 = (((((!((map__12825 == null))))?(((((map__12825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12825):map__12825);
var top_data = map__12825__$1;
var source = cljs.core.get.call(null,map__12825__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__12830 = phase;
var G__12830__$1 = (((G__12830 instanceof cljs.core.Keyword))?G__12830.fqn:null);
switch (G__12830__$1) {
case "read-source":
var map__12831 = data;
var map__12831__$1 = (((((!((map__12831 == null))))?(((((map__12831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12831):map__12831);
var line = cljs.core.get.call(null,map__12831__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__12831__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__12833 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__12833__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__12833,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12833);
var G__12833__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__12833__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12833__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__12833__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12833__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__12834 = top_data;
var G__12834__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__12834,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12834);
var G__12834__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__12834__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12834__$1);
var G__12834__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__12834__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12834__$2);
var G__12834__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__12834__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12834__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__12834__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12834__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__12835 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__12835,(0),null);
var method = cljs.core.nth.call(null,vec__12835,(1),null);
var file = cljs.core.nth.call(null,vec__12835,(2),null);
var line = cljs.core.nth.call(null,vec__12835,(3),null);
var G__12838 = top_data;
var G__12838__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__12838,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__12838);
var G__12838__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__12838__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__12838__$1);
var G__12838__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__12838__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__12838__$2);
var G__12838__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__12838__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12838__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__12838__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12838__$4;
}

break;
case "execution":
var vec__12839 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__12839,(0),null);
var method = cljs.core.nth.call(null,vec__12839,(1),null);
var file = cljs.core.nth.call(null,vec__12839,(2),null);
var line = cljs.core.nth.call(null,vec__12839,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__12821_SHARP_){
var or__4126__auto__ = (p1__12821_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__12821_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__12842 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__12842__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__12842,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__12842);
var G__12842__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__12842__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12842__$1);
var G__12842__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__12842__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__12842__$2);
var G__12842__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__12842__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__12842__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__12842__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12842__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12830__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__12846){
var map__12847 = p__12846;
var map__12847__$1 = (((((!((map__12847 == null))))?(((((map__12847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12847):map__12847);
var triage_data = map__12847__$1;
var phase = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__12849 = phase;
var G__12849__$1 = (((G__12849 instanceof cljs.core.Keyword))?G__12849.fqn:null);
switch (G__12849__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12850_12859 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12851_12860 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12852_12861 = true;
var _STAR_print_fn_STAR__temp_val__12853_12862 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12852_12861);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12853_12862);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__12844_SHARP_){
return cljs.core.dissoc.call(null,p1__12844_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12851_12860);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12850_12859);
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
var _STAR_print_newline_STAR__orig_val__12854_12863 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12855_12864 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12856_12865 = true;
var _STAR_print_fn_STAR__temp_val__12857_12866 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12856_12865);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12857_12866);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__12845_SHARP_){
return cljs.core.dissoc.call(null,p1__12845_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12855_12864);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12854_12863);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12849__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
