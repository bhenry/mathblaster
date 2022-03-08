(ns app.elements
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime :as hiccupsrt]))

(defn numberDiv [n]
  (html [:div.number
    [:h1 n]]))
