import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import { saveShippingAddress } from "../Slice/CartSlice";

function ShippingScreen() {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart;


    const [address, setAddress] = useState(shippingAddress?.address || "");
    const [city, setCity] = useState(shippingAddress?.city || "");
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || "");
    const [country, setCountry] = useState(shippingAddress?.country || "");

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        navigate("/payment");

        if (!address || !city || !postalCode || !country) {
            toast.error("Please fill in all the fields");
            return;
        }


        if (postalCode.length < 4 || postalCode.length > 10) {
            toast.error("Please enter a valid postal code");
            return;
        }

        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        navigate("/payment");
    };

    useEffect(() => {
        if (shippingAddress) {
            setAddress(shippingAddress?.address);
            setCity(shippingAddress?.city);
            setPostalCode(shippingAddress?.postalCode);
            setCountry(shippingAddress?.country);
        }
    }, [shippingAddress]);

    return (
        <>
            <FormContainer>
                <h1>Shipping</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="my-2" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter address"
                            value={address}
                            required
                            onChange={(e) => setAddress(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className="my-2" controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter city"
                            value={city}
                            required
                            onChange={(e) => setCity(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className="my-2" controlId="postalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter postal code"
                            value={postalCode}
                            required
                            onChange={(e) => setPostalCode(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className="my-2" controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter country"
                            value={country}
                            required
                            onChange={(e) => setCountry(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary">
                        Continue
                    </Button>
                </Form>
            </FormContainer>
        </>
    );
}

export default ShippingScreen;