import { CardMedia,CardContent, Typography } from '@material-ui/core'
import useStyles from './styles/SwiperCard';


function SwiperCard({item}) {
  const classes=useStyles()

  return (
          <>
              <CardMedia
                  className={classes.media}/>
                <CardContent className={classes.content}>
                    <Typography variant='h4' className={classes.heading}>{item.title}</Typography>
                    <Typography className={classes.subheading}>{item.para}</Typography>
                </CardContent>
            
          </>
  );
}

export default SwiperCard;
