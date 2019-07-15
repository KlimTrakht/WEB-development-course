'use strict';

function getPolygonArea(dimension) {
    let polygonSquare = Math.pow(dimension, 2) + Math.pow((dimension - 1), 2);
    return polygonSquare;
}