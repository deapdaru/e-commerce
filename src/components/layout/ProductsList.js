import React, { useContext } from 'react';
import { ProductsContext } from '../../App';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px",
        margin: "20px",
        display: "flex",
        justifyContent: "space-between"
    },
    product: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "85%"
    },
    media: {
        maxWidth: "30%"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    description: {
        paddingLeft: "16px"
    },
    button: {
        marginTop: "10px"
    }
}))

function ProductsList() {
    const classes = useStyles();
    const products = useContext(ProductsContext).DATA.products;
    console.log(products);

    return (
        <React.Fragment>
            {products.map((product) => (
                    <Card className={classes.root}>
                        <div className={classes.product}>
                            <CardMedia className={classes.media} component="img" src={product.image} />
                            <CardContent className={classes.content}>
                                <CardHeader title={product.productName}/>
                                <Typography variant="body1" color="textSecondary" className={classes.description}>{product.productDesc}</Typography>
                            </CardContent>
                        </div>
                        
                        <CardActions className={classes.content}>
                            <Button variant="outlined" color="secondary">Buy</Button>
                            <Button className={classes.button} variant="outlined" color="secondary">Add to Cart</Button>
                        </CardActions>
                    </Card>
                ))
            }
        </React.Fragment>
    )
}

export default ProductsList;
