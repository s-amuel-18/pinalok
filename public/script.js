(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// document.addEventListener("DOMContentLoaded", yall);

// ScrollReveal().reveal('.prueba');
$('.aniview').AniView();

document.addEventListener("DOMContentLoaded", function () {
    yall({
        events: {
            // The object key is sent as the first argument to `addEventListener`,
            // which is the event. The corresponding value can be the callback if you
            // don't want to send any options to `addEventListener`.
            load: function load(event) {
                if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
                    event.target.classList.remove("opacity-0");
                }
            },
            // If we want to pass options to the third argument in `addEventListener`,
            // we can use a nested object syntax like so:
            error: {
                // Here, the `listener` member is the callback.
                listener: function listener(event) {
                    if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
                        event.target.classList.add("yall-error");
                    }
                },
                // The option below is sent as the third argument to `addEventListener`,
                // offering more control over how events are bound. If you want to
                // specify `useCapture` in lieu of options pass a boolean here instead.
                options: {
                    once: true
                }
            }
        }
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUVBO0FBQ0EsRUFBRSxVQUFGLEVBQWMsT0FBZDs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JELFNBQUs7QUFDRCxnQkFBUTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGtCQUFNLGNBQVMsS0FBVCxFQUFnQjtBQUNsQixvQkFBSSxDQUFDLE1BQU0sTUFBTixDQUFhLFNBQWIsQ0FBdUIsUUFBdkIsQ0FBZ0MsTUFBaEMsQ0FBRCxJQUE0QyxNQUFNLE1BQU4sQ0FBYSxRQUFiLElBQXlCLEtBQXpFLEVBQWdGO0FBQzVFLDBCQUFNLE1BQU4sQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLFdBQTlCO0FBQ0g7QUFDSixhQVJHO0FBU0o7QUFDQTtBQUNBLG1CQUFPO0FBQ0g7QUFDQSwwQkFBVSxrQkFBUyxLQUFULEVBQWdCO0FBQ3RCLHdCQUFJLENBQUMsTUFBTSxNQUFOLENBQWEsU0FBYixDQUF1QixRQUF2QixDQUFnQyxNQUFoQyxDQUFELElBQTRDLE1BQU0sTUFBTixDQUFhLFFBQWIsSUFBeUIsS0FBekUsRUFBZ0Y7QUFDNUUsOEJBQU0sTUFBTixDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsWUFBM0I7QUFDSDtBQUNKLGlCQU5FO0FBT0g7QUFDQTtBQUNBO0FBQ0EseUJBQVM7QUFDTCwwQkFBTTtBQUREO0FBVk47QUFYSDtBQURQLEtBQUw7QUE0QkgsQ0E3QkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCB5YWxsKTtcclxuXHJcbi8vIFNjcm9sbFJldmVhbCgpLnJldmVhbCgnLnBydWViYScpO1xyXG4kKCcuYW5pdmlldycpLkFuaVZpZXcoKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgeWFsbCh7XHJcbiAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBvYmplY3Qga2V5IGlzIHNlbnQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIGBhZGRFdmVudExpc3RlbmVyYCxcclxuICAgICAgICAgICAgLy8gd2hpY2ggaXMgdGhlIGV2ZW50LiBUaGUgY29ycmVzcG9uZGluZyB2YWx1ZSBjYW4gYmUgdGhlIGNhbGxiYWNrIGlmIHlvdVxyXG4gICAgICAgICAgICAvLyBkb24ndCB3YW50IHRvIHNlbmQgYW55IG9wdGlvbnMgdG8gYGFkZEV2ZW50TGlzdGVuZXJgLlxyXG4gICAgICAgICAgICBsb2FkOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGF6eVwiKSAmJiBldmVudC50YXJnZXQubm9kZU5hbWUgPT0gXCJJTUdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eS0wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBJZiB3ZSB3YW50IHRvIHBhc3Mgb3B0aW9ucyB0byB0aGUgdGhpcmQgYXJndW1lbnQgaW4gYGFkZEV2ZW50TGlzdGVuZXJgLFxyXG4gICAgICAgICAgICAvLyB3ZSBjYW4gdXNlIGEgbmVzdGVkIG9iamVjdCBzeW50YXggbGlrZSBzbzpcclxuICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgIC8vIEhlcmUsIHRoZSBgbGlzdGVuZXJgIG1lbWJlciBpcyB0aGUgY2FsbGJhY2suXHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJsYXp5XCIpICYmIGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PSBcIklNR1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwieWFsbC1lcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIG9wdGlvbiBiZWxvdyBpcyBzZW50IGFzIHRoZSB0aGlyZCBhcmd1bWVudCB0byBgYWRkRXZlbnRMaXN0ZW5lcmAsXHJcbiAgICAgICAgICAgICAgICAvLyBvZmZlcmluZyBtb3JlIGNvbnRyb2wgb3ZlciBob3cgZXZlbnRzIGFyZSBib3VuZC4gSWYgeW91IHdhbnQgdG9cclxuICAgICAgICAgICAgICAgIC8vIHNwZWNpZnkgYHVzZUNhcHR1cmVgIGluIGxpZXUgb2Ygb3B0aW9ucyBwYXNzIGEgYm9vbGVhbiBoZXJlIGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyJdfQ==
