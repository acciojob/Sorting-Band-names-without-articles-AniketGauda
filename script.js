//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let a = [];
touristSpots.forEach((str)=>{
    let tmp=[];
    let tstr = '';
    for(let i=0;i<str.length;i++){
        if(str[i]!=' ')
            tstr+=str[i];
        else{
            if(tstr!='a'&&tstr!='A'&&tstr!='an'&& tstr!="AN"&& tstr!="An"&& tstr!="the"&&tstr!='THE'&& tstr!='The')
                tmp.push(tstr);
            tstr='';
        }
    }
    if(tstr.length!=0)
        tmp.push(tstr);

    let ans='';
    for(let i=0;i<tmp.length;i++){
        if(i!=tmp.length-1)
            ans+=tmp[i]+" ";
        else
            ans+=tmp[i];
    }
    a.push(ans);
})

a.sort();
touristSpots = a;


let pDiv = document.getElementById("bands");
for(let i=0;i<touristSpots.length;i++)
    pDiv.innerHTML+=`<li>${touristSpots[i]}</li>`