import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { BooksDto } from './dto/books.dto';

@ApiTags('books')
@Controller('/books')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @ApiOperation({ summary: "Get all the books"})
  @ApiOkResponse({description: "You got all the books!"})
  @Get()
  getBooks() {
    return this.appService.getBooks();
  }

  @ApiOperation({ summary: "Get a book by id"})
  @ApiParam({name: "id", required: false})
  @ApiOkResponse({description: "You got one book!"})
  @Get('/:id')
  getBooksById() {
    return this.appService.getBooksById()
  }

  @ApiOperation({ summary: "Save a book"})
  @ApiCreatedResponse({description: "You saved a new book!"})
  @ApiBody({type: BooksDto})
  @Post() 
  saveBooks() {
    return this.appService.saveBooks()
  }

  @ApiOperation({ summary: "Update a book"})
  @ApiParam({name: "id", required: false})
  @ApiOkResponse({description: "You updated a book!"})
  @Put('/:id')
  updateBooks() {
    return this.appService.updateBooks()
  }

  @ApiOperation({ summary: "Delete a book"})
  @ApiParam({name: "id", required: false})
  @ApiOkResponse({description: "The books has been removed!"})
  @Delete('/:id')
  deleteBooks() {
    return this.appService.deleteBooks()
  }
}
