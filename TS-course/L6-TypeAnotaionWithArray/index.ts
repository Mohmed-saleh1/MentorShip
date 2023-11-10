//////////// Type Annotaions with Arrays  //////////

let all : (string | number | boolean) ;  // we can define more than one data type 

all = "A";
all = 100;
all = true ; 

let myFriends: string[] = ["osama","ahmed","Sayed"]  // we can define the array data type by this way 

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
        
}

