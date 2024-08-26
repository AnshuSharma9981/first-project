let url3 = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');
let ol = document.querySelector('ol');

btn.addEventListener('click', async function (){
    let country=document.querySelector('input').value;
    let collegeList =await getcollege(country);

    ol.innerText='';
    for ( let college of collegeList){

        let list = document.createElement('li');
        list.innerText=college.name;
        ol.append(list);
    }
    

});

async function getcollege(country) {
    try{
        let res = await axios.get(url3+country);
    return res.data;
    }
    catch(err){
       return 'error is found';
    }
    
}