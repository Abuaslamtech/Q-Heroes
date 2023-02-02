const btn = document.getElementById("generate");
const list = document.getElementById("list");
const search = document.getElementById("search");
const input = document.getElementById("input");

//random
btn.addEventListener("click", function () {
  list.innerHTML = "";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2b5c167fbbmsh9a02657ac160972p1030ccjsn01cd69817e19",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };

  fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
    .then((response) => response.json())
    .then((response) => {
      response.map((item) => {
        //create new div
        const div = document.createElement("div");
        div.className = "card";
        //create image element
        const pic = document.createElement("img");
        pic.src = item.images.lg;
        pic.className = "pic";
        //create 2nd div
        const info = document.createElement("div");
        info.className = "info";
        //create h2 element for name
        const name = document.createElement("h2");
        name.innerHTML = item.name;

        //create p element for publisher
        const pub = document.createElement("p");
        pub.innerHTML = item.biography.publisher;

        //append
        info.appendChild(name);
        info.appendChild(pub);

        div.appendChild(pic);
        div.appendChild(info);

        list.appendChild(div);
        console.log(item.images.lg);
      });
    })
    .catch((err) => console.error(err));
});
//search
search.addEventListener("click", function () {
  let keyword = input.value;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2b5c167fbbmsh9a02657ac160972p1030ccjsn01cd69817e19",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };

  fetch(`https://superhero-search.p.rapidapi.com/api/?hero=${keyword}`, options)
    .then((response) => response.json())
    .then((item) => {
      list.innerHTML = "";
      //create new div
      const div = document.createElement("div");
      div.className = "card";
      //create image element
      const pic = document.createElement("img");
      pic.src = item.images.lg;
      pic.className = "pic";
      //create 2nd div
      const info = document.createElement("div");
      info.className = "info";
      //create h2 element for name
      const name = document.createElement("h2");
      name.innerHTML = item.name;

      //create p element for publisher
      const pub = document.createElement("p");
      pub.innerHTML = item.biography.publisher;

      //append
      info.appendChild(name);
      info.appendChild(pub);

      div.appendChild(pic);
      div.appendChild(info);

      list.appendChild(div);
    })
    .catch((err) => console.error(err));
});
