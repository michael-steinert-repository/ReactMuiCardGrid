import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    img: {
        height: '150px',
    },
});

const YamahaCard = (props) => {
    const cssClasses = useStyles();
    const {avatarSrc, title, subtitle, description, imgSrc} = props;

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar alt="Y" src={avatarSrc}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MotorcycleIcon/>
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia className={cssClasses.img} image={imgSrc}/>
            <CardContent>
                <Typography color="textSecondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Kaufen</Button>
                <Button size="small">Anfragen</Button>
            </CardActions>
        </Card>
    );
}

export default YamahaCard;