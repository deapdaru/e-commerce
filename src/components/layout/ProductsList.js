import React, { useContext } from 'react';
import { ProductsContext } from '../ProductsContext';
import { ButtonGroup, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, Hidden, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        padding: "20px",
        margin: "20px",
        display: "flex",
        justifyContent: "space-between"
    },
    product: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "80%",
        alignItems: "center"
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
    buttons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    button: {
        marginTop: "10px"
    }
}))

function ProductsList() {
    const theme = useTheme();
    const query = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();
    
    const data = useContext(ProductsContext);
    const products = data.DATA.products;
    const cartItems = data.cartItems;
    console.log(cartItems);

    const addProductToCart = (id) => () => {
        data.addCartItems({...cartItems, [id]: 1})
    }

    const cartItemCountIncrement = (key, id) => () => {
        if (key) {
            data.addCartItems({...cartItems, [id]: cartItems[id] + 1});
        } else {
            data.addCartItems({...cartItems, [id]: cartItems[id] - 1});
        }
    }

    const mediaQueryStyle = {
        display: query ? "none" : "flex"
    }

    return (
        <React.Fragment>
            {products.map((product) => (
                <Card key={product.id} className={classes.root}>
                    <div className={classes.product}>
                        <div className={classes.media}>
                            <CardMedia component="img" src={product.image} />
                        </div>
                        <CardContent className={classes.content}>
                            <CardHeader title={product.productName} subheader={` ₹ ${product.price}`}/>
                            <Hidden xsDown implementation="css">
                                <Typography variant="body1" color="textSecondary" className={classes.description}>{product.productDesc}</Typography>
                            </Hidden>
                        </CardContent>
                    </div>
                    <CardActions className={classes.buttons} style={mediaQueryStyle}>
                        <Button variant="outlined" color="secondary">Buy</Button>
                        <Button 
                            className={classes.button} 
                            variant="outlined" 
                            color="secondary"
                            onClick={addProductToCart(product.id)}
                            style={{display: cartItems[product.id] === 0 || cartItems[product.id] === undefined ? "block" : "none"}}
                        >
                            Add to Cart
                        </Button>
                        <ButtonGroup 
                            className={classes.button} 
                            variant="outlined" 
                            color="secondary" 
                            aria-label="outlined primary button group"
                            style={{display: cartItems[product.id] === undefined || cartItems[product.id] === 0 ? "none" : "block"}}
                        >
                            <Button onClick={cartItemCountIncrement(false, product.id)}>-</Button>
                            <Button color="secondary">{cartItems[product.id]}</Button>
                            <Button onClick={cartItemCountIncrement(true, product.id)}>+</Button>
                        </ButtonGroup>
                    </CardActions>
                </Card>
            ))}
        </React.Fragment>
    )
}

export default ProductsList;
