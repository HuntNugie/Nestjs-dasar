import { Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';

@Controller('/api/user')
export class UserController {
  @Get()
  getUser(): string {
    return 'GET';
  }

//   contoh response json
  @Get("/data")
  @HttpCode(200)
  jsonUser():Record<string,string>{
    return {
        data:"Hello nest js"
    }
  }

//   untuk mengambil query
  @Get("/sample")
  queryUser(@Query("name") name:string = "orang"): string{
    return `name user = ${name}`
  }

//   untuk mengambil params
  @Get("/:id")
  paramUser(@Param("id") id:string):string{
    return `id user : ${id}`
  }

  @Post()
  postUser(): string {
    return 'POST';
  }
}
