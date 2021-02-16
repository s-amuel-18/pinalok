// document.addEventListener("DOMContentLoaded", yall);

// ScrollReveal().reveal('.prueba');
$('.aniview').AniView();

document.addEventListener("DOMContentLoaded", function() {
    yall({
        events: {
            // The object key is sent as the first argument to `addEventListener`,
            // which is the event. The corresponding value can be the callback if you
            // don't want to send any options to `addEventListener`.
            load: function(event) {
                if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
                    event.target.classList.remove("opacity-0");
                }
            },
            // If we want to pass options to the third argument in `addEventListener`,
            // we can use a nested object syntax like so:
            error: {
                // Here, the `listener` member is the callback.
                listener: function(event) {
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