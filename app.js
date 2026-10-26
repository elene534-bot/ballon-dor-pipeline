const ballonDorWinners = {
    men: [
        { name: "Rodri", year: 2024, club: "Manchester City" },
        { name: "Lionel Messi", year: 2023, club: "Inter Miami" }
    ],
    women: [
        { name: "Aitana Bonmati", year: 2024, club: "Barcelona" },
        { name: "Aitana Bonmati", year: 2023, club: "Barcelona" }
    ]
};

const checkWinner = (name, category) => {
    if (!ballonDorWinners[category]) return false;
    return ballonDorWinners[category].some(
        player => player.name.toLowerCase() === name.toLowerCase()
    );
};

console.log("Ballon d'Or System Started!");
console.log("Is Rodri a winner? " + (checkWinner("Rodri", "men") ? "Yes" : "No"));

module.exports = { checkWinner };
