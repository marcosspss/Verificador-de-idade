function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <12){img.setAttribute('src', 'Criança-H.png')
            } else if (idade <22){img.setAttribute('src', 'Adolescente-H.png')
            } else if (idade <50){img.setAttribute('src', 'Adulto-H.png')
            } else {img.setAttribute('src', 'Idoso-H.png')
            }


        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <12){img.setAttribute('src', 'Criança-M.png')
        } else if (idade <22){img.setAttribute('src', 'Adolescente-M.png')
        } else if (idade <50){img.setAttribute('src', 'Adulto-M.png')
        } else {img.setAttribute('src', 'Idoso-M.png')
        }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
        res.appendChild(img)
    }
    
}