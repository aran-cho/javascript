let mixins = ["apple", false, "banana", 4 , "orange", ["tiger", "lion"]];

for (let mixin of mixins){
    console.log("mixins:" + mixin);
    
    // console.log(!(typeof (mixin) =='Number') || (typeof (mixin) =='Boolean') || (typeof (mixin) =='String'))
    // );

    let condision = !((typeof(mixin) =='number') || (typeof(mixin) =='boolean') || (typeof(mixin) =='string'));
    if (condision){
        for(let animal of mixin)
        {
            console.log("animals :" +animal);
        }
    }
}