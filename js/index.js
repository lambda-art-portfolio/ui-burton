

/*
const ref = document.getElementById("cta-button");
const popup = document.getElementById("popup");

ref.addEventListener('mouseover', function(){
    target.style.display = '';
    var popper = new Popper(ref,popup,{
        placement: 'top',
    });
}, false);

popup.style.display = 'hidden';
*/

function fadeInPage() {
    if (!window.AnimationEvent){return; }
    var fader = document.getElementById('fader');
    fader.classList.add('fade-out')
    console.log(fader.classList);
}

document.addEventListener('DOMContentLoaded', function(){
    if (!window.AnimationEvent){return; }
    var anchors = document.getElementsByTagName('a');
    for (var idx=0; idx<anchors.length; idx+=1) {
        if (anchors[idx].hostname !== window.location.hostname) {
            continue;
        }
        anchors[idx].addEventListener('click', function(event){
            var fader = document.getElementById('fader'),
            anchor = event.currentTarget;

            var listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);

            event.preventDefault();

            fader.classList.add('fade-in');
        });
    }
});

window.addEventListener('pageshow', function(event){
    if (!event.persisted) {
        return;
    }
    var fader = document.getElementById('fader');
    fader.classList.remove('fade-in');
});