import React from "react";
import {Grid} from "@material-ui/core";
import YamahaCard from "./YamahaCard";
import Typography from "@material-ui/core/Typography";


const Content = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <YamahaCard
                    title="Yamaha R6"
                    subtitle="Rennstrecke"
                    imgSrc="https://sc-project.com/Images/Products/Zoom/Yamaha-R6-2017-2018-2019-side-GP70-R-titanio-Y21-T70T-silenziatore_muffler_silenciador_exhaust_scproject_euro4_homologation_silencieux_schalldampfer_titanium.jpg"
                    description="Ein Motorrad entwickelt für die Rennstrecke."
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <YamahaCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <YamahaCard/>
            </Grid>
        </Grid>
    );
}

export default Content;