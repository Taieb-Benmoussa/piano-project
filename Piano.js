const pianoKeys = document.querySelectorAll('.key')
function playSound(newUrl) {
    console.log(newUrl)
    new Audio(newUrl).play()
}
pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = '24-piano-keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 65:
                playSound('24-piano-keys/key01.mp3');  
                document.getElementById("button1").style.background="blue" ;

                setTimeout(() => {
                    document.getElementById("button1").style.background= "white" ;
                }, "200")
            break; 
        case 90:
            playSound('24-piano-keys/key02.mp3')
            document.getElementById("button2").style.background="red" ;

                setTimeout(() => {
                    document.getElementById("button2").style.background= "" ;
                }, "200");  
            break; 
        case 69:
            playSound('24-piano-keys/key03.mp3');    
                document.getElementById("button3").style.background="blue" ;

                setTimeout(() => {
                    document.getElementById("button3").style.background= "white" ;
                }, "200")
            break;  
        case 82:
            playSound('24-piano-keys/key04.mp3');
            document.getElementById("button4").style.background="red" ;

            setTimeout(() => {
                document.getElementById("button4").style.background= "" ;
            }, "200");   
            break; 
        case 84:
            playSound('24-piano-keys/key05.mp3');
            document.getElementById("button5").style.background="blue" ;

            setTimeout(() => {
                document.getElementById("button5").style.background= "white" ;
            }, "200")  
            break; 
        case 89:
            playSound('24-piano-keys/key06.mp3');
            document.getElementById("button6").style.background="red" ;

            setTimeout(() => {
                document.getElementById("button6").style.background= "" ;
            }, "200");  
            break; 
        case 85:
            playSound('24-piano-keys/key07.mp3'); 
            document.getElementById("button7").style.background="blue" ;

            setTimeout(() => {
                document.getElementById("button7").style.background= "white" ;
            }, "200")  
            break; 
        case 73:
            playSound('24-piano-keys/key08.mp3'); 
            document.getElementById("button8").style.background="blue" ;

            setTimeout(() => {
            document.getElementById("button8").style.background= "white" ;
            }, "200")   
            break; 
        case 79:
            playSound('24-piano-keys/key09.mp3');
            document.getElementById("button9").style.background="red" ;

            setTimeout(() => {
                document.getElementById("button9").style.background= "" ;
            }, "200");  
            break; 
        case 80:
            playSound('24-piano-keys/key10.mp3');
            document.getElementById("button10").style.background="blue" ;

            setTimeout(() => {
            document.getElementById("button10").style.background= "white" ;
            }, "200")    
            break; 
        case 221:
            playSound('24-piano-keys/key11.mp3');
            document.getElementById("button11").style.background="red" ;

            setTimeout(() => {
                document.getElementById("button11").style.background= "" ;
            }, "200");

            break; 
        case 186:
            playSound('24-piano-keys/key12.mp3'); 
            document.getElementById("button12").style.background="blue" ;

            setTimeout(() => {
            document.getElementById("button12").style.background= "white"; 
        }, "200")
            break; 
        case 81:
            playSound('24-piano-keys/key13.mp3');  
            document.getElementById("button13").style.background="blue" ;

            setTimeout(() => {
            document.getElementById("button13").style.background= "white"; 
        }, "200")
            break; 
        case 83:
            playSound('24-piano-keys/key14.mp3');
            document.getElementById("button14").style.background="red" ;

            setTimeout(() => {
                document.getElementById("button14").style.background= "" ;
            }, "200");  
            break; 
        case 68:
            playSound('24-piano-keys/key15.mp3');  
            document.getElementById("button15").style.background="blue" ;

            setTimeout(() => {
            document.getElementById("button15").style.background= "white"; 
        }, "200")
            break; 
        case 70:
            playSound('24-piano-keys/key16.mp3');  
            document.getElementById("button16").style.background="red" ;

            setTimeout(() => {
                document.getElementById("button16").style.background= "" ;
            }, "200");
            break; 
        case 71:
            playSound('24-piano-keys/key17.mp3');  
            document.getElementById("button17").style.background="blue" ;

            setTimeout(() => {
            document.getElementById("button17").style.background= "white"; 
        }, "200")
            break; 
        case 72:
            playSound('24-piano-keys/key18.mp3');  
            document.getElementById("button18").style.background="red" ;

            setTimeout(() => {
                document.getElementById("button18").style.background= "" ;
            }, "200");
            break; 
        case 74:
            playSound('24-piano-keys/key19.mp3'); 
            document.getElementById("button19").style.background="blue" ;

            setTimeout(() => {
            document.getElementById("button19").style.background= "white"; 
        }, "200") 
            break; 
        case 75:
            playSound('24-piano-keys/key20.mp3');  
            document.getElementById("button20").style.background="blue" ;

            setTimeout(() => {
            document.getElementById("button20").style.background= "white"; 
        }, "200")
            break; 
        case 76:
            playSound('24-piano-keys/key21.mp3');  
            document.getElementById("button21").style.background="red" ;

            setTimeout(() => {
                document.getElementById("button21").style.background= "" ;
            }, "200");
            break; 
        case 77:
            playSound('24-piano-keys/key22.mp3'); 
            document.getElementById("button22").style.background="blue" ;

            setTimeout(() => {
            document.getElementById("button22").style.background= "white"; 
        }, "200") 
            break; 
        case 192:
            playSound('24-piano-keys/key23.mp3');
            document.getElementById("button23").style.background="red" ;

            setTimeout(() => {
                document.getElementById("button23").style.background= "" ;
            }, "200");  
            break; 
        case 220:
            playSound('24-piano-keys/key24.mp3');
            document.getElementById("button24").style.background="blue" ;

            setTimeout(() => {
            document.getElementById("button24").style.background= "white"; 
        }, "200")   
            break; 
        
};
}

