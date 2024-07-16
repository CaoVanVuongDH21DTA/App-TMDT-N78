import React, {useEffect, useState} from "react";
import '../../../styles/Admin/Update.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate, useParams} from "react-router-dom";

const UpdateGame = ()=>{
    const {gameId} = useParams<{gameId: string}>();
    const navigate = useNavigate();
    const [discountError, setDiscountError] = useState("");

    const [gameData , setGameData] = useState({
        discount:"",
        name:"",
        price:"",
        originalPrice:"",
        title:"",
        image:""
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "discount") {
            if (parseInt(value) > 100) {
                setDiscountError("Discount must be less than or equal to 100");
                return;
            } else {
                setDiscountError("");
            }
        }
        setGameData({
            ...gameData,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await fetch(`http://localhost:8080/games/${gameId}`);
                const data = await response.json();
                setGameData(data);
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
        }
        fetchGame();
    }, [gameId]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitting game data: ", gameData); // Thêm log này để kiểm tra dữ liệu

        try {
            const response = await fetch(`http://localhost:8080/games/update-game/${gameId}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(gameData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error ${response.status}: ${errorData.message || 'Unknown error'}`);
            }

            const data = await response.json();
            console.log("Game updated: ", data);
            navigate("/admin/list-game");
        } catch (error) {
            console.error('Error updating game profile:', error);
            alert(error)
        }
    };

    return(
        <>
            <div className="center-form">
                <h1>Post New Game</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={gameData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="discount"
                            placeholder="Enter discount"
                            value={gameData.discount}
                            onChange={handleInputChange}
                        />
                        {discountError && <div style={{ color: 'red' }}>{discountError}</div>}
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="price"
                            placeholder="Enter price"
                            value={gameData.price}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="originalPrice"
                            placeholder="Enter originalPrice"
                            value={gameData.originalPrice}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            value={gameData.title}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="image"
                            placeholder="Enter image"
                            value={gameData.image}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button variant ="primary" type="submit" className="w-100">
                        Edit Game
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default UpdateGame;