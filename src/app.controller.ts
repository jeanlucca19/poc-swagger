import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { BooksDto } from './dto/books.dto';

@ApiTags('books')
@Controller('/books')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @ApiOkResponse({description: "You got all the books!"})
  @Get()
  getBooks() {
    return this.appService.getBooks();
  }

  @ApiParam({name: "id", required: false})
  @ApiOkResponse({description: "You got one book!"})
  @Get('/:id')
  getBooksById() {
    return this.appService.getBooksById()
  }

  @ApiCreatedResponse({description: "You saved a new book!"})
  @Post() 
  saveBooks() {
    return this.appService.saveBooks()
  }

  @ApiParam({name: "id", required: false})
  @ApiOkResponse({description: "You updated a book!"})
  @Put('/:id')
  updateBooks() {
    return this.appService.updateBooks()
  }

  @ApiParam({name: "id", required: false})
  @ApiOkResponse({description: "The books has been removed!"})
  @Delete('/:id')
  deleteBooks() {
    return this.appService.deleteBooks()
  }
}
