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

function createChip(config,$container){
    var chip = {
        config: config,
        render: function render () {
            var self = this;

            var $card = $('<div class="chip"><img class="chips_bg" src="' + this.config.bgUrl + '"><p class="title">' + this.config.title + '</p><p class="tag">' + this.config.tag + '</p><div class="divider"></div></div></div>')
            $card.bind('click',function(){
                alert('load article: ' + self.config.title );
            });
            $container.append($card);

        }
    }
    return chip;
};