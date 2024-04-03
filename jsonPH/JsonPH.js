const btn = document.querySelector('#generator');
const person = document.querySelector('#name');
const person1 = document.querySelector('#name1');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const un = document.querySelector('#username');
const email = document.querySelector('#email');
const web = document.querySelector('#website');
const apiURL = 'https://jsonplaceholder.typicode.com/users';



async function RandomPortfolio(){
    const res = await fetch(apiURL);
    const json = await res.json();

    let random = Math.floor(Math.random() * json.length);
    person.innerText = json[random].name;
    person1.innerText = ("Name : "+json[random].name);
    un.innerText = ("Username : "+json[random].username);
    email.innerText = ("Email : "+json[random].email);
    web.innerText = ('Website : '+json[random].website);
    switch (random){
        case 0:
            image1.src = 'https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/769OEegYjNArN_cQl1yEGxICLZw=/400x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/WZKVG3I6BPAOD4QVHH3346QMC4.jpg';
            image2.src = 'https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/769OEegYjNArN_cQl1yEGxICLZw=/400x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/WZKVG3I6BPAOD4QVHH3346QMC4.jpg';        
        break;
        case 1:
            image1.src = 'https://huskers.com/imgproxy/Sdr4Nn6mlIQGwAuRUiMMW0FGC0U6OMWPPd01E_aFT5c/rs:fit:1980:0:0:g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2h1c2tlcnMtY29tLXByb2QvMjAyMy8wNi8zMC9JTnJqanR4b0tKVThjVGl2UlZ3MEs0alpyTThPaFl5WGpTYlN1b25aLmpwZw.jpg'
            image2.src = 'https://huskers.com/imgproxy/Sdr4Nn6mlIQGwAuRUiMMW0FGC0U6OMWPPd01E_aFT5c/rs:fit:1980:0:0:g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2h1c2tlcnMtY29tLXByb2QvMjAyMy8wNi8zMC9JTnJqanR4b0tKVThjVGl2UlZ3MEs0alpyTThPaFl5WGpTYlN1b25aLmpwZw.jpg'
        break;
        case 2:
            image1.src ='https://www.shutterstock.com/image-photo/head-shot-profile-photo-portrait-260nw-1831529317.jpg'
            image2.src ='https://www.shutterstock.com/image-photo/head-shot-profile-photo-portrait-260nw-1831529317.jpg'
        break;
        case 3:
            image1.src = 'https://img.freepik.com/free-photo/medium-shot-smiley-woman-with-hijab_23-2149122758.jpg'
            image2.src = 'https://img.freepik.com/free-photo/medium-shot-smiley-woman-with-hijab_23-2149122758.jpg'
        break;
        case 4:
            image1.src = 'https://assets-global.website-files.com/603f858b79d25a14328c00e7/61bb44f2bacfe144253df507_Halima%20Aden.jpg'
            image2.src = 'https://assets-global.website-files.com/603f858b79d25a14328c00e7/61bb44f2bacfe144253df507_Halima%20Aden.jpg'
        break;
        case 5:
            image1.src = 'https://www.shutterstock.com/image-photo/online-therapy-psychology-young-smiling-260nw-2304439215.jpg'
            image2.src = 'https://www.shutterstock.com/image-photo/online-therapy-psychology-young-smiling-260nw-2304439215.jpg'
        break;
        case 6:
            image1.src = 'https://img.freepik.com/free-photo/medium-shot-night-portrait_23-2149005431.jpg'
            image2.src = 'https://img.freepik.com/free-photo/medium-shot-night-portrait_23-2149005431.jpg'
        break;
        case 7:
            image1.src = 'https://images.financebuzz.com/446x235/filters:quality(75)/images/2019/10/30/borrow_low_interest_personal_loans.jpg'
            image2.src = 'https://images.financebuzz.com/446x235/filters:quality(75)/images/2019/10/30/borrow_low_interest_personal_loans.jpg'
        break;
        case 8:
            image1.src = 'https://i.pinimg.com/736x/a7/d9/90/a7d9906e32415c8124e8c98f6cdbb16f.jpg'
            image2.src = 'https://i.pinimg.com/736x/a7/d9/90/a7d9906e32415c8124e8c98f6cdbb16f.jpg'
        break;
        case 9:
            image1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzYJorb32UYQ5HvclpXHxsLRZBZn1aHQEPPtHHjZoorkmChC1dQn6IzYfE6LAskNs4Jc&usqp=CAU'
            image2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzYJorb32UYQ5HvclpXHxsLRZBZn1aHQEPPtHHjZoorkmChC1dQn6IzYfE6LAskNs4Jc&usqp=CAU'
        break;
        }//switch
        
    
}

btn.addEventListener('click',RandomPortfolio);