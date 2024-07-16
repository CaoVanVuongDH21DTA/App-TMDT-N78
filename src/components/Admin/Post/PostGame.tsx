import { useState } from "react";
import '../../../styles/Admin/Post/Post.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const PostGame = () => {
    const navigate = useNavigate();
    const [discountError, setDiscountError] = useState("");

    const [gameData, setGameData] = useState({
        discount: "",
        name: "",
        price: "",
        originalPrice: "",
        title: "",
        image: ""
    });

    const [error, setError] = useState<string | null>(null);

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/games", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(gameData)
            });

            if (!response.ok) {
                throw new Error('Failed to create game');
            }

            const data = await response.json();
            console.log("Game created: ", data);
            navigate("/admin/list-game");
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("Error creating game: ", error.message);
                setError(error.message);
            } else {
                console.log("An unknown error occurred.");
                setError("An unknown error occurred.");
            }
        }
    };

    return (
        <div className="center-form">
            <h1>Post New Game</h1>
            {error && <p className="error-message">{error}</p>}
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
                <Form.Group controlId="formBasicDiscount">
                    <Form.Control
                        type="text"
                        name="discount"
                        placeholder="Enter discount"
                        value={gameData.discount}
                        onChange={handleInputChange}
                    />
                    {discountError && <div style={{ color: 'red' }}>{discountError}</div>}
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Control
                        type="text"
                        name="price"
                        placeholder="Enter price"
                        value={gameData.price}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicOriginalPrice">
                    <Form.Control
                        type="text"
                        name="originalPrice"
                        placeholder="Enter original price"
                        value={gameData.originalPrice}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicTitle">
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        value={gameData.title}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicImage">
                    <Form.Control
                        type="text"
                        name="image"
                        placeholder="Enter image URL"
                        value={gameData.image}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Post Game
                </Button>
            </Form>
        </div>
    );
};

export default PostGame;
