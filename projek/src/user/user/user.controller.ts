import { Controller, Get, HttpCode, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import type {HttpRedirectResponse} from '@nestjs/common'
import type {Response,Request} from "express"
import { UserService } from './user.service';
@Controller('/api/user')
export class UserController {
  constructor(private userService:UserService){}

  @Get()
  getUser(): string {
    return 'GET';
  }

  // contoh untuk set cookie
  @Get("/set-cookie")
  setCookie(@Query('name') name:string,@Res() response:Response){
    response.cookie("name",name)
    response.status(200).send("berhasil")
  }

  @Get("/get-cookie")
  getCookie(@Req() req:Request){
    return {
      name:req.cookies.name
    }
  }

//   contoh response json
  @Get("/data")
  @HttpCode(200)
  jsonUser():Record<string,string>{
    return {
        data:"Hello nest js"
    }
  }

// untuk redirect
@Get("/redirect")
@Redirect()
getRedirect():HttpRedirectResponse{
  return {
    url:"/api/user/data",
    statusCode:301
  }
}


//   untuk mengambil query
  @Get("/sample")
  queryUser(@Query("name") name:string = "orang"): string{
    return this.userService.sayHello(name)
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
