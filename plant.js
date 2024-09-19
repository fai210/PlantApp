const searchFrom=document.getElementById("search-from");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("submitBtn");
const showMoreBtn=document.getElementById("show-more-btn");
const sectionElement = document.getElementById("plants")
const Elements = document.getElementById("images")




async function allImages() {
    const url =`https://api.unsplash.com/search/photos?page=1&query=plant&client_id=HDlTn4LI5p7S7ADJiLREtbKAwOfm3LdReN-aAiSND0w`
    

    const rspponse=await fetch(url);
    const data=await rspponse.json();

    const fullData=data.results;
    fullData.map((item)=>{
        // const image= document.createElement("img");
        // image.src= item.urls.thumb;
        // const imagename=document.createElement("h3");
        // const namecontent=document.createTextNode(`${item.user.name}`)
        // imagename.appendChild(namecontent)
        
        // sectionElement.appendChild(image)
        // sectionElement.appendChild(imagename)
         
        // const sectionElement = document.getElementById('card-container');
        
        const col=document.createElement("div");
        col.className="card-sm-12 col-lg-8 mb-4 gridprops";
        


        const card=document.createElement("div");
        card.className="card text-dark card-has-bg click-col";
        


        const img =document.createElement("img");
        img.classList.add("card-img-top");

        
        img.src=item.urls.thumb;
        img.alt=item.user.name;
        
        card.appendChild(img);

        const cardeBody=document.createElement("div");
        cardeBody.classList.add("card-body");


        const imagename=document.createElement("h5")
        const namecontent=document.createTextNode(`supply by ${item.user.name}`);
        imagename.classList.add("plantUser");
        console.log(`${item.user.name}`)
        imagename.appendChild(namecontent);

        col.appendChild(card);
        col.appendChild(imagename)

        Elements.appendChild(col);
        



    })

    

}

allImages()

async function searchImages() {
    const url =`https://api.unsplash.com/search/photos?page=1&query=plant&client_id=HDlTn4LI5p7S7ADJiLREtbKAwOfm3LdReN-aAiSND0w`
}


searchResult.addEventListener("click", function(e){
    e.preventDefault();
    

    searchImages();
})

