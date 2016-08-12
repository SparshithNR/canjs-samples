import jquery from "jquery";
import stache from "can/view/stache/stache";
import clock from "./clock";
import can from "can";

var template = stache("<my-clock></my-clock>");
$("#app").html(template());