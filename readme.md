# Belajar nest js 

## Hari 1
di hari pertama ini saya mempelajari berbagai hal yang dasar :
- membuat projek
- memahami struktur framework 
- memahami decorator
- memahami apa itu module
- memahami apa itu controller 
- memahami http method
- memahami http request
- memahami http response 

### membuat projek nest
dalam nestjs cara untuk membuat projek nya cukup simple.
langkah langkah sebagai berikut : 
1. pertama anda harus menginstall nestjs cli dengan perintah `npm install -g @nestjs/cli` di terminal
2. setelah terinstall tinggal langsung membuat projek dengan perintah di terminal `nest new nama-projek`

### struktur projek framework
di nest js di dalam projek saat kita baru buat cukup simple hanya terdiri dari 2 folder ada folder **src** dan **test** dimana kode utama kita akan di simpan di folder src

### memahami decorator
decorator merupakan kode typescript dimana berfungsi untuk memberikan informasi tambahan/metadata untuk program kita dimana sebagai penanda mirip seperti komentar hanya saja decorator dapat dimengerti dan di baca program kita sehingga bisa mengubah perilaku kode nya secara dinamis sesuai kebutuhan kode nya

penggunaan decorator di nestjs:
penggunaan decorator di nestjs itu di awali dengan tanda `@nama-decorator` contoh di nestjs yang sering di gunakan `@Module()`, `@Controller()` dan lain lain

### memahami module
module itu seperti bagian app kecil dari app projek besar dimana di dalam nest js setiap fitur/app itu harus di pisahkan dengan menggunakan module dan setiap module module tersebut bisa saling berhubungan jika di perlukan dan akan di kumpulkan satu dalam module utama yaitu appModule bawaan yang sudah ada saat kita kita install pertama kali projek.

cara membuat module cukup mudah di nest js kita hanya perlu mengetikan `nest generate module nama-module path` dan akan otomatis membuat module nya dan mengupdate appModule untuk imports module nya di module root utama

### memahami controller
controller dalam nest js itu bertugas seperti http layer dimana kita bisa menentukan endpoint routing nya disini sehingga bisa di bilang tempat yang akan menerima request dan memberikan response pada client dari server

cara membuat controller cukup mudah di nest js kita hanya perlu mengetikan `nest generate controller nama-controller path` di terminal projek kita dan akan otomatis di buatkan file dan folder nya di projek kita di tambah akan otomatis update dari module nya akan di tambahkan controller nya di dalam module yang bersangkutan

### memahami http method
di dalam nest js http method yang di gunakan untuk routing nya menggunakan decorator yang di import dari nestjs/common seperti `Get()`, `Post()`, `Put()` dan lain lain yang berfungsi untuk http method routing yang di gunakna sesuai tugas masing masing http method dalam struktur Rest atau Restfull api

### memahami http request
di dalam nestjs terdapat http request dimana yang di diambil datanya oleh decorator yang berfungsi untuk mendapatkan request dari client untuk service seperti `@Query()`,`@Param()` dan lain lain yang sehingga kita bisa mengelola request tersebut sesuai request dari client nya di bisnis logik

### memahami http response
di dalam nestjs terdapat http response dimana perilaku nya bisa di tentukan oleh decorator yang berfungsi untuk memberikan hasil dari input hasil request user dari server ke client contoh di nestjs ada `@HttpCode()` dan lain lain kadang juga http response ini ada yang berjalan otomatis seperti format return object menjadi json 

## Hari 2
di hari ke 2 saya mempelajari :
- cookie
- provider
- service
- dependency injection

### cookie
dalam web cookie adalah penyimpanan kecil yang di simpan di dalam browser, di nest js penggunaan cookie sama seperti di express js.

langkah langkah menggunakan cookie:
1. menginstall cookie parser dengan perintah `npm install cookie-parser`
2. menambahkan cookieParser ke dalam main program nya dengan `app.use(cookieParser("secret_key"))`
3. untuk menambahkan cookie ke client kita perlu response dari express yang di import langsung dari express `import {Response} from "express"` setelah itu kita mendapatkan akses ke method cookie untuk bisa setcookie nya dan menggunakan decorator `@Res()`
```typescript
setCookie(@Res() response:Response){
    response.cookie("name","Nugie")
}
```
4. untuk mendapatkan cookie dari client dan bisa di baca oleh server kita bisa menggunakan request dari express, karna biasanya client saat request sekalian juga mengirimkan cookie nya ke server, yang di import dari express `import {Request} from "express`  setelah itu kita dapat akses ke object cookies untuk mendapatkan data cookies nya 
```typescript
getCookie(@Req() req:Request){
    return req.cookies.name
}
```

### provider
provider merupakan istilah di pemograman yang meurujuk dimana object bisa di gunakan oleh object lain  salah satu nya provider service, class yang ada di dalam service itu dapat di gunakna oleh class lain di dalam nest js untuk menggunakan lokal provider(alias provider yang di gunakan di scope module nya sendiri) kita hanya perlu menambahkan nya di dalam module provider dan pastika bahwa provider terserbut menggunakan decorator `@injectable()`

### service
service dalam pemograman itu merupakan sebuah tempat dimana kode bisnis logic di tulis agar lebih fleksible dan skallable dan pemisahan fungsi, tetapi dalam nest js sebenernya service tuh sebuah provider class biasa dengan decorator injectable yang bisa di gunakan class lain cara membuat nya `nest generate service nama-service`

### dependency injection
dependency injection merupakan mungkin bisa di bilang teknik arsitektur di pemograman dimana sistem memasukan(inject) dependency yang di butuhkan object yang membutuhkan nya, dependency sendiri artinya itu sebuah object/class/value yang di butuhkan oleh class lain 

cara menginject dependency dengan constructor
```typescript
constructor(private userService:UserService){}
```

cara menginject dengan properti biasa
```typescript
@Inject()
private userService:UserService
```




