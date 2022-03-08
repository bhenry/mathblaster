(ns app.core
  (:require [app.elements :refer [numberDiv]]))

(enable-console-print!)

(def number1 (numberDiv 10))

(set! (.-innerHTML (js/document.getElementById "app")) number1)
