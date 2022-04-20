

const clickCritter = (critter) =>{
    let critterContent = document.getElementById('critr-content')
    critterContent.classList.add('hide')
    critterContent.classList.remove('sticky')
    console.log('you clicked me')
    axios.get(`/${critter}`).then((res) =>{ //gets specific critter
        console.log('got critter')
        console.log(res)
        let dumpCritters = document.getElementById('dump-critters')
        // dumpCritters.children.clear()
        while (dumpCritters.firstChild){
            dumpCritters.removeChild(dumpCritters.firstChild)
        }
        for(let i = 0; i < res.data.length; i++){
            let critter = document.createElement('img') //creates img
            critter.className = 'critter-item'
            critter.src = res.data[i].image_url
            critter.addEventListener('click', e =>{
                let renderedImage = document.getElementById('rendered-image')
                renderedImage.src = res.data[i].render_url
                let availability = document.getElementById('availability')
                let location = document.getElementById('location')
                let price = document.getElementById('price')
                availability.innerText = res.data[i].north.months 
                location.innerText = res.data[i].location
                price.innerText = res.data[i].sell_nook
                dumpCritters.classList.add('hide')
                let critterDetailContainer = document.getElementById('critter-detail-container')
                critterDetailContainer.classList.remove('hide')
            })
            dumpCritters.appendChild(critter)
        }
    })
}

const clickBack = () =>{
    let critterDetailContainer = document.getElementById('critter-detail-container')
    critterDetailContainer.classList.add('hide')
    let dumpCritters = document.getElementById('dump-critters')
    dumpCritters.classList.remove('hide')
}

