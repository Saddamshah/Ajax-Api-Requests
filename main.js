const  url        = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes',
       display    = document.querySelector('#quote'),
       axiosBtn   = document.querySelector('#axios'),
       fetchBtn   = document.querySelector('#fetch'),
       xhrBtn     = document.querySelector('#xhr'); 


//XHR
xhrBtn.addEventListener('click', function(){
  const XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      const data = JSON.parse(XHR.responseText)[0];
      display.innerText = data
    } else {
      console.log('Someting is wrong on xhr')
    }
  }
  XHR.open('GET', url);
  XHR.send()
})

//Fetch
fetchBtn.addEventListener('click', function(){
  fetch(url)
  .then(function(res){
      res.json().then(function(data){
      display.innerText = data[0];
    })
  })
   .catch(function(err){
      console.log('Error: '+ err)
   });
});

//jQuery 
$('#jquery').on('click', function(){
    $.getJSON(url).done(function(data){
      $('#quote').text(data[0])
    }).fail(function(err){
      console.log('This Error is: ', err)
    })
  });
  
// Axios
axiosBtn.addEventListener('click', function(){
    axios.get(url)
    .then(function(res){
        display.innerText = res.data[0]
    })
    .catch(function(err){
        console.log(err.message)
    })
})
