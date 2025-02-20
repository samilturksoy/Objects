/* Nesne Özellik Erişimi
    Aşağıdaki person nesnesinden name ve age özelliklerine erişin ve loglayın. */

const person = { name: "John", age: 30, country: "USA" };
//console.log(person.name);
//console.log(person.age);

/* Yeni Özellik Ekleme
    person nesnesine bir city özelliği ekleyin ve güncellenmiş nesneyi loglayın. */

person.city = "New York";
//console.log(person);

/*Özellik Güncelleme
person nesnesindeki age özelliğini değiştirin ve güncellenmiş nesneyi loglayın. */

person.age = 33;
//console.log(person);

/*Özellik Silme
person nesnesindeki country özelliğini kaldırın ve güncellenmiş nesneyi loglayın. */

delete person.country;
//console.log(person);

/*Nesne Destructuring
Aşağıdaki nesneden name ve country özelliklerini destructure edin ve loglayın:*/

const person2 = { name: "John", age: 30, country: "USA" }; 
const { name, country } = person2;
//console.log(name, country);

/*Nesne Anahtarları ve Değerleri
person nesnesi verildiğinde, Object.keys() ile tüm anahtarları ve Object.values() ile tüm değerleri alın. Her ikisini de loglayın.
 Object.keys() ve Object.values() kullanın */

//console.log(Object.keys(person));
//console.log(Object.values(person));

/* İki Nesneyi Birleştirme
Aşağıdaki iki nesneyi person ve address birleştirip tek bir nesne olarak loglayın:

const person = { name: "John", age: 30 };
const address = { city: "New York", country: "USA" }; */

const address = { city: "New York", country: "USA" };
const person3 = { name: "John", age: 30 };
const personAddress = { ...person3, ...address };
//console.log(personAddress);

/*İç İçe Nesne Erişimi
Aşağıdaki iç içe nesne user verildiğinde, address nesnesi içindeki city değerini erişip loglayın:

const user = { name: "John", address: { city: "New York", country: "USA" } }; */

const user = { name: "John", address: { city: "New York", country: "USA" } };
//console.log(user.address.city);

/*for...in ile Nesne İterasyonu
Aşağıdaki person nesnesini for...in döngüsü ile iterate edin ve her bir anahtarı ve karşılık gelen değeri loglayın.

const person = { name: "John", age: 30, country: "USA" }; */
const person4 = { name: "John", age: 30, country: "USA" };
for (let key in person4) {
    //console.log(key, person4[key]);
}

/*Özelliğin Var Olup Olmadığını Kontrol Etme
Aşağıdaki person nesnesine göre, city özelliği varsa değerini loglayın; yoksa "City not found" yazısını loglayın.

const person = { name: "John", age: 30, country: "USA" }; */
const person5 = { name: "John", age: 30, country: "USA" };
if (person5.city) {
    //console.log(person5.city);
} else {
   // console.log("City not found");
}