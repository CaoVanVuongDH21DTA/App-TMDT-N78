import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import '../../../styles/Admin/List/List.css'
import { useNavigate } from "react-router-dom";
import Service from "../../../service/Service";

// Định nghĩa kiểu Game
interface Game {
    id: number;
    discount: number;
    name: string;
    price: number;
    originalPrice: number;
    title: string;
    image: string;
}

const ListGame = () => {
    const [games, setGames] = useState<Game[]>([]); // Khai báo kiểu Game[]
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({}); // Theo dõi các cột mở rộng
    const navigate = useNavigate();

    useEffect(() => {
        fetchGames(); // Gọi hàm fetchGames khi component mount
    }, []);

    const fetchGames = async () => {
        try {
            const dataGame = await Service.getAllGames();
            if (Array.isArray(dataGame)) {
                setGames(dataGame);
            } else {
                console.error("Response is not an array:", dataGame);
            }
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };

    const handleDelete = async (gameId: number) => {
        try {
            const response = await Service.deleteGame(gameId);
            if (response) {
                setGames((prevGames) =>
                    prevGames.filter((game) => game.id !== gameId)
                );
                console.log(`Game with ID ${gameId} deleted successfully`);
            }
        } catch (error) {
            console.error("Error deleting game:", error);
        }
    };

    const handleUpdate = (gameId: number) => {
        navigate(`/admin/update-game/${gameId}`);
    };

    const handleReadMore = (id: number) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    return (
        <div className="list_page">
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="text-center">List Games</h1>
                        <Table striped bordered hover responsive>
                            <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Original Price</th>
                                <th>Discount</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Array.isArray(games) && games.map((game) => (
                                <tr key={game.id}>
                                    <td>
                                        <img src={game.image} alt={game.name}/>
                                    </td>
                                    <td>{game.name}</td>
                                    <td>{game.price}</td>
                                    <td>{game.originalPrice}</td>
                                    <td>{game.discount}</td>
                                    <td>
                                        {expanded[game.id] ? (
                                            <>
                                                {game.title}
                                                <span
                                                    className="readmore"
                                                    onClick={() => handleReadMore(game.id)}
                                                >
                                                        Show less
                                                    </span>
                                            </>
                                        ) : (
                                            <>
                                                {game.title.length > 50 ? `${game.title.substring(0, 50)}...` : game.title}
                                                {game.title.length > 50 && (
                                                    <span
                                                        className="readmore"
                                                        onClick={() => handleReadMore(game.id)}
                                                    >
                                                            Read more
                                                        </span>
                                                )}
                                            </>
                                        )}
                                    </td>
                                    <td>
                                        <Button variant="outline-secondary"
                                                onClick={() => handleUpdate(game.id)}>Update</Button>{" "}
                                        <Button variant="outline-danger"
                                                onClick={() => handleDelete(game.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <button className="bg-primary"
                        style={{borderRadius: "10px", padding: "8px 1rem", marginTop: "40px", color: "white"}}
                        onClick={() => navigate('/admin/post-game')}>Add Game</button>
            </Container>
        </div>
    );
};

export default ListGame;
