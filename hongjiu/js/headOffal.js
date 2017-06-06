$(function(){
    $('.xuanxiang').hover(function(){
        $(this).addClass("quanbu_color").siblings().removeClass('quanbu_color');
    },function(){
        $(this).removeClass("quanbu_color");
    })

    $('.gouwuche').hover(function(){
        $(this).addClass('gouwuche1')
    },function(){
        $(this).removeClass('gouwuche1');
    })

})

class xuankaqh{
    constructor(){
        var qieh=document.getElementById("qieh");
        var desc=qieh.getElementsByClassName('desc');
        var a1=qieh.getElementsByTagName('a');

        this.desc=desc;
        this.a1=a1;
    }

    method(){
        for(let i=0;i<this.a1.length;i++){
            this.a1[i].onmousemove = function(){
                $(this.a1[i]).addClass('color1').siblings().removeClass('color1');
               this.hide();
               this.show(i); 
            }.bind(this)

            this.a1[i].onmouseout = function(){
                $(this.a1[i]).removeClass('color1');
                this.desc[i].style.display="none";
            }.bind(this)
        }
    }
    hide(){
        for(let i=0;i<this.a1.length;i++){
            this.desc[i].style.display="none";
        }
    }
    //显示点击的某一个样式
    show(i){
        this.desc[i].style.display="block";
    }
}

new xuankaqh().method();
