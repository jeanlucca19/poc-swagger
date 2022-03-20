import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBooks() {
    return [
      {title: "Curso de Typescript", price: "R$, 19,00"},
      {title: "Curso de Javascript", price: "R$ 15,90"},
      {title: "Curso de React", price: "R$ 29,90"}
    ]
  }

  getBooksById() {
    return {title: "Curso de Typescript", price: "R$, 19,00"}
  }

  saveBooks() {
    return "Book successfully saved!"
  }

  updateBooks() {
    return "Book successfully updated!"
  }

  deleteBooks() {
    return "Book successfully deleted!"
  }
}