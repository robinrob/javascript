(function($) {
    $.fn.slider = function(options) {
        var defaults = {
            callback: function() {},
            duration: 1000
        };
        var params = $.extend({}, defaults, options);

        return this.each(function(options) {
            var $slider = $(this);
            var $sliderList = $slider.children("ul");
            var $sliderItems = $sliderList.children("li");
            var itemWidth = $sliderItems.first().children("img").width()
            var maxMargin = -1 * ($sliderItems.length - 1) * itemWidth
            var $allButtons = $slider.find(".button");
            var $buttons = {
                forward: $allButtons.filter(".forward"),
                back: $allButtons.filter(".back")
            };

            function getLeftMargin() {
                return parseInt($sliderList.css("margin-left"))
            }

            function isAtEnd() {
                return getLeftMargin() < (maxMargin + itemWidth);
            }

            function isAtStart() {
                return getLeftMargin() > -itemWidth
            }

            function animateSliderToMargin(margin) {
                $sliderList.stop(true, true).animate({
                    "margin-left" : margin
                }, params.duration, params.callback);
            }

            // Can't just use animateSliderToMargin() for every call, because the incremental
            // method below actually updates the margin-left property only once the animation
            // has completed - whereas animateSliderToMargin updates the property immediately
            // - this can cause the bug where the margin value can end up between allowed values.
            function animateSlider(direction) {
                $sliderList.stop(true, true).animate({
                    "margin-left" : direction + "=" + itemWidth
                }, params.duration, params.callback);
            }

            $allButtons.on("click", function(event) {
                var isBackButton = $(this).hasClass("back");
                var direction = isBackButton ? "+" : "-"
                if (!isBackButton && isAtEnd()) {
                    animateSliderToMargin(0)
                }
                else if (isBackButton && isAtStart()) {
                    animateSliderToMargin(maxMargin)
                }
                else {
                    animateSlider(direction)
                }
                event.preventDefault()
            });
        });
    };
})(jQuery);