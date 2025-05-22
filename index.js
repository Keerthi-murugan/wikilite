const searchBox = document.getElementById("searchbox");
const resultsList = document.getElementById('results');
const searchbutton=document.getElementById("searchbutton");
searchbutton.addEventListener('click', function  ()
  {
      const query = searchBox.value;
      if (query.length === 0)
         {
        resultsList.innerHTML = '';
        return;
      }
      searchbutton.addEventListener('click', () => {
            popup.style.display = 'flex';
        });

      fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + query +'&format=json&origin=*')
        .then(response => response.json())
        .then(data => {
          resultsList.innerHTML = '';
          const results = data.query.search;
          results.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${item.title}</strong>: ${item.snippet}...`;
          resultsList.appendChild(li);
          });
        })
        .catch(error => {
          console.error('Error:', error);
          resultsList.innerHTML = '<li>Error fetching results.</li>';
        });
    });
  