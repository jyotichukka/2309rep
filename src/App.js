
import './App.css';

function App() {
  let flowers=["lilly","Sunflower","Rose","Marigold","Levender","Hibiscus","Daisy","Jasmine","Olender","Moon","moon"];
  let indianLeaders=["subhas chandrabose","jawaharlal nehru","mahathma gandhi"];
  return (
  

  <div>
    <h1>Learning Array methods</h1>
  
    
    <div className="App">
    <h2>Array methods 1</h2>
     <button onClick={()=>{
      console.log(flowers.length);
      

     }}
     >length</button>
    
    {/* <h2>to string</h2> */}
     <button onClick={()=>{
      console.log(flowers);
      console.log(flowers.toString());
      console.log(flowers.join("|"));

      let  sloganOfFlower="BE INSPIRED";
      console.log(Array.from(sloganOfFlower))
     }}>toString</button>
     
     <button onClick={()=>{
      console.log(flowers);
      flowers.push("olender");
      console.log(flowers);
     }}>push</button>
     <button onClick={()=>{
      console.log(flowers);
      flowers.pop("olender");
      console.log(flowers);
     }}>pop</button>
     <button onClick={()=>{
      flowers.unshift("iries");
      console.log(flowers);
     }}>unShift</button>
     <button onClick={()=>{
      flowers.shift();
      console.log(flowers);
     }}>Shift</button>
     <button onClick={()=>{
      console.log(flowers);
      flowers.splice(3,4,"Tulip","Day lily");
      console.log(flowers);
     }}>splice</button>
      <h2>Array methods 2</h2>
     <button onClick={()=>{
      console.log(flowers);
      delete flowers[5];
      console.log(flowers);
     }}>delete</button>

     <button onClick={()=>{
    let icecreams=["venila","strabery","chacholate","grape"];
    let fruits=["mango","grape","sapota","orange"];

      // let items=icecreams.concat(fruits);
      let items=[...icecreams,...fruits];
      console.log(icecreams);
      console.log(fruits);
      console.log(items);
      
     }}>concat</button>
     <button onClick={()=>{
      console.log();
      let myFavourates=[["pine apple","sapora","orange"],
    ["biryani","lolypops"],
  ["Rose","jasmine",["lilly","levender"]],
];
let flattedArr =myFavourates.flat(2);
console.log(myFavourates);
console.log(flattedArr);

     }}>flat</button>

     <button onClick={()=>{
      console.log(flowers);
      let slicedArr=flowers.slice(3,7)
      console.log(slicedArr);

     }}>slice</button>
     <button onClick={()=>{
console.log(flowers);
      let fill=flowers.fill("Earth",3,7);
      console.log(fill);
     }}>fill</button>
     <button onClick={()=>{
      // for( let i=0;i<flowers.length;i++){
      //   console.log(flowers[i])

      // }

      flowers.forEach((ele,i)=>{
        console.log(`---->${i}--->${ele}`);
        
      });
      
      // console.log(flowers[0]);
      // console.log(flowers[1]);
      // console.log(flowers[2]);
      // console.log(flowers[3]);
      // console.log(flowers[4]);
      // console.log(flowers[5]);
      // console.log(flowers[6]);
      // console.log(flowers[7]);
      // console.log(flowers[8]);
     }}>forEach</button>
     <button onClick={()=>{
      let tenthMarks = [90,91,92,93,94,95];
     let result= tenthMarks.every((ele)=>{
        return ele < 35;
      });
      if(result==true){
        console.log("student failed")
      }else{
        console.log("student passed");
      }
      let totalMarks=tenthMarks.reduce((ele,tot)=>{
        return (tot+=ele);
      
      });
      console.log(totalMarks);
     
// if(tenthMarks[0]>=35&&
//   tenthMarks[1]>=35&&
//   tenthMarks[2]>=35&&
//   tenthMarks[3]>=35&&
//   tenthMarks[4]>=35){
//     console.log("student passed in tenth");

//   }else{
//     console.log("studentbfailed in tenth");
//   }
  

     }}>every,some,reduce</button>
     <button onClick={()=>{
      let keerthi=["k","E","E","R","T","H","A","N","A"];
      let keerthana=keerthi.reduceRight((e,a)=>{
        return(e+=a);
      });
      console.log(keerthana);

     }}>reduceRight</button>
     <button onClick={()=>{
      let numbers=[11,22,33,44,55,66,77,88,99,111,222,333,444,555,666,777,888,999];
      console.log(numbers);
      let filteredArr=numbers.filter((ele)=>{
        return ele%2==0;
      });
      console.log(filteredArr);

      let filteredArr1=numbers.filter((ele)=>{
        return ele%2!=0;
      })
      console.log(filteredArr1);
      
      let filteredArr2=numbers.filter((ele)=>{
        return ele<150;
      });
      console.log(filteredArr2);
      let filteredArr3=numbers.filter((ele)=>{
        return ele >150;
      });
      console.log(filteredArr3);
  
     

     }}>filter</button>
     <h2>Array methods 3</h2>
     <button  onClick={()=>{
      let score=[25,45,67,93,103,22,107,66,200];
      let scoredVal = score.find((ele)=>{
        return ele >=100;
      })
      console.log(scoredVal);
     }}>find</button>
    
      <button  onClick={()=>{
      let score=[25,45,67,93,103,22,107,66,200];
      let scoredVal = score.findIndex((ele)=>{
        return ele >=100;
      })
      console.log(scoredVal);
     }}>findindex</button>
     <button onClick={()=>{
      let score=[25,45,67,93,103,22,107,66,200];
      let scoredVal = score.findIndex((ele)=>{
        return ele >=100;
      })
      console.log(scoredVal);
      console.log(score.includes(93));
    }}>includes</button>
    <button onClick={()=>{
      console.log(flowers.indexOf("moon"));
      console.log(flowers.lastIndexOf("moon"))
      console.log(flowers.indexOf("someplanet"));
    }}>indexOf,lastIndexOf</button>
   <button onClick={()=>{
      console.log(flowers);
      let newflowers=flowers.sort();
      console.log(flowers);
      console.log(newflowers);
     
      newflowers=flowers.reverse();
      console.log(flowers);
      console.log(newflowers);
    }}>sort,reverse,words</button>
    
    
    <button onClick={()=>{
      let numbers=[10,23,34,45,111,222,11,33,56,67,78,89,100];
      console.log(numbers);
      numbers.sort((a,b)=>{
return(a-b);
      });
      console.log(numbers);
      numbers.reverse((a,b)=>{
return(a-b);
      })
      console.log(numbers);
    }}>sort,reverse,numbers</button>
    <button onClick={()=>{
      // let marks=[40,50,35,45,34,56];
      // let  marksWithBonus=marks.map((ele,i)=>{
      //   return ele+5;
      // });
      // console.log(marks);
      // console.log(marksWithBonus);
     
      let indianLeadersWithRespect =indianLeaders.map((ele,i)=>{
        return `shri.${ele} garu`;
      });
      console.log(indianLeaders);
      console.log(indianLeadersWithRespect);

    }}>map</button>
  {indianLeaders.map((ele)=>{
    return <h2>{ele}</h2>;
})};
{flowers.map((ele)=>{
  return <h2>{ele}</h2>
})}
    

    </div>
    </div>
    
    
    
  );
}

export default App;
