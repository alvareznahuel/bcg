# Built-in Cards Game.
Built-in Card Games, or BCG like a vaccine, is a virtual set of card to generic purpose. This software only implements a maze of cards on the ether and able multiuser cards games on the web. The users would enjoy card game partys that emulate the steps of the real game before of COVID-19 contingency.

# Design requierements.
To emulate a real game we need cover the next functions:
* create a maze: Define a set of cards like 50 Spain Cards, 40 Spain Cards, Poker Cards, etc.
* operate over a maze: Split, distribute cards, define visibility of a maze.
* ...

# Backend API resources

|Resource|Description|
|--------|-----------|
|suits   | A suit is one of the categories into which the cards of a deck are divided.
|cards   | A card is the minimal element of a deck.
|deck    | A set of cards usually solded together.
|bulk    | A set of cards that are a part of a deck.
|game    | A game is a players session. A game can contain a set of bulks where are the diferents part of a deck.
|players | A player is an user of the game. A player can create a game to enjoy alone or create a game to invite another players.


|Resource|Field|Type|Description
|--------|-----|----|:-----------
|suits | id | Number | Identified for a card suit
|  | name | String | Name for a card suit.
|  | imageURL | String | URL to a card suit image.
|cards | id | Number | Identified for a card.
|  | name | String | Name for a card.
|  | value | String | Card value.
