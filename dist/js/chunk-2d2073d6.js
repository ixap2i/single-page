(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2073d6"],{a04e:function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return i}));var r=n("61cf"),a=n("fb69"),i=(n("347a"),function(e,t,n,i,c){var o=e.ownerDocument.defaultView,u=function(e){return e.startX<=50&&t()},d=function(e){var t=e.deltaX,n=t/o.innerWidth;i(n)},s=function(e){var t=e.deltaX,n=o.innerWidth,a=t/n,i=e.velocityX,u=n/2,d=i>=0&&(i>.2||e.deltaX>u),s=d?1-a:a,f=s*n,w=0;if(f>5){var h=f/Math.abs(i);w=Math.min(h,540)}c(d,a<=0?.01:Object(r["j"])(0,a,.9999),w)};return Object(a["createGesture"])({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:u,onStart:n,onMove:d,onEnd:s})})}}]);