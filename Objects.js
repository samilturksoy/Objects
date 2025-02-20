const user = {
    name: "Alice", // objelerin fieldlarini birbirinden ayirmak icin virgul kullanin
    sayHello: () => console.log("Hello"), // bu field arrow function yerine normal bir function da olabilirdi
   };
   
   user.email = "alice@example.com"; // Dot notation kullanarak erisim
   user["country"] = "USA"; // Bracket notation kullanarak erisim
   
   user.email = "johndoe@example.com" // email field'inin degerini degistirme
   
   console.log(user);
   
   delete user.country; // country fieldini user objesinden sil
   console.log(user);
   
   // user objesinin sayHello methodunu cagir
   user.sayHello(); // "Hello"