import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    coffeeType: string;

    @IsOptional()
    @IsNumber()
    quantity: number;
}
