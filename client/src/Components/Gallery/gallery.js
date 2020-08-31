import React from 'react'
import img1 from '../../Images/details-1.jpeg'
import img2 from '../../Images/details-2.jpeg'
import img3 from '../../Images/details-3.jpeg'
import img4 from '../../Images/details-4.jpeg'
import img5 from '../../Images/doublebasic.jpeg'
import img6 from '../../Images/doubledeluxe.jpeg'
import img7 from '../../Images/doubleeconomy.jpeg'
import img8 from '../../Images/doublestandard.jpeg'
import img9 from '../../Images/familybasic.jpeg'
import img10 from '../../Images/familydeluxe.jpeg'
import img11 from '../../Images/familyeconomy.jpeg'
import img12 from '../../Images/singlebasic.jpeg'
import img13 from '../../Images/singledeluxe.jpeg'
import img14 from '../../Images/singleeconomy.jpeg'
import img15 from '../../Images/singlestandard.jpeg'
import img16 from '../../Images/presidential.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop : '125px',
      width: '1500px',
      margin : 'auto'
    },
    gridList: {
      width: '100%',
      height: 'auto',
    },
  }));


const images = [
    {
        img : img1,
        cols : 1
    },
    {
        img : img2,
        cols : 1
    },
    {
        img : img3,
        cols : 1
    },
    {
        img : img4,
        cols : 1
    },
    {
        img : img5,
        cols : 1
    },
    {
        img : img6,
        cols : 1
    },
    {
        img : img7,
        cols : 1
    },
    {
        img : img8,
        cols : 1
    },
    {
        img : img9,
        cols : 1
    },
    {
        img : img10,
        cols : 1
    },
    {
        img : img11,
        cols : 1
    },
    {
        img : img12,
        cols : 1
    },
    {
        img : img13,
        cols : 1
    },
    {
        img : img14,
        cols : 1
    },
    {
        img : img15,
        cols : 1
    }
]

const Gallery = ()=>{
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
                {images.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>
                ))}
            </GridList>
        </div>
    )

}

export default Gallery