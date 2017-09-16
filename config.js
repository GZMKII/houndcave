/**
 * Created by GZMKII on 2017/7/22.
 */
'use strict';

function createChip(posY,config, $container){
    var chip = {
        posY: posY,
        config: config,
        render: function render () {
            var self = this;
            var $content = $(this.config.content);
            var $card = $('<div class="chips"><div class="chips_bg"></div><p class="chip_title">' + this.config.title + '</p><p class="chip_type">' + this.config.tag + '</p><div class="divider"></div></div></div>');
            $card.bind('click',function(){
                $('.view_detail').css({
                    "display": "block",
                    "animation": "detailView_fadeIn 0.4s forwards"
                });
                $('.content').append($content)
                $('.main').css({
                    "animation":"mainView_fadeOut 0.4s forwards ",
                });
                setTimeout(function(){
                   // $('.main').classList.add('stop')
                    $('.chips_bg').css({
                        "animation-play-state": "paused"
                    })
                },400)
            });
            $card.css({
                top: this.posY * 20 + '%',
                opacity: 0
            });

            $card.find('.chips_bg').css({
                "background-image": 'url("' + self.config.bgUrl + '")'
            });


            $container.append($card);

            var time = Math.random() * 300 | 0;

            setTimeout(function () {
                $card.css({
                    opacity:1,
                    "animation": "chipsFadein 1.6s"
                })
            },time);
        }
    };
    return chip;
}

$(function ( ) {
    var $container = $('.view_chips');

    data.forEach(function(item, index){
        var posY = index % 2 === 0;
        var card = createChip(posY,item,$container);

        card.render();
    });
    $('.close').click(function () {
        $('.view_detail').css({
            "animation": "detailView_fadeOut 0.4s forwards"
        });

        setTimeout(function(){
            $('.content').empty();
            $('.view_detail').css({
                "display": "none",
            });
        },400);

        $('.main').css({
            "animation":"mainView_fadeIn 0.4s forwards"
        }).classList.remove('stop')
    })
});