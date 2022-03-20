import { ApiProperty } from "@nestjs/swagger";

export class BooksDto {
    @ApiProperty({
        type: String,
        description: "The title of the book",
        default: '',
        })
    readonly title: string

    @ApiProperty({
        type: String,
        description: "The price of the book",
        default: "R$ 19,90"
    })
    readonly price: string
}