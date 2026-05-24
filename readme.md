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