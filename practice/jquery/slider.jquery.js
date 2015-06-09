(function($) {
    $.fn.slider = function(options) {
        var defaults = {
            duration: 1000,
            animationDelay: 2000
        };
        var params = $.extend({}, defaults, options);

        return this.each(function(options) {
            var $slider = $(this);
            var $sliderList = $slider.children("ul");
            var $sliderItems = $sliderList.children("li");
            var itemWidth = $sliderItems.first().children("img").width()
            var maxMargin = -1 * ($sliderItems.length - 1) * itemWidth
            var $allButtons = $slider.find(".button");
            var $index = $(".index")
            $index.text("1")
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

            function animateSliderToIndex(index, callback) {
                $sliderList.stop(true, true).animate({
                    "margin-left" : -index * itemWidth
                }, params.duration, function() {
                    updateIndex(index + 1)
                    if (callback && typeof callback == "function") {
                        callback()
                    }
                });
            }

            // Can't just use animateSliderToMargin() for every call, because the incremental
            // method below actually updates the margin-left property only once the animation
            // has completed - whereas animateSliderToMargin updates the property immediately
            // - this can cause the bug where the margin value can end up between allowed values.
            function animateSlider(direction, callback) {
                var dirSymbol = (direction > 0 ? "-" : "+")
                $sliderList.stop(true, true).animate({
                    "margin-left" : dirSymbol + "=" + itemWidth
                }, params.duration, function() {
                    updateIndex(getIndex() + direction)
                    if (callback && typeof callback == "function") {
                        callback()
                    }
                });
            }

            function getIndex() {
                return parseInt($index.text())
            }

            function updateIndex(newIndex) {
                $index.text(newIndex)
            }

            function triggerSlider(direction, callback) {
                if (direction > 0 && isAtEnd()) {
                    animateSliderToIndex(0, callback)
                }
                else if (direction < 0 && isAtStart()) {
                    animateSliderToIndex($sliderItems.length - 1, callback)
                }
                else {
                    animateSlider(direction, callback)
                }
            }

            var resetTimer = function() {
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(automaticSlide, 30000)
            }

            function automaticSlide() {
                timer = setTimeout(function() {
                    triggerSlider(+1, function() {
                        automaticSlide();
                    });
                }, params.animationDelay);
            };

            $allButtons.on("click", function(event) {
                resetTimer()
                triggerSlider($(this).hasClass(".back") ? -1 : +1)
                event.preventDefault()
            })

            $(document.documentElement).on("keyup", function(event) {
                if(event.keyCode === 37) {
                    resetTimer()
                    triggerSlider(-1)
                } else if (event.keyCode === 39) {
                    resetTimer()
                    triggerSlider(+1)
                }
                event.preventDefault()
            });

            var timer = setTimeout(automaticSlide, params.animationDelay);
        });
    };
})(jQuery);