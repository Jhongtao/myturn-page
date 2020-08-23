HTMLDivElement.prototype.createTurnPage = function(arr) {
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var Oul1 = document.createElement('ul');
    var Oul2 = document.createElement('ul');
    this.appendChild(Oul1);
    this.appendChild(div1);
    this.appendChild(div2);
    this.appendChild(Oul2);
    Oul1.className = 'ul-img';
    Oul2.className = 'btn-list';
    div1.className = 'btn btn-left';
    div2.className = 'btn btn-right';
    div1.innerHTML = '&lt';
    div2.innerHTML = '&gt';
    creatLi(arr);
    movePage();

    function creatLi(arr) {
        var liTwo = [];
        var liOne = [];
        arr.forEach(function(item, index) {
            liOne[index] = document.createElement('li');
            liTwo[index] = document.createElement('li');
            liOne[index].innerHTML = `<a href="#"><img src="${item}" alt=""></a>`
            Oul2.appendChild(liTwo[index]);
            Oul1.appendChild(liOne[index]);
            console.log(item, index)
        })
        liOne[arr.length] = document.createElement('li');
        liOne[arr.length].innerHTML = liOne[0].innerHTML;
        Oul1.appendChild(liOne[arr.length]);
    }

    function movePage() {
        var movepage = document.getElementsByClassName('ul-img')[0];
        var moveLen = movepage.children[0].offsetWidth;
        var num = movepage.children.length;
        var btnLeft = document.getElementsByClassName('btn-left')[0];
        var btnRight = document.getElementsByClassName('btn-right')[0];
        var btnlist = document.getElementsByClassName('btn-list')[0].children;
        var timer = null;
        var key = true;
        var index = 0;
        movepage.onmouseover = function() {
            clearInterval(timer);
        }
        movepage.onmouseleave = function() {
            timer = setInterval(automove, 2000)
        }
        btnLeft.onclick = function() {
            automove('left-right');
        }
        btnRight.onclick = function() {
            automove('right-left');
        }
        for (var i = 0; i < btnlist.length; i++) {
            (function(j) {
                btnlist[j].onclick = function() {
                    clearInterval(timer);
                    index = j;
                    changeIndex(index);
                    startMove(movepage, { left: -j * moveLen }, function() {
                        timer = setInterval(automove, 2000)
                    });
                }

            }(i))

        }

        function automove(target) {
            if (key) {
                key = false;
                // clearInterval(timer);
                if (target == undefined || target == 'right-left') {
                    startMove(movepage, { left: movepage.offsetLeft - moveLen }, function() {
                        index++;
                        console.log(index);
                        if (movepage.offsetLeft == -(num - 1) * moveLen) {
                            movepage.style.left = 0 + 'px';
                            index = 0;
                        }
                        changeIndex(index);
                        key = true;
                    });
                } else if (target == 'left-right') {
                    index--;
                    if (movepage.offsetLeft == 0) {
                        movepage.style.left = -(num - 1) * moveLen + 'px';
                        index = num - 2;
                    }
                    startMove(movepage, { left: movepage.offsetLeft + moveLen }, function() {
                        key = true;
                        changeIndex(index);
                        // console.log(index);
                    });

                }


            }

        }

        function changeIndex(_index) {
            for (var i = 0; i < btnlist.length; i++) {
                btnlist[i].className = '';
            }
            btnlist[_index].className = 'on';
        }
        changeIndex(index);

        timer = setInterval(automove, 2000)
            // var div = document.getElementsByClassName('rota')[0];
            // div.onclick = function () {
            // 	   startMove(div,{left:1500})
            // }


    }

}