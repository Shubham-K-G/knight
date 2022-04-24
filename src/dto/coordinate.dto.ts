import { Type } from "class-transformer";
import { IsInt, Max, Min } from "class-validator";

export class coordinate {

    @IsInt()
    @Min(1)
    @Max(8)
    @Type(() => Number)
    x: number;

    @IsInt()
    @Min(1)
    @Max(8)
    @Type(() => Number)
    y: number;
}