import { ApiProperty } from "@nestjs/swagger";

export class BooksDto {
    @ApiProperty({
        type: String,
        example: 'Livro de Javascript',
        description: 'The title of the book',
        })
    title: string

    @ApiProperty({
        type: String,
        example: "R$ 15,00",
        description: "The price of the book",
    })
    price: string
}