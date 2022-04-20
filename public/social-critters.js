// const submit = (e) => {
//     e.preventDefault()
//     axios
//       .get('/villagers')
//       .then(res => {
//         console.log(res.data)
//         let randomVillagers = []
//         for(let i = 0; i < 3; i++){
//             let randomIndex
//             do {
//                 randomIndex = Math.floor(Math.random() * res.data.length)
//             } while (randomVillagers.includes(randomIndex))
//             randomVillagers.push(randomIndex)
//         }
                
//         for (let i = 0; i < randomVillagers.length; i++) {
//           let villager = document.createElement('img');
//           villager.src = res.data[randomVillagers[i]].nh_details.photo_url
//           villager.height = 200
//           villager.width = 200
//           document.body.appendChild(villager)
//         }
//       })
//   }


// const selectBtn = document.getElementById('selectBtn')
// selectBtn.addEventListener('click',submit )
// console.log(selectBtn)
