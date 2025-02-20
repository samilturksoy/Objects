# Proje Açıklaması

Bu proje, JavaScript nesneleriyle ilgili çeşitli işlemleri ve yöntemleri içermektedir. Proje iki ana dosyadan oluşmaktadır: `index.js` ve `Objects.js`.

## index.js

`index.js` dosyası, JavaScript nesneleri üzerinde çeşitli işlemleri gerçekleştiren kod örneklerini içermektedir. Aşağıda bu dosyada yer alan işlemler ve açıklamaları bulunmaktadır:

1. **Nesne Özellik Erişimi**:
    - `person` nesnesinin `name` ve `age` özelliklerine erişim ve loglama.
    ```js
    const person = { name: "John", age: 30, country: "USA" };
    //console.log(person.name);
    //console.log(person.age);
    ```

2. **Yeni Özellik Ekleme**:
    - [person](http://_vscodecontentref_/0) nesnesine [city](http://_vscodecontentref_/1) özelliği ekleme ve güncellenmiş nesneyi loglama.
    ```js
    person.city = "New York";
    //console.log(person);
    ```

3. **Özellik Güncelleme**:
    - [person](http://_vscodecontentref_/2) nesnesindeki [age](http://_vscodecontentref_/3) özelliğini değiştirme ve güncellenmiş nesneyi loglama.
    ```js
    person.age = 33;
    //console.log(person);
    ```

4. **Özellik Silme**:
    - [person](http://_vscodecontentref_/4) nesnesindeki [country](http://_vscodecontentref_/5) özelliğini kaldırma ve güncellenmiş nesneyi loglama.
    ```js
    delete person.country;
    //console.log(person);
    ```

5. **Nesne Destructuring**:
    - [person2](http://_vscodecontentref_/6) nesnesinden [name](http://_vscodecontentref_/7) ve [country](http://_vscodecontentref_/8) özelliklerini destructure etme ve loglama.
    ```js
    const person2 = { name: "John", age: 30, country: "USA" };
    const { name, country } = person2;
    //console.log(name, country);
    ```

6. **Nesne Anahtarları ve Değerleri**:
    - [person](http://_vscodecontentref_/9) nesnesi verildiğinde, `Object.keys()` ile tüm anahtarları ve `Object.values()` ile tüm değerleri alma ve loglama.
    ```js
    //console.log(Object.keys(person));
    //console.log(Object.values(person));
    ```

7. **İki Nesneyi Birleştirme**:
    - [person](http://_vscodecontentref_/10) ve [address](http://_vscodecontentref_/11) nesnelerini birleştirip tek bir nesne olarak loglama.
    ```js
    const address = { city: "New York", country: "USA" };
    const person3 = { name: "John", age: 30 };
    const personAddress = { ...person3, ...address };
    //console.log(personAddress);
    ```

8. **İç İçe Nesne Erişimi**:
    - [user](http://_vscodecontentref_/12) nesnesi verildiğinde, [address](http://_vscodecontentref_/13) nesnesi içindeki [city](http://_vscodecontentref_/14) değerine erişim ve loglama.
    ```js
    const user = { name: "John", address: { city: "New York", country: "USA" } };
    //console.log(user.address.city);
    ```

9. **for...in ile Nesne İterasyonu**:
    - [person4](http://_vscodecontentref_/15) nesnesini `for...in` döngüsü ile iterate etme ve her bir anahtarı ve karşılık gelen değeri loglama.
    ```js
    const person4 = { name: "John", age: 30, country: "USA" };
    for (let key in person4) {
        //console.log(key, person4[key]);
    }
    ```

10. **Özelliğin Var Olup Olmadığını Kontrol Etme**:
    - [person5](http://_vscodecontentref_/16) nesnesine göre, [city](http://_vscodecontentref_/17) özelliği varsa değerini loglama; yoksa "City not found" yazısını loglama.
    ```js
    const person5 = { name: "John", age: 30, country: "USA" };
    if (person5.city) {
        //console.log(person5.city);
    } else {
        //console.log("City not found");
    }
    ```

## [Objects.js](http://_vscodecontentref_/18)

[Objects.js](http://_vscodecontentref_/19) dosyası, bir [user](http://_vscodecontentref_/20) nesnesi üzerinde çeşitli işlemleri gerçekleştiren kod örneklerini içermektedir. Aşağıda bu dosyada yer alan işlemler ve açıklamaları bulunmaktadır:

1. **Nesne Tanımlama ve Özellik Ekleme**:
    - [user](http://_vscodecontentref_/21) nesnesi tanımlanmış ve [name](http://_vscodecontentref_/22) ve [sayHello](http://_vscodecontentref_/23) özellikleri eklenmiştir.
    ```js
    const user = {
        name: "Alice",
        sayHello: () => console.log("Hello"),
    };
    ```

2. **Dot Notation ve Bracket Notation ile Özellik Ekleme**:
    - [user](http://_vscodecontentref_/24) nesnesine [email](http://_vscodecontentref_/25) ve [country](http://_vscodecontentref_/26) özellikleri eklenmiştir.
    ```js
    user.email = "alice@example.com";
    user["country"] = "USA";
    ```

3. **Özellik Güncelleme**:
    - [user](http://_vscodecontentref_/27) nesnesindeki [email](http://_vscodecontentref_/28) özelliği güncellenmiştir.
    ```js
    user.email = "johndoe@example.com";
    ```

4. **Özellik Silme**:
    - [user](http://_vscodecontentref_/29) nesnesindeki [country](http://_vscodecontentref_/30) özelliği silinmiştir.
    ```js
    delete user.country;
    ```

5. **Metot Çağırma**:
    - [user](http://_vscodecontentref_/31) nesnesinin [sayHello](http://_vscodecontentref_/32) metodu çağrılmıştır.
    ```js
    user.sayHello(); // "Hello"
    ```

Bu dosyalar, JavaScript nesneleri üzerinde çeşitli işlemleri ve yöntemleri öğrenmek ve uygulamak için örnekler içermektedir.