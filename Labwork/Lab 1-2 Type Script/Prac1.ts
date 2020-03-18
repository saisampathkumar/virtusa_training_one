// GLOBAL Variables
var x: string = "abcd"; //string type
var y: number = 100; //number type
var z: boolean = true; //boolean type
var o: any = "askadsk1231o2"; //any type

// Function defining
function add(a:string, b:number, c:boolean, m:any) {
    console.log(typeof(a+b+c+m));
}

//Function calling
add(x,y,z,o);

// creating object of function
var h = new add(x,y,z,o);
h;

//CLASS Defining