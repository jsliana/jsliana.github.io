const feedsArea = document.querySelector('.feeds');

function getFeeds() {
   const xhr = new XMLHttpRequest();
   xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
         if (xhr.status == 200) {
            let parser = new DOMParser();
            let xml = parser.parseFromString(xhr.responseText, 'application/xml')
            console.log(xml)
            for (let i = 1; i <= 3; i++) {
               let txt = xml.getElementsByTagName('title')[i].textContent;
               let link = xml.getElementsByTagName('link')[i].textContent;
               let date = xml.getElementsByTagName('pubDate')[i].textContent;
               let bg = xml.getElementsByTagName('media:content')[i].getAttribute('url');

               setFeeds(txt, link, date, bg);
            }
         } 
         if (xhr.status == 404) {
            console.log('File or resource not found');
         }
      }
   };
   xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.lianatech.com/resources/blog.rss', true);
   xhr.send();
}

function setFeeds(text, link, date, bg) {

      let li = document.createElement('li');
      let a = document.createElement('a');
      let h5 = document.createElement('h5');
      let div = document.createElement('div');
      let p = document.createElement('p');
      let iconFrame = document.createElement('div');
      let icon = document.createElement('i');

      a.setAttribute('href', link);
      div.setAttribute('class', 'feed');
      div.setAttribute('style', `background:url(${bg})`);
      iconFrame.setAttribute('class', 'feed-icon-frame');
      icon.setAttribute('class', 'feed-icon fa-solid fa-rss');

      h5.textContent = date.substr(4, 12);
      p.textContent = text;  

      iconFrame.appendChild(icon);
      div.appendChild(iconFrame);
      div.appendChild(h5);
      div.appendChild(p);
      a.appendChild(div);
      li.appendChild(a);
      feedsArea.appendChild(li);
}

window.addEventListener('load', () => {
   getFeeds();
})
