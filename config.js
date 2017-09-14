/**
 * Created by GZMKII on 2017/7/22.
 */
// function chipsBuilder (){
//     // for(i=0,i<5,i++){
//         var chips=document.createElement("div");
//         var node=document.createTextNode("somehting");
//         chips.appendChild(node);
//
//         var element=document.getElementById("view_chips");
//         element.appendChild(chips);
// }
//

// $(function(){
//     for( var i=0; i<7; i++){
//     $("div.view_chips").append('<div class="chips"></div>')
//     }
// })
'use strict';

function createChip(config, $container){
    var chip = {
        config: config,
        render: function render () {

            var self = this;
            var $card = $('<div class="chips"><div class="chips_bg"></div><p class="chip_title">' + this.config.title + '</p><p class="chip_type">' + this.config.tag + '</p><div class="divider"></div></div></div>');
            $card.bind('click',function(){
                alert('load article: ' + self.config.title);
            });
            $card.find('.chips_bg').css({
                "background-image": 'url("' + self.config.bgUrl + '")'
            });
            $container.append($card);


        }
    };
    return chip;
}
$(function ( ) {
    var $container = $('.view_chips');
    data.forEach(function(item){
        var card = createChip(item,$container);
        card.render();
    });
});