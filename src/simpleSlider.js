(function ($) {
    var methods = {
        init:function () {
            return this.each(function () {
                var $this = $(this),
                    data = $this.data('simpleSlider');
                if (!data) {
                    $this.data('simpleSlider', {
                        target:$this,
                        current:0
                    });
                }
                $this.simpleSlider('builder');
                $this.simpleSlider('move');
            });
        },
        move:function(){
            return this.each(function(){
                var $this = $(this),
                    data = $this.data('simpleSlider'),
                    item = $this.children().get(data.current);
                $this.children().hide();
                data.holder.find('div.display').html($(item).html());
            });
        },
        next:function () {
            return this.each(function(){
                var $this = $(this),
                    data = $(this).data('simpleSlider');
                (data.current < $this.children().length-1) ? data.current++ : data.current=0;
                $this.simpleSlider('move');
            });
        },
        prev:function () {
            return this.each(function(){
                var $this = $(this),
                    data = $(this).data('simpleSlider');
                (data.current <= 0) ? data.current=$this.children().length - 1 : data.current--;
                $this.simpleSlider('move');
            });
        },
        builder:function(){
            return this.each(function(){
                var $this = $(this),
                    data = $(this).data('simpleSlider');
                var content=$('<div />',{class:'slider-content'}),
                    next=$('<a />', {text:'Next', href:'#'}),
                    prev=$('<a />', {text:'Prev', href:'#'}),
                    span=$('<div class="display"/>');
                $this.parent().append(content);
                content.append($this, span, prev, next);
                next.bind('click', function(){
                    $this.simpleSlider('next')
                });
                prev.bind('click', function(){
                    $this.simpleSlider('prev')
                });
                data.holder = $(content);
                $this.hide();
            })
        }
    }
    $.fn.simpleSlider = function (method) {
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery. SimpleSlider');
        }
    };
})(jQuery);
