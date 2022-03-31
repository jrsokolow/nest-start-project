import { Controller, Get, Post, Body, ConsoleLogger } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './dto/user.dto';

@Controller("main")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("user")
  saveUser(@Body() userDto: UserDTO) {
    console.log(userDto.id);
    console.log(userDto.username);
  }
}
