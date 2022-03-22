import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';
import Tile from '../Tile';
import { removeTile, addTileWithChecking } from '../../features/Grid/action';

const colors = ['red', 'blue', 'pink', 'yellow', 'gray'];

export default function Grid() {
  let gridTiles = useSelector((state) => state.grid);
  let dispatch = useDispatch();

  return (
    <div>
      <div>
        {gridTiles.map((tile, index) => {
          return (
            <Tile
              {...tile}
              key={index}
              onDoubleClick={(_) => dispatch(removeTile(tile.id))}
            />
          );
        })}
      </div>
      <div>
        {colors.map((color) => {
          return (
            <Button
              color={color}
              key={color}
              onClick={(_) => dispatch(addTileWithChecking(color))}
            />
          );
        })}
      </div>
    </div>
  );
}
