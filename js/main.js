

let name="manikandan";
let vow=["a","e","i","o","u"];
let res=0;

for(var i=0; i<name.length; i++){
	if(vow.includes(name[i])){
		res=res+1;
	}
}
console.log(res);


let first="manikandanmech";
let second="ranjithkumar";
let frtcount=0;
let sndcount=0;


for( var i=0 ;i< first.length ; i++){
	if(vow.includes(first[i])){
		frtcount=frtcount+1;
	}
}
for( var i=0 ;i< second.length ; i++){
	if(vow.includes(second[i])){
		sndcount=sndcount+1;
	}
}
if(frtcount<sndcount){
	console.log("second");
}
else{
	console.log("first");
}

let array=[3,6,9,13,35,5,19];
let spl=[];




let email="manikandan2dd32@gmail.com"

let str=email.indexOf("@");
console.log(str);

let sli=email.slice(0,str);

let name=sli.match(/[a-z]/g);
let num=sli.match(/[0-9]/g);

console.log(name);
console.log(num);

var mail="manidhiyamech234@gmail.com";
var sol="";
for( var i=0; i<mail.length;i++){
	if(mail[i]=="@"){
		//sol+=mail[i];
		break
		
	}
	console.log(mail[i]);
}
;
