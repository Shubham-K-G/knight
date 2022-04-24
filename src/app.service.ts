import { Injectable } from '@nestjs/common';
import { coordinate } from './dto/coordinate.dto';

@Injectable()
export class AppService {
  getKnightMoves(coordinate: coordinate) : coordinate[]{
    let xAxisVectors = [-2, -2, -1, -1, 2, 2, 1, 1];
    let yAxisVectors = [-1, 1, -2, 2, -1, 1, -2, 2];
    let results = [];

    let possibleXCoordinates = xAxisVectors.map(
      (xvector) => Number(coordinate.x) + xvector,
    );
    let possibleYCoordinates = yAxisVectors.map(
      (yvector) => Number(coordinate.y) + yvector,
    );

    for (let i = 0; i < 8; i++) {
      if (
        possibleXCoordinates[i] > 0 &&
        possibleXCoordinates[i] < 9 &&
        possibleYCoordinates[i] > 0 &&
        possibleYCoordinates[i] < 9
      ) {
        results.push({
          x: possibleXCoordinates[i],
          y: possibleYCoordinates[i],
        });
      }
    }

    return results;
  }
}
